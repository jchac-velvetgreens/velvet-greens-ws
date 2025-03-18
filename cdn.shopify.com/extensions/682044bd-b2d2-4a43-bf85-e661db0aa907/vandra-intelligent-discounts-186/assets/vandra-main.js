// This site or product includes IP2Location LITE data available
// from https://lite.ip2location.com

if (typeof VANDRA_SCRIPT_LOADED === "undefined") {

if (typeof VANDRA_FILES === "undefined") {
    var VANDRA_FILES = [];
}
VANDRA_FILES.push("vandra-main.js");


/** 
 * Sentry and Error handling 
 * */
(function() {

    CART_ABANDONMENT_TYPES = {
        IN_SESSION: "in_session",
        RETURNING: "returning"
    }

    INTERVENTION_TYPE_NAMES = {
        PICK_UP_WHERE_YOU_LEFT_OFF: "pick_up_where_you_left_off",
        SOCIAL_MEDIA_CONTENT: "social_media_content",
        CART_ABANDONMENT_IN_SESSION: "cart_abandonment_in_session",
        CART_ABANDONMENT_RETURNING: "cart_abandonment_returning",
        NAVIGATIONAL_NUDGE: "navigational_nudge",
    };

    var script = document.createElement('script');
    script.src = 'https://js.sentry-cdn.com/ff47633ac6265e3f70e7ab507e574d9b.min.js'; // Use the latest version
    script.crossOrigin = 'anonymous';
    // Added error callback for Sentry script loading
    script.onerror = function(e) {
        console.error("Failed to load Sentry SDK:", e);
    };
    script.onload = function() {
        window.sentryOnLoad = function() {
            Sentry.init({
                defaultIntegrations: false,
                sampleRate: 1.0,
                // Tracing
                tracesSampleRate: 0.001,
                environment: "production",
                replaysSessionSampleRate: 0.0,
                replaysOnErrorSampleRate: 0.0,
            })
        }
    };
    document.head.appendChild(script); // Append the script to the head
})();


// Wrapper functions for Sentry methods
function setSentryContext(label, context) {
    try{
        if (typeof Sentry !== "undefined") {
            Sentry.setContext(label, context);
        }
    }
    catch (error) {
    //nothing
    }
}

function captureSentryException(exceptionMessage) {
    if (typeof Sentry !== "undefined") {
        try {
            let errorToCapture;
            let fingerprint;
            
            if (exceptionMessage instanceof Error) {
                errorToCapture = exceptionMessage;
                fingerprint = ['error', errorToCapture.name];
            } else if (exceptionMessage && typeof exceptionMessage === "object") {
                const toStringVal = Object.prototype.toString.call(exceptionMessage);
                if (
                    toStringVal === "[object XMLHttpRequestProgressEvent]" ||
                    toStringVal === "[object ProgressEvent]"
                ) {
                    const eventType = exceptionMessage.type || "unknown progress event";
                    let details = "";
                    const target = exceptionMessage.target;
                    const url = target?.responseURL || target?.url || 'unknown URL';
                    
                    if ("loaded" in exceptionMessage) {
                        details += `; loaded: ${exceptionMessage.loaded}`;
                    }
                    if ("total" in exceptionMessage) {
                        details += `; total: ${exceptionMessage.total}`;
                    }
                    if ("lengthComputable" in exceptionMessage) {
                        details += `; lengthComputable: ${exceptionMessage.lengthComputable}`;
                    }
                    errorToCapture = new Error(`HTTP error at ${url}: ${eventType}${details}`);
                    // Group HTTP errors by type
                    fingerprint = ['http-error', eventType];
                } else if ("type" in exceptionMessage) {
                    const eventType = exceptionMessage.type || "unknown event";
                    const url = exceptionMessage.target?.responseURL || 'unknown URL';
                    errorToCapture = new Error(`Event error at ${url}: ${eventType}`);
                    // Group event errors by type
                    fingerprint = ['event-error', eventType];
                } else {
                    errorToCapture = new Error(exceptionMessage);
                    fingerprint = ['object-error'];
                }
            } else {
                errorToCapture = new Error(exceptionMessage);
                // Group generic errors by their first word/category
                const firstWord = String(exceptionMessage).split(' ')[0];
                fingerprint = ['generic-error', firstWord];
            }

            Sentry.captureException(errorToCapture, {
                fingerprint,
                extra: {
                    failingUrl: errorToCapture.message.includes('HTTP error') ? 
                        (exceptionMessage.target?.responseURL || exceptionMessage.target?.url) : 
                        undefined,
                    originalMessage: errorToCapture.message
                }
            });
        } catch (error) {
            // If an error occurs while reporting, we silently ignore it.
        }
    }
}

function vandra_handle_http_error(ErrorEvent, stopExecution=true, logToSentry=false) {
    vandra_handle_error(ErrorEvent, stopExecution, logToSentry);
}
// Function to handle Vandra-caused errors and send them to the server for logging/alerting
function vandra_handle_error(ErrorEvent, stopExecution=true, logToSentry=true) {
    if (logToSentry) {
        try {
            captureSentryException(ErrorEvent);
        } catch (error) {

        }
    }

    if (stopExecution) {
        vandra_stop_script = true;
        vandra_consent_load_checker.forEach(function (item, index) {
            clearInterval(item);
          });
        vandra_handle_error(ErrorEvent, false);
    };
};

/**
 * End Sentry and Error handling
 */

try {
    
    var vandra_api_base_url = "https://app.vandra.ai";
    if (window.location.hostname.includes("127.0.0.1") || window.location.hostname.includes("localhost")) {
        vandra_api_base_url = "http://localhost:8080";
    } else if (window.location.hostname.includes("vandra-green.myshopify.com")) {
        vandra_api_base_url = "https://staging-green.vandra.ai";
    } else if (window.location.hostname.includes("vandra-blue.myshopify.com")) {
        vandra_api_base_url = "https://staging-blue.vandra.ai";
    } else if (window.location.hostname.includes("vandra-red.myshopify.com")) {
        vandra_api_base_url = "https://staging-red.vandra.ai";
    } else if (window.location.hostname.includes("vandra-orange.myshopify.com")) {
        vandra_api_base_url = "https://staging-orange.vandra.ai";
    } else if (window.location.hostname.includes("vandra-") && window.location.hostname.includes(".myshopify.com")) {
        vandra_api_base_url = "https://staging.vandra.ai";
    }

    fetch(vandra_api_base_url + "/healthcheck", {
        signal: AbortSignal.timeout(10000)
    }).catch(() =>{vandra_handle_error("Vandra healthcheck failed",true);});
    
    // Check URL param to view UI versions in testing mode
    var vandra_url = new URL(
        window.location.href
    );
    var vandra_ui_version_test = vandra_url.searchParams.get("vandra_test");
    var vandra_ui_version_time = vandra_url.searchParams.get("vandra_time");

    if (!vandra_ui_version_test) {
        vandra_ui_version_test = vandra_get_cookie("vandra_ui_version_test");
    } else {
        vandra_set_cookie("vandra_ui_version_test", vandra_ui_version_test, 0.04);
    }
    
    if (!vandra_ui_version_time) {
        vandra_ui_version_time = vandra_get_cookie("vandra_ui_version_time");
    } else {
        vandra_set_cookie("vandra_ui_version_time", vandra_ui_version_time, 0.04);
    }

    // Ensure countdown timer does not reset on page refresh
    if(vandra_ui_version_time !== undefined && vandra_ui_version_time !== null && !isNaN(vandra_ui_version_time)) {
        var vandra_ui_version_time_countdown = parseInt(vandra_ui_version_time);
        setInterval(function () {
            if(vandra_ui_version_time_countdown > 0) {
                vandra_ui_version_time_countdown -= 1;
                vandra_set_cookie("vandra_ui_version_time", vandra_ui_version_time_countdown, 0.04);
            }
        }, 1000);
    }

    /* Configuration constants */
    var UI_VERSION_NAMES = {
        DEFAULT_RIGHT: "DEFAULT_RIGHT",
        DEFAULT_RIGHT_NEW: "DEFAULT_RIGHT_NEW",
        DEFAULT_LEFT: "DEFAULT_LEFT",
        NO_X: "NO_X",
        IMAGE: "IMAGE",
        MODAL: "MODAL",
        AUTO_APPLY: "AUTO_APPLY",
        COUNTDOWN: "COUNTDOWN",
        RENUDGE: "RENUDGE",
        RENUDGE_WITH_EXPIRES: "RENUDGE_WITH_EXPIRES",
        NUDGE_DELAY: "NUDGE_DELAY",
        NUDGE_DELAY_V2: "NUDGE_DELAY_V2",
        ACTION_BASED_SHOW: "ACTION_BASED_SHOW",
        MESSAGING: "MESSAGING",
        CART_ABANDONMENT: "CART_ABANDONMENT"
    };
    var UI_VERSION_FILENAMES = {
        [UI_VERSION_NAMES.DEFAULT_RIGHT]: "vandra-default.js",
        [UI_VERSION_NAMES.DEFAULT_RIGHT_NEW]: "vandra-default-new.js",
        [UI_VERSION_NAMES.DEFAULT_LEFT]: "vandra-default.js",
        [UI_VERSION_NAMES.NO_X]: "vandra-default.js",
        [UI_VERSION_NAMES.IMAGE]: "vandra-image.js",
        [UI_VERSION_NAMES.MODAL]: "vandra-modal.js",
        [UI_VERSION_NAMES.AUTO_APPLY]: "vandra-auto.js",
        [UI_VERSION_NAMES.COUNTDOWN]: "vandra-countdown.js",
        [UI_VERSION_NAMES.RENUDGE]: "vandra-default.js",
        [UI_VERSION_NAMES.RENUDGE_WITH_EXPIRES]: "vandra-default.js",
        [UI_VERSION_NAMES.NUDGE_DELAY]: "vandra-default.js",
        [UI_VERSION_NAMES.NUDGE_DELAY_V2]: "vandra-default.js",
        [UI_VERSION_NAMES.ACTION_BASED_SHOW] : "vandra-default.js",
        [UI_VERSION_NAMES.MESSAGING]: "vandra-default.js"
    };
    var WIDGET_TYPES = {
        POPUP: "POPUP",
        MINIMIZED: "MINIMIZED",
        RETURN: "RETURN"
    };

    /* Popup state */
    var vandra_model_decision = false;
    var vandra_discount_applied = undefined;
    var vandra_product_recorded = [];
    var vandra_countdown_deadline = undefined;
    var vandra_renudge = "default";
    var vandra_savings_state = 0;
    var vandra_savings_total = "$-.--";
    var vandra_popup_shown = false;
    var vandra_copy_clicked = false;
    var vandra_minimized_shown = false;
    var vandra_return_shown = false;
    var vandra_is_loading = false;
    var vandra_keyup_triggered = false;
    var use_meta_ad_pixel = false;
    var new_session = false;
    var new_customer = false;
    /* action based popup state */
    const action_types = ["click", "scroll", "mousemove", "focus", "keydown", "page_visit"];
    const engagement_action_types = ["click", "scroll", "keydown"];
    var action_based_show = false

    /* messaging experiment */
    var messaging_state;
    var messaging_type;
    var page_product_id;

    // cart abandonment
    var store_active_intervention_types = [];
    var cart_abandonment_timeout_id = localStorage.getItem("vandra_cart_abandonment_timeout_id") || undefined;

    var MESSAGE_TEXTS = {
        "control": "GET {{discount_rate}}% OFF NOW",
        "returning":"NICE TO SEE YOU AGAIN! HERE'S {{discount_rate}}% OFF",
        "bestseller": "JOIN 100+ CUSTOMERS HERE'S {{discount_rate}}% OFF",
        "catchall-bestseller": "OUR TOP PICK! GET {{discount_rate}}% OFF",
        "urgent": "GET {{discount_rate}}% OFF NOW HURRY! TODAY ONLY",
        "exclusive": "CONGRATS! YOU'VE UNLOCKED {{discount_rate}}% OFF"
    }

    const MESSAGE_BODY_TEXT = "Valid for 24 hours. Exclusions apply."

    /*page state configuration*/
    var vandra_backend_page_view_uuid = undefined;

    /* Merchant popup configurations */
    var vandra_ui_version_name = vandra_ui_version_test ? vandra_ui_version_test :"DEFAULT_RIGHT";
    var vandra_ui_version_filename = "vandra-default.js";
    var vandra_widget_slide_out_animation_class = undefined;
    var vandra_discount_rate = undefined;
    var vandra_discount_code = undefined;
    var vandra_discount_ends_at_time = undefined;
    var vandra_popup_content_header_apply_text_default = "GET {{discount_rate}}% OFF NOW";
    var vandra_popup_content_body_apply_text_default = "Valid for one day only. Don't miss out!";
    var vandra_popup_content_button_apply_text_default = "Apply Discount";
    var vandra_minimized_content_header_apply_text_default = "GET {{discount_rate}}% OFF NOW";
    var vandra_popup_content_body_default_text_auto = "A discount is waiting in your cart. It's only good for today so don't miss out.";
    var vandra_popup_content_image = undefined;
    var vandra_time_init_countdown = false;
    var vandra_popup_font = "Source Sans Pro";
    var vandra_popup_primary_color = "0000AA";
    var vandra_popup_bg_color = "FFFFFF";
    var vandra_popup_item_bg_color = "FFFFFF";

    /* execution state config */
    var vandra_stop_script = false;
    var vandra_initial_consent_captured = false;


    const getInterventionType = (cart_abandonment_type) => {
        return cart_abandonment_type === CART_ABANDONMENT_TYPES.IN_SESSION ? INTERVENTION_TYPE_NAMES.CART_ABANDONMENT_IN_SESSION : INTERVENTION_TYPE_NAMES.CART_ABANDONMENT_RETURNING;
    }

    tryMountDiscountNudge = (vandra_widget_container, vandra_discount_container, skipCollisionCheck = false) => {
         //lock for collissions
         const key = `vandra_mount_lock_${vandra_session_cookie}`;
        
         // Check if a mount lock cookie already exists.
         if (!skipCollisionCheck) {
            if (vandra_get_cookie(key) === "true") {
                //log suppression
                fetch(`${vandra_api_base_url}/log/suppression`, {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body:  new URLSearchParams({
                        intervention_type: 'intent_based_discount',
                        session_cookie: vandra_session_cookie,
                        page_view_id: vandra_backend_page_view_uuid,
                        // Deconstruct dwell time values
                        ...get_dwell_time(),
                        metadata: JSON.stringify({ suppression_reason: "Nudge collision"  })
                    })
                });
                return false;
            }
            // Remove all previous mount lock cookies
            document.cookie.split(';').forEach(cookie => {
                const [name] = cookie.trim().split('=');
                if (name.startsWith('vandra_mount_lock_')) {
                    vandra_delete_cookie(name);
                }
            });
    
            // Set the lock cookie with an expiration of 0.04 days (roughly 1 hour) to match the session lifetime.
            vandra_set_cookie(key, "true", 0.04);
        }
        vandra_widget_container.insertAdjacentHTML("beforeend", vandra_discount_container);
        vandra_record_discount_shown();
        vandra_set_cookie(key, "true", 0.04);
        //capture discount code event
        captureDiscountCodeApplication(vandra_discount_code,"vandra_shown");
        return true;
    }

    async function vandra_generate_widget(widget_type) {
        try {
            // Abort if this is an excluded URL
            if (vandra_exclude_urls.includes(window.location.href.split("?")[0])) {
                return false;
            }
            
            const get_popup_status_response = await fetch(`${vandra_api_base_url}/get_popup_status?` + new URLSearchParams({
                session_cookie: vandra_session_cookie
            }), {
                method: "GET",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                signal: AbortSignal.timeout(10000)
            });
            
            const response_text = await get_popup_status_response.text();
            const response_json = JSON.parse(response_text);
            if (!response_json.hasOwnProperty("vandra_ui_version_name")) {
                return false;
            }
            const {
                vandra_ui_version_name: ui_version_name,
                vandra_ui_version_filename: ui_version_filename,
                vandra_discount_applied: discount_applied,
                vandra_countdown_deadline: countdown_deadline,
                vandra_renudge_type,
                vandra_can_be_renudged_time,
                vandra_nudge_parameters,
                hide_minimized_popup
            } = response_json;
            if (vandra_ui_version_name === UI_VERSION_NAMES.DEFAULT_RIGHT_NEW || vandra_ui_version_test === UI_VERSION_NAMES.DEFAULT_RIGHT_NEW) {
                vandra_popup_content_button_apply_text_default = "Redeem Now"
            }
            if (!vandra_discount_code) {
                captureSentryException("Record page view, discount is undefined");
                return;
            }
            /* Popup state */
            vandra_ui_version_name = vandra_ui_version_test && UI_VERSION_NAMES[vandra_ui_version_test] ? vandra_ui_version_test : ui_version_name;
            vandra_ui_version_filename = vandra_ui_version_test && UI_VERSION_FILENAMES[vandra_ui_version_test] ? UI_VERSION_FILENAMES[vandra_ui_version_test] : ui_version_filename;
            vandra_discount_applied = vandra_discount_applied !== undefined ? vandra_discount_applied : (discount_applied === "True");
            if(widget_type === WIDGET_TYPES.RETURN) {
                vandra_apply_discount_code(false);
            }
            vandra_countdown_deadline = countdown_deadline ? countdown_deadline : undefined;
            /* Renudge state */
            const vandra_now_time = parseInt(Date.now() / 1000);
            if(vandra_renudge !== "done") {
                if (vandra_renudge_type === "postapply") {
                    if (parseInt(vandra_can_be_renudged_time) > vandra_now_time) {
                        setTimeout(() => {
                            vandra_renudge = "postapply_ready";
                        }, (parseInt(vandra_can_be_renudged_time) - vandra_now_time) * 1000);
                    } else {
                        vandra_renudge = "postapply_ready";
                    }
                } else if (vandra_renudge_type === "postdismiss") {
                    if (parseInt(vandra_can_be_renudged_time) > vandra_now_time) {
                        setTimeout(() => {
                            vandra_renudge = "postdismiss_ready";
                        }, (parseInt(vandra_can_be_renudged_time) - vandra_now_time) * 1000);
                    } else {
                        vandra_renudge = "postdismiss_ready";
                    }
                }
            }
            let vandra_style = document.getElementById("vandra_style");
            if (!vandra_style) {
                vandra_style = document.createElement("style");
                vandra_style.setAttribute("id", "vandra_style");
                document.head.appendChild(vandra_style);
            }
            let vandra_widget_container = document.getElementById("vandra_widget_container");
            if (!vandra_widget_container) {
                vandra_widget_container = document.createElement("div");
                vandra_widget_container.setAttribute("id", "vandra_widget_container");
                vandra_widget_container.style.setProperty("display", "block", "important");
                document.body.append(vandra_widget_container);
            }
            var vandra_css = "";
            if (UI_VERSION_NAMES?.[vandra_ui_version_name]) {
                /* vandra-default.js */
                var vandra_popup_container = vandra_popup_container_default;
                var vandra_minimized_container = vandra_minimized_container_default;
                var vandra_return_container = vandra_popup_container_return;
                vandra_css += vandra_ui_version_name === UI_VERSION_NAMES.DEFAULT_RIGHT_NEW ? vandra_css_default_new : vandra_css_default;
                const UI_VERSION_CONFIGURATIONS = {
                    [UI_VERSION_NAMES.CART_ABANDONMENT]: {
                        
                    },
                    [UI_VERSION_NAMES.DEFAULT_RIGHT]: {
                        vandra_popup_display: "",
                        vandra_popup_alignment: `top: 15%;
                            right: 10px;`,
                        vandra_popup_border_radius: "border-radius: 10px;",
                        vandra_popup_close_display: "",
                        vandra_minimized_alignment: `top: 15%;
                            right: 0px;`,
                        vandra_minimized_border_radius: "border-radius: 10px 0px 0px 10px;",
                        vandra_widget_slide_in_animation_class: "vandra_widget_slide_in_right_to_left_animation",
                        vandra_widget_slide_out_animation_class: "vandra_widget_slide_out_left_to_right_animation",
                    },
                    [UI_VERSION_NAMES.DEFAULT_RIGHT_NEW]: {
                        vandra_popup_display: "",
                        vandra_popup_alignment: `top: 15%;
                            right: 0px;`,
                        vandra_popup_border_radius: "border-radius: 5px 0px 0px 5px;",
                        vandra_popup_close_display: "",
                        vandra_minimized_alignment: `top: 15%;
                            right: 0px;`,
                        vandra_minimized_border_radius: "border-radius: 10px 0px 0px 10px;",
                        vandra_widget_slide_in_animation_class: "vandra_widget_slide_in_right_to_left_animation",
                        vandra_widget_slide_out_animation_class: "vandra_widget_slide_out_left_to_right_animation",
                    },
                    [UI_VERSION_NAMES.DEFAULT_LEFT]: {
                        vandra_popup_display: "",
                        vandra_popup_alignment: `top: 15%;
                            left: 10px;`,
                        vandra_popup_border_radius: "border-radius: 10px;",
                        vandra_popup_close_display: "",
                        vandra_minimized_alignment: `top: 15%;
                            left: 0px;`,
                        vandra_minimized_border_radius: "border-radius: 0px 10px 10px 0px;",
                        vandra_widget_slide_in_animation_class: "vandra_widget_slide_in_left_to_right_animation",
                        vandra_widget_slide_out_animation_class: "vandra_widget_slide_out_right_to_left_animation",
                    },
                    [UI_VERSION_NAMES.MESSAGING]: {
                        vandra_popup_display: "",
                        vandra_popup_alignment: `top: 15%;
                            right: 10px;`,
                        vandra_popup_border_radius: "border-radius: 10px;",
                        vandra_popup_close_display: "",
                        vandra_minimized_alignment: `top: 15%;
                            right: 0px;`,
                        vandra_minimized_border_radius: "border-radius: 10px 0px 0px 10px;",
                        vandra_widget_slide_in_animation_class: "vandra_widget_slide_in_right_to_left_animation",
                        vandra_widget_slide_out_animation_class: "vandra_widget_slide_out_left_to_right_animation",
                    },
                    [UI_VERSION_NAMES.NO_X]: {
                        vandra_popup_display: "",
                        vandra_popup_alignment: `top: 15%;
                            right: 10px;`,
                        vandra_popup_border_radius: "border-radius: 10px;",
                        vandra_popup_close_display: "vandra_invisible",
                        vandra_minimized_alignment: `top: 15%;
                            right: 0px;`,
                        vandra_minimized_border_radius: "border-radius: 10px 0px 0px 10px;",
                        vandra_widget_slide_in_animation_class: "vandra_widget_slide_in_right_to_left_animation",
                        vandra_widget_slide_out_animation_class: "vandra_widget_slide_out_left_to_right_animation"
                    },
                    [UI_VERSION_NAMES.IMAGE]: {
                        vandra_popup_display: "vandra_invisible",
                        vandra_popup_alignment: `top: 15%;
                            right: 10px;`,
                        vandra_popup_border_radius: "border-radius: 10px;",
                        vandra_popup_close_display: "",
                        vandra_minimized_alignment: `top: 15%;
                            right: 0px;`,
                        vandra_minimized_border_radius: "border-radius: 10px 0px 0px 10px;",
                        vandra_widget_slide_in_animation_class: "vandra_widget_slide_in_right_to_left_animation",
                        vandra_widget_slide_out_animation_class: "vandra_widget_slide_out_left_to_right_animation",
                    },
                    [UI_VERSION_NAMES.MODAL]: {
                        vandra_popup_display: "vandra_invisible",
                        vandra_popup_alignment: `top: 15%;
                            right: 10px;`,
                        vandra_popup_border_radius: "border-radius: 10px;",
                        vandra_popup_close_display: "",
                        vandra_minimized_alignment: `top: 15%;
                            right: 0px;`,
                        vandra_minimized_border_radius: "border-radius: 10px 0px 0px 10px;",
                        vandra_widget_slide_in_animation_class: "vandra_widget_slide_in_right_to_left_animation",
                        vandra_widget_slide_out_animation_class: "vandra_widget_slide_out_left_to_right_animation"
                    },
                    [UI_VERSION_NAMES.AUTO_APPLY]: {
                        vandra_popup_display: "vandra_invisible",
                        vandra_popup_alignment: `top: 15%;
                            right: 0px;`,
                        vandra_popup_border_radius: "border-radius: 10px 0px 0px 10px;",
                        vandra_popup_close_display: "",
                        vandra_minimized_alignment: `top: 15%;
                            right: 0px;`,
                        vandra_minimized_border_radius: "border-radius: 10px 0px 0px 10px;",
                        vandra_widget_slide_in_animation_class: "vandra_widget_slide_in_right_to_left_animation",
                        vandra_widget_slide_out_animation_class: "vandra_widget_slide_out_left_to_right_animation"
                    },
                    [UI_VERSION_NAMES.COUNTDOWN]: {
                        vandra_popup_display: "",
                        vandra_popup_alignment: `top: 15%;
                            right: 10px;`,
                        vandra_popup_border_radius: "border-radius: 10px;",
                        vandra_popup_close_display: "",
                        vandra_minimized_alignment: `top: 15%;
                            right: 0px;`,
                        vandra_minimized_border_radius: "border-radius: 10px 0px 0px 10px;",
                        vandra_widget_slide_in_animation_class: "vandra_widget_slide_in_right_to_left_animation",
                        vandra_widget_slide_out_animation_class: "vandra_widget_slide_out_left_to_right_animation"
                    },
                    [UI_VERSION_NAMES.RENUDGE]: {
                        vandra_popup_display: "",
                        vandra_popup_alignment: `top: 15%;
                            right: 10px;`,
                        vandra_popup_border_radius: "border-radius: 10px;",
                        vandra_popup_close_display: "",
                        vandra_minimized_alignment: `top: 15%;
                            right: 0px;`,
                        vandra_minimized_border_radius: "border-radius: 10px 0px 0px 10px;",
                        vandra_widget_slide_in_animation_class: "vandra_widget_slide_in_right_to_left_animation",
                        vandra_widget_slide_out_animation_class: "vandra_widget_slide_out_left_to_right_animation",
                    },
                    [UI_VERSION_NAMES.RENUDGE_WITH_EXPIRES]: {
                        vandra_popup_display: "",
                        vandra_popup_alignment: `top: 15%;
                            right: 10px;`,
                        vandra_popup_border_radius: "border-radius: 10px;",
                        vandra_popup_close_display: "",
                        vandra_minimized_alignment: `top: 15%;
                            right: 0px;`,
                        vandra_minimized_border_radius: "border-radius: 10px 0px 0px 10px;",
                        vandra_widget_slide_in_animation_class: "vandra_widget_slide_in_right_to_left_animation",
                        vandra_widget_slide_out_animation_class: "vandra_widget_slide_out_left_to_right_animation",
                    },
                    [UI_VERSION_NAMES.NUDGE_DELAY]: {
                        vandra_popup_display: "",
                        vandra_popup_alignment: `top: 15%;
                            right: 10px;`,
                        vandra_popup_border_radius: "border-radius: 10px;",
                        vandra_popup_close_display: "",
                        vandra_minimized_alignment: `top: 15%;
                            right: 0px;`,
                        vandra_minimized_border_radius: "border-radius: 10px 0px 0px 10px;",
                        vandra_widget_slide_in_animation_class: "vandra_widget_slide_in_right_to_left_animation",
                        vandra_widget_slide_out_animation_class: "vandra_widget_slide_out_left_to_right_animation",
                    },
                    [UI_VERSION_NAMES.NUDGE_DELAY_V2]: {
                        vandra_popup_display: "",
                        vandra_popup_alignment: `top: 15%;
                            right: 10px;`,
                        vandra_popup_border_radius: "border-radius: 10px;",
                        vandra_popup_close_display: "",
                        vandra_minimized_alignment: `top: 15%;
                            right: 0px;`,
                        vandra_minimized_border_radius: "border-radius: 10px 0px 0px 10px;",
                        vandra_widget_slide_in_animation_class: "vandra_widget_slide_in_right_to_left_animation",
                        vandra_widget_slide_out_animation_class: "vandra_widget_slide_out_left_to_right_animation",
                    },
                    [UI_VERSION_NAMES.ACTION_BASED_SHOW] :{
                        vandra_popup_display: "",
                        vandra_popup_alignment: `top: 15%;
                            right: 10px;`,
                        vandra_popup_border_radius: "border-radius: 10px;",
                        vandra_popup_close_display: "",
                        vandra_minimized_alignment: `top: 15%;
                            right: 0px;`,
                        vandra_minimized_border_radius: "border-radius: 10px 0px 0px 10px;",
                        vandra_widget_slide_in_animation_class: "vandra_widget_slide_in_right_to_left_animation",
                        vandra_widget_slide_out_animation_class: "vandra_widget_slide_out_left_to_right_animation",
                    }                   
                };
                const vandra_popup_display = UI_VERSION_CONFIGURATIONS[UI_VERSION_NAMES[vandra_ui_version_name]]["vandra_popup_display"];
                const vandra_popup_alignment = UI_VERSION_CONFIGURATIONS[UI_VERSION_NAMES[vandra_ui_version_name]]["vandra_popup_alignment"];
                const vandra_popup_border_radius = UI_VERSION_CONFIGURATIONS[UI_VERSION_NAMES[vandra_ui_version_name]]["vandra_popup_border_radius"];
                const vandra_popup_close_display = UI_VERSION_CONFIGURATIONS[UI_VERSION_NAMES[vandra_ui_version_name]]["vandra_popup_close_display"];
                const vandra_minimized_alignment = UI_VERSION_CONFIGURATIONS[UI_VERSION_NAMES[vandra_ui_version_name]]["vandra_minimized_alignment"];
                const vandra_minimized_border_radius = UI_VERSION_CONFIGURATIONS[UI_VERSION_NAMES[vandra_ui_version_name]]["vandra_minimized_border_radius"];
                const vandra_widget_slide_in_animation_class = UI_VERSION_CONFIGURATIONS[UI_VERSION_NAMES[vandra_ui_version_name]]["vandra_widget_slide_in_animation_class"];
                vandra_widget_slide_out_animation_class = UI_VERSION_CONFIGURATIONS[UI_VERSION_NAMES[vandra_ui_version_name]]["vandra_widget_slide_out_animation_class"];
                /* vandra-return.js */
                vandra_css += vandra_css_return;
                /* vandra-image.js */
                if(vandra_ui_version_name === UI_VERSION_NAMES.IMAGE) {
                    vandra_css += vandra_css_image;
                }
                /* vandra-modal.js */
                if(vandra_ui_version_name === UI_VERSION_NAMES.MODAL) {
                    vandra_css += vandra_css_modal;
                    var vandra_modal_container = vandra_modal_container_modal
                }
                /* vandra-auto.js */
                if(vandra_ui_version_name === UI_VERSION_NAMES.AUTO_APPLY) {
                    vandra_css += vandra_css_auto;
                }
                /* vandra-countdown.js */
                if (vandra_ui_version_name === UI_VERSION_NAMES.COUNTDOWN) {
                    vandra_css += vandra_css_countdown;
                    vandra_popup_container = vandra_popup_container_countdown;
                    vandra_minimized_container = vandra_minimized_container_countdown;
                }
                if (vandra_ui_version_name === UI_VERSION_NAMES.DEFAULT_RIGHT_NEW) {
                    vandra_popup_container = vandra_popup_container_default_new;
                }
                /* Vandra styles */
                vandra_css = vandra_css
                    .replace(/{{vandra_popup_font_placeholder}}/g, vandra_popup_font)
                    .replace(/{{vandra_popup_primary_color_placeholder}}/g, vandra_popup_primary_color)
                    .replace(/{{vandra_popup_bg_color_placeholder}}/g, vandra_popup_bg_color)
                    .replace(/{{vandra_popup_alignment_placeholder}}/g, vandra_popup_alignment)
                    .replace(/{{vandra_popup_border_radius_placeholder}}/g, vandra_popup_border_radius)
                    .replace(/{{vandra_minimized_alignment_placeholder}}/g, vandra_minimized_alignment)
                    .replace(/{{vandra_minimized_border_radius_placeholder}}/g, vandra_minimized_border_radius)
                vandra_style.innerHTML = vandra_css;
                if (!vandra_discount_applied) {
                    /* Modal */
                    if(vandra_ui_version_name === UI_VERSION_NAMES.MODAL) {
                        vandra_modal_container = vandra_modal_container
                            .replace(/{{vandra_modal_content_header_text_modal_placeholder}}/g, vandra_modal_content_header_default_text_modal
                                .replace(/{{discount_rate}}/g, vandra_discount_rate)
                                .replace(/{{vandra_discount_rate_placeholder}}/g, vandra_discount_rate))
                            .replace(/{{vandra_modal_content_body_text_modal_placeholder}}/g, vandra_modal_content_body_default_text_modal
                                .replace(/{{discount_rate}}/g, vandra_discount_rate)
                                .replace(/{{vandra_discount_rate_placeholder}}/g, vandra_discount_rate))
                            .replace(/{{vandra_popup_content_copy_container_default_placeholder}}/g, vandra_popup_content_copy_container_default
                                .replace(/{{vandra_discount_code_placeholder}}/g, vandra_discount_code))
                            .replace(/{{vandra_popup_content_button_default_onclick_placeholder}}/g, vandra_apply_discount_code_onclick_default)
                            .replace(/{{vandra_popup_content_button_container_default_placeholder}}/g, vandra_popup_content_button_apply_applied_container_default
                                .replace(/{{vandra_popup_content_button_apply_text_default_placeholder}}/g, vandra_popup_content_button_apply_text_default)
                                .replace(/{{vandra_popup_content_button_applied_text_default_placeholder}}/g, vandra_popup_content_button_applied_text_default));
                    }
                    /* Popup */
                    let vandra_countdown_init = undefined;
                    if (vandra_ui_version_name === UI_VERSION_NAMES.AUTO_APPLY) {
                        const vandra_popup_content_fine_print = window.location.host.includes("proclip") ?`<div class="finePrint">Some products excluded. Not valid on previous orders. Can't be use with other offers. Excludes dealers/resellers.</div>` : ''
                        vandra_popup_container_auto = vandra_popup_container_auto
                            .replace(/{{vandra_widget_slide_in_animation_class_placeholder}}/g, vandra_widget_slide_in_animation_class)
                            .replace(/{{vandra_popup_content_header_text_auto_placeholder}}/g, vandra_popup_content_header_default_text_auto)
                            .replace(/{{vandra_popup_content_body_text_auto_placeholder}}/g, vandra_popup_content_body_default_text_auto
                                .replace(/{{discount_rate}}/g, vandra_discount_rate)
                                .replace(/{{vandra_discount_rate_placeholder}}/g, vandra_discount_rate))
                                .replace(/{{vandra_discount_rate_placeholder}}/g, vandra_discount_rate)
                                .replace(/{{vandra_popup_content_fine_print}}/g, vandra_popup_content_fine_print)
                            .replace(/{{vandra_popup_content_discount_info_header_text_auto_placeholder}}/g, vandra_popup_content_discount_info_header_default_text_auto
                                .replace(/{{discount_rate}}/g, vandra_discount_rate)
                                .replace(/{{vandra_discount_rate_placeholder}}/g, vandra_discount_rate))
                            .replace(/{{vandra_popup_content_discount_info_body_text_auto_placeholder}}/g, vandra_popup_content_discount_info_body_default_text_auto);
                        
                    } else if(vandra_ui_version_name === UI_VERSION_NAMES.IMAGE) {
                        vandra_popup_container_image = vandra_popup_container_image
                            .replace(/{{vandra_widget_slide_in_animation_class_placeholder}}/g, vandra_widget_slide_in_animation_class)
                            .replace(/{{vandra_popup_content_image_image_placeholder}}/g, vandra_popup_content_image)
                            .replace(/{{vandra_popup_content_header_text_default_placeholder}}/g, vandra_popup_content_header_apply_text_default
                                .replace(/{{discount_rate}}/g, vandra_discount_rate)
                                .replace(/{{vandra_discount_rate_placeholder}}/g, vandra_discount_rate))
                            .replace(/{{vandra_popup_content_body_text_default_placeholder}}/g, vandra_popup_content_body_apply_text_default
                                .replace(/{{discount_rate}}/g, vandra_discount_rate)
                                .replace(/{{vandra_discount_rate_placeholder}}/g, vandra_discount_rate))
                            .replace(/{{vandra_popup_content_copy_container_default_placeholder}}/g, vandra_popup_content_copy_container_default
                                .replace(/{{vandra_discount_code_placeholder}}/g, vandra_discount_code))
                            .replace(/{{vandra_popup_content_button_default_onclick_placeholder}}/g, vandra_apply_discount_code_onclick_default)
                            .replace(/{{vandra_popup_content_button_container_default_placeholder}}/g, vandra_popup_content_button_apply_applied_container_default
                                .replace(/{{vandra_popup_content_button_apply_text_default_placeholder}}/g, vandra_popup_content_button_apply_text_default)
                                .replace(/{{vandra_popup_content_button_applied_text_default_placeholder}}/g, vandra_popup_content_button_applied_text_default));
                    } else if (vandra_ui_version_name === UI_VERSION_NAMES.COUNTDOWN) {
                        if(vandra_countdown_deadline) {
                            vandra_countdown_init = vandra_start_countdown(vandra_countdown_deadline);
                        } else {
                            vandra_countdown_init = vandra_start_countdown();
                        }
                        vandra_popup_container = vandra_popup_container
                            .replace(/{{vandra_popup_display_placeholder}}/g, vandra_popup_display)
                            .replace(/{{vandra_popup_content_time_countdown_placeholder}}/g, vandra_popup_content_default_time_countdown
                                .replace(/{{vandra_time_countdown_placeholder}}/g, vandra_countdown_init))
                            .replace(/{{vandra_popup_content_header_text_countdown_placeholder}}/g, vandra_popup_content_header_apply_text_default
                                .replace(/{{discount_rate}}/g, vandra_discount_rate)
                                .replace(/{{vandra_discount_rate_placeholder}}/g, vandra_discount_rate))
                            .replace(/{{vandra_popup_content_body_text_countdown_placeholder}}/g, vandra_popup_content_body_apply_text_default
                                .replace(/{{discount_rate}}/g, vandra_discount_rate)
                                .replace(/{{vandra_discount_rate_placeholder}}/g, vandra_discount_rate))
                            .replace(/{{vandra_popup_content_time_container_default_placeholder}}/g, vandra_popup_content_copy_container_default
                                .replace(/{{vandra_discount_code_placeholder}}/g, vandra_discount_code))
                            .replace(/{{vandra_popup_content_button_default_onclick_placeholder}}/g, vandra_apply_discount_code_onclick_default)
                            .replace(/{{vandra_popup_content_button_container_default_placeholder}}/g, vandra_popup_content_button_apply_applied_container_default
                                .replace(/{{vandra_popup_content_button_apply_text_default_placeholder}}/g, vandra_popup_content_button_apply_text_default)
                                .replace(/{{vandra_popup_content_button_applied_text_default_placeholder}}/g, vandra_popup_content_button_applied_text_default));
                    }
                    if (vandra_ui_version_name === UI_VERSION_NAMES.RENUDGE_WITH_EXPIRES && vandra_renudge_type === "postdismiss_done") {
                        let formattedExpiryDate = undefined;
                        let expiryMessage = undefined;
                        if(vandra_discount_ends_at_time) {
                            let expiryDate = new Date(parseInt(vandra_discount_ends_at_time) * 1000);
                            formattedExpiryDate = (expiryDate.getMonth() + 1) +
                                '/' + expiryDate.getDate() +
                                '/' + expiryDate.getFullYear() +
                                ' at ' + expiryDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                        }
                        if(formattedExpiryDate) {
                            expiryMessage = "Your unique discount code expires on " + formattedExpiryDate;
                        } else {
                            expiryMessage = "Your unique discount code expires soon!";
                        }
                        vandra_popup_container = vandra_popup_container
                            .replace(/{{vandra_popup_content_header_text_default_placeholder}}/g, "EXPIRES SOON !!")
                            .replace(/{{vandra_popup_content_body_text_default_placeholder}}/g, expiryMessage);
                    } else {
                        if (vandra_ui_version_name === UI_VERSION_NAMES.DEFAULT_RIGHT_NEW) {
                            vandra_popup_content_header_apply_text_default = `GET ${vandra_discount_rate}% OFF TODAY`;
                        }
                        const vandra_popup_content_fine_print = window.location.host.includes("proclip") ?`<div class="finePrint">Some products excluded. Not valid on previous orders. Can't be use with other offers. Excludes dealers/resellers.</div>` : ''
                        vandra_popup_container = vandra_popup_container
                            .replace(/{{vandra_popup_content_header_text_default_placeholder}}/g, vandra_popup_content_header_apply_text_default
                                .replace(/{{discount_rate}}/g, vandra_discount_rate)
                                .replace(/{{vandra_discount_rate_placeholder}}/g, vandra_discount_rate))
                            .replace(/{{vandra_popup_content_body_text_default_placeholder}}/g, vandra_popup_content_body_apply_text_default
                                .replace(/{{discount_rate}}/g, vandra_discount_rate)
                                .replace(/{{vandra_discount_rate_placeholder}}/g, vandra_discount_rate))
                                .replace(/{{vandra_popup_content_fine_print}}/g, vandra_popup_content_fine_print)
                            .replace(/{{vandra_discount_rate_placeholder}}/g, vandra_discount_rate);
                    }
                    vandra_popup_container = vandra_popup_container
                        .replace(/{{vandra_popup_display_placeholder}}/g, vandra_popup_display)
                        .replace(/{{vandra_popup_close_display_placeholder}}/g, vandra_popup_close_display)
                        .replace(/{{vandra_popup_content_copy_container_default_placeholder}}/g, vandra_popup_content_copy_container_default
                            .replace(/{{vandra_discount_code_placeholder}}/g, vandra_discount_code))
                        .replace(/{{vandra_popup_content_button_default_onclick_placeholder}}/g, vandra_apply_discount_code_onclick_default)
                        .replace(/{{vandra_popup_content_button_container_default_placeholder}}/g, vandra_popup_content_button_apply_applied_container_default
                            .replace(/{{vandra_popup_content_button_apply_text_default_placeholder}}/g, vandra_popup_content_button_apply_text_default)
                            .replace(/{{vandra_popup_content_button_applied_text_default_placeholder}}/g, vandra_popup_content_button_applied_text_default));
                    /* Minimized */
                    if (vandra_ui_version_name === UI_VERSION_NAMES.COUNTDOWN) {
                        vandra_minimized_container = vandra_minimized_container
                            .replace(/{{vandra_widget_slide_in_animation_class_placeholder}}/g, vandra_widget_slide_in_animation_class)
                            .replace(/{{vandra_minimized_content_header_text_countdown_placeholder}}/g, vandra_minimized_content_header_default_text_countdown
                                .replace(/{{vandra_time_countdown_placeholder}}/g, vandra_countdown_init));
                    } else {
                        vandra_minimized_container = vandra_minimized_container
                            .replace(/{{vandra_widget_slide_in_animation_class_placeholder}}/g, vandra_widget_slide_in_animation_class)
                            .replace(/{{vandra_minimized_content_header_text_default_placeholder}}/g, vandra_minimized_content_header_apply_text_default
                                .replace(/{{discount_rate}}/g, vandra_discount_rate)
                                .replace(/{{vandra_discount_rate_placeholder}}/g, vandra_discount_rate));
                    }
                } else {
                    /* Popup */
                    vandra_popup_container = vandra_popup_container
                        .replace(/{{vandra_popup_content_button_default_onclick_placeholder}}/g, vandra_redirect_to_checkout_onclick_default)
                        .replace(/{{vandra_popup_content_button_container_default_placeholder}}/g, vandra_popup_content_button_applied_container_default
                            .replace(/{{vandra_popup_content_button_savings_text_placeholder}}/g, (vandra_savings_total === "$-.--" || vandra_savings_total === "$0.00") ? vandra_popup_content_button_savings_continue_text_default : vandra_popup_content_button_savings_text_default));
                    if (vandra_ui_version_name === UI_VERSION_NAMES.COUNTDOWN) {
                        if(vandra_countdown_deadline) {
                            vandra_countdown_init = vandra_start_countdown(vandra_countdown_deadline);
                        } else {
                            vandra_countdown_init = vandra_start_countdown();
                        }
                        vandra_popup_container = vandra_popup_container
                            .replace(/{{vandra_popup_display_placeholder}}/g, vandra_popup_display)
                            .replace(/{{vandra_popup_content_time_countdown_placeholder}}/g, "")
                            .replace(/{{vandra_popup_content_header_text_countdown_placeholder}}/g, vandra_popup_content_header_text_countdown)
                            .replace(/{{vandra_popup_content_body_text_countdown_placeholder}}/g, vandra_popup_content_body_text_countdown
                                .replace(/{{discount_rate}}/g, vandra_discount_rate)
                                .replace(/{{vandra_discount_rate_placeholder}}/g, vandra_discount_rate))
                            .replace(/{{vandra_popup_content_time_container_default_placeholder}}/g, vandra_popup_content_time_container_countdown
                                .replace(/{{vandra_time_countdown_placeholder}}/g, vandra_countdown_init));
                    } else if (vandra_ui_version_name === UI_VERSION_NAMES.RENUDGE_WITH_EXPIRES && vandra_renudge_type === "postapply_done") {
                        let formattedExpiryDate = undefined;
                        let expiryMessage = undefined;
                        if(vandra_discount_ends_at_time) {
                            let expiryDate = new Date(parseInt(vandra_discount_ends_at_time) * 1000);
                            formattedExpiryDate = (expiryDate.getMonth() + 1) +
                                '/' + expiryDate.getDate() +
                                '/' + expiryDate.getFullYear() +
                                ' at ' + expiryDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                        }
                        if(formattedExpiryDate) {
                            expiryMessage = "Your unique discount code expires on " + formattedExpiryDate;
                        } else {
                            expiryMessage = "Your unique discount code expires soon!";
                        }
                        vandra_popup_container = vandra_popup_container
                            .replace(/{{vandra_popup_content_header_text_default_placeholder}}/g, "EXPIRES SOON !!")
                            .replace(/{{vandra_popup_content_body_text_default_placeholder}}/g, expiryMessage)
                            .replace(/{{vandra_popup_content_copy_container_default_placeholder}}/g, "");
                    } else {
                        vandra_popup_container = vandra_popup_container
                            .replace(/{{vandra_popup_content_header_text_default_placeholder}}/g, vandra_popup_content_header_savings_text_default
                                .replace(/{{vandra_savings_total_placeholder}}/g, vandra_savings_total))
                            .replace(/{{vandra_popup_content_body_text_default_placeholder}}/g, vandra_popup_content_body_savings_text_default
                                .replace(/{{discount_rate}}/g, vandra_discount_rate)
                                .replace(/{{vandra_discount_rate_placeholder}}/g, vandra_discount_rate))
                            .replace(/{{vandra_popup_content_copy_container_default_placeholder}}/g, "");
                    }
                    /* Minimized */
                    if (vandra_ui_version_name === UI_VERSION_NAMES.COUNTDOWN) {
                        vandra_minimized_container = vandra_minimized_container
                            .replace(/{{vandra_widget_slide_in_animation_class_placeholder}}/g, vandra_widget_slide_in_animation_class)
                            .replace(/{{vandra_minimized_content_header_text_countdown_placeholder}}/g, vandra_minimized_content_header_default_text_countdown
                                .replace(/{{vandra_time_countdown_placeholder}}/g, vandra_countdown_init));
                    } else {
                        vandra_minimized_container = vandra_minimized_container
                            .replace(/{{vandra_minimized_content_header_text_default_placeholder}}/g, vandra_minimized_content_header_savings_text_default
                                .replace(/{{vandra_savings_total_placeholder}}/g, vandra_savings_total));
                    }
                }
                vandra_popup_container = vandra_popup_container
                    .replace(/{{vandra_widget_slide_in_animation_class_placeholder}}/g, vandra_widget_slide_in_animation_class);
                vandra_minimized_container = vandra_minimized_container
                    .replace(/{{vandra_widget_slide_in_animation_class_placeholder}}/g, vandra_widget_slide_in_animation_class);
                /* Return */
                vandra_return_container = vandra_return_container
                    .replace(/{{vandra_widget_slide_in_animation_class_placeholder}}/g, vandra_widget_slide_in_animation_class)
                    .replace(/{{vandra_popup_content_header_text_return_placeholder}}/g, vandra_popup_content_header_default_text_return
                        .replace(/{{discount_rate}}/g, vandra_discount_rate)
                        .replace(/{{vandra_discount_rate_placeholder}}/g, vandra_discount_rate))
                    .replace(/{{vandra_popup_content_body_text_return_placeholder}}/g, vandra_popup_content_body_default_text_return
                        .replace(/{{discount_rate}}/g, vandra_discount_rate)
                        .replace(/{{vandra_discount_rate_placeholder}}/g, vandra_discount_rate))
                    .replace(/{{vandra_popup_content_button_container_return_placeholder}}/g, vandra_popup_content_button_default_text_return);
                if (widget_type === WIDGET_TYPES.POPUP) {
                    let nudge_delay = 0;
                    if (!vandra_popup_shown) {
                        if (vandra_ui_version_name === UI_VERSION_NAMES.IMAGE && !vandra_discount_applied) {
                            tryMountDiscountNudge(vandra_widget_container, vandra_popup_container_image)
                        } else if (vandra_ui_version_name === UI_VERSION_NAMES.MODAL && !vandra_discount_applied) {
                            tryMountDiscountNudge(vandra_widget_container, vandra_modal_container)
                        } else if (vandra_ui_version_name === UI_VERSION_NAMES.AUTO_APPLY && !vandra_discount_applied) {
                            let mounted = tryMountDiscountNudge(vandra_widget_container, vandra_popup_container_auto)
                            if (mounted) { vandra_apply_discount_code(false); }


                        }
                        else if ([UI_VERSION_NAMES.NUDGE_DELAY, UI_VERSION_NAMES.NUDGE_DELAY_V2].includes(vandra_ui_version_name) && !vandra_keyup_triggered) {
                            //make sure we get the time elapsed since decisioning
                            time_since_decisioning = Math.max(0,Date.now() - vandra_nudge_parameters.trigger_decisioning_time*1000);
                            //delay relative to how much time has elapsed   
                            nudge_delay =  Math.max(vandra_nudge_parameters.trigger_delay - time_since_decisioning/1000,0);
                        
                        } else if (vandra_ui_version_name == UI_VERSION_NAMES.ACTION_BASED_SHOW) {
                            // Setup our initial values. Also accounting for if doing manual testing
                            const vandra_test_action_trigger = vandra_url.searchParams.get("vandra_test_action_trigger");
                            let vandra_test_action_delay = vandra_url.searchParams.get("vandra_test_action_delay");
                        
                            vandra_test_action_delay = vandra_test_action_delay ? vandra_test_action_delay : 30;  // Check if present if not default to 30 for testing

                            let assigned_trigger_type = vandra_ui_version_test ? vandra_test_action_trigger : vandra_nudge_parameters.trigger_type;

                            let time_since_decisioning = Math.max(0, Date.now() - vandra_nudge_parameters.trigger_decisioning_time*1000);
                            
                            action_nudge_delay = vandra_ui_version_test ? vandra_test_action_delay : Math.max(vandra_nudge_parameters.trigger_delay - time_since_decisioning/1000,0);
                            const delay_cookie = vandra_get_cookie("vandra_nudge_delay")
                            if (vandra_ui_version_test === "ACTION_BASED_SHOW" && delay_cookie) {
                                action_nudge_delay = delay_cookie
                            }
                            // End setup of initial values

                            action_based_show = true;
                            let istimeoutExpired = action_nudge_delay === 0 ? true : false;
                            let actionOccurred = vandra_get_cookie("vandra_action_occurred")
                    
                            const timeoutId = setTimeout(() => {
                                actionOccurred = vandra_get_cookie("vandra_action_occurred")
                                if (!actionOccurred) {
                                    if (assigned_trigger_type === "engagement_action") {
                                        //force trigger
                                        handlePopup(true, "timeout");
                                    } else {
                                        // no action was taken during our action timer so fallback to random action trigger
                                        addAnyActionTrigger(true);
                                    }
                                } 
                            }, action_nudge_delay * 1000);

                            const handlePopup = (isFallback, actionTrigger) => {
                                if (!vandra_popup_shown) { 
                                    let mounted = tryMountDiscountNudge(vandra_widget_container, vandra_popup_container)
                                    // to avoid different labels on the backend for mobile vs desktop we reassign touchmove to mousemove
                                    if (mounted) {
                                        actionTrigger = actionTrigger === "touchmove" ? "mousemove" : actionTrigger;
                                        vandra_update_nudge_parameters(isFallback ? "fallback": "assigned", actionTrigger, "")
                                        actionOccurred = vandra_get_cookie("vandra_action_occurred")
                                        if (!actionOccurred) {
                                            vandra_set_cookie("vandra_action_occurred", true, 0.04);
                                        }
                                    }
                                }
                                clearTimeout(timeoutId)
                            }

                            const addAnyActionTrigger = (isFallback) => {
                                for (let i = 0; i < action_types.length; i++) {
                                    let trigger_type = action_types[i];
                                    // exclude page_visit we can't set listeners
                                    // Note there is an experimental option https://developer.mozilla.org/en-US/docs/Web/API/Navigation/navigate_event
                                    if (trigger_type === 'page_visit') return;

                                    const eventHandler = () => handlePopup(isFallback, trigger_type)
                                    if (trigger_type === 'click') {
                                        document.addEventListener(trigger_type, eventHandler);
                                    } else {
                                        window.addEventListener(trigger_type, eventHandler);
                                    }
                                }
                            }

                            const addAnyEngagementActionTrigger = () => {
                                for (let i = 0; i < engagement_action_types.length; i++) {
                                    let trigger_type = engagement_action_types[i];

                                    const eventHandler = () => handlePopup(false, trigger_type)
                                    if (trigger_type === 'click') {
                                        document.addEventListener(trigger_type, eventHandler);
                                    } else {
                                        window.addEventListener(trigger_type, eventHandler);
                                    }
                                }
                            }

                            if (vandra_ui_version_test === "ACTION_BASED_SHOW" && !assigned_trigger_type) {
                                assigned_trigger_type = vandra_get_cookie("vandra_trigger_type")
                            }

                            if (actionOccurred) {
                                tryMountDiscountNudge(vandra_widget_container, vandra_popup_container)
                            } else {
                                // create listeners for the appropriate default events from the session nudge parameters
                                if (assigned_trigger_type === "page_visit") {
                                    const visit = vandra_get_cookie("vandra_non_initial_page_visit");
                                
                                    if (visit) {
                                        if (istimeoutExpired) {
                                            handlePopup(true, assigned_trigger_type)
                                        } else {
                                            handlePopup(false, assigned_trigger_type)
                                        }
                                    }

                                    vandra_set_cookie("vandra_non_initial_page_visit", true, 30);

                                } else if (assigned_trigger_type === "any") {
                                    addAnyActionTrigger(false)
                                } else if (assigned_trigger_type === "engagement_action") {
                                    addAnyEngagementActionTrigger()
                                } else if (assigned_trigger_type === "click") {
                                    document.addEventListener(assigned_trigger_type, () => {
                                    handlePopup(false, assigned_trigger_type)
                                    })
                                } else {
                                    if (assigned_trigger_type === "mousemove" && vandra_mobile) {
                                        assigned_trigger_type = "touchmove"
                                    }
                                    window.addEventListener(assigned_trigger_type, () => {
                                        handlePopup(false, assigned_trigger_type)
                                    })
                                }
                            }
                            if (vandra_ui_version_test === "ACTION_BASED_SHOW") {
                                vandra_set_cookie("vandra_trigger_type", assigned_trigger_type, 30);
                                vandra_set_cookie("vandra_nudge_delay", action_nudge_delay, 30);
                            }
                        }

                        // add nudge delay as needed
                        if (!action_based_show) {
                            setTimeout(() => {
                                tryMountDiscountNudge(vandra_widget_container, vandra_popup_container)
                            }, nudge_delay * 1000);
                        }
                    } else {
                        let vandra_popup_container_element;
                        
                        
                        if(vandra_ui_version_name === UI_VERSION_NAMES.IMAGE && !vandra_discount_applied) {
                            vandra_popup_container_element = document.getElementById("vandra_popup_container_image");
                        } else {
                            vandra_popup_container_element = document.getElementById("vandra_popup_container_default");
                        }
                        if (!vandra_popup_container_element) {
                            vandra_widget_container.style.display = "none"
                            tryMountDiscountNudge(vandra_widget_container, vandra_popup_container)
                            vandra_popup_container_element = document.getElementById("vandra_popup_container_default");

                        }
                        const vandra_popup_close_container_element = document.getElementById("vandra_popup_close_container_default");
                        vandra_popup_container_element.style.display = "none";
                        vandra_popup_close_container_element.style.display = "none";
                        vandra_popup_container_element.classList.remove(...[...vandra_popup_container_element.classList].filter((class_name) => class_name !== "vandra_font"));
                        vandra_popup_close_container_element.classList.remove(...[...vandra_popup_close_container_element.classList]);
                        if (vandra_discount_applied) {
                            const vandra_popup_content_header_text = document.getElementById("vandra_popup_content_header_text_default");
                            const vandra_popup_content_body_text = document.getElementById("vandra_popup_content_body_text_default");
                            const vandra_popup_content_copy_container_elements = document.getElementsByClassName("vandra_popup_content_copy_container");
                            const vandra_popup_content_button_elements = document.getElementsByClassName("vandra_popup_content_button");
                            const vandra_popup_content_button_checkmark_elements = document.getElementsByClassName("vandra_popup_content_button_checkmark");
                            if (vandra_ui_version_name === UI_VERSION_NAMES.COUNTDOWN) {
                                const vandra_popup_content_time_countdown = document.getElementById("vandra_popup_content_time_countdown");
                                const vandra_popup_content_time_container_container_countdown = document.getElementById("vandra_popup_content_time_container_container_countdown");
                                vandra_popup_content_time_countdown.style.display = "none";
                                vandra_popup_content_header_text.innerHTML = vandra_popup_content_header_text_countdown;
                                vandra_popup_content_body_text.innerHTML = vandra_popup_content_body_text_countdown
                                    .replace(/{{discount_rate}}/g, vandra_discount_rate)
                                    .replace(/{{vandra_discount_rate_placeholder}}/g, vandra_discount_rate);
                                let vandra_countdown_init = undefined;
                                if(vandra_countdown_deadline) {
                                    vandra_countdown_init = vandra_start_countdown(vandra_countdown_deadline);
                                } else {
                                    vandra_countdown_init = vandra_start_countdown();
                                }
                                vandra_popup_content_time_container_container_countdown.innerHTML = vandra_popup_content_time_container_countdown
                                    .replace(/{{vandra_time_countdown_placeholder}}/g, vandra_countdown_init);
                            } else if(vandra_ui_version_name === UI_VERSION_NAMES.RENUDGE_WITH_EXPIRES && vandra_renudge_type === "postapply_done") {
                                let formattedExpiryDate = undefined;
                                if(vandra_discount_ends_at_time) {
                                    let expiryDate = new Date(parseInt(vandra_discount_ends_at_time) * 1000);
                                    formattedExpiryDate = (expiryDate.getMonth() + 1) +
                                        '/' + expiryDate.getDate() +
                                        '/' + expiryDate.getFullYear() +
                                        ' at ' + expiryDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                                }
                                vandra_popup_content_header_text.innerHTML = "EXPIRES SOON !!";
                                if(formattedExpiryDate) {
                                    vandra_popup_content_body_text.innerHTML = "Your unique discount code expires on " + formattedExpiryDate;
                                } else {
                                    vandra_popup_content_body_text.innerHTML = "Your unique discount code expires soon!";
                                }
                                for (const vandra_popup_content_copy_container of vandra_popup_content_copy_container_elements) {
                                    vandra_popup_content_copy_container.style.display = "none";
                                }
                            } else {
                                vandra_popup_content_header_text.innerHTML = vandra_popup_content_header_savings_text_default
                                    .replace(/{{vandra_savings_total_placeholder}}/g, vandra_savings_total);
                                vandra_popup_content_body_text.innerHTML = vandra_popup_content_body_savings_text_default
                                    .replace(/{{discount_rate}}/g, vandra_discount_rate)
                                    .replace(/{{vandra_discount_rate_placeholder}}/g, vandra_discount_rate);
                                for (const vandra_popup_content_copy_container of vandra_popup_content_copy_container_elements) {
                                    vandra_popup_content_copy_container.style.display = "none";
                                }
                            }
                            for (const vandra_popup_content_button of vandra_popup_content_button_elements) {
                                vandra_popup_content_button.removeAttribute("onclick");
                                vandra_popup_content_button.onclick = vandra_redirect_to_checkout;
                            }
                            for (const vandra_popup_content_button_checkmark of vandra_popup_content_button_checkmark_elements) {
                                vandra_popup_content_button_checkmark.style.display = "none";
                            }
                            const vandra_popup_content_button_apply_container_elements = document.getElementsByClassName("vandra_popup_content_button_apply_container");
                            const vandra_popup_content_button_applied_text_elements = document.getElementsByClassName("vandra_popup_content_button_applied_container");
                            if (vandra_popup_content_button_apply_container_elements.length > 0) {
                                for (const vandra_popup_content_button_apply_container of vandra_popup_content_button_apply_container_elements) {
                                    vandra_popup_content_button_apply_container.innerHTML = (vandra_savings_total === "$-.--" || vandra_savings_total === "$0.00") ? vandra_popup_content_button_savings_continue_text_default : vandra_popup_content_button_savings_text_default;
                                }
                            }
                            if (vandra_popup_content_button_applied_text_elements.length > 0) {
                                for (const vandra_popup_content_button_applied_text of vandra_popup_content_button_applied_text_elements) {
                                    vandra_popup_content_button_applied_text.innerHTML = (vandra_savings_total === "$-.--" || vandra_savings_total === "$0.00") ? vandra_popup_content_button_savings_continue_text_default : vandra_popup_content_button_savings_text_default;
                                }
                            }
                        } else {
                            if(vandra_ui_version_name === UI_VERSION_NAMES.RENUDGE_WITH_EXPIRES && vandra_renudge_type === "postdismiss_done") {
                                let formattedExpiryDate = undefined;
                                if(vandra_discount_ends_at_time) {
                                    let expiryDate = new Date(parseInt(vandra_discount_ends_at_time) * 1000);
                                    formattedExpiryDate = (expiryDate.getMonth() + 1) +
                                        '/' + expiryDate.getDate() +
                                        '/' + expiryDate.getFullYear() +
                                        ' at ' + expiryDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                                }
                                const vandra_popup_content_header_text = document.getElementById("vandra_popup_content_header_text_default");
                                const vandra_popup_content_body_text = document.getElementById("vandra_popup_content_body_text_default");
                                vandra_popup_content_header_text.innerHTML = "EXPIRES SOON !!";
                                if(formattedExpiryDate) {
                                    vandra_popup_content_body_text.innerHTML = "Your unique discount code expires on " + formattedExpiryDate;
                                } else {
                                    vandra_popup_content_body_text.innerHTML = "Your unique discount code expires soon!";
                                }
                            }
                        }
                        setTimeout(() => {
                            vandra_popup_container_element.style.display = "block";
                            vandra_popup_close_container_element.style.display = "block";
                            vandra_popup_container_element.classList.add(vandra_widget_slide_in_animation_class);
                            vandra_widget_container.style.display = "block";
                        }, 0);
                    }
                    setFocus("vandra_popup_close_container_default", "focus");
                } else if (widget_type === WIDGET_TYPES.MINIMIZED) {
                    if (!vandra_minimized_shown && !hide_minimized_popup) {
                        let mounted = tryMountDiscountNudge(vandra_widget_container, vandra_minimized_container, skipCollisionCheck=true);
                        vandra_minimized_shown = mounted;
                    } else {
                        const vandra_minimized_container = document.getElementById("vandra_minimized_container_default");
                        vandra_minimized_container.style.display = "none";
                        vandra_minimized_container.classList.remove(...[...vandra_minimized_container.classList].filter((class_name) => class_name !== "vandra_font"));
                        if (vandra_discount_applied && vandra_ui_version_name !== UI_VERSION_NAMES.COUNTDOWN) {
                            const vandra_minimized_content_header_text = document.getElementById("vandra_minimized_content_header_text_default");
                            vandra_minimized_content_header_text.innerHTML = vandra_minimized_content_header_savings_text_default
                                .replace(/{{vandra_savings_total_placeholder}}/g, vandra_savings_total);
                        }
                        setTimeout(() => {
                            vandra_minimized_container.style.display = "flex";
                            vandra_minimized_container.classList.add(vandra_widget_slide_in_animation_class);
                        }, 1);
                    }
                    setFocus("vandra_minimized_container_default", "focus");
                } else if (widget_type === WIDGET_TYPES.RETURN) {
                    if (!vandra_return_shown) {
                       let mounted = tryMountDiscountNudge(vandra_widget_container, vandra_return_container);
                        vandra_return_shown = mounted;
                    }
                    setFocus("vandra_popup_close_container_default", "focus");
                }
            }
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    };

    function vandra_update_nudge_parameters(trigger_state, trigger_action, trigger_type) {
        fetch(vandra_api_base_url + "/update_nudge_parameters", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                session_cookie: vandra_session_cookie,
                trigger_state: trigger_state,
                trigger_action: trigger_action,
                trigger_type: trigger_type
            })
        });
    }

    function setFocus(el, action) {
        const element = document.getElementById(el);
        if (element !== null && element !== undefined) {
            if(action === "focus") {
                element.focus();
            } else if(action === "blur") {
                element.blur();
            }
        }
    };

    function vandra_handle_copy_click() {
        try {
            vandra_copy_clicked = true;
            navigator.clipboard.writeText(vandra_discount_code);
            const copy_text = document.getElementById("vandra_popup_content_copy_text_default");
            copy_text.innerHTML = "copied!";
            setTimeout(() => {
                copy_text.innerHTML = "copy";
            }, 3000);
            vandra_apply_discount_code(false);
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    };


    function get_dwell_time() {
        // If currently unfocused, add the current unfocused duration
        let current_unfocused_time = 0;
        if (vandra_unfocused_start_time) {
            current_unfocused_time = Date.now() - vandra_unfocused_start_time;
        }
        
        const total_time = (Date.now() - vandra_start_time) / 1000;
        const total_unfocused_time = (vandra_cumulative_unfocused_time + current_unfocused_time) / 1000;
        
        return {
            dwell_time: total_time,
            focused_dwell_time: total_time - total_unfocused_time
        };
    }

    function unix_to_gmt_time(unixtime) {
        // Create a Date object from the timestamp (in milliseconds)
        const date = new Date(unixtime * 1000);

        // Get the GMT date and time string
        return date.toUTCString();
    }

    function vandra_record_discount_shown(){
        fetch(`${vandra_api_base_url}/record_popup_shown`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                session_cookie: vandra_session_cookie,
                page_view_id: vandra_backend_page_view_uuid,
                // Deconstruct dwell time values
                ...get_dwell_time()
            })
        });
        vandra_popup_shown = true;
        
        if (use_meta_ad_pixel) {
            vandra_fire_meta_pixel('VandraPopupShown', {
                'customer_cookie': vandra_customer_cookie,
                'session_cookie': vandra_session_cookie,
                'popup_shown': vandra_popup_shown,
                'discount_code': vandra_discount_code,
                'discount_offer': vandra_discount_rate,
                'discount_expiration': unix_to_gmt_time(vandra_discount_ends_at_time)
            })
        }
    };

    function vandra_apply_discount_code(hide) {
        try {
            vandra_discount_applied = true;

            /* Only hide popup on button click, not on copy click */
            if (hide) {
                vandra_apply_discount_animation();
            }

            /* Apply discount through Shopify */
            fetch(`/discount/${vandra_discount_code}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(() => {vandra_update_savings(null)});

            
            /* Record discount application to Vandra server */
            fetch(`${vandra_api_base_url}/record_discount_applied`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                    session_cookie: vandra_session_cookie,
                    page_view_id: vandra_backend_page_view_uuid,
                    ...get_dwell_time()
                })
            });
            if (use_meta_ad_pixel) {
                vandra_fire_meta_pixel('VandraPopupApplied', {
                    'customer_cookie': vandra_customer_cookie,
                    'session_cookie': vandra_session_cookie,
                    'discount_applied': vandra_discount_applied,
                    'discount_code': vandra_discount_code,
                    'discount_offer': vandra_discount_rate,
                    'discount_expiration': unix_to_gmt_time(vandra_discount_ends_at_time)
                })
            }
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    };

    function vandra_apply_discount_animation() {
        try {
            const apply_container = document.getElementById("vandra_popup_content_button_apply_container_default");
            const applied_container = document.getElementById("vandra_popup_content_button_applied_container_default");
            if (applied_container.style.display === "none") {
                vandra_is_loading = true;
                const vandra_clear_apply_container = () => {
                    const vandra_clear_applied_container = () => {
                        applied_container.classList.remove("vandra_button_slide_left_to_center_animation");
                        applied_container.removeEventListener("animationend", vandra_clear_applied_container);
                        setTimeout(() => {
                            if(vandra_ui_version_name === UI_VERSION_NAMES.IMAGE) {
                                vandra_hide_image();
                            } else {
                                const vandra_modal_container_modal = document.getElementById("vandra_modal_container_modal");
                                if(vandra_modal_container_modal === null) {
                                    vandra_hide_popup(false);
                                } else {
                                    vandra_hide_modal();
                                }
                            }
                        }, 1000);
                    };
                    apply_container.style.display = "none";
                    apply_container.classList.add("vandra_invisible");
                    apply_container.classList.remove("vandra_button_slide_center_to_right_animation");
                    apply_container.removeEventListener("animationend", vandra_clear_apply_container);
                    applied_container.style.display = "flex";
                    applied_container.addEventListener("animationend", vandra_clear_applied_container, { passive: true });
                    applied_container.classList.add("vandra_button_slide_left_to_center_animation");
                };
                apply_container.classList.remove(...apply_container.classList);
                applied_container.classList.remove(...applied_container.classList);
                apply_container.classList.add("vandra_popup_content_button_apply_container");
                applied_container.classList.add("vandra_popup_content_button_applied_container");
                apply_container.addEventListener("animationend", vandra_clear_apply_container, { passive: true });
                apply_container.classList.add("vandra_button_slide_center_to_right_animation");
            }
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    };

    function vandra_hide_popup(dismiss, type) {
        try {
            /* Prevents close while applying discount */
            if (dismiss && vandra_is_loading) {
                return false;
            }

            vandra_hide(type);

            /* Only record dismissal if discount has not been applied */
            if (!vandra_discount_applied && dismiss) {
                /* Record popup dismissal to Vandra server */
                fetch(`${vandra_api_base_url}/record_popup_dismissed`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: new URLSearchParams({
                        session_cookie: vandra_session_cookie,
                        page_view_id: vandra_backend_page_view_uuid,
                        ...get_dwell_time()
                    })
                });
                if (use_meta_ad_pixel) {
                    vandra_fire_meta_pixel('VandraPopupDismissed', {
                        'customer_cookie': vandra_customer_cookie,
                        'session_cookie': vandra_session_cookie,
                        'discount_applied': vandra_discount_applied,
                        'discount_code': vandra_discount_code,
                        'discount_offer': vandra_discount_rate,
                        'discount_expiration': unix_to_gmt_time(vandra_discount_ends_at_time)
                    })
                }
            }
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    };

    function vandra_hide_image(dismiss) {
        try {
            /* Prevents close while applying discount */
            if (dismiss && vandra_is_loading) {
                return false;
            }

            vandra_hide();

            /* Only record dismissal if discount has not been applied */
            if (!vandra_discount_applied && dismiss) {
                /* Record popup dismissal to Vandra server */
                fetch(`${vandra_api_base_url}/record_popup_dismissed`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: new URLSearchParams({
                        session_cookie: vandra_session_cookie,
                        page_view_id: vandra_backend_page_view_uuid,
                        ...get_dwell_time()
                    })
                });
            }
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    };

    function vandra_hide_modal() {
        try {
            /* Hide modal, remove backdrop, and show minimized */
            const modal_container = document.getElementById("vandra_modal_container_modal");
            const backdrop = document.getElementById("vandra_backdrop");
            modal_container.remove();
            backdrop.remove();
            vandra_generate_widget(WIDGET_TYPES.MINIMIZED);
            vandra_copy_clicked = false;
            vandra_is_loading = false;
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    };

    function vandra_hide_auto() {
        try {
            vandra_hide();
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    };

    function vandra_start_countdown(deadline) {
        try {
            const vandra_countdown_elements = document.getElementsByClassName("vandra_countdown");
            let countdown_time_arr = undefined;
            if(deadline) {
                countdown_time_arr = get_countdown_time_with_deadline(deadline);
            } else {
                countdown_time_arr = get_countdown_time();
                if (countdown_time_arr[2]) {
                    vandra_start_countdown(countdown_time_arr[2]);
                    return countdown_time_arr[0];
                }
            }
            let vandra_countdown_init = countdown_time_arr[0];
            if(!vandra_time_init_countdown) {
                const interval = setInterval(() => {
                    let countdown_time_arr = undefined;
                    if(deadline) {
                        countdown_time_arr = get_countdown_time_with_deadline(deadline);
                    } else {
                        countdown_time_arr = get_countdown_time();
                        if (countdown_time_arr[2]) {
                            vandra_start_countdown(countdown_time_arr[2]);
                            clearInterval(interval);
                            return;
                        }
                    }
                    vandra_countdown_init = countdown_time_arr[0];
                    time = countdown_time_arr[1];
                    for (const vandra_countdown of vandra_countdown_elements) {
                        if(vandra_countdown_init) {
                            vandra_countdown.innerHTML = vandra_countdown_init;
                        }
                    }
                    if (time <= 1000) {
                        clearInterval(interval);
                        vandra_hide_popup(false, "COUNTDOWN");
                        vandra_hide_minimized("COUNTDOWN");
                    }
                }, 1000);
            }
            vandra_time_init_countdown = true;
            return vandra_countdown_init;
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    };

    function get_countdown_time() {
        try {
            const now = new Date().getTime();
            const midnight = new Date(new Date().setHours(24, 0, 0, 0)).getTime();
            let time = midnight - now;
            let hours = undefined;
            let minutes = undefined;
            let seconds = undefined;
            let deadline = undefined;
            if(time <= 3600000) {
                time = 3600000;
                hours = 1;
                minutes = 0;
                seconds = 0;
                deadline = now + time;
            } else {
                hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
                seconds = Math.floor((time % (1000 * 60)) / 1000);
                deadline = midnight;
            }
            fetch(`${vandra_api_base_url}/record_countdown_deadline`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                    session_cookie: vandra_session_cookie,
                    deadline
                })
            });
            return [String(hours).padStart(2, "0") + ":" + String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0") + " LEFT", time, deadline];
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    };

    function get_countdown_time_with_deadline(deadline) {
        try {
            const now = new Date().getTime();
            const time = parseInt(deadline) - now;
            let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));;
            let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((time % (1000 * 60)) / 1000);
            return [String(hours).padStart(2, "0") + ":" + String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0") + " LEFT", time];
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    };

    function vandra_hide(type) {
        try {
            /* Hide popup and show minimized */
            let popup_container = undefined;
            let popup_default = false;
            if(type === "RETURN") {
                popup_container = document.getElementById("vandra_popup_container_return");
            } else {
                if(vandra_ui_version_name === UI_VERSION_NAMES.IMAGE) {
                    popup_container = document.getElementById("vandra_popup_container_image");
                    if(!popup_container) {
                        popup_container = document.getElementById("vandra_popup_container_default");
                        popup_default = true;
                    }
                } else if(vandra_ui_version_name === UI_VERSION_NAMES.AUTO_APPLY) {
                    popup_container = document.getElementById("vandra_popup_container_auto");
                    if(!popup_container) {
                        popup_container = document.getElementById("vandra_popup_container_default");
                        popup_default = true;
                    }
                } else {
                    popup_container = document.getElementById("vandra_popup_container_default");
                    popup_default = true;
                }
            }
            const vandra_show_minimized = () => {
                vandra_generate_widget(WIDGET_TYPES.MINIMIZED);
                popup_container.removeEventListener("animationend", vandra_show_minimized);
                if(vandra_ui_version_name === UI_VERSION_NAMES.IMAGE && vandra_discount_applied && !popup_default) {
                    popup_container.remove();
                } else if (vandra_ui_version_name === UI_VERSION_NAMES.AUTO_APPLY && !popup_default) {
                    popup_container.remove();
                }
                vandra_copy_clicked = false;
                vandra_is_loading = false;
            }
            popup_container.classList.remove(...[...popup_container.classList].filter((class_name) => class_name !== "vandra_font"));
            if(type !== "COUNTDOWN") {
                popup_container.addEventListener("animationend", vandra_show_minimized, { passive: true });
            }
            popup_container.classList.add(vandra_widget_slide_out_animation_class);
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    }
    
    // Function to start a timeout that persists
    function vandra_timeout_wrapper({ duration, func, params, timeoutId }) {
        // Check if we have a stored timeout from a previous session
        const lastTimeoutTimestamp = Number(localStorage.getItem(timeoutId));
        const now = Date.now();
        
        // If there's a previous timeout and it's still valid
        if (lastTimeoutTimestamp && ((now - lastTimeoutTimestamp) < duration)) {
            // If the timeout was not finished, adjust the remaining time
            const remainingTime = duration - (now - lastTimeoutTimestamp);
            
            // Use an anonymous function to pass the params to the func
            cart_abandonment_timeout_id = setTimeout(() => func(params), remainingTime); 
        } else {
            cart_abandonment_timeout_id = setTimeout(() => func(params), duration)
        }
        
        // Store the current timestamp in localStorage to track the timeout
        localStorage.setItem(timeoutId, now);
        localStorage.setItem("vandra_cart_abandonment_timeout_id", cart_abandonment_timeout_id)
    }

    async function vandra_mount_cart_abandonment({cart_abandonment_type}) {
        const cart_abandonment_intervention_happened = vandra_get_cookie("vandra_cart_intervention");
        let duration = 0;
        if (cart_abandonment_type === CART_ABANDONMENT_TYPES.IN_SESSION) {
            // wait 1 minute for now 60000 ms
            const timeouts = [60_000, 120_000, 180_000]
            const randomIndex = Math.floor(Math.random() * timeouts.length);
            duration = timeouts[randomIndex]
            const vandra_ui_cart_time = vandra_url.searchParams.get("cart_time");
            if (vandra_ui_version_test === "CART_ABANDONMENT" && vandra_ui_cart_time) {
                duration =  parseInt(vandra_ui_cart_time) * 1000
            }
        }
        //create intervention if not created yet
        if (!cart_abandonment_intervention_happened && (!localStorage.getItem("vandra_timeout_cart_abandoned") || cart_abandonment_type === CART_ABANDONMENT_TYPES.RETURNING)) {
            const response = await fetch(`${vandra_api_base_url}/base_nudge/create`, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    session_cookie: vandra_session_cookie,
                    intervention_type: getInterventionType(cart_abandonment_type),                   
                    metadata : JSON.stringify({
                        delay: duration / 1000,
                        }
                    )
                })
            });
            const data = await response.json();
            if (!response.ok) {
                setSentryContext('failed to create abandonment intervention', {data: data});
                vandra_handle_error(new Error(`Error with fetch request for abandonment`));
            }
            //get holdout from payload
            let { holdout } = data;
            //put in a cookie
            //override holdout
            const holdout_override = vandra_url.searchParams.get("vandra_holdout_override");
            if (holdout_override === "true" || holdout_override === "false") {
                holdout = holdout_override === "true" ? true : false;
            }
            vandra_set_cookie("vandra_cart_intervention_holdout", holdout, 0.04);
        }

        const updateParameters = (interventionTypeName, sessionCookie, metadata) => {
            fetch(`${vandra_api_base_url}/base_nudge/parameters`, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    intervention_type_name: interventionTypeName,
                    session_cookie: sessionCookie,
                    metadata: JSON.stringify(metadata)
                })
            });
        }

        //update parameters
        const update_total_discount_parameters = (cart_abandonment_type, total_discount) => {
            const intervention_type_name = getInterventionType(cart_abandonment_type);
            updateParameters(intervention_type_name, vandra_session_cookie, { total_discount });
        }

        //suppress function
        const suppress_cart_abandonment = (suppression_reason, total_discount) => {
            fetch(`${vandra_api_base_url}/log/suppression`, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    intervention_type: getInterventionType(cart_abandonment_type),
                    session_cookie: vandra_session_cookie,
                    page_view_id: vandra_backend_page_view_uuid,
                    // Deconstruct dwell time values
                    ...get_dwell_time(),
                    metadata: JSON.stringify({ suppression_reason })
                })
            });
            vandra_set_cookie("vandra_cart_intervention", true, 0.04);
            const hasDiscount = total_discount > 0 ? true: false;
            if (hasDiscount) {
                update_total_discount_parameters(cart_abandonment_type, total_discount);
            }
        }
        //define cart func
        const render_cart_func = async (params) => {
            const { cart_abandonment_type, store_intervention_parameters } = params;
            //get cart details
            const cart_response = await fetch("/cart.json");
            let { items: cart_items, total_discount } = await cart_response.json();
            const preFilterLenght = cart_items.length;
            if (store_intervention_parameters?.excluded_product_ids && 
                store_intervention_parameters.excluded_product_ids.length > 0) {
                cart_items = cart_items.filter(item => !store_intervention_parameters.excluded_product_ids.includes(item.product_id));
            };
            //check if there is a discount
            const hasDiscount = total_discount > 0 ? true: false;
            //get holdout from cookie
            const holdout = vandra_get_cookie("vandra_cart_intervention_holdout") === "true";
            //suppress if no items
            if (cart_items.length === 0) {
                //log that there are no items in the cart, suppress and exit
                const suppression_reason = preFilterLenght === 0 ? "No items in cart" : "All items excluded";
                suppress_cart_abandonment(suppression_reason, total_discount);
                return;
            }
            //suppress  if on cart page or popup already shown
            if (window.location.pathname.includes("/cart") || vandra_popup_shown) {
                let suppression_reason = vandra_popup_shown ? "Discount already shown" : "On cart page";
                suppress_cart_abandonment(suppression_reason, total_discount);
                return;
            }
            //fetch latest details from cart
            const image = cart_items[0]["featured_image"]["url"].replace(/\\\//g, '/');
            // extract the parameters
            const background_color = store_intervention_parameters?.primary_background_color || `#${vandra_popup_primary_color}`;
            const store_font = store_intervention_parameters?.primary_store_font || vandra_popup_font;
            const in_session_cart_abandonment_heading1 = store_intervention_parameters?.in_session_cart_abandonment_heading1
            const in_session_cart_abandonment_heading2 = store_intervention_parameters?.in_session_cart_abandonment_heading2
            const savings_cart_abandonment_heading1 = store_intervention_parameters?.savings_cart_abandonment_heading1
            const savings_cart_abandonment_heading2 = store_intervention_parameters?.savings_cart_abandonment_heading2

            tryMountPopup(vandraComponents.CartAbandonment, {
                target: document.body,
                // TODO:this is not the best. fix to probably make an api call internally 
                // in the component to fetch these parameters on mount
                props: {
                    primaryColor: `${background_color}`,
                    storeAdImage: image,
                    hasDiscount,
                    discountTotal: total_discount,
                    cartType: cart_abandonment_type,
                    pageViewId: vandra_backend_page_view_uuid,
                    dwellTimeStartCounter: vandra_start_time,
                    inSessionCartAbandonmentHeading1: in_session_cart_abandonment_heading1,
                    inSessionCartAbandonmentHeading2: in_session_cart_abandonment_heading2,
                    savingsCartAbandonmentHeading1: savings_cart_abandonment_heading1,
                    savingsCartAbandonmentHeading2: savings_cart_abandonment_heading2,
                    storeFont: store_font                }
            }, ()=>{
                suppress_cart_abandonment("Skipped because of collision", total_discount);
            }, 
            holdout, ()=>{
                suppress_cart_abandonment("Holdout", total_discount);
            });
            //signal intervention took place
            vandra_set_cookie("vandra_cart_intervention", true, 0.04);
            localStorage.clear("vandra_timeout_cart_abandoned")
            //post metadata if has discount
            if (hasDiscount) {
                update_total_discount_parameters(cart_abandonment_type, total_discount);
            }
        }

        //render cart abandonment
        if (!cart_abandonment_intervention_happened) {
            const intervention_type_name = getInterventionType(cart_abandonment_type);
            const store_intervention_parameters = await getStoreInterventionParameters(intervention_type_name);

            if (cart_abandonment_type === CART_ABANDONMENT_TYPES.IN_SESSION ) {
                //schedule it
                vandra_timeout_wrapper({
                        duration: duration,
                        func: render_cart_func,
                        params: { cart_abandonment_type, store_intervention_parameters },
                        timeoutId: "vandra_timeout_cart_abandoned"
                    });
            } else {
                //show it immediately
                render_cart_func({ cart_abandonment_type, store_intervention_parameters });
            }
            
        }
    }

    function vandraTriggerAbandonmentBasedOnCartEvent(cartEventType, cartItems) {
        const cart_abandonment_intervention_happened = vandra_get_cookie("vandra_cart_intervention");
        if (!cart_abandonment_intervention_happened && cartItems.length > 0) {
            if (cartEventType === "add") {
                vandra_mount_cart_abandonment({cart_abandonment_type: CART_ABANDONMENT_TYPES.IN_SESSION})
            } else {
                if (["update","change"].includes(cartEventType)) {       
                    if (cart_abandonment_timeout_id) {
                        // reset everything to go from the last event
                        localStorage.clear("vandra_timeout_cart_abandoned")
                        vandra_mount_cart_abandonment({cart_abandonment_type: CART_ABANDONMENT_TYPES.IN_SESSION})
                    } else {
                        // run this function for the fist time or on page navigation
                        vandra_mount_cart_abandonment({cart_abandonment_type: CART_ABANDONMENT_TYPES.IN_SESSION})
                    }
                }
            }
        }
    }

    async function handleCartEvent(cartEventType) {
        try {
            const cart_response = await fetch("/cart.json");
            const { items: cart_items, total_discount } = await cart_response.json();
            vandra_update_savings(total_discount/100);
            if (store_active_intervention_types.includes("cart_abandonment_in_session")) {
                vandraTriggerAbandonmentBasedOnCartEvent(cartEventType, cart_items);
            };
        }
        catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent, stopExecution = false);
        }
    };

    /**
         * Captures when a discount code is applied by sending it to the backend
         * @param {string} discount_code - The discount code that was applied
         */
    function captureDiscountCodeApplication(discount_code, detection_source) {
        try {
            // Create a unique key for this combination
            const tracking_key = `vandra_discount_tracked_${vandra_session_cookie}_${discount_code}_${detection_source}`;
            
            // Check if we've already tracked this combination
            if (vandra_get_cookie(tracking_key)) {
                return;
            }

            // Set tracking cookie with 1 hour expiration (0.0417 days)
            vandra_set_cookie(tracking_key, "true", 0.0417);
            
            let xhr = new XMLHttpRequest();
            xhr.onerror = vandra_handle_http_error;
            xhr.timeout = 10000;
            xhr.ontimeout = function () { vandra_handle_error(new Error("Time out.")); }
            xhr.open("POST", `${vandra_api_base_url}/discount/session/${vandra_session_cookie}/record_discount_code`, true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            const data_string = new URLSearchParams({
                discount_code: discount_code,
                page_view_id: vandra_backend_page_view_uuid,
                detection_source: detection_source
            }).toString();

            vandra_consent_load_checker["cartdiscount_code_application"] = vandra_check_consent_repeatedly_and_send(
                xhr,
                data_string,
                100,
                "discount_code_application"
            );
        } catch (error) {
            vandra_handle_error(error, false);
        }
    } 

    // Helper function to extract the base URL from the target URL
    function getBaseURL(url) {
        try {
            const parsedURL = new URL(url, window.location.href); // Resolve relative URLs if necessary
            return `${parsedURL.protocol}//${parsedURL.host}`; // Construct the base URL
        } catch (error) {
            return null;
        }
    }

    //helper function for discount setting urls
    function isDiscountSettingUrl(url) {
        if (url === undefined) {
            return false;
        }
        const isSiteUrl = getBaseURL(url) == window.location.origin;
        return (isSiteUrl && (url.includes(`${window.location.origin}/discount/`) || url.startsWith(`/discount/`)));
    } 
    
    function getDiscountCodeFromUrl(url) {
        if (isDiscountSettingUrl(url)) {
            const discount_code = url.split("/discount/")[1].split("?")[0];
            return discount_code;
        }
        return null;
    }


    //listent to axios, fetch, and XMLHttpRequest
    (function () {
        // List of URL patterns to intercept
        const targetPaths = [
            '/cart/add.js',
            '/cart/update.js',
            '/cart/change.js',
            '/cart/clear.js',
            '/cart/add',
            '/cart/update',
            '/cart/change',
            '/cart/clear'
        ];
    

        function getCartEventType(url) {
            if (url.includes("/cart/add")) {
                return "add";
            } else if (url.includes("/cart/update")) {
                return "update";
            } else if (url.includes("/cart/change")) {
                return "change";
            } else if (url.includes("/cart/clear")) {
                return "clear";
            }
        }

        function parseFormData(formData) {
            if (!(formData instanceof FormData)) {
                return formData; // Return as-is if it's not FormData
            }
        
            const parsedData = {};
            for (const [key, value] of formData.entries()) {
                parsedData[key] = value;
            }
            return parsedData;
        }

        // Helper function to check if a URL ends with one of the target paths
        function shouldLogRequest(url, body) {            
            const isSiteUrl = getBaseURL(url) == window.location.origin;
            const isRelevantTargetPath = url !== undefined ? targetPaths.some((targetPath) => url.endsWith(targetPath)) : false;
            if (isRelevantTargetPath) {
                const cartEventType = getCartEventType(url);
                if (cartEventType === "update" ) {
                    if (!body) {
                        return false;
                    }
                    //check if the body contains an `updates` key
                    try {
                        let bodyJson;
                        if (body instanceof FormData) {
                            bodyJson = parseFormData(body);
                        } else {
                            bodyJson = JSON.parse(body);
                        }
                        //in case not json body
                        if (!bodyJson.updates) {
                            return false;
                        }
                    } catch (error) {
                        return false;
                    }
                }
            }
            const shouldLog = isSiteUrl && vandra_get_cookie("vandra_consent_given") === "true" && isRelevantTargetPath;
            return shouldLog;
        }

        
    
        // Intercept XMLHttpRequest
        const originalXHROpen = XMLHttpRequest.prototype.open;
        const originalXHRSend = XMLHttpRequest.prototype.send;
    
        XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
            this._url = url; // Save the URL for later use
            this._method = method; // Save the HTTP method
            return originalXHROpen.apply(this, arguments); // Call the original open method
        };
    
        XMLHttpRequest.prototype.send = function (body) {
            if (shouldLogRequest(this._url, body)) {
                // Add a listener to capture the response
                this.addEventListener('readystatechange', function () {
                    if (this.readyState === 4) { // Request is complete
                        const cartEventType = getCartEventType(this._url);
                        handleCartEvent(cartEventType)
                    }
                });
            } else if (isDiscountSettingUrl(this._url)) {
                const discount_code = getDiscountCodeFromUrl(this._url);
                if (discount_code) {
                    captureDiscountCodeApplication(discount_code, "apply_url");
                }
            }
    
            return originalXHRSend.apply(this, arguments); // Call the original send method
        };
    
        // Intercept Fetch API
        const originalFetch = window.fetch;
    
        window.fetch = async function (input, init) {
            const url = typeof input === 'string' ? input : input.url; // Determine the request URL
            const body = init ? init.body : {}; // Determine the request body
            if (shouldLogRequest(url, body)) {
                const cartEventType = getCartEventType(url);
                // Call the original fetch and handle the response
                const response = await originalFetch(input, init);
                handleCartEvent(cartEventType)
                return response; // Return the original response
            } else if (isDiscountSettingUrl(url)) {
                const discount_code = getDiscountCodeFromUrl(url);
                if (discount_code) {
                    captureDiscountCodeApplication(discount_code, "apply_url");
                }
            }
            return originalFetch(input, init); // Call the original fetch without logging
        };
    
        // Intercept Axios requests and responses
        if (window.axios) {
            
            // Response interceptor
            window.axios.interceptors.response.use(
                function (response) {
                    const url = response.config.url; // Use the target URL as-is
                    const body = response.config.data; // Use the request body as-is
                    if (shouldLogRequest(url, body)) {
                        const cartEventType = getCartEventType(config.url);
                        handleCartEvent(cartEventType)
                    } else if (isDiscountSettingUrl(url)) {
                        const discount_code = getDiscountCodeFromUrl(url);
                        if (discount_code) {
                            captureDiscountCodeApplication(discount_code, "apply_url");
                        }
                    }
                    return response;
                },
                function (error) {
                    return Promise.reject(error);
                }
            );
        } 
    })();
    //end of listener

    async function vandra_mount_navigational_nudge(backend_page_view_uuid) {
        //suppress function
        const suppress_navigational_nudge = (suppression_reason) => {
            fetch(`${vandra_api_base_url}/log/suppression`, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    intervention_type: INTERVENTION_TYPE_NAMES.NAVIGATIONAL_NUDGE,
                    session_cookie: vandra_session_cookie,
                    page_view_id: backend_page_view_uuid,
                    // Deconstruct dwell time values
                    ...get_dwell_time(),
                    metadata: JSON.stringify({ suppression_reason })
                })
            });
            vandra_set_cookie("vandra_navigational_nudge", true, 0.04);
        }
        try {
            if (location.pathname !== '/') return; // show on homepage only
            const navigational_nudge_intervention_happened = vandra_get_cookie("vandra_navigational_nudge");
            if (!navigational_nudge_intervention_happened) { // show only first-time visitors
                const response = await fetch(`${vandra_api_base_url}/base_nudge/create`, {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams({
                        session_cookie: vandra_session_cookie,
                        intervention_type: INTERVENTION_TYPE_NAMES.NAVIGATIONAL_NUDGE,
                        metadata : JSON.stringify({})
                    })
                });
                const data = await response.json();
                if (!response.ok) {
                    setSentryContext('failed to create navigational nudge intervention', {data: data});
                    vandra_handle_error(new Error(`Error with fetch request for navigational nudge`), stopExecution = false);
                }
                //get holdout from payload
                let { holdout } = data;
                const holdout_override = vandra_url.searchParams.get("vandra_holdout_override");
                if (holdout_override === "true" || holdout_override === "false") {
                    holdout = holdout_override == "true" ? true : false;
                }
                vandra_set_cookie("vandra_navigational_nudge_holdout", holdout, 0.04);
                tryMountPopup(
                    vandraComponents.NavigationNudge, 
                    {
                        target: document.body,
                        props: {
                            pageViewId: backend_page_view_uuid
                        }
                    },
                    () => {
                        suppress_navigational_nudge("Skipped because of collision");
                    },
                    holdout, () => {
                        suppress_navigational_nudge("Holdout");
                    }
                );
                vandra_set_cookie("vandra_navigational_nudge", true, 0.04);
                fetch(`${vandra_api_base_url}/base_nudge/holdout`, {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams({
                        session_cookie: vandra_session_cookie,
                        intervention_type: INTERVENTION_TYPE_NAMES.NAVIGATIONAL_NUDGE,
                        holdout: holdout
                    })
                });
                if (holdout === true) {
                    return;
                }
            }
        } catch(ErrorEvent) {
            vandra_handle_error(ErrorEvent, stopExecution = false);
        }
    };
    
    async function vandra_update_savings(savings) {
        try {
            if (savings === null) {
                const cart_response = await fetch("/cart.json");
                const { total_discount } = await cart_response.json();
                savings = total_discount / 100;
            }
            if ((vandra_ui_version_name === "RENUDGE" || vandra_ui_version_name === "RENUDGE_WITH_EXPIRES") && savings > 0 && savings !== vandra_savings_state) {
                //avoid unnecessary api call if renudge is already done
                if (vandra_renudge !== "done") {
                    const get_renudge_status_response = await fetch(`${vandra_api_base_url}/get_renudge_status?` + new URLSearchParams({
                        session_cookie: vandra_session_cookie
                    }), {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        signal: AbortSignal.timeout(10000)
                    });
                    const response_text = await get_renudge_status_response.text();
                    const response_json = JSON.parse(response_text);
                    const { vandra_renudge_status } = response_json;
                    //do not show post apply if post dismiss renudge was done
                    if (vandra_renudge_status==="postdismiss_done" && vandra_renudge === "postapply_ready") {
                        vandra_renudge="done";
                    }
                    //appy renudge as expected
                    if(vandra_renudge === "postapply_ready") {
                        vandra_renudge = "done";
                        vandra_hide_minimized();
                        fetch(`${vandra_api_base_url}/record_popup_renudge`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            body: new URLSearchParams({
                                session_cookie: vandra_session_cookie,
                                type: vandra_ui_version_name === "RENUDGE" ? "postapply_cartadd" : "postapply_expires",
                                page_view_id: vandra_backend_page_view_uuid,
                                ...get_dwell_time()
                            })
                        });
                    } else if (vandra_renudge === "postdismiss_ready") {
                        vandra_renudge = "done";
                        vandra_hide_minimized();
                        fetch(`${vandra_api_base_url}/record_popup_renudge`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            body: new URLSearchParams({
                                session_cookie: vandra_session_cookie,
                                type: vandra_ui_version_name === "RENUDGE" ? "postdismiss_cartadd" : "postdismiss_expires",
                                page_view_id: vandra_backend_page_view_uuid,
                                ...get_dwell_time()
                            })
                        });
                    }
                
                } 
            }
            vandra_savings_state = savings;
            vandra_savings_total = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }).format(savings);
            const savings_total_elements = document.getElementsByClassName("vandra_savings_total");
            for (const savings_total_element of savings_total_elements) {
                savings_total_element.innerHTML = vandra_savings_total;
            }
            
            if (vandra_discount_applied && !vandra_is_loading && !vandra_copy_clicked) {
                const vandra_popup_content_button_apply_container_elements = document.getElementsByClassName("vandra_popup_content_button_apply_container");
                const vandra_popup_content_button_applied_text_elements = document.getElementsByClassName("vandra_popup_content_button_applied_container");
                if (vandra_popup_content_button_apply_container_elements.length > 0) {
                    for (const vandra_popup_content_button_apply_container of vandra_popup_content_button_apply_container_elements) {
                        vandra_popup_content_button_apply_container.innerHTML = (vandra_savings_total === "$-.--" || vandra_savings_total === "$0.00") ? vandra_popup_content_button_savings_continue_text_default : vandra_popup_content_button_savings_text_default;
                    }
                }
                if (vandra_popup_content_button_applied_text_elements.length > 0) {
                    for (const vandra_popup_content_button_applied_text of vandra_popup_content_button_applied_text_elements) {
                        vandra_popup_content_button_applied_text.innerHTML = (vandra_savings_total === "$-.--" || vandra_savings_total === "$0.00") ? vandra_popup_content_button_savings_continue_text_default : vandra_popup_content_button_savings_text_default;
                    }
                }
            }
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent, stopExecution = false);
        }
    };

    function vandra_hide_minimized(type) {
        try {
            /* Hide minimized and show popup */
            const minimized_container = document.getElementById("vandra_minimized_container_default");
            const vandra_show_popup = () => {
                vandra_generate_widget(WIDGET_TYPES.POPUP);
                minimized_container.removeEventListener("animationend", vandra_show_popup);
            }
            minimized_container.classList.remove(...[...minimized_container.classList].filter((class_name) => class_name !== "vandra_font"));
            if(type !== "COUNTDOWN") {
                minimized_container.addEventListener("animationend", vandra_show_popup, { passive: true });
            }
            minimized_container.classList.add(vandra_widget_slide_out_animation_class);

            /* Record popup reopen to Vandra server */
            fetch(`${vandra_api_base_url}/record_popup_reopened`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                    session_cookie: vandra_session_cookie,
                    page_view_id: vandra_backend_page_view_uuid,
                    ...get_dwell_time()
                })
            });
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    };

    function vandra_redirect_to_checkout(e) {
        try {
            e.preventDefault();
            window.location.href = "/checkout";
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    };

    // screen
    var vandra_screen_size = '';
    var vandra_screen_width = '';
    var vandra_screen_height = '';
    if (screen.width) {
        vandra_screen_width = (screen.width) ? screen.width : '';
        vandra_screen_height = (screen.height) ? screen.height : '';
        vandra_screen_size += '' + vandra_screen_width + " x " + vandra_screen_height;
    }

    //browser
    var nAgt = navigator.userAgent;
    var nAgtData = navigator?.userAgentData;
    var vandra_browser = navigator.userAgent;
    var nVer = navigator?.appVersion;
    var vandra_browser_version = nVer ? '' + parseFloat(nVer) : "";
    var nameOffset, verOffset, ix;

    // Opera
    if ((verOffset = nAgt.indexOf('Opera')) != -1) {
        vandra_browser = 'Opera';
        vandra_browser_version = nAgt.substring(verOffset + 6);
        if ((verOffset = nAgt.indexOf('Version')) != -1) {
            vandra_browser_version = nAgt.substring(verOffset + 8);
        }
    }
    // MSIE
    else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
        vandra_browser = 'Microsoft Internet Explorer';
        vandra_browser_version = nAgt.substring(verOffset + 5);
    }

    //IE 11 no longer identifies itself as MS IE, so trap it
    //http://stackoverflow.com/questions/17907445/how-to-detect-ie11
    else if ((vandra_browser == 'Netscape') && (nAgt.indexOf('Trident/') != -1)) {
        vandra_browser = 'Microsoft Internet Explorer';
        vandra_browser_version = nAgt.substring(verOffset + 5);
        if ((verOffset = nAgt.indexOf('rv:')) != -1) {
            vandra_browser_version = nAgt.substring(verOffset + 3);
        }
    }

    // Edge
    else if ((verOffset = nAgt.indexOf('Edg')) != -1) {
        vandra_browser = "Microsoft Edge"
        vandra_browser_version = nAgt.substring(verOffset + 4);
    }

    // Chrome
    else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
        vandra_browser = 'Chrome';
        vandra_browser_version = nAgt.substring(verOffset + 7);
    }
    // Safari
    else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
        vandra_browser = 'Safari';
        vandra_browser_version = nAgt.substring(verOffset + 7);
        if ((verOffset = nAgt.indexOf('Version')) != -1) {
            vandra_browser_version = nAgt.substring(verOffset + 8);
        }

        // Chrome on iPad identifies itself as Safari. Actual results do not match what Google claims
        //  at: https://developers.google.com/chrome/mobile/docs/user-agent?hl=ja
        //  No mention of chrome in the user agent string. However it does mention CriOS, which presumably
        //  can be keyed on to detect it.
        if (nAgt.indexOf('CriOS') != -1) {
            //Chrome on iPad spoofing Safari...correct it.
            vandra_browser = 'Chrome';
            //Don't believe there is a way to grab the accurate version number, so leaving that for now.
        }
    }
    // Firefox
    else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
        vandra_browser = 'Firefox';
        vandra_browser_version = nAgt.substring(verOffset + 8);
    }
    // Other browsers
    else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
        vandra_browser = nAgt.substring(nameOffset, verOffset);
        vandra_browser_version = nAgt.substring(verOffset + 1);
        if (vandra_browser.toLowerCase() == vandra_browser.toUpperCase()) {
            vandra_browser = navigator?.appName;
        }
    }
    
    // trim the vandra_browser_version string
    if ((ix = vandra_browser_version.indexOf(';')) != -1) vandra_browser_version = vandra_browser_version.substring(0, ix);
    if ((ix = vandra_browser_version.indexOf(' ')) != -1) vandra_browser_version = vandra_browser_version.substring(0, ix);
    if ((ix = vandra_browser_version.indexOf(')')) != -1) vandra_browser_version = vandra_browser_version.substring(0, ix);

    if (isNaN(parseInt('' + vandra_browser_version, 10))) {
        vandra_browser_version = nVer ? '' + parseFloat(nVer) : "";
    }

    // Check if the agent appears to be a bot and don't send traffic to the server if so
    // As of 4/18/23 the facebook.com browser agents accounted for 1M sessions with 0 conversions
    var vandra_skip_because_bot = false;
    if (vandra_browser.includes("facebook.com")) {
        vandra_skip_because_bot = true;
    }

    // mobile version
    var vandra_mobile = nVer ? /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer) : nAgtData?.mobile;

    // system
    var vandra_os = "Unknown";
    var vandra_client_strings = [
        { s: 'Windows 3.11', r: /Win16/ },
        { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
        { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
        { s: 'Windows 98', r: /(Windows 98|Win98)/ },
        { s: 'Windows CE', r: /Windows CE/ },
        { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
        { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
        { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
        { s: 'Windows Vista', r: /Windows NT 6.0/ },
        { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
        { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
        { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
        { s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
        { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
        { s: 'Windows ME', r: /Windows ME/ },
        { s: 'Android', r: /Android/ },
        { s: 'Open BSD', r: /OpenBSD/ },
        { s: 'Sun OS', r: /SunOS/ },
        { s: 'Linux', r: /(Linux|X11)/ },
        { s: 'iOS', r: /(iPhone|iPad|iPod)/ },
        { s: 'Mac OS X', r: /Mac OS X/ },
        { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
        { s: 'QNX', r: /QNX/ },
        { s: 'UNIX', r: /UNIX/ },
        { s: 'BeOS', r: /BeOS/ },
        { s: 'OS/2', r: /OS\/2/ },
        { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
    ];
    for (var id in vandra_client_strings) {
        var cs = vandra_client_strings[id];
        if (typeof cs.r !== "undefined" && cs.r.test(nAgt)) {
            vandra_os = cs.s;
            break;
        }
    }
    
    var vandra_os_version = "Unknown";
    
    if (/Windows/.test(vandra_os)) {
        vandra_os_version = /Windows (.*)/.exec(vandra_os)?.[1];
        vandra_os = 'Windows';
    }

    // Differentiate Windows 10 and 11 if we can
    if (vandra_os == 'Windows' && vandra_os_version == '10') {
        if (navigator.hasOwnProperty("userAgentData")) {
            navigator.userAgentData.getHighEntropyValues(["platformVersion"]).then(ua => {
                if (navigator.userAgentData.platform === "Windows") {
                    const majorPlatformVersion = parseInt(ua.platformVersion.split('.')[0]);
                    if (majorPlatformVersion >= 13) {
                        vandra_os_version = '11';
                    }
                    else if (majorPlatformVersion > 0) {
                        vandra_os_version = '10';
                    }
                }
            });
        }
    }
    
    if (vandra_os == 'Mac OS X') {
        vandra_os_version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
    } else if (vandra_os == 'Android') {
        vandra_os_version = /Android ([\.\_\d]+)/.exec(nAgt)[1];
    } else if (vandra_os == 'iOS') {
        if(nVer) {
            vandra_os_version = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
            vandra_os_version = vandra_os_version?.[1] && vandra_os_version?.[2] && vandra_os_version?.[3] ? vandra_os_version[1] + '.' + vandra_os_version[2] + '.' + (vandra_os_version[3] | 0) : vandra_os_version;
        }
    }

    // GET UTM URL parameters if they exist

    var vandra_current_url = new URL(window.location.href.toLowerCase());
    
    var vandra_utm_campaign = vandra_current_url.searchParams.get("utm_campaign") || "";
    var vandra_utm_content = vandra_current_url.searchParams.get("utm_content") || "";
    var vandra_utm_medium = vandra_current_url.searchParams.get("utm_medium") || "";
    var vandra_utm_source = vandra_current_url.searchParams.get("utm_source") || "";
    var vandra_utm_term = vandra_current_url.searchParams.get("utm_term") || "";

    // Ad tags

    var vandra_ad_bing = "false";
    var vandra_ad_doubleclick = "false";
    var vandra_ad_facebook = "false";
    var vandra_ad_google = "false";
    var vandra_ad_tiktok = "false";

    if (vandra_current_url.searchParams.get("msclkid") != null) {
        vandra_ad_bing = "true";
    }
    if (vandra_current_url.searchParams.get("dclid") != null) {
        vandra_ad_doubleclick = "true";
    }
    if (vandra_current_url.searchParams.get("fbclid") != null) {
        vandra_ad_facebook = "true";
    }
    if (vandra_current_url.searchParams.get("gclid") != null || vandra_current_url.searchParams.get("gclsrc") != null || vandra_current_url.searchParams.get("wbraid") != null || vandra_current_url.searchParams.get("gbraid") != null) {
        vandra_ad_google = "true";
    }
    if (vandra_current_url.searchParams.get("ttclid") != null) {
        vandra_ad_tiktok = "true";
    }

    // Get/set our session cookie and our customer cookie

    function vandra_set_cookie(name, value, days) {
        try {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = name + "=" + value + "; " + expires + "; path=/";
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    }

    function vandra_get_cookie(name) {
        try {
            let name_eq = name + "=";
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(name_eq) == 0) return c.substring(name_eq.length, c.length);
            }
            return null;
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    }

    function vandra_delete_cookie(cookieName) {
        document.cookie = cookieName +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    function vandra_make_id() {
        try {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for (let i = 0; i < 20; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    }

    // Meta pixel
    function vandra_fire_meta_pixel(eventName, data) {
        if (window.fbq !== undefined) {
            try {
                // https://developers.facebook.com/docs/meta-pixel/implementation/conversion-tracking/#custom-events
                // You can track custom events by calling the Pixel's fbq('trackCustom') function,
                window.fbq('trackCustom', eventName, data)
            } catch (ErrorEvent) {
                vandra_handle_error(ErrorEvent, stopExecution=false)
            }
        }
    }

    var vandra_page_view_id = vandra_make_id();
    
    // Create the 1 hour session cookie and the 1 year customer cookie if they don't exist
    var vandra_session_cookie = vandra_get_cookie("vandra_session_cookie")
    if (!vandra_session_cookie) {
        vandra_session_cookie = vandra_make_id();
        vandra_set_cookie("vandra_session_cookie", vandra_session_cookie, 0.04);
        let actionOccurredCookie = vandra_get_cookie("vandra_action_occurred");
        if (actionOccurredCookie) {
            vandra_delete_cookie("vandra_action_occurred");
        }
        const messaging = vandra_get_cookie("vandra_messaging")
        if (messaging) {
            vandra_delete_cookie("vandra_messaging")
        }
    }

    var vandra_customer_cookie = vandra_get_cookie("vandra_customer_cookie")
    if (!vandra_customer_cookie) {
        vandra_customer_cookie = vandra_make_id();
        vandra_set_cookie("vandra_customer_cookie", vandra_customer_cookie, 365);
    }
    
    // Create the no_vandra cookie if present in URL
    var vandra_no_vandra_cookie = vandra_get_cookie("vandra_no_vandra_cookie");
    if (!vandra_no_vandra_cookie && vandra_current_url.searchParams.get("no_vandra") != null) {
        vandra_no_vandra_cookie = "true";
        vandra_set_cookie("vandra_no_vandra_cookie", vandra_no_vandra_cookie, 0.04);
    }

    function actionCookieCheck() {
        //action occurred check on page focus for action show experiments
        const actionOccurred = vandra_get_cookie("vandra_action_occurred")
        // vandra_discount_code !== undefined is used to prevent widget from firing before it gets set
        if (actionOccurred) {
            setSentryContext('page_focus_context', {
                info: {
                    discount: vandra_discount_code,
                    session_cookie: vandra_session_cookie,
                    ui_version: vandra_ui_version_name,
                    vandra_page_view_id: vandra_page_view_id
                }      
            })
            vandra_generate_widget(WIDGET_TYPES.POPUP);
        }
    }

    async function setMessageExperiment(messageTextMap) {
        if (messaging_type) {
            vandra_set_cookie("vandra_messaging", JSON.stringify({
                'messaging_type': messaging_type,
                'messaging_state': messaging_state
            }), 0.04)
        }
        //1. check that no parameters already exist using global messaging_type
        if (!messaging_type) {
            const onProductPage = window.location.pathname.includes("/products"); 
            // 2. if this is the first time assign nudge parameters
            try {
                if (onProductPage) {
                    let isBestseller = false;
                    let productId = null;
                    try {
                        let productHandle = window.location.pathname.split("/").at(-1)
                        let productResponse = await fetch(`/products/${productHandle}.json`);
                        let productJson = await productResponse.json();
                        productId = productJson.product?.id
                    } catch (error) {}
                    if (productId) {
                        const response = await fetch(`${vandra_api_base_url}/products/is_bestseller?product_id=${productId}&shopify_url=${encodeURIComponent(vandra_shopify_url)}`);
                        const data = await response.json();
                        if (!response.ok) {
                            setSentryContext('is_best_seller', {data: data})
                            vandra_handle_error(new Error(`Error with fetch request for bestsellers`));
                        }
                        isBestseller = data.is_bestseller;
                    }
                    let choices = []
                    if (isBestseller) {
                        choices = ["control", "urgent", "exclusive", "bestseller", "catchall-bestseller"]
                    } else {
                        choices = ["control", "urgent", "exclusive", "catchall-bestseller"]
                    }
                    const randomIndex = Math.floor(Math.random() * choices.length);
                    messaging_type = choices[randomIndex];
                    vandra_popup_content_header_apply_text_default = messageTextMap[messaging_type];
                    messaging_state = "contextual_product_page"
                } else {
                    const choices = ["control", "urgent", "exclusive"];
                    const randomIndex = Math.floor(Math.random() * choices.length);
                    messaging_type = choices[randomIndex];
                    vandra_popup_content_header_apply_text_default = messageTextMap[messaging_type];
                    messaging_state = "contextual_non_product_page"
                }
            } catch (error) { 
                captureSentryException(`Error in setMessageExperiment ${error}`)
                vandra_handle_error(error);
            }
            vandra_set_cookie("vandra_messaging", JSON.stringify({
                'messaging_type': messaging_type,
                'messaging_state': messaging_state
            }), 0.04)
            vandra_update_nudge_parameters(messaging_state, "", messaging_type)
        } 
    }

    // Send the data to the server
    var vandra_xhr_page_view = new XMLHttpRequest();
    vandra_xhr_page_view.onerror = vandra_handle_http_error;
    vandra_xhr_page_view.timeout = 10000; 
    vandra_xhr_page_view.ontimeout = function () { vandra_handle_error(new Error("Time out.")); }
    vandra_xhr_page_view.open("POST", vandra_api_base_url + "/record_page_view", true);
    vandra_xhr_page_view.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    var vandra_exclude_urls = [];

    async function getStoreInterventionParameters(interventionTypeName) {
        const res = await fetch(`${vandra_api_base_url}/base_nudge/parameters?session_cookie=${vandra_session_cookie}&intervention_type_name=${interventionTypeName}`);
        const data = (await res.json()).data
        return data["parameters"];
    }

    /**
     * Attempts to mount a popup component while preventing concurrent mounts.
     *
     * This function uses a cookie-based locking mechanism to ensure that only one popup is mounted
     * at any given time. The lock is stored in a cookie named "vandra_mount_lock_<session_cookie>".
     *
     * @param {Object} component - The popup component to be mounted (e.g., a UI widget).
     * @param {Object} options - An options object with configuration parameters (such as target element or props).
     * @param {Function} skipCallback - A callback function to handle scenarios when a mount collision is detected.
     * @param {Function} holdoutCallback - A callback function to handle holdout suppression.
     */
    function tryMountPopup(component, options, skipCallback, holdout, holdoutCallback) {
        try {
            const key = `vandra_mount_lock_${vandra_session_cookie}`;
            
            // Check if a mount lock cookie already exists
            if (vandra_get_cookie(key) === "true") {
                if (skipCallback) skipCallback();
                return;
            }

            
            // If we have a holdout condition, suppress here - after collision check but before showing
            if (holdout === true) {
                if (holdoutCallback) holdoutCallback();
                return;
            }

            // Remove all previous mount lock cookies
            document.cookie.split(';').forEach(cookie => {
                const [name] = cookie.trim().split('=');
                if (name.startsWith('vandra_mount_lock_')) {
                    vandra_delete_cookie(name);
                }
            });

            // Set the lock cookie with an expiration of 0.04 days (roughly 1 hour) to match the session lifetime
            vandra_set_cookie(key, "true", 0.04);
            
            // If we get here, show the popup
            vandraComponents.mount(component, options);
        } catch (error) {
            vandra_handle_error(error, false);
        }
    }

    async function getProductAndSelectedVariant() {
        const pathSegments = window.location.pathname.split("/");
        const productIndex = pathSegments.indexOf("products");
        if (productIndex !== -1 && productIndex + 1 < pathSegments.length) {
            const productHandle = pathSegments[productIndex + 1];
            const productResponse = await fetch(`/products/${productHandle}.json`);
            const productJson = await productResponse.json();
            const product = productJson.product;
            
            // Check for variant in URL query parameters
            const urlParams = new URLSearchParams(window.location.search);
            const urlVariantId = urlParams.get('variant');
            
            // If URL has variant ID, use it; otherwise use first variant
            const variantId = urlVariantId || product.variants[0]?.id || null;
            
            return { productHandle, productId: product.id, variantId };
        }
        return null;
    }

    // Add new function to create social media intervention
    async function createSocialMediaContentIntervention(delay) {
        try {
            const response = await fetch(`${vandra_api_base_url}/base_nudge/create`, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    session_cookie: vandra_session_cookie,
                    intervention_type: INTERVENTION_TYPE_NAMES.SOCIAL_MEDIA_CONTENT,
                    metadata: JSON.stringify({ delay })
                })
            });
            const data = await response.json();
            if (!response.ok) {
                setSentryContext('failed to create social media content intervention', {data: data});
                throw new Error(`Error with fetch request for social media content: ${data.message || 'Unknown error'}`);
            }
            // Get holdout from payload and apply override
            let { holdout } = data;
            const holdout_override = vandra_url.searchParams.get("vandra_social_media_holdout_override");
            if (holdout_override === "true" || holdout_override === "false") {
                holdout = holdout_override === "true" ? true : false;
            }
            vandra_set_cookie("vandra_social_media_holdout", holdout, 0.04);
            return data;
        } catch (error) {
            vandra_handle_error(error);
            throw error; // Re-throw to allow proper promise rejection handling
        }
    }

    async function recordMissingAsset(sessionCookie, productData) {
        await fetch(`${vandra_api_base_url}/base_nudge/record/missing_asset`, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                session_cookie: sessionCookie,
                intervention_type: INTERVENTION_TYPE_NAMES.SOCIAL_MEDIA_CONTENT,
                page_view_id: vandra_backend_page_view_uuid,
                dwell_time: (Date.now() - vandra_start_time) / 1000,
                metadata: JSON.stringify({ product: productData })
            })
        });
    }

    function getAssetWithFallback(assetData, targetAssetKey) {
        // Prioritize assets matching the target key if available, otherwise use fallback
        const targetAssets = assetData.filter(asset => asset.asset_key === targetAssetKey);
        
        if (targetAssets.length > 0) {
            return {selectedAsset: targetAssets[Math.floor(Math.random() * targetAssets.length)], isFallback: false};
        }
        
        const fallbackAssets = assetData.filter(asset => asset.asset_key === 'fallback');
        if (fallbackAssets.length > 0) {
            return {selectedAsset: fallbackAssets[Math.floor(Math.random() * fallbackAssets.length)], isFallback: true};
        }
        
        return null;
    }

    function getLocalStorageItemForCurrentSessionKey(prefix) {
        return localStorage.getItem(`${prefix}_${vandra_session_cookie}`);
    }

    function setLocalStorageItemForCurrentSessionKey(prefix, value) {
        // Remove all local storage with key starting with prefix except for the current session
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith(prefix) && key !== `${prefix}_${vandra_session_cookie}`) {
                localStorage.removeItem(key);
            }
        });        
        localStorage.setItem(`${prefix}_${vandra_session_cookie}`, value);
    }

    function getSocialMediaContentDelay(vandra_url, storeInterventionParameters) {
        const localStorageDelay = getLocalStorageItemForCurrentSessionKey("vandra_social_media_delay");
        if (localStorageDelay) {
            return parseInt(localStorageDelay);
        }

        let minDwell = storeInterventionParameters.min_dwell_time ? parseInt(storeInterventionParameters.min_dwell_time) : 240;
        let interval = storeInterventionParameters.interval ? parseInt(storeInterventionParameters.interval) : 60;
        let maxDwell = storeInterventionParameters.max_dwell_time ? parseInt(storeInterventionParameters.max_dwell_time) : 360;
        
        const minDwellOverride = vandra_url.searchParams.get("vandra_min_dwell_override");
        if (minDwellOverride) {
            minDwell = parseInt(minDwellOverride);
        }

        const intervalOverride = vandra_url.searchParams.get("vandra_interval_override");
        if (intervalOverride) {
            interval = parseInt(intervalOverride);
        }

        const maxDwellOverride = vandra_url.searchParams.get("vandra_max_dwell_override");
        if (maxDwellOverride) {
            maxDwell = parseInt(maxDwellOverride);
        }
        

        // Build an array of timeouts from minDwell to maxDwell with the specified interval
        const timeouts = [];
        for (let time = minDwell; time <= maxDwell; time += interval) {
            timeouts.push(time);
        }

        const randomIndex = Math.floor(Math.random() * timeouts.length);
        const delayInSeconds = timeouts[randomIndex];

        setLocalStorageItemForCurrentSessionKey("vandra_social_media_delay", delayInSeconds);

        return delayInSeconds;
    }

    async function checkIfShouldShowSocialMediaContent(vandra_backend_page_view_uuid) {
        try {
            const productData = await getProductAndSelectedVariant();

            if (vandra_get_cookie("vandra_social_media_shown") === "true" || 
                !productData) {
                return;
            }

            const { productId, variantId } = productData;

            const storeInterventionParameters = await getStoreInterventionParameters(INTERVENTION_TYPE_NAMES.SOCIAL_MEDIA_CONTENT);
            const delayInSeconds = getSocialMediaContentDelay(vandra_url, storeInterventionParameters);

            if (vandra_get_cookie("vandra_social_media_created") !== "true") {
                await createSocialMediaContentIntervention(delayInSeconds);
                vandra_set_cookie("vandra_social_media_created", "true", 0.04);
            }
            
            const holdout = vandra_get_cookie("vandra_social_media_holdout") === "true";

            var vandra_session_cookie = vandra_get_cookie("vandra_session_cookie")
            

            let videoUrl = '';
            let videoSelectionMethod = '';

            try {
                const interventionType = INTERVENTION_TYPE_NAMES.SOCIAL_MEDIA_CONTENT;
                const assetType = "product_video";
                const assetKey = `${productId}-${variantId}`;
                const assetKeys = [assetKey, 'fallback'];

                const params = new URLSearchParams();
                params.append("session_cookie", vandra_session_cookie);
                params.append("intervention_type", interventionType);
                params.append("asset_type", assetType);
                assetKeys.forEach(key => params.append("asset_key", key));

                const assetResponse = await fetch(`${vandra_api_base_url}/base_nudge/assets?${params.toString()}`);
                
                if (assetResponse.ok) {
                    const assetData = await assetResponse.json();
                    if (Array.isArray(assetData) && assetData.length > 0) {
                        const result = getAssetWithFallback(assetData, assetKey);
                        
                        if (result.selectedAsset) {
                            videoUrl = result.selectedAsset.asset_url;
                            videoSelectionMethod = result.isFallback ? 'fallback' : 'product-association';
                        } else {
                            recordMissingAsset(vandra_session_cookie, productData);
                            console.info("No matching asset found for social media content, skipping nudge.");
                            return;
                        }
                    } else {
                        recordMissingAsset(vandra_session_cookie, productData);
                        console.info("No asset found for social media content, skipping nudge.");
                        return;
                    }
                } else {
                    recordMissingAsset(vandra_session_cookie, productData);
                    console.info("No asset found for social media content, skipping nudge.");
                    throw new Error('Asset not found');
                }
            } catch (error) {
                console.error('Error fetching social media content:', error);
                return;
            }
            

            setTimeout(async() => {
                // Check again if intervention was already shown in this session
                if (vandra_get_cookie("vandra_social_media_shown") === "true") {
                    return;
                }

                tryMountPopup(
                    vandraComponents.SocialMediaContent, 
                    {
                        target: document.body,
                        props: {
                            videoUrl,
                            videoSelectionMethod,
                            pageViewId: vandra_backend_page_view_uuid,
                            dwellTimeStartCounter: vandra_start_time,
                            productData,
                        },
                    }, 
                    () => suppressSocialMediaContent("Skipped because of collision", productData, true, videoUrl, videoSelectionMethod),
                    holdout,
                    () => suppressSocialMediaContent("Holdout", productData, true, videoUrl, videoSelectionMethod)
                );

                vandra_set_cookie("vandra_social_media_shown", "true", 0.04);
            }, delayInSeconds * 1000);
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent, false);
        }
    }

    async function suppressSocialMediaContent(suppressionReason, productData, isAutomatic, resolvedVideoUrl, videoSelectionMethod) {
        //log and skip
        fetch(`${vandra_api_base_url}/log/suppression`, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                intervention_type: INTERVENTION_TYPE_NAMES.SOCIAL_MEDIA_CONTENT,
                session_cookie: vandra_session_cookie,
                page_view_id: vandra_backend_page_view_uuid,
                // Deconstruct dwell time values
                ...get_dwell_time(),
                metadata: JSON.stringify({ 
                    suppression_reason: suppressionReason, 
                    product: productData,
                    is_automatic: isAutomatic,
                    video_url: resolvedVideoUrl,
                    video_selection_method: videoSelectionMethod,
                 })
            })
        });
    }

    async function showPickUpWhereYouLeftOff(vandra_backend_page_view_uuid, items) {
        const storeInterventionParameters = await getStoreInterventionParameters(INTERVENTION_TYPE_NAMES.PICK_UP_WHERE_YOU_LEFT_OFF);

        const primaryColor = storeInterventionParameters.primary_color || `#${vandra_popup_primary_color}`;
        const backgroundColor = `#${vandra_popup_bg_color}`;
        const itemBackgroundColor = `#${vandra_popup_item_bg_color}`;
        const fontName = storeInterventionParameters.font || vandra_popup_font;
        const headlineLine1 = storeInterventionParameters.headline_line_1;
        const headlineLine2 = storeInterventionParameters.headline_line_2;
        
        // Get holdout from cookie
        const holdout = vandra_get_cookie("vandra_pick_up_where_you_left_off_holdout") === "true";
        
        tryMountPopup(vandraComponents.PickUpWhereYouLeftOff, {
            target: document.body,
            props: {
                primaryColor,
                backgroundColor,
                itemBackgroundColor,
                fontName,
                headlineLine1,
                headlineLine2,
                items,
                pageViewId: vandra_backend_page_view_uuid,
                dwellTimeStartCounter: vandra_start_time
            },
        }, ()=>{
            suppressPickUpWhereYouLeftOff("Skipped because of collision");
        }, 
        holdout, ()=>{
            suppressPickUpWhereYouLeftOff("Holdout");
        });
      }

      async function createPickUpWhereYouLeftOffIntervention() {
        const response = await fetch(`${vandra_api_base_url}/base_nudge/create`, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                session_cookie: vandra_session_cookie,
                intervention_type: INTERVENTION_TYPE_NAMES.PICK_UP_WHERE_YOU_LEFT_OFF,
            })
        });
        const data = await response.json();
        if (!response.ok) {
            setSentryContext('failed to create pick up where you left off intervention', {data: data});
            vandra_handle_error(new Error(`Error with fetch request for pick up where you left off`));
        }
        //get holdout from payload
        let { holdout } = data;
        //put in a cookie
        //override holdout
        const holdout_override = vandra_url.searchParams.get("vandra_holdout_override");
        if (holdout_override === "true" || holdout_override === "false") {
            holdout = holdout_override === "true" ? true : false;
        }
        vandra_set_cookie("vandra_pick_up_where_you_left_off_holdout", holdout, 0.04);
      }

      async function suppressPickUpWhereYouLeftOff(suppressionReason = "Holdout") {
        //log and skip
        fetch(`${vandra_api_base_url}/log/suppression`, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                intervention_type: INTERVENTION_TYPE_NAMES.PICK_UP_WHERE_YOU_LEFT_OFF,
                session_cookie: vandra_session_cookie,
                page_view_id: vandra_backend_page_view_uuid,
                // Deconstruct dwell time values
                ...get_dwell_time(),
                metadata: JSON.stringify({ suppression_reason: suppressionReason })
            })
        });
      }

      async function checkIfShouldShowPickUpWhereYouLeftOff(vandra_backend_page_view_uuid) {
        try {
          const session_cookie = vandra_get_cookie("vandra_session_cookie");
          const customer_cookie = vandra_get_cookie("vandra_customer_cookie");

          fetch(
            `${vandra_api_base_url}/intervention/pick_up_where_you_left_off/get_latest_items?${new URLSearchParams(
              {
                session_cookie: session_cookie,
                customer_cookie: customer_cookie,
              }
            ).toString()}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          )
            .then((response) => response.json())
            .then(async (data) => {
              if (data.items && data.items.length > 0) {

                await createPickUpWhereYouLeftOffIntervention();

                //get holdout from cookie
                const holdout = vandra_get_cookie("vandra_pick_up_where_you_left_off_holdout");
                
                // Process items to get unique products and their variants
                const processedItems = data.items.map(item => {
                  const [handle, queryString] = item.split('?');
                  const variantId = queryString ? 
                    new URLSearchParams(queryString).get('variant') : 
                    null;
                  return { handle, variantId };
                });

                // Get unique product handles
                const uniqueHandles = [...new Set(processedItems.map(item => item.handle))];

                // Fetch product data for unique handles
                const products = await Promise.all(
                  uniqueHandles.map(async (handle) => {
                    const productResponse = await fetch(`/products/${handle}.json`);
                    const productJson = await productResponse.json();
                    return productJson.product;
                  })
                );

                // Map products to items with correct variants
                const items = processedItems.map(({ handle, variantId }) => {
                  const product = products.find(p => p.handle === handle);
                  if (!product) return null;

                  // Find specific variant if variantId is provided
                  let variant = variantId ? 
                    product.variants.find(v => v.id.toString() === variantId) :
                    product.variants[0];

                  // Fallback to first variant if specific one not found
                  if (!variant) {
                    variant = product.variants[0];
                  }

                  // Find variant-specific image or fall back to product image
                  let image = product.image?.src; // Default to main product image
                  if (variant.image_id) {
                    const variantImage = product.images.find(img => img.id === variant.image_id);
                    if (variantImage) {
                      image = variantImage.src;
                    }
                  }

                  return {
                    productId: product.id,
                    variantId: variant.id,
                    url: `/products/${product.handle}?variant=${variant.id}`,
                    image: image,
                    title: (variantId ? `${product.title} (${variant.title})` : product.title),
                    price: variant.price,
                    priceCurrency: variant.price_currency,
                  };
                }).filter(Boolean); // Remove any null items

                showPickUpWhereYouLeftOff(vandra_backend_page_view_uuid, items);
              }
            })
            .catch((error) => {
              vandra_handle_error(error, false);
            });
        } catch (ErrorEvent) {
          vandra_handle_error(ErrorEvent, false);
        }
      }
  
    vandra_xhr_page_view.onreadystatechange = async function () {
        try {
            if (vandra_xhr_page_view.readyState === 4 && vandra_xhr_page_view.status === 200) {            
                let responseJSON = JSON.parse(vandra_xhr_page_view.responseText);
                setSentryContext('record_page_view', {data: responseJSON})
            

                // Stabilize cart and cart token by sending empty POST request (Shopify changes the cart token every few seconds until the user interacts)
                await fetch("/cart/update.js", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({})
                });

                // Update cart attributes with Vandra session ID
                const cart_response = await fetch("/cart.json");
                const { items: cart_items, attributes, total_discount } = await cart_response.json();
                vandra_update_savings(total_discount/100);
                attributes.__vandra_session = responseJSON.session_id;
                const attributes_update = { "attributes": attributes };
                await fetch("/cart/update.js", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(attributes_update)
                });

                // Get (stabilized) cart state from Shopify's AJAX API
                const xhr_cart = new XMLHttpRequest();
                xhr_cart.onerror = vandra_handle_http_error;
                xhr_cart.open("GET", "/cart.json");
                xhr_cart.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr_cart.onload = () => {
                    try {
                        if (xhr_cart && xhr_cart.status === 200) {
                            // Send stabilized cart token to server to update user_session, which links cart and order to user_session
                            const cart = JSON.parse(xhr_cart.response);
                            const cart_token = cart.token ? cart.token.split("?key=")[0] : cart.token; 
                            const xhr_cart_token = new XMLHttpRequest();
                            xhr_cart_token.onerror = vandra_handle_http_error;
                            xhr_cart_token.timeout = 10000; 
                            xhr_cart_token.ontimeout = function () { vandra_handle_error(new Error("Time out.")); }
                            xhr_cart_token.open("POST", vandra_api_base_url + "/record_cart_token", true);
                            xhr_cart_token.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                            let cart_token_string = "session_cookie=" + encodeURIComponent(vandra_session_cookie);
                            cart_token_string += "&cart_token=" + encodeURIComponent(cart_token);
                            vandra_consent_load_checker["cart"] = vandra_check_consent_repeatedly_and_send(xhr=xhr_cart_token, data_string=cart_token_string, interval =100, request_type="cart");
                        }
                    } catch (ErrorEvent) {
                        vandra_handle_error(ErrorEvent);
                    }
                }
                xhr_cart.send();
                
                // Get the list of excluded URLs
                vandra_exclude_urls = responseJSON.exclude_urls !== undefined ? responseJSON.exclude_urls : vandra_exclude_urls;

                // Update the popup customization
                vandra_popup_content_header_apply_text_default = responseJSON.popup_text_header !== undefined ? responseJSON.popup_text_header : vandra_popup_content_header_apply_text_default;
                vandra_popup_content_body_apply_text_default = responseJSON.popup_text_body !== undefined ? responseJSON.popup_text_body : vandra_popup_content_body_apply_text_default;
                vandra_popup_content_button_apply_text_default = responseJSON.popup_text_button !== undefined ? responseJSON.popup_text_button : vandra_popup_content_button_apply_text_default;
                vandra_minimized_content_header_apply_text_default = responseJSON.minimized_text_header !== undefined ? responseJSON.minimized_text_header : vandra_minimized_content_header_apply_text_default;
                vandra_popup_content_body_default_text_auto = window.location.host.includes("proclip") ? responseJSON.popup_text_body : responseJSON.auto_apply_text_body
                vandra_popup_content_image = responseJSON.popup_image_url !== undefined ? responseJSON.popup_image_url : vandra_popup_content_image;
                vandra_popup_font = responseJSON.popup_font !== undefined ? responseJSON.popup_font : vandra_popup_font;
                vandra_popup_primary_color = responseJSON.popup_primary_color !== undefined ? responseJSON.popup_primary_color : vandra_popup_primary_color;
                vandra_popup_bg_color = responseJSON.popup_bg_color !== undefined ? responseJSON.popup_bg_color : vandra_popup_bg_color;
                vandra_backend_page_view_uuid = responseJSON.page_view_uuid;
                new_session = responseJSON.new_session;
                new_customer = responseJSON.new_customer;

                //add logic to check discount_code cookie, if it exists, capture discount code application
                if (vandra_get_cookie("discount_code")) {
                    captureDiscountCodeApplication(vandra_get_cookie("discount_code"),"cookie");
                }

                //get meta ad pixel flag
                use_meta_ad_pixel = responseJSON.use_meta_ad_pixel;

                // Messaging experiment
                vandra_ui_version_name = responseJSON.front_end_ui_name
                if (vandra_ui_version_name === UI_VERSION_NAMES.MESSAGING) {
                    if (responseJSON.messaging_type) {
                        messaging_type = responseJSON.messaging_type;
                        messaging_state = responseJSON.messaging_state;
                        vandra_popup_content_header_apply_text_default = MESSAGE_TEXTS[messaging_type];
                    }
                    vandra_popup_content_body_apply_text_default = MESSAGE_BODY_TEXT;
                }

                // Figure out if we need to run decisioning later
                const original_status = responseJSON.status;
                const do_not_decide_list = ["already_applied", "dismissed", "show"];
                if (!do_not_decide_list.includes(responseJSON.status)) {
                    const time_since_start_of_session = responseJSON.time_since_start_of_session;
                    const model_time_thresholds = responseJSON.model_time_thresholds;
                    for(let model_time_threshold of model_time_thresholds) {
                        model_time_threshold = parseInt(model_time_threshold);
                        if (time_since_start_of_session < model_time_threshold) {
                            setTimeout(async () => {
                                try {
                                    let request_body = "session_cookie=" + encodeURIComponent(vandra_session_cookie);
                                    request_body += "&shopify_url=" + encodeURIComponent(vandra_shopify_url);
                                    request_body += "&page=" + encodeURIComponent(window.location.href);
                                    request_body += "&model_time_threshold=" + encodeURIComponent(model_time_threshold);
                                    if (original_status != "do_not_show") {
                                        request_body += "&show_popup=false";
                                    }
                                    
                                    const get_model_decision_response = await fetch(vandra_api_base_url + "/get_model_decision", {
                                        method: "POST",
                                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                                        body: request_body,
                                        signal: AbortSignal.timeout(15000)
                                    });
                                    if (!get_model_decision_response.ok) {
                                        vandra_handle_error(new Error(`Error getting model decision: ${get_model_decision_response.status}`));
                                    }
                                    const response_text = await get_model_decision_response.text();
                                    const response_json = JSON.parse(response_text);
                                    setSentryContext('get_model_decision', {data: response_json})
                                    // calculate prediction decile 1 (low intent) to 10 (high intent)
                                    if (use_meta_ad_pixel) {
                                        try {
                                            decision = Math.ceil((1- response_json.prediction) * 10)
                                        
                                            vandra_fire_meta_pixel('VandraDecision', {
                                                'customer_cookie': vandra_customer_cookie,
                                                'session_cookie': vandra_session_cookie,
                                                'intent_score': decision,
                                                'status': response_json.status
                                            })
                                        } catch (ErrorEvent) {}
                                    }
                                    
                                    if (original_status == "do_not_show" && response_json.status === "show" && !vandra_model_decision) {
                                        // Messaging experiment contextual messages check
                                        if (vandra_ui_version_name === UI_VERSION_NAMES.MESSAGING) {
                                            await setMessageExperiment(MESSAGE_TEXTS)
                                        }
                                        // check for previous experiences 
                                        vandra_generate_widget(WIDGET_TYPES.POPUP);
                                        vandra_model_decision = true;
                                    }
                                } catch (ErrorEvent) {
                                    vandra_handle_error(ErrorEvent);
                                }
                            }, (model_time_threshold - time_since_start_of_session) * 1000);
                        }
                    }
                }

                // Server gave us permission to display discount
                // OR page is being shown in the merchant's design view
                vandra_discount_code = responseJSON.code;
                vandra_discount_rate = responseJSON.discount_amount;
                vandra_discount_ends_at_time = responseJSON.discount_ends_at_time;

                // Get interventions set for this store
                try {
                    const res = await fetch(`${vandra_api_base_url}/base_nudge/types?session_cookie=${vandra_session_cookie}`)
                    const data = (await res.json()).data
                    store_active_intervention_types = data["intervention_types"];
                    if (store_active_intervention_types.includes(INTERVENTION_TYPE_NAMES.CART_ABANDONMENT_RETURNING) || store_active_intervention_types.includes(INTERVENTION_TYPE_NAMES.CART_ABANDONMENT_IN_SESSION)) {
                        if (!window.location.pathname.includes("/cart") && store_active_intervention_types.includes(INTERVENTION_TYPE_NAMES.CART_ABANDONMENT_RETURNING) && new_session && cart_items.length > 0) {
                            vandra_mount_cart_abandonment({ cart_abandonment_type: CART_ABANDONMENT_TYPES.RETURNING});
                        }
                    }

                    if (window.location.pathname === '/' && store_active_intervention_types.includes(INTERVENTION_TYPE_NAMES.PICK_UP_WHERE_YOU_LEFT_OFF) && new_session && cart_items.length === 0) {
                        checkIfShouldShowPickUpWhereYouLeftOff(vandra_backend_page_view_uuid);
                    }

                    if (window.location.pathname.includes("/products/") && store_active_intervention_types.includes(INTERVENTION_TYPE_NAMES.SOCIAL_MEDIA_CONTENT)) {
                        checkIfShouldShowSocialMediaContent(vandra_backend_page_view_uuid);
                    }

                    if (window.location.pathname === '/' && store_active_intervention_types.includes(INTERVENTION_TYPE_NAMES.NAVIGATIONAL_NUDGE) && new_customer ) {
                        vandra_mount_navigational_nudge(vandra_backend_page_view_uuid);
                    }
                } catch (err) {
                    vandra_handle_error(err)
                }
                
                if (responseJSON.status == "show") {
                    if (typeof responseJSON.code !== "undefined") {
                        if (vandra_ui_version_name === UI_VERSION_NAMES.MESSAGING) {
                            const messaging = vandra_get_cookie("vandra_messaging")
                            if (!messaging) {
                                await setMessageExperiment(MESSAGE_TEXTS)
                            } else if (messaging) {
                                const data = JSON.parse(messaging)
                                messaging_type = data.messaging_type
                                vandra_popup_content_header_apply_text_default = MESSAGE_TEXTS[messaging_type];
                            }
                        }
                        vandra_generate_widget(WIDGET_TYPES.POPUP);
                    } else {
                        vandra_discount_code = "test-code";
                        vandra_discount_rate = "20";
                        vandra_generate_widget(WIDGET_TYPES.POPUP);
                    }
                } else if (responseJSON.status === "return") {
                    vandra_generate_widget(WIDGET_TYPES.RETURN);
                } else if (responseJSON.status === "already_applied" || responseJSON.status === "dismissed") {
                    if (!responseJSON.hide_minimized_popup) {
                        vandra_generate_widget(WIDGET_TYPES.MINIMIZED);
                    }
                }

                // Check URL param to view UI versions in testing mode
                // Ensure UI experience is not triggered if discount is already applied or dismissed
                if ((vandra_ui_version_test || vandra_ui_version_time) && !(responseJSON.status === "already_applied" || responseJSON.status === "dismissed")) {
                    if(vandra_ui_version_time && !isNaN(vandra_ui_version_time)) {
                        if(!vandra_ui_version_test) {
                            vandra_ui_version_test = "DEFAULT_RIGHT";
                        }
                        const milliseconds = parseInt(vandra_ui_version_time) * 1000;
                        setTimeout(() => {
                            vandra_generate_widget(WIDGET_TYPES.POPUP);
                        }, milliseconds);
                    } else {
                        vandra_generate_widget(WIDGET_TYPES.POPUP);
                    }
                }

                // Code for the user to manually display the popup for testing purposes ///
                function vandra_key_up_listener(e) {
                    if (e.ctrlKey && e.key === ']') {
                        const vandra_url = new URL(
                            window.location.href
                        );
                        let vandra_ui_version_test = vandra_url.searchParams.get("vandra_test");
                        let vandra_ui_version_time = vandra_url.searchParams.get("vandra_time");
            
                        if ((vandra_ui_version_test || vandra_ui_version_time) && !(responseJSON.status === "already_applied" || responseJSON.status === "dismissed")) {
                            if(vandra_ui_version_time && !isNaN(vandra_ui_version_time)) {
                                if(!vandra_ui_version_test) {
                                    vandra_ui_version_test = "DEFAULT_RIGHT";
                                }
                                const milliseconds = parseInt(vandra_ui_version_time) * 1000;
                                setTimeout(() => {
                                    vandra_keyup_triggered = true;
                                    vandra_generate_widget(WIDGET_TYPES.POPUP);
                                }, milliseconds);
                            } else {
                                vandra_generate_widget(WIDGET_TYPES.POPUP);
                            }
                        } else {
                            vandra_generate_widget(WIDGET_TYPES.POPUP);
                        }
                    }
                }

                document.addEventListener('keyup', vandra_key_up_listener, false);

                // remove any previous listener and add new one
                window.removeEventListener("focus", actionCookieCheck);
                window.addEventListener("focus", actionCookieCheck);
            }
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    };

    var vandra_shopify_url = "";
    if (typeof Shopify !== "undefined" && Shopify.hasOwnProperty("shop")) {
        vandra_shopify_url = Shopify?.shop;
    } else {
        vandra_shopify_url = window.location.hostname;
    }

    function vandra_to_iso_string(date) {
        try {
            var tzo = -date.getTimezoneOffset(),
                dif = tzo >= 0 ? '+' : '-',
                pad = function (num) {
                    return (num < 10 ? '0' : '') + num;
                };

            return date.getFullYear() +
                '-' + pad(date.getMonth() + 1) +
                '-' + pad(date.getDate()) +
                'T' + pad(date.getHours()) +
                ':' + pad(date.getMinutes()) +
                ':' + pad(date.getSeconds()) +
                dif + pad(Math.floor(Math.abs(tzo) / 60)) +
                ':' + pad(Math.abs(tzo) % 60);
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    }

    var vandra_current_datetime = vandra_to_iso_string(new Date());
    var vandra_logged_in = false;

    if (typeof ShopifyAnalytics !== "undefined" && ShopifyAnalytics !== null && ShopifyAnalytics?.meta?.page?.customerId) {
        vandra_logged_in = true;
    }
    
    var vandra_page_view_param_string = "screen_width=" + encodeURIComponent(vandra_screen_width);
    vandra_page_view_param_string += "&screen_height=" + encodeURIComponent(vandra_screen_height);
    vandra_page_view_param_string += "&browser=" + encodeURIComponent(vandra_browser);
    vandra_page_view_param_string += "&browser_version=" + encodeURIComponent(vandra_browser_version);
    vandra_page_view_param_string += "&mobile=" + encodeURIComponent(vandra_mobile);
    vandra_page_view_param_string += "&os=" + encodeURIComponent(vandra_os);
    vandra_page_view_param_string += "&os_version=" + encodeURIComponent(vandra_os_version);
    vandra_page_view_param_string += "&device_memory=" + encodeURIComponent(navigator.deviceMemory);
    vandra_page_view_param_string += "&language=" + encodeURIComponent(navigator.language);
    vandra_page_view_param_string += "&local_datetime=" + encodeURIComponent(vandra_current_datetime);
    vandra_page_view_param_string += "&referrer=" + encodeURIComponent(document.referrer);
    vandra_page_view_param_string += "&page_view_id=" + encodeURIComponent(vandra_page_view_id);
    vandra_page_view_param_string += "&session_cookie=" + encodeURIComponent(vandra_session_cookie);
    vandra_page_view_param_string += "&customer_cookie=" + encodeURIComponent(vandra_customer_cookie);
    vandra_page_view_param_string += "&shopify_url=" + encodeURIComponent(vandra_shopify_url);
    vandra_page_view_param_string += "&page=" + encodeURIComponent(window.location.href);
    vandra_page_view_param_string += "&utm_campaign=" + encodeURIComponent(vandra_utm_campaign);
    vandra_page_view_param_string += "&utm_content=" + encodeURIComponent(vandra_utm_content);
    vandra_page_view_param_string += "&utm_medium=" + encodeURIComponent(vandra_utm_medium);
    vandra_page_view_param_string += "&utm_source=" + encodeURIComponent(vandra_utm_source);
    vandra_page_view_param_string += "&utm_term=" + encodeURIComponent(vandra_utm_term);
    vandra_page_view_param_string += "&ad_bing=" + encodeURIComponent(vandra_ad_bing);
    vandra_page_view_param_string += "&ad_doubleclick=" + encodeURIComponent(vandra_ad_doubleclick);
    vandra_page_view_param_string += "&ad_facebook=" + encodeURIComponent(vandra_ad_facebook);
    vandra_page_view_param_string += "&ad_google=" + encodeURIComponent(vandra_ad_google);
    vandra_page_view_param_string += "&ad_tiktok=" + encodeURIComponent(vandra_ad_tiktok);
    vandra_page_view_param_string += "&logged_in=" + encodeURIComponent(vandra_logged_in);
    vandra_page_view_param_string += "&no_vandra=" + encodeURIComponent(vandra_no_vandra_cookie);
    vandra_page_view_param_string += "&document_has_focus=" + encodeURIComponent(document.hasFocus());

    function vandra_send_data(xhr, data_string) {
        try {
            if (vandra_skip_because_bot) {
                return false;
            }
            if (xhr.readyState !== 1) {
                return false;
            }
            xhr.send(data_string);
        } catch (ErrorEvent) {
            const ERROR_FILTER = ["The object is in an invalid state.", "Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED."];
            if(!ERROR_FILTER.find(error => ErrorEvent.message.includes(error))) {
                vandra_handle_error(ErrorEvent, false);
            }
        }
    }

    var vandra_consent_error_logged = false;
    function vandra_check_consent_and_send(xhr, data_string, request_type) {
        try {
            if (window.Shopify == undefined) {
                return false;
            }

            if (typeof window.Shopify !== "undefined" && !(typeof window.Shopify.loadFeatures == "undefined" || typeof window.Shopify.customerPrivacy == "undefined")) {
                // Let's make sure we can collect data
                window.Shopify.loadFeatures(
                    [
                        {
                            name: 'consent-tracking-api',
                            version: '0.1',
                        },
                    ],
                    error => {
                        if (error && !vandra_consent_error_logged) {
                            vandra_consent_error_logged = true;
                        }
                    }
                );

                if (window.Shopify.customerPrivacy == undefined) {
                    return false;
                }
                
                clearInterval(vandra_consent_load_checker[request_type]);

                //capture initial state of consent for session cookie
                if (!vandra_initial_consent_captured) {
                    capture_consent_state(window.Shopify.customerPrivacy.currentVisitorConsent(), 'initial');
                }
                vandra_initial_consent_captured = true;
                
                if (window.Shopify.customerPrivacy.userCanBeTracked()) {
                    vandra_set_cookie("vandra_consent_given", true, 0.04);
                    vandra_send_data(xhr=xhr, data_string=data_string);
                } else {
                    document.addEventListener('trackingConsentAccepted', () => {
                        vandra_set_cookie("vandra_consent_given", true, 0.04);
                        vandra_send_data(xhr=xhr, data_string=data_string);
                    });
                }
            
            } else if (typeof VANDRA_HEADLESS_CONSENT != "undefined") {
                vandra_set_cookie("vandra_consent_given", VANDRA_HEADLESS_CONSENT, 0.04);
                vandra_send_data(xhr=xhr, data_string=data_string);
            
            // Expect that Shopify object has been loaded by 5 seconds
            } else if (Date.now() - vandra_start_time > 5000) {
                vandra_set_cookie("vandra_consent_given", true, 0.04);
                vandra_send_data(xhr=xhr, data_string=data_string);
            }
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    }

    function capture_consent_state(consent_details, consent_state) {
        //capture initial state of consent for session cookie
        fetch(vandra_api_base_url + "/consent/record", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                session_cookie: vandra_session_cookie,
                customer_cookie: vandra_customer_cookie,
                consent: consent_details,
                consent_state,
                shopify_url : Shopify?.shop
            }),
            signal: AbortSignal.timeout(10000)
        }).catch(() =>{});        
    }

    function vandra_check_consent_repeatedly_and_send(xhr, data_string, interval, request_type) {
        try {
            if (vandra_get_cookie("vandra_consent_given")) {
                vandra_send_data(xhr=xhr, data_string=data_string);
                return null;
            } else {
                return setInterval(function () { vandra_check_consent_and_send(xhr=xhr, data_string=data_string, request_type=request_type) }, interval);
            }
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    }

    // Check every 0.1 sec to see if the Shopify consent tracking API has loaded
    // Once it has check for consent then send the page view data to the server
    var vandra_consent_load_checker = new Array();
    vandra_consent_load_checker["page"] = vandra_check_consent_repeatedly_and_send(xhr=vandra_xhr_page_view, data_string=vandra_page_view_param_string, interval=100, type="page");

    // Click
    document.addEventListener("click", (event) => {
        try {
            let xhr_click = new XMLHttpRequest();
            xhr_click.onerror = vandra_handle_http_error;
            xhr_click.timeout = 10000; 
            xhr_click.ontimeout = function () { vandra_handle_error(new Error("Time out.")); }
            xhr_click.open("POST", vandra_api_base_url + "/record_click", true);
            xhr_click.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            var click_tgt_property_string = "page_view_id=" + encodeURIComponent(vandra_page_view_id);
            click_tgt_property_string += "&session_cookie=" + encodeURIComponent(vandra_session_cookie);
            click_tgt_property_string += "&customer_cookie=" + encodeURIComponent(vandra_customer_cookie);
            click_tgt_property_string += "&page=" + encodeURIComponent(window.location.href);
            click_tgt_property_string += "&shopify_url=" + encodeURIComponent(vandra_shopify_url);
            click_tgt_property_string += "&tagName=" + encodeURIComponent(event.target.tagName);
            click_tgt_property_string += "&baseURI=" + encodeURI(event.target.baseURI);
            click_tgt_property_string += "&className=" + encodeURIComponent(event.target.className);
            click_tgt_property_string += "&id=" + encodeURIComponent(event.target.id);
            click_tgt_property_string += "&style=" + encodeURIComponent(event.target.style?.cssText);
            click_tgt_property_string += "&innerText=" + encodeURIComponent((event.target.innerText || "").substring(0, 10000));
            click_tgt_property_string += "&offsetWidth=" + encodeURIComponent((event.target.offsetWidth || "").toString());
            click_tgt_property_string += "&offsetHeight=" + encodeURIComponent((event.target.offsetHeight || "").toString());
            click_tgt_property_string += "&clientWidth=" + encodeURIComponent((event.target.clientWidth || "").toString());
            click_tgt_property_string += "&clientHeight=" + encodeURIComponent((event.target.clientHeight || "").toString());
            click_tgt_property_string += "&clientTop=" + encodeURIComponent((event.target.clientTop || "").toString());
            click_tgt_property_string += "&clientLeft=" + encodeURIComponent((event.target.clientLeft || "").toString());
            click_tgt_property_string += "&parentNodeName=" + encodeURIComponent(event.target.parentNode?.nodeName);
            click_tgt_property_string += "&nextSiblingName=" + encodeURIComponent(event.target.nextSibling?.nodeName);
            click_tgt_property_string += "&previousSiblingName=" + encodeURIComponent(event.target.previousSibling?.nodeName);
            click_tgt_property_string += "&childrenCount=" + encodeURIComponent((event.target.children.length || "").toString());
            click_tgt_property_string += "&firstChildName=" + encodeURIComponent(event.target.firstChild?.nodeName);
            click_tgt_property_string += "&lastChildName=" + encodeURIComponent(event.target.lastChild?.nodeName);

            // Check every 0.1 sec to see if the Shopify consent tracking API has loaded
            // Once it has check for consent then send the click data to the server
            vandra_consent_load_checker["click"] = vandra_check_consent_repeatedly_and_send(xhr = xhr_click, data_string = click_tgt_property_string, interval = 100, request_type = "click");
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    });

    //Search
    var vandra_search_form = document.querySelector("form[role='search']");

    if (vandra_search_form != null) {
        // Init a timeout variable to be used below
        let timeout = null;

        // Listen for keystroke events
        vandra_search_form.addEventListener('keyup', function (e) {
            try {
                // Clear the timeout if it has already been set.
                // This will prevent the previous task from executing
                // if it has been less than milliseconds specified
                clearTimeout(timeout);

                // Make a new timeout set to go off in 1000ms (1 second)
                timeout = setTimeout(function () {
                    let xhr_search = new XMLHttpRequest();
                    xhr_search.onerror = vandra_handle_http_error;
                    xhr_search.timeout = 10000; 
                    xhr_search.ontimeout = function () { vandra_handle_error(new Error("Time out.")); }
                    xhr_search.open("POST", vandra_api_base_url + "/record_search", true);
                    xhr_search.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

                    let search_query = document.querySelector("input[name='q']").value;
                    let search_string = "page_view_id=" + encodeURIComponent(vandra_page_view_id);
                    search_string += "&session_cookie=" + encodeURIComponent(vandra_session_cookie);
                    search_string += "&search_query=" + encodeURIComponent(search_query);
                    vandra_consent_load_checker["search"] = vandra_check_consent_repeatedly_and_send(xhr=xhr_search, data_string=search_string, interval=100, request_type="search");
                }, 1000);
            } catch (ErrorEvent) {
                vandra_handle_error(ErrorEvent);
            }
        });
    }

    // Blur and Focus
    window.addEventListener("blur", function (event) {
        try {
            // Add unfocused time tracking
            if (!vandra_unfocused_start_time) {
                vandra_unfocused_start_time = Date.now();
            }

            // Existing blur logic
            let xhr_blur = new XMLHttpRequest();
            xhr_blur.onerror = vandra_handle_http_error;
            xhr_blur.timeout = 10000; 
            xhr_blur.ontimeout = function () { vandra_handle_error(new Error("Time out.")); }
            xhr_blur.open("POST", vandra_api_base_url + "/record_page_focus_change", true);
            xhr_blur.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            var blur_string = "page_view_id=" + encodeURIComponent(vandra_page_view_id);
            blur_string += "&session_cookie=" + encodeURIComponent(vandra_session_cookie);
            blur_string += "&focus_change_type=blur"

            vandra_consent_load_checker["blur"] = vandra_check_consent_repeatedly_and_send(xhr=xhr_blur, data_string=blur_string, interval=100, request_type="blur");
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    });

    window.addEventListener("focus", function (event) {
        try {
            // Add unfocused time tracking
            if (vandra_unfocused_start_time) {
                vandra_cumulative_unfocused_time += (Date.now() - vandra_unfocused_start_time);
                vandra_unfocused_start_time = null;
            }

            // Existing focus logic
            let xhr_focus = new XMLHttpRequest();
            xhr_focus.onerror = vandra_handle_http_error;
            xhr_focus.timeout = 10000; 
            xhr_focus.ontimeout = function () { vandra_handle_error(new Error("Time out.")); }
            xhr_focus.open("POST", vandra_api_base_url + "/record_page_focus_change", true);
            xhr_focus.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            var focus_string = "page_view_id=" + encodeURIComponent(vandra_page_view_id);
            focus_string += "&session_cookie=" + encodeURIComponent(vandra_session_cookie);
            focus_string += "&focus_change_type=focus"

            vandra_consent_load_checker["focus"] = vandra_check_consent_repeatedly_and_send(xhr=xhr_focus, data_string=focus_string, interval=100, request_type="focus");
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    });

    // Dwell time
    var vandra_start_time = Date.now()
    var vandra_total_scroll = 0;
    var vandra_total_mouse_move = 0;
    var vandra_keystrokes = "";
    // Add near other time tracking variables at the top
    var vandra_unfocused_start_time = null;
    var vandra_cumulative_unfocused_time = 0;


    function vandra_record_dwell_time() {
        if (!vandra_stop_script) {
            try {
                let {dwell_time, focused_dwell_time} = get_dwell_time();

                // To limit noise/traffic on the server let's stop sending after an hour
                if (dwell_time > 3600) {
                    return false;
                }

                // Some kind of issue
                if (dwell_time < 0) {
                    return false;
                }

                let xhr_search = new XMLHttpRequest();
                xhr_search.onerror = vandra_handle_http_error;
                xhr_search.timeout = 10000; 
                xhr_search.ontimeout = function () { vandra_handle_error(new Error("Time out.")); }
                xhr_search.open("POST", vandra_api_base_url + "/record_dwell_time", true);
                xhr_search.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

                let dwell_time_string = "page_view_id=" + encodeURIComponent(vandra_page_view_id);
                dwell_time_string += "&session_cookie=" + encodeURIComponent(vandra_session_cookie);
                dwell_time_string += "&dwell_time=" + encodeURIComponent(dwell_time);
                dwell_time_string += "&focused_dwell_time=" + encodeURIComponent(focused_dwell_time);
                dwell_time_string += "&total_scroll=" + encodeURIComponent(vandra_total_scroll);
                dwell_time_string += "&total_mouse_move=" + encodeURIComponent(vandra_total_mouse_move);
                dwell_time_string += "&keystrokes=" + encodeURIComponent(vandra_keystrokes);

                vandra_consent_load_checker["dwell_time"] = vandra_check_consent_repeatedly_and_send(xhr = xhr_search, data_string = dwell_time_string, interval = 100, request_type = "dwell_time");

                let vandra_call_time = 1000;
                if (dwell_time > 5) {
                    vandra_call_time = 3000;
                } else if (dwell_time > 15) {
                    vandra_call_time = 5000;
                } else if (dwell_time > 30) {
                    vandra_call_time = 10000;
                }
                vandra_dwell_time_timer = setTimeout(vandra_record_dwell_time, vandra_call_time);
                vandra_keystrokes = "";
            } catch (ErrorEvent) {
                vandra_handle_error(ErrorEvent);
            }
        } 
    }

    var vandra_dwell_time_timer = setTimeout(vandra_record_dwell_time, 1000);
    // Scroll distance
    var vandra_last_scroll = window.scrollY;

    setInterval(function () {
        try {
            vandra_total_scroll += Math.abs(vandra_last_scroll - window.scrollY);
            vandra_last_scroll = window.scrollY;
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    }, 50);

    // Mouse movement
    var vandra_last_mouse_x = 0;
    var vandra_last_mouse_y = 0;

    function vandra_track_mouse(e) {
        try {
            vandra_total_mouse_move += Math.sqrt((e.pageX - vandra_last_mouse_x) ** 2 + (e.pageY - vandra_last_mouse_y) ** 2)
            vandra_last_mouse_x = e.pageX;
            vandra_last_mouse_y = e.pageY;
        } catch (ErrorEvent) {
            vandra_handle_error(ErrorEvent);
        }
    }

    window.addEventListener("mousemove", vandra_track_mouse);
    
    // Keystrokes
    document.body.addEventListener("keyup", function (event) {
        if (event.key.length > 1) {
            return false;
        }
        if (event.key == "@" || ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(event.key)) {
            vandra_keystrokes += event.key;
        } else {
            vandra_keystrokes += "*";
        }
    });
    
    //event listener
    document.addEventListener("visitorConsentCollected", (event) => capture_consent_state(event.detail, 'change'));

    //monitor pop state
    window.addEventListener('popstate', (event) => {
        //check if url is a discount code url
        const isDiscountCodeUrl = isDiscountSettingUrl(event.state?.url);
        if (isDiscountCodeUrl) {
            const discount_code = getDiscountCodeFromUrl(event.state?.url);
            if (discount_code && vandra_session_cookie) {
                captureDiscountCodeApplication(discount_code, "navigation_url");
            }
        }
    });
    
} catch (ErrorEvent) {
    vandra_handle_error(ErrorEvent);
}
var VANDRA_SCRIPT_LOADED = true;

}

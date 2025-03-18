if (typeof VANDRA_FILES == "undefined") {
    var VANDRA_FILES = [];
}
VANDRA_FILES.push("vandra-return.js");

var vandra_css_return = `#vandra_popup_container_return {
    position: fixed;
    {{vandra_popup_alignment_placeholder}}
    z-index: 9959999;
    width: 322px;
    border: 1px solid #{{vandra_popup_primary_color_placeholder}};
    {{vandra_popup_border_radius_placeholder}}
    padding: 16px;
    background-color: #{{vandra_popup_bg_color_placeholder}};
    box-shadow: 0px 0px 16px rgb(0 0 0 / 12%);
    overflow: hidden;
}

#vandra_popup_close_container_default {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 15px;
    height: 15px;
    fill: #{{vandra_popup_primary_color_placeholder}};
    cursor: pointer;
}

#vandra_popup_content_container_return {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

#vandra_popup_content_header_text_return {
    width: 260px;
    margin: 0px 12px 2px 0px;
    font-size: 24px;
    font-weight: bold;
    line-height: 25px;
}

#vandra_popup_content_body_text_return {
    margin: 0px 0px 20px 0px;
    font-size: 14px;
    line-height: 16px;
}

#vandra_popup_content_button_return {
    position: relative;
    height: 38px;
    margin: 0px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    line-height: 38px;
    color: #fff;
    background-color: #{{vandra_popup_primary_color_placeholder}};
    cursor: pointer;
    overflow: hidden;
}

`;

var vandra_popup_content_header_default_text_return = `<span id="vandra_popup_content_header_default_text_return" class="vandra_font">
    REMINDER: YOU GET {{vandra_discount_rate_placeholder}}% OFF YOUR TOTAL ORDER!
</span>`;
var vandra_popup_content_body_default_text_return = `<span id="vandra_popup_content_body_default_text_return" class="vandra_font">
    The discount code is already applied to your cart.
</span>`;
var vandra_popup_content_button_default_text_return = `<span id="vandra_popup_content_button_default_text_return" class="vandra_font">
    Proceed To Checkout
</span>`;
var vandra_popup_container_return = `<div id="vandra_popup_container_return" class="vandra_font {{vandra_widget_slide_in_animation_class_placeholder}}" role="dialog" aria-labelledby="vandra_popup_content_header_text_return" aria-describedby="vandra_popup_content_body_text_return">
    <div id="vandra_popup_close_container_default" onclick="vandra_hide_popup(true, 'RETURN')" tabindex="0">
        <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" aria-label="Close Reminder">
            <path d="M 15 1.5107 L 13.4893 0 L 7.5 5.9893 L 1.5107 0 L 0 1.5107 L 5.9893 7.5 L 0 13.4893 L 1.5107 15 L 7.5 9.0107 L 13.4893 15 L 15 13.4893 L 9.0107 7.5 L 15 1.5107 Z">
            </path>
        </svg>
    </div>
    <div id="vandra_popup_content_container_return">
        <div id="vandra_popup_content_header_text_return" class="vandra_font">
            {{vandra_popup_content_header_text_return_placeholder}}
        </div>
        <div id="vandra_popup_content_body_text_return" class="vandra_font">
            {{vandra_popup_content_body_text_return_placeholder}}
        </div>
        <button id="vandra_popup_content_button_return" class="vandra_popup_content_button vandra_flex_row_center_center_width vandra_font" onclick="vandra_redirect_to_checkout(event)" aria-label="Redirect To Checkout">
            {{vandra_popup_content_button_container_return_placeholder}}
        </button>
    </div>
</div>`;
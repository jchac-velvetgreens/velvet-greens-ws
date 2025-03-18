if (typeof VANDRA_FILES == "undefined") {
    var VANDRA_FILES = [];
}
VANDRA_FILES.push("vandra-image.js");

var vandra_css_image = `#vandra_popup_container_image {
    position: fixed;
    {{vandra_popup_alignment_placeholder}}
    z-index: 9959999;
    width: 449px;
    border: 1px solid
    border-radius: 5px;
    {{vandra_popup_border_radius_placeholder}}
    background-color: #{{vandra_popup_bg_color_placeholder}};
    box-shadow: 0px 0px 16px rgb(0 0 0 / 12%);
    overflow: hidden;
}

#vandra_popup_close_container_default {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 20px;
    height: 20px;
    fill: white;
    cursor: pointer;
}

#vandra_popup_content_image_container_image {
    width: 100%;
    height: 266px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0px 0px 20px 0px;
}

#vandra_popup_content_image_image {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%
    box-shadow: none !important;
}

#vandra_popup_content_container_image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px 16px 24px 16px;
}

#vandra_popup_content_header_text_image {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 260px;
    margin: 0px 0px 2px 0px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    line-height: 25px;
}

#vandra_popup_content_body_text_image {
    width: 60%;
    margin: 0px 0px 20px 0px;
    text-align: center;
    font-size: 14px;
    line-height: 16px;
}

#vandra_popup_content_bottom {
    width: 75%;
}

@media only screen and (max-width: 600px) {
    #vandra_popup_container_image {
        width: 322px;
    }
}

`;

var vandra_popup_container_image = `<div id="vandra_popup_container_image" class="vandra_font {{vandra_widget_slide_in_animation_class_placeholder}}" role="dialog" aria-labelledby="vandra_popup_content_header_text_image" aria-describedby="vandra_popup_content_body_text_image">
    <div id="vandra_popup_close_container_default" onclick="vandra_hide_image(true)" tabindex="0">
        <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" aria-label="Close Discount Offer">
            <path d="M 15 1.5107 L 13.4893 0 L 7.5 5.9893 L 1.5107 0 L 0 1.5107 L 5.9893 7.5 L 0 13.4893 L 1.5107 15 L 7.5 9.0107 L 13.4893 15 L 15 13.4893 L 9.0107 7.5 L 15 1.5107 Z">
            </path>
        </svg>
    </div>
    <div id="vandra_popup_content_image_container_image">
        <img id="vandra_popup_content_image_image" src="{{vandra_popup_content_image_image_placeholder}}" alt="Brand Image" />
    </div>
    <div id="vandra_popup_content_container_image">
        <div id="vandra_popup_content_header_text_image" class="vandra_font">
            {{vandra_popup_content_header_text_default_placeholder}}
        </div>
        <div id="vandra_popup_content_body_text_image" class="vandra_font">
            {{vandra_popup_content_body_text_default_placeholder}}
        </div>
        <div id="vandra_popup_content_bottom">
            {{vandra_popup_content_copy_container_default_placeholder}}
            <button id="vandra_popup_content_button_default" class="vandra_popup_content_button vandra_flex_row_center_center_width vandra_font" {{vandra_popup_content_button_default_onclick_placeholder}} aria-label="Apply Discount">
                {{vandra_popup_content_button_container_default_placeholder}}
            </button>
        </div>
    </div>
</div>`;
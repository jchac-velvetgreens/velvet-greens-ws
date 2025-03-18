var vandra_css_modal = `.vandra_backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}

#vandra_modal_container_container_modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

#vandra_modal_container_modal {
    position: fixed;
    z-index: 9959999;
    width: 449px;
    border: 1px solid #{{vandra_popup_primary_color_placeholder}};
    border-radius: 10px;
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

#vandra_modal_content_image_container_modal {
    width: 100%;
    height: 266px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

#vandra_modal_content_image_modal {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%
    box-shadow: none !important;
}

#vandra_modal_content_container_modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px 48px 24px 48px;
}

#vandra_modal_content_header_text_modal {
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

#vandra_modal_content_body_text_modal {
    width: 60%;
    margin: 0px 0px 20px 0px;
    text-align: center;
    font-size: 14px;
    line-height: 16px;
}

#vandra_modal_content_bottom {
    width: 100%;
}

@media only screen and (max-width: 600px) {
    #vandra_modal_container_modal {
        width: 322px;
    }
}

`;
var vandra_modal_content_header_default_text_modal = `<span id="vandra_modal_content_header_default_text_modal">GET {{vandra_discount_rate_placeholder}}% OFF</span>`;
var vandra_modal_content_body_default_text_modal = `<span id="vandra_modal_content_body_default_text_modal">Valid for one day only. Don't miss out!</span>`;
var vandra_modal_container_modal = `<div id="vandra_backdrop" class="vandra_backdrop" onclick="vandra_hide_modal()">
    <div id="vandra_modal_container_container_modal" role="dialog" aria-labelledby="vandra_modal_content_header_text_modal" aria-describedby="vandra_modal_content_body_text_modal">
        <div id="vandra_modal_container_modal" class="vandra_font" onclick="event.stopPropagation()">
            <div id="vandra_popup_close_container_default" onclick="vandra_hide_modal()" tabindex="0">
                <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" aria-label="Close Discount Offer">
                    <path d="M 15 1.5107 L 13.4893 0 L 7.5 5.9893 L 1.5107 0 L 0 1.5107 L 5.9893 7.5 L 0 13.4893 L 1.5107 15 L 7.5 9.0107 L 13.4893 15 L 15 13.4893 L 9.0107 7.5 L 15 1.5107 Z">
                    </path>
                </svg>
            </div>
            <div id="vandra_modal_content_container_modal">
                <div id="vandra_modal_content_header_text_modal">
                    {{vandra_modal_content_header_text_modal_placeholder}}
                </div>
                <div id="vandra_modal_content_body_text_modal">
                    {{vandra_modal_content_body_text_modal_placeholder}}
                </div>
                <div id="vandra_modal_content_bottom">
                    {{vandra_popup_content_copy_container_default_placeholder}}
                    <button id="vandra_popup_content_button_default" class="vandra_flex_row_center_center_width" {{vandra_popup_content_button_default_onclick_placeholder}} aria-label="Apply Discount">
                        {{vandra_popup_content_button_container_default_placeholder}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>`;
var vandra_modal_container_modal_with_image = `<div id="vandra_backdrop" class="vandra_backdrop" onclick="vandra_hide_modal()">
    <div id="vandra_modal_container_container_modal" role="dialog" aria-labelledby="vandra_modal_content_header_text_modal" aria-describedby="vandra_modal_content_body_text_modal">
        <div id="vandra_modal_container_modal" class="vandra_font" onclick="event.stopPropagation()">
            <div id="vandra_modal_close_container_modal" onclick="vandra_hide_modal()" tabindex="0">
                <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" aria-label="Close Discount Offer">
                    <path d="M 15 1.5107 L 13.4893 0 L 7.5 5.9893 L 1.5107 0 L 0 1.5107 L 5.9893 7.5 L 0 13.4893 L 1.5107 15 L 7.5 9.0107 L 13.4893 15 L 15 13.4893 L 9.0107 7.5 L 15 1.5107 Z">
                    </path>
                </svg>
            </div>
            <div id="vandra_modal_content_image_container_modal">
                <img id="vandra_modal_content_image_modal" src="{{vandra_modal_content_image_modal_placeholder}}" alt="Brand Image" />
            </div>
            <div id="vandra_modal_content_container_modal">
                <div id="vandra_modal_content_header_text_modal">
                    {{vandra_modal_content_header_text_modal_placeholder}}
                </div>
                <div id="vandra_modal_content_body_text_modal">
                    {{vandra_modal_content_body_text_modal_placeholder}}
                </div>
                <div id="vandra_modal_content_bottom">
                    {{vandra_popup_content_copy_container_default_placeholder}}
                    <button id="vandra_popup_content_button_default" class="vandra_flex_row_center_center_width" {{vandra_popup_content_button_default_onclick_placeholder}} aria-label="Apply Discount">
                        {{vandra_popup_content_button_container_default_placeholder}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>`;
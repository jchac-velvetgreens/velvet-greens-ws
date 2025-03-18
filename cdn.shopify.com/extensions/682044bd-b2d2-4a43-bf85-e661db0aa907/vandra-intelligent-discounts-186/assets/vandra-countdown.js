var vandra_css_countdown = `.vandra_countdown {
    font-weight: bold;
}
#vandra_popup_content_time_countdown {
    margin: 0px;
    color: #{{vandra_popup_primary_color_placeholder}};
}
#vandra_popup_content_time_container_container_countdown {
    width: 100%;
}
#vandra_popup_content_time_container_countdown {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5rem;
    width: 100%;
    margin: 0px 0px 12px 0px;
    border-radius: 10px;
    padding: 10px;
    font-size: 15px;
    line-height: 16px;
    background-color: #DBF2ED;
}
#vandra_popup_content_time_container_content_countdown {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
}
#vandra_minimized_content_container_countdown {
    margin: 0px;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    line-height: 16px;
    white-space: nowrap;
    color: #ffffff;
    transform: rotate(180deg);
    writing-mode: vertical-rl;
}
`;

var vandra_time_init_countdown = false;
var vandra_popup_content_default_time_countdown = `<span id="vandra_popup_content_default_time_countdown"><span class="vandra_countdown">{{vandra_time_countdown_placeholder}}</span></span>`;
var vandra_popup_content_header_text_countdown = `<span id="vandra_popup_content_header_text_countdown">CHECKOUT NOW TO CLAIM YOUR DISCOUNT</span>`;
var vandra_popup_content_body_text_countdown = `<span id="vandra_popup_content_body_text_countdown">This discount is available for a limited time!</span>`;
var vandra_popup_content_time_container_countdown = `<div id="vandra_popup_content_time_container_countdown">
    <div id="vandra_popup_content_time_container_content_countdown">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="13px" height="13px" viewBox="0 0 13 13" enable-background="new 0 0 13 13" xml:space="preserve">
            <image id="image0" width="13" height="13" x="0" y="0"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAMAAABFNRROAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
            AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEUAAAAAgHAAi2YAiWcA
            imcAimcAimgAimcAiWcAh2gAiWgAiWYAiGcAimcAiWcAh2gAiWYAimoAimYAimgAhmkAimgAiGgA
            iWYAh2gAiWf///+koj7LAAAAGXRSTlMAEH+vv59gb98gf6CQz89gUDDvn3C/kHBAavGW6QAAAAFi
            S0dEGnVn5DIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnCBUPEiGv40pGAAAAX0lEQVQI
            10XOWRKAIAwD0FRRQRRU3HL/i8o2mK++GWgKANL1ahhRMjFHm4SZ/GnYooChjnYhDdYKceQITXpb
            UOTEZ3BDfE63Z8R/5mg7Q+w7W5+keq8zLqm3+Ts8bxo+nAMKa4lr+n0AAAAldEVYdGRhdGU6Y3Jl
            YXRlADIwMjMtMDgtMjFUMTM6MTg6MzMrMDI6MDCh4xAYAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIz
            LTA4LTIxVDEzOjE4OjMzKzAyOjAw0L6opAAAAABJRU5ErkJggg==" alt="Checkmark" />
        </svg>
        <span>Discount applied</span>
    </div>
    <div>
        <span>You have <span class="vandra_countdown">{{vandra_time_countdown_placeholder}}</span> left to check out</span>
    </div>
</div>`;
var vandra_popup_container_countdown = `<div id="vandra_popup_container_default" class="vandra_font {{vandra_widget_slide_in_animation_class_placeholder}} {{vandra_popup_display_placeholder}}" role="dialog" aria-labelledby="vandra_popup_content_header_text_default" aria-describedby="vandra_popup_content_body_text_default">
    <div id="vandra_popup_close_container_default" onclick="vandra_hide_popup(true)" tabindex="0">
        <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" aria-label="Close Discount Offer">
            <path d="M 15 1.5107 L 13.4893 0 L 7.5 5.9893 L 1.5107 0 L 0 1.5107 L 5.9893 7.5 L 0 13.4893 L 1.5107 15 L 7.5 9.0107 L 13.4893 15 L 15 13.4893 L 9.0107 7.5 L 15 1.5107 Z">
            </path>
        </svg>
    </div>
    <div id="vandra_popup_content_container_default">
        <div id="vandra_popup_content_time_countdown">
            {{vandra_popup_content_time_countdown_placeholder}}
        </div>
        <div id="vandra_popup_content_header_text_default">
            {{vandra_popup_content_header_text_countdown_placeholder}}
        </div>
        <div id="vandra_popup_content_body_text_default">
            {{vandra_popup_content_body_text_countdown_placeholder}}
        </div>
        <div id="vandra_popup_content_time_container_container_countdown">
            {{vandra_popup_content_time_container_default_placeholder}}
        </div>
        <button id="vandra_popup_content_button_default" class="vandra_popup_content_button vandra_flex_row_center_center_width" {{vandra_popup_content_button_default_onclick_placeholder}} aria-label="Apply Discount">
            {{vandra_popup_content_button_container_default_placeholder}}
        </button>
    </div>
</div>`;
var vandra_minimized_content_header_default_text_countdown = `<span id="vandra_minimized_content_header_default_text_countdown"><span class="vandra_countdown">{{vandra_time_countdown_placeholder}}</span></span>`;
var vandra_minimized_container_countdown = `<div id="vandra_minimized_container_default" class="vandra_font {{vandra_widget_slide_in_animation_class_placeholder}}" onclick="vandra_hide_minimized()" role="dialog" aria-labelledby="vandra_minimized_content_header_text_countdown" tabindex="0">
    <div id="vandra_minimized_content_container_countdown">
        <div id="vandra_minimized_content_header_text_countdown">
            {{vandra_minimized_content_header_text_countdown_placeholder}}
        </div>
    </div>
</div>`;
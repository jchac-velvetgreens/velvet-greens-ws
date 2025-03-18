if (typeof VANDRA_FILES == "undefined") {
    var VANDRA_FILES = [];
}
VANDRA_FILES.push("vandra-default.js");

var vandra_css_default_new = `.vandra_flex_row_center_center_width {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.vandra_font {
    font-family: {{vandra_popup_font_placeholder}}, Arial;
}

.vandra_invisible {
    visibility: hidden;
}

#vandra_popup_content_copy_container_default {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0px 0px 8px 0px;
    border: 2px dotted #777777;
    border-radius: 4px;
    padding: 10px;
}

#vandra_popup_content_copy_code_default {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
}

#vandra_discount_code_default {
    font-size: 12px;
    line-height: 16px;
    white-space: nowrap;
}

#vandra_popup_content_copy_text_default {
    text-align: center;
    font-size: 15px;
    line-height: 16px;
    text-decoration: underline;
    white-space: nowrap;
    cursor: pointer;
}


#vandra_popup_content_button_savings_text_default {
    color: white;
    text-decoration: none;
}

#vandra_minimized_container_default {
    position: fixed;
    {{vandra_minimized_alignment_placeholder}}
    z-index: 9959999;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 30px;
    {{vandra_minimized_border_radius_placeholder}}
    padding: 20px 10px 20px 10px;
    background-color: #{{vandra_popup_primary_color_placeholder}};
    box-shadow: 0px 0px 16px rgb(0 0 0 / 12%);
    overflow: hidden;
    cursor: pointer;
}

#vandra_minimized_content_container_default {
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

/* default new design */
#vandra_popup_content_button_default {
    position: relative;
    width: 190px;
    height: 38px;
    margin-top: 10px;
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

#vandra_popup_container_default {
    position: fixed;
    {{vandra_popup_alignment_placeholder}}
    z-index: 9959999;
    align-items: start;
    width: 380px;
    padding: 8px;
    border: 1px solid #{{vandra_popup_primary_color_placeholder}};
    {{vandra_popup_border_radius_placeholder}}
    padding: 8px 8px 8px 8px;
    background-color: #{{vandra_popup_bg_color_placeholder}};
    box-shadow: 0px 0px 16px rgb(0 0 0 / 12%);
    overflow: hidden;
}

#vandra_popup_content_container_default {
    position: relative; /* Make the container relative for absolute positioning of close button */
   
    display: grid;
    grid-template-columns: auto 1fr; /* Adjusts the width of circle-discount and allows the content to take the rest of the space */
    align-items: center;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23{{vandra_popup_primary_color_placeholder}}' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square' rx='2' ry='2'/%3e%3c/svg%3e");
}

#vandra_popup_content_header_text_default {
    width: 200px;
    margin: 10px 0px 2px 0px;
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
    z-index: -1;
}

#vandra_popup_content_body_text_default {
    margin: 0px 15px 20px 0px;
    font-size: 12px;
    line-height: 16px;
    width: 200px;
}

#vandra_popup_close_container_default {
    position: absolute;
    top: 8px;
    right: 12px;
    width: 15px;
    height: 15px;
    fill: #{{vandra_popup_primary_color_placeholder}};
    cursor: pointer;
    z-index: 1;
}

#circle-discount {
    display:flex;
    width: 82px; 
    height: 82px; 
    background-color: #{{vandra_popup_primary_color_placeholder}};
    border-radius: 50%;
    margin: 0px 20px 0px 20px;
    justify-content: center;
    align-items: center;
}

#circle-text {
    color: white;
    text-align: center;
    line-height: 25.78px;
    font-weight: bold;
    font-size: 20px;
}

.finePrint {
    font-size: 8px;
    line-height: 8px;
    padding: 10px 0px 0px 0px;
}

@media (max-width: 600px) {
    #vandra_popup_content_button_default {
        width: 150.8px;
        height: 30.4px; 
        margin-top: 8px;
        font-size: 12.8px; 
        line-height: 30.4px;
    }

    #vandra_popup_container_default {
        width: 75%; /* Adjusted to maintain proportionality */
        max-width: 320px;
        padding: 6.4px; /* 80% of 8px */
        box-shadow: 0px 0px 12.8px rgb(0 0 0 / 12%); /* 80% of 16px */
    }

    #vandra_popup_content_container_default {
        padding: 0.08rem; /* 80% of 0.1rem */
    }

    #vandra_popup_content_header_text_default {
        margin: 8px 9.6px 2px 0px; /* Adjusted for 80% */
        font-size: 14.4px; /* 80% of 18px */
        line-height: 20px; /* 80% of 25px */
    }

    #vandra_popup_content_body_text_default {
        margin: 0px 0px 16px 0px; /* 80% of 20px */
        font-size: 9.6px; /* 80% of 12px */
        line-height: 12.8px; /* 80% of 16px */
    }

    #vandra_popup_close_container_default {
        top: 6.4px; /* 80% of 8px */
        right: 9.6px; /* 80% of 12px */
        width: 12px; /* 80% of 15px */
        height: 12px; /* 80% of 15px */
    }

    #vandra_popup_content_body_text_default {
    //  width: 180px;
    }

    #circle-discount {
        width: 49.6px; /* 80% of 62px */
        height: 49.6px; /* 80% of 62px */
        margin: 0 8px; /* 80% of 10px */
    }

    #circle-text {
        line-height: 20.42px;
        font-size: 15px;
        font-weight: bold;
    }

    #circle-discount {
        width: 62px; 
        height: 62px; 
    }
    
    .finePrint {
        display: none;
    }
}

@-webkit-keyframes vandra_widget_slide_in_right_to_left {
    0% {
        -webkit-transform: translateX(105%);
        -moz-transform: translateX(105%);
        -o-transform: translateX(105%);
    }
    50% {
        -webkit-transform: translateX(105%);
        -moz-transform: translateX(105%);
        -o-transform: translateX(105%);
    }
    100% {
        -webkit-transform: translateX(0%);
        -moz-transform: translateX(0%);
        -o-transform: translateX(0%);
    }
}
@keyframes vandra_widget_slide_in_right_to_left {
    0% {
        transform: translateX(105%);
    }
    50% {
        transform: translateX(105%);
    }
    100% {
        transform: translateX(0%);
    }
}
.vandra_widget_slide_in_right_to_left_animation {
    -webkit-animation: vandra_widget_slide_in_right_to_left 0.5s ease-in-out forwards;
    animation: vandra_widget_slide_in_right_to_left 0.5s ease-in-out forwards;
}

@-webkit-keyframes vandra_widget_slide_out_left_to_right {
    0% {
        -webkit-transform: translateX(0%);
        -moz-transform: translateX(0%);
        -o-transform: translateX(0%);
    }
    50% {
        -webkit-transform: translateX(0%);
        -moz-transform: translateX(0%);
        -o-transform: translateX(0%);
    }
    100% {
        -webkit-transform: translateX(105%);
        -moz-transform: translateX(105%);
        -o-transform: translateX(105%);
    }
}
@keyframes vandra_widget_slide_out_left_to_right {
    0% {
        transform: translateX(0%);
    }
    50% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(105%);
    }
}
.vandra_widget_slide_out_left_to_right_animation {
    -webkit-animation: vandra_widget_slide_out_left_to_right 0.5s ease-in-out forwards;
    animation: vandra_widget_slide_out_left_to_right 0.5s ease-in-out forwards;
}

@-webkit-keyframes vandra_widget_slide_in_left_to_right {
    0% {
        -webkit-transform: translateX(-105%);
        -moz-transform: translateX(-105%);
        -o-transform: translateX(-105%);
    }
    50% {
        -webkit-transform: translateX(-105%);
        -moz-transform: translateX(-105%);
        -o-transform: translateX(-105%);
    }
    100% {
        -webkit-transform: translateX(0%);
        -moz-transform: translateX(0%);
        -o-transform: translateX(0%);
    }
}
@keyframes vandra_widget_slide_in_left_to_right {
    0% {
        transform: translateX(-105%);
    }
    50% {
        transform: translateX(-105%);
    }
    100% {
        transform: translateX(0%);
    }
}
.vandra_widget_slide_in_left_to_right_animation {
    -webkit-animation: vandra_widget_slide_in_left_to_right 0.5s ease-in-out forwards;
    animation: vandra_widget_slide_in_left_to_right 0.5s ease-in-out forwards;
}

@-webkit-keyframes vandra_widget_slide_out_right_to_left {
    0% {
        -webkit-transform: translateX(0%);
        -moz-transform: translateX(0%);
        -o-transform: translateX(0%);
    }
    50% {
        -webkit-transform: translateX(0%);
        -moz-transform: translateX(0%);
        -o-transform: translateX(0%);
    }
    100% {
        -webkit-transform: translateX(-105%);
        -moz-transform: translateX(-105%);
        -o-transform: translateX(-105%);
    }
}
@keyframes vandra_widget_slide_out_right_to_left {
    0% {
        transform: translateX(0%);
    }
    50% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-105%);
    }
}
.vandra_widget_slide_out_right_to_left_animation {
    -webkit-animation: vandra_widget_slide_out_right_to_left 0.5s ease-in-out forwards;
    animation: vandra_widget_slide_out_right_to_left 0.5s ease-in-out forwards;
}

@-webkit-keyframes vandra_button_slide_center_to_right {
    0% {
        -webkit-transform: translateX(0%);
        -moz-transform: translateX(0%);
        -o-transform: translateX(0%);
    }
    100% {
        -webkit-transform: translateX(200%);
        -moz-transform: translateX(200%);
        -o-transform: translateX(200%);
    }
}
@keyframes vandra_button_slide_center_to_right {
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(200%);
    }
}
.vandra_button_slide_center_to_right_animation {
    -webkit-animation: vandra_button_slide_center_to_right 0.5s ease-in-out forwards;
    animation: vandra_button_slide_center_to_right 0.5s ease-in-out forwards;
}

@-webkit-keyframes vandra_button_slide_left_to_center {
    0% {
        -webkit-transform: translateX(-200%);
        -moz-transform: translateX(-200%);
        -o-transform: translateX(-200%);
    }
    100% {
        -webkit-transform: translateX(0%);
        -moz-transform: translateX(0%);
        -o-transform: translateX(0%);
    }
}
@keyframes vandra_button_slide_left_to_center {
    0% {
        transform: translateX(-200%);
    }
    100% {
        transform: translateX(0%);
    }
}
.vandra_button_slide_left_to_center_animation {
    animation: vandra_button_slide_left_to_center 0.5s ease-in-out forwards;
    -webkit-animation: vandra_button_slide_left_to_center 0.5s ease-in-out forwards;
}

`;

var vandra_popup_content_header_savings_text_default = `<span id="vandra_popup_content_header_savings_text_default" class="vandra_font">Your savings: 
    <span class="vandra_savings_total">{{vandra_savings_total_placeholder}}</span>
</span>`;
var vandra_popup_content_body_savings_text_default = `<span id="vandra_popup_content_body_savings_text_default" class="vandra_font">Your {{vandra_discount_rate_placeholder}}% OFF discount has been applied to your cart already!</span>`;
var vandra_popup_content_copy_container_default = `<div id="vandra_popup_content_copy_container_default" class="vandra_popup_content_copy_container vandra_flex_row_center_center_width vandra_font">
    <div id="vandra_popup_content_copy_code_default">    
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19" height="17" xml:space="preserve" version="1.1" viewBox="0 0 19 17">
            <image width="19" height="17" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARCAYAAAA/mJfHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADnSURBVHgBvVPREYIwDM15DuAIHQE3YATcQCfQDcoGsIFsoBswAm6gG+AGmJyvR8DSVj98d+9o0sdrmgDRiILZMwcP70xDEaxnZoKDR2eZLXPHvFECGlWBVHhSewZ7wyw/wcqTe+L0h8rJesu8MitUmlRZDCUqtDEzud6G0g0vS/oMZkmTo3fvgj00MIsZOl2/pGtwihYWHl1OCTcoaWys9KGjz0YfketgZGEeNKwQ18rQYt3gMBfvKYASohYvuXjAWnJnFUfh/lPXF2GGZ5dS0RwZTSdraBxMTj/AKINvvsGgYQ0a+hdebmRPdzufi9sAAAAASUVORK5CYII=" alt="Coupon" />
        </svg>
        <span id="vandra_discount_code_default">{{vandra_discount_code_placeholder}}</span>
    </div>
    <span id="vandra_popup_content_copy_text_default" onclick="vandra_handle_copy_click()" tabindex="0" arial-label="Click to copy discount code">copy</span>
</div>`;
var vandra_apply_discount_code_onclick_default = `onclick="vandra_apply_discount_code(true)"`;
var vandra_redirect_to_checkout_onclick_default = `onclick="vandra_redirect_to_checkout(event)"`;
var vandra_popup_content_button_applied_text_default = `<span id="vandra_popup_content_button_applied_text_default" class="vandra_popup_content_button_applied_text vandra_font">Applied</span>`;
var vandra_popup_content_button_savings_continue_text_default = `<span id="vandra_popup_content_button_savings_continue_text_default" class="vandra_font">Continue Shopping</span>`;
var vandra_popup_content_button_savings_text_default = `<span id="vandra_popup_content_button_savings_text_default" class="vandra_font">Proceed To Checkout</span>`;
var vandra_popup_content_button_apply_applied_container_default = `<div id="vandra_popup_content_button_apply_container_default" class="vandra_popup_content_button_apply_container vandra_font" style="display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 0.5rem;">
    {{vandra_popup_content_button_apply_text_default_placeholder}}
</div>
<div id="vandra_popup_content_button_applied_container_default" style="display: none; flex-direction: row; justify-content: center; align-items: center; gap: 0.5rem;" class="vandra_popup_content_button_applied_container">
    <svg id="vandra_popup_content_button_checkmark_default" class="vandra_popup_content_button_checkmark" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19" height="20" xml:space="preserve" version="1.1" viewBox="0 0 19 20">
        <image width="19" height="20" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAAAXNSR0IArs4c6QAAAYhJREFUOE+tlP1NAlEQxGc60A6gArECpQOpQK1AqECuA6hArMBYgXTAdSB2QAdj5rLv5XFf+IebXC657Pvd7M7uI/4xOMaSNAFwHzlHAEeSfvdGL0zSC4AlAMNO8VwB8LMH8E5y1yaewULJR0C2AHalEkmz+MkjgA3JVQnMsAB9hYrFWDlF7p7kcwKWsLfozy1JlzYaATwAqEhunNzAJLnJVjUdUxS57tuEZC1pDcD99blTglnVNcmHP7jrn9YkF5IM/gawsiEJZrl2qJHbF62ezlMrJNlVuXcJJgBOsO2dGAJF2S515qp6YZIMX5OsxkAF7I7kPMFc9zaVGY199SwBcB/tbi6tlC7Jc/lDcplgPnRjekosgPUQKJRZiMcjG5BGwzPmw01IsioPZu/cpbUjOc1zFgdtua3uLaftSjG0zVi0YQZ5RKzi0jp5R92rT/eqs06hzreEFTqqKDFfObEpXvKnMCyDzpS1HHKy3Ry6gtzwzkxeuhxdjoFugcsfNGNQ2dBKXfr+C3IO2RVUwVzdAAAAAElFTkSuQmCC" alt="Checkmark" />
    </svg>
    {{vandra_popup_content_button_applied_text_default_placeholder}}
</div>`;
var vandra_popup_content_button_applied_container_default = `<div id="vandra_popup_content_button_applied_container_default" class="vandra_popup_content_button_applied_container vandra_font" style="display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 0.5rem;">
    {{vandra_popup_content_button_savings_text_placeholder}}
</div>`;
var vandra_popup_container_default_new = `<div id="vandra_popup_container_default" class="vandra_font {{vandra_widget_slide_in_animation_class_placeholder}} {{vandra_popup_display_placeholder}}" role="dialog" aria-labelledby="vandra_popup_content_header_text_default" aria-describedby="vandra_popup_content_body_text_default">
    <div id="vandra_popup_close_container_default" class="{{vandra_popup_close_display_placeholder}}" onclick="vandra_hide_popup(true)" tabindex="0">
        <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" aria-label="Close Discount Offer">
            <path d="M 15 1.5107 L 13.4893 0 L 7.5 5.9893 L 1.5107 0 L 0 1.5107 L 5.9893 7.5 L 0 13.4893 L 1.5107 15 L 7.5 9.0107 L 13.4893 15 L 15 13.4893 L 9.0107 7.5 L 15 1.5107 Z"></path>
        </svg>
    </div>    
    <div id="vandra_popup_content_container_default">
        <span id="circle-discount">
            <span id="circle-text">{{vandra_discount_rate_placeholder}}% OFF</span>
        </span>
        <div id="content">
            <div id="vandra_popup_content_header_text_default" class="vandra_font">
                {{vandra_popup_content_header_text_default_placeholder}}
            </div>
            <div id="vandra_popup_content_body_text_default" class="vandra_font">
                {{vandra_popup_content_body_text_default_placeholder}}
                <button id="vandra_popup_content_button_default" class="vandra_popup_content_button  vandra_font" {{vandra_popup_content_button_default_onclick_placeholder}} aria-label="Apply Discount">
                    <div id="button_text">{{vandra_popup_content_button_container_default_placeholder}}</div>
                </button>
                {{vandra_popup_content_fine_print}}
            </div>
        </div>
    </div>
</div>`;
var vandra_minimized_content_header_savings_text_default = `<span id="vandra_minimized_content_header_savings_text_default" class="vandra_font">Savings: 
    <span class="vandra_savings_total">{{vandra_savings_total_placeholder}}</span>
</span>`;
var vandra_minimized_container_default = `<div id="vandra_minimized_container_default" class="vandra_font {{vandra_widget_slide_in_animation_class_placeholder}}" onclick="vandra_hide_minimized()" role="dialog" aria-labelledby="vandra_minimized_content_header_text_default" tabindex="0">
    <div id="vandra_minimized_content_container_default">
        <div id="vandra_minimized_content_header_text_default">
            {{vandra_minimized_content_header_text_default_placeholder}}
        </div>
    </div>
</div>`;

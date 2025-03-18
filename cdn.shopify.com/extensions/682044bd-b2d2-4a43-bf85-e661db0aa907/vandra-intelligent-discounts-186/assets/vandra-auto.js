if (typeof VANDRA_FILES == "undefined") {
    var VANDRA_FILES = [];
}
VANDRA_FILES.push("vandra-auto.js");

var vandra_css_auto = `.vandra_font {
    font-family: {{vandra_popup_font_placeholder}}, Arial;
    line-height: 1;
}

.vandra_header {
    font-family: {{vandra_popup_font_placeholder}}, Arial;
    font-size: 18px;
    font-weight: 700;
    line-height: 1px; 
    text-align: left;
}

#vandra_popup_container_auto {
    position: fixed;
    {{vandra_popup_alignment_placeholder}}
    z-index: 9959999;
    align-items: center;
    width: 400px;
    border: 1px solid #{{vandra_popup_primary_color_placeholder}};
    {{vandra_popup_border_radius_placeholder}}
    padding: 8px 8px 8px 8px;
    background-color: #{{vandra_popup_bg_color_placeholder}};
    box-shadow: 0px 0px 16px rgb(0 0 0 / 12%);
    overflow: hidden;
}

#vandra_popup_content_container_auto {
    display: grid;
    padding: 5px 0px 5px 0px;
    grid-template-columns: auto 1fr; /* Adjusts the width of circle-discount and allows the content to take the rest of the space */
    align-items: center;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23{{vandra_popup_primary_color_placeholder}}' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square' rx='2' ry='2'/%3e%3c/svg%3e");
}

#vandra_popup_content_header_text_auto {
    width: 260px;
    margin: 0px 12px 2px 0px;
    font-size: 24px;
    font-weight: bold;
    line-height: 25px;
}

#vandra_popup_content_body_text_auto {
    margin: 0px 0px 10px 0px;
    text-align: left;
    font-size: 12px;
    line-height: 16px;
}

#vandra_popup_content_horizontal_divider_auto {
    width: 100%;
    height: 1px;
    margin: 0px 0px 20px 0px;
    background-color: #EBEBEB;
}

#vandra_popup_content_discount_container_auto {
    display: grid;
    grid-template-columns: auto 10px;
    gap: 16px; /* Space between items */
    align-items: center; /* Center items vertically */
}

#vandra_popup_content_discount_coupon_container_auto {
    background-color: #{{vandra_popup_primary_color_placeholder}};
}

#vandra_popup_content_discount_coupon_caption_container_auto {
    position: absolute;
    bottom: -16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #{{vandra_popup_primary_color_placeholder}};
    border-radius: 15px;
    padding: 4px;
    font-family: 'Roboto', sans-serif;
    font-size: 8px;
    background-color: #fff;
}

#vandra_popup_content_discount_info_container_auto {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    width: 100%;
}

#vandra_popup_content_discount_info_header_text_auto {
    margin: 0px 0px 12px 0px;
    font-size: 36px;
    font-weight: bold;
    line-height: 25px;
}

#vandra_popup_content_discount_info_body_text_auto {
    font-size: 20px;
    font-weight: bold;
    line-height: 16px;
}

#vandra_popup_close_container_default {
    position: absolute;
    top: 18px;
    right: 20px;
    fill: #{{vandra_popup_primary_color_placeholder}};
    cursor: pointer;
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
    padding: 0px 0px 10px 0px
}

@media (max-width: 600px) {
    #vandra_popup_container_auto {
        width: 280px; /* 350px - 20% */
        padding: 6px 6px 6px 6px; /* 8px - 20% */
        box-shadow: 0px 0px 12.8px rgb(0 0 0 / 12%); /* 16px - 20% */
    }

    #vandra_popup_content_header_text_auto {
        width: 208px; /* 260px - 20% */
        margin: 0px 9.6px 2px 0px; /* 12px - 20% */
        font-size: 19.2px; /* 24px - 20% */
        line-height: 20px; /* 25px - 20% */
    }

    #vandra_popup_content_body_text_auto {
        margin: 0px 0px 16px 0px; /* 20px - 20% */
        font-size: 11.2px; /* 14px - 20% */
        line-height: 12.8px; /* 16px - 20% */
    }

    #vandra_popup_content_horizontal_divider_auto {
        height: 0.8px; /* 1px - 20% */
        margin: 0px 0px 16px 0px; /* 20px - 20% */
    }

    #vandra_popup_content_discount_container_auto {
        grid-template-columns: auto 8px; /* 10px - 20% */
        gap: 12.8px; /* 16px - 20% */
    }

    #vandra_popup_content_discount_coupon_caption_container_auto {
        bottom: -12.8px; /* -16px - 20% */
        border-radius: 12px; /* 15px - 20% */
        padding: 3.2px; /* 4px - 20% */
        font-size: 6.4px; /* 8px - 20% */
    }

    #vandra_popup_content_discount_info_header_text_auto {
        margin: 2px 0px 9.6px 0px; /* 12px - 20% */
        font-size: 28.8px; /* 36px - 20% */
        line-height: 20px; /* 25px - 20% */
    }

    #vandra_popup_content_discount_info_body_text_auto {
        font-size: 16px; /* 20px - 20% */
        line-height: 12.8px; /* 16px - 20% */
    }

    #vandra_popup_close_container_default {
        top: 11.2px; /* 14px - 20% */
        right: 14.4px; /* 18px - 20% */
        width: 10px;
        heigth: 10px;
    }

    #circle-discount {
        width: 57.6px; /* 72px - 20% */
        height: 57.6px; /* 72px - 20% */
        margin: 0px 16px 0px 16px; /* 20px - 20% */
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

`;
var vandra_popup_content_header_default_text_auto = `<span id="vandra_popup_content_header_default_text_auto" class="vandra_font"><span>`;
var vandra_popup_content_discount_info_header_default_text_auto = `<span id="vandra_popup_content_discount_info_header_default_text_auto" class="vandra_header">{{vandra_discount_rate_placeholder}}% OFF, ON US!</span><br/><span class="vandra_header"> IT'S ALREADY IN YOUR CART</span>`;
var vandra_popup_content_discount_info_body_default_text_auto = `<span id="vandra_popup_content_discount_info_body_default_text_auto" class="vandra_font"></span>`;
var vandra_popup_container_auto = `<div id="vandra_popup_container_auto" class="vandra_font {{vandra_widget_slide_in_animation_class_placeholder}}" role="dialog" aria-labelledby="vandra_popup_content_header_text_auto" aria-describedby="vandra_popup_content_body_text_auto">
     <div id="vandra_popup_content_container_auto">
        <span id="circle-discount">
           <span id="circle-text">
            <span>{{vandra_discount_rate_placeholder}}%</span>
            <br/>
            <span>OFF</span>
           </span>
        </span>
        <div id="vandra_popup_close_container_default" onclick="vandra_hide_auto()" tabindex="0">
            <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                <path d="M 15 1.5107 L 13.4893 0 L 7.5 5.9893 L 1.5107 0 L 0 1.5107 L 5.9893 7.5 L 0 13.4893 L 1.5107 15 L 7.5 9.0107 L 13.4893 15 L 15 13.4893 L 9.0107 7.5 L 15 1.5107 Z">
                </path>
            </svg>
        </div>
        <div id="vandra_popup_content_discount_container_auto">
            <div id="vandra_popup_content_discount_info_container_auto" class="vandra_font">
                <div id="vandra_popup_content_discount_info_header_text_auto">
                    {{vandra_popup_content_discount_info_header_text_auto_placeholder}}
                </div>
                <div id="vandra_popup_content_body_text_auto" class="vandra_font">
                    {{vandra_popup_content_body_text_auto_placeholder}}
                </div>
                {{vandra_popup_content_fine_print}}
            </div>
        </div>
    </div>
</div>
`;
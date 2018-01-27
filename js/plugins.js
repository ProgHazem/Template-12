/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    $('.carousel').carousel({
        interval: 4000
    });
// Show Color Option Div When Click On The Gear
    $(".gear-option").click(function () {
        $(".color-option").fadeToggle();
    });
// Change Theme Color On Click
    var colorLi = $(".color-option ul li"),
        myscroll = $("#scroll-top");
    colorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#c750a7").end()
        .eq(2).css("backgroundColor", "#1073c7").end()
        .eq(3).css("backgroundColor", "#dc9212").end()
        .eq(4).css("backgroundColor", "#27d82a");
    
    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        
    });
// Loading
    $(window).on('load', function () {
        $(".loading .spinner").fadeOut(1000, function () {
            $("body").css("overflow", "auto");
            $(this).parent().fadeOut(1000, function () {
                $(this).remove();
            });
        });
    });
    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 700) {
            myscroll.show();
        } else {
            myscroll.hide();
        }
    });
    myscroll.click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
    });
//Nice Scrolling
    $("body").niceScroll({
        cursorcolor: '#E41B17',
        cursorborder: '1px solid #E41B17'
    });
});
/*
========================================
jQuery Selectors and Events Activity
Name: Michael Barnes
Date: September 19, 2026
========================================
*/

$(document).ready(function () {

    /* ========================================
    Button Click Event
    ======================================== */

    $("#changeButton").on("click", function () {

        $(this).stop(true).animate({
            width: "180px",
            padding: "15px"
        }, 300)
        .animate({
            width: "120px",
            padding: "10px"
        }, 300);

        $("#buttonResult").text(
            "jQuery animated the button!"
        );

    });


    /* ========================================
    Paragraph Double-Click Event
    ======================================== */

    $("#interactiveParagraph").on("dblclick", function () {

        if ($(this).hasClass("expanded")) {

            $(this).stop(true).animate({
                fontSize: "16px",
                padding: "15px"
            }, 400);

            $(this).css({
                "background-color": "#eee",
                "font-weight": "normal"
            });

            $(this).text(
                "jQuery restored the paragraph. Double-click to make it grow again."
            );

            $(this).removeClass("expanded");

        } else {

            $(this).stop(true).animate({
                fontSize: "24px",
                padding: "25px"
            }, 400);

            $(this).css({
                "background-color": "lightblue",
                "font-weight": "bold"
            });

            $(this).text(
                "jQuery enlarged this paragraph! Double-click again to let jQuery shrink it back."
            );

            $(this).addClass("expanded");

        }

    });


    /* ========================================
    Image Hover Event
    ======================================== */

    $("#interactiveImage").on("mouseenter", function () {

        $(this).stop(true).animate({
            width: "500px",
            marginLeft: "100px"
        }, 500);

        $(this).css({
            "transform": "rotate(3deg)",
            "box-shadow": "0 10px 25px rgba(0, 0, 0, 0.4)"
        });

        $("#imageResult").text(
            "jQuery moved, resized, and styled the image! Move the mouse away to restore it."
        );

    });


    $("#interactiveImage").on("mouseleave", function () {

        $(this).stop(true).animate({
            width: "400px",
            marginLeft: "0px"
        }, 500);

        $(this).css({
            "transform": "rotate(0deg)",
            "box-shadow": "none"
        });

        $("#imageResult").text(
            "Move your mouse over the image to see jQuery move and resize it."
        );

    });

});
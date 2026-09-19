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

        $(this).animate({
            width: "180px",
            padding: "15px"
        }, 300)
        .animate({
            width: "120px",
            padding: "10px"
        }, 300);

        $("#buttonResult").text(
            "The button was clicked and animated using jQuery!"
        );

        setTimeout(function () {
            $("#buttonResult").text(
                "Click the button to see a jQuery event in action."
            );
        }, 1500);

    });


    /* ========================================
    Paragraph Double-Click Event
    ======================================== */

    $("#interactiveParagraph").on("dblclick", function () {

        if ($(this).hasClass("expanded")) {

            $(this).animate({
                fontSize: "16px",
                padding: "15px"
            }, 400);

            $(this).css({
                "background-color": "#eee",
                "font-weight": "normal"
            });

            $(this).text(
                "Double-click this paragraph to make it grow and change its appearance."
            );

            $(this).removeClass("expanded");

        } else {

            $(this).animate({
                fontSize: "24px",
                padding: "25px"
            }, 400);

            $(this).css({
                "background-color": "lightblue",
                "font-weight": "bold"
            });

            $(this).text(
                "You double-clicked the paragraph and jQuery changed its appearance!"
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

        $("#imageResult").text(
            "You moved the mouse over the image and jQuery animated it!"
        );

    });


    $("#interactiveImage").on("mouseleave", function () {

        $(this).stop(true).animate({
            width: "400px",
            marginLeft: "0px"
        }, 500);

        $("#imageResult").text(
            "Move your mouse over the image to see it move and resize."
        );

    });

});
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

    });


    /* ========================================
    Paragraph Double-Click Event
    ======================================== */

    $("#interactiveParagraph").on("dblclick", function () {

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
/*
========================================
jQuery Selectors and Events Activity
Name: Michael Barnes
Date: September 19, 2026
========================================
*/

$(document).ready(function () {

    /* ========================================
    BUTTON CLICK EVENT
    ======================================== */

    $("#changeButton").on("click", function () {

        $(this).stop(true)
            .animate({
                width: "180px",
                padding: "15px",
                marginLeft: "30px"
            }, 250)
            .animate({
                width: "140px",
                padding: "12px",
                marginLeft: "0px"
            }, 250)
            .animate({
                width: "160px",
                padding: "14px",
                marginLeft: "15px"
            }, 250)
            .animate({
                width: "120px",
                padding: "10px",
                marginLeft: "0px"
            }, 250);

        $(this).css({
            "transform": "rotate(5deg)"
        });

        $("#buttonResult").text(
            "jQuery made the button bounce and change!"
        );

        setTimeout(function () {

            $("#changeButton").css({
                "transform": "rotate(0deg)"
            });

            $("#buttonResult").text(
                "Click the button to see jQuery animate it."
            );

        }, 1500);

    });


    /* ========================================
    PARAGRAPH DOUBLE-CLICK EVENT
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
    IMAGE HOVER EVENT
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


    /* ========================================
    CONTACT FORM VALIDATION
    ======================================== */

    $("#feedback_form").validate({

        rules: {

            name: {
                required: true
            },

            email: {
                required: true,
                email: true,
                minlength: 8
            },

            subject: {
                required: true
            },

            message: {
                required: true,
                minlength: 10
            }

        },

        messages: {

            name: {
                required: "Please enter your name."
            },

            email: {
                required: "Email is required.",
                email: "Enter a valid email address.",
                minlength: "Email must be at least 8 characters."
            },

            subject: {
                required: "Please enter a subject."
            },

            message: {
                required: "Please enter a message.",
                minlength: "Please enter at least 10 characters."
            }

        },

        invalidHandler: function (event, validator) {

            let errors = validator.numberOfInvalids();

            if (errors) {

                $(".form_errors").text(
                    "You missed " + errors +
                    " required field(s). Please correct them."
                );

            } else {

                $(".form_errors").text("");

            }

        },


        /* ========================================
        JQUERY SUBMIT BUTTON INTERACTION
        ======================================== */

        submitHandler: function (form) {

            $("#submitButton")
                .stop(true)
                .animate({
                    marginLeft: "60px",
                    width: "160px",
                    padding: "15px"
                }, 300)
                .animate({
                    marginLeft: "20px",
                    width: "140px",
                    padding: "12px"
                }, 200)
                .text("Sending...");

            setTimeout(function () {

                $("#submitButton")
                    .animate({
                        marginLeft: "0px",
                        width: "140px",
                        padding: "10px"
                    }, 300)
                    .text("Submitted!");

                $("#formResult").text(
                    "jQuery handled the form submission successfully!"
                );

                $(form).find("input, textarea").prop("disabled", true);

            }, 800);

        }

    });

});
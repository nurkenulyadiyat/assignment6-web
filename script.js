$(document).ready(function () {
    console.log("jQuery is ready!");
    $("#ready-status").text("jQuery is ready!");

    $("#change-text").on("click", function () {
        $("#id-example").text("The ID selector changed this text.");
    });

    $("#change-html").on("click", function () {
        $(".class-example").html("The class selector added <strong>bold text</strong>.");
    });

    $("#change-style").on("click", function () {
        $("mark").css({ backgroundColor: "#275ac3", color: "#ffffff" });
    });

    $("#hide-text").on("click", function () {
        $("#visibility-text").hide();
    });

    $("#show-text").on("click", function () {
        $("#visibility-text").show();
    });

    $("#toggle-text").on("click", function () {
        $("#visibility-text").toggle();
    });

    $("#fade-in").on("click", function () {
        $("#fade-image").stop(true, true).fadeIn(500);
    });

    $("#fade-out").on("click", function () {
        $("#fade-image").stop(true, true).fadeOut(500);
    });

    $("#fade-toggle").on("click", function () {
        $("#fade-image").stop(true, true).fadeToggle(500);
    });

    $("#slide-up").on("click", function () {
        $("#slide-panel").stop(true, true).slideUp(400);
    });

    $("#slide-down").on("click", function () {
        $("#slide-panel").stop(true, true).slideDown(400);
    });

    $("#slide-toggle").on("click", function () {
        $("#slide-panel").stop(true, true).slideToggle(400);
    });

    let nextItem = 3;

    $("#add-last").on("click", function () {
        $("#item-list").append("<li>Item " + nextItem + "</li>");
        nextItem++;
    });

    $("#add-first").on("click", function () {
        $("#item-list").prepend("<li>Item " + nextItem + "</li>");
        nextItem++;
    });

    $("#remove-last").on("click", function () {
        $("#item-list li").last().remove();
    });

    $("#change-image").on("click", function () {
        if ($("#attribute-image").attr("src") === "images/day.svg") {
            $("#attribute-image").attr("src", "images/night.svg");
            $("#attribute-image").attr("alt", "Mountains and a lake under the moon");
        } else {
            $("#attribute-image").attr("src", "images/day.svg");
            $("#attribute-image").attr("alt", "Mountains and a lake on a sunny day");
        }
    });

    $("#change-link").on("click", function () {
        if ($("#resource-link").attr("href") === "https://api.jquery.com/") {
            $("#resource-link").attr("href", "https://learn.jquery.com/");
            $("#resource-link").text("jQuery Learning Center");
        } else {
            $("#resource-link").attr("href", "https://api.jquery.com/");
            $("#resource-link").text("jQuery API documentation");
        }
    });

    $("#name-input").on("input", function () {
        $("#name-output").text($("#name-input").val());
    });

    $("#email-input").on("input", function () {
        $("#email-output").text($("#email-input").val());
    });

    $("#profile-form").on("submit", function (event) {
        event.preventDefault();
    });

    $("#animate-basic").on("click", function () {
        $("#basic-box").stop(true, true)
            .css({ left: 12, top: 12, width: 60, height: 60 })
            .animate({ left: 112, width: 100, height: 100 }, 700);
    });

    $("#reset-basic").on("click", function () {
        $("#basic-box").stop(true, true).css({ left: 12, top: 12, width: 60, height: 60 });
    });

    $("#animate-sequence").on("click", function () {
        $("#sequence-box").stop(true, true)
            .css({ left: 12, top: 12, width: 60, height: 60 })
            .animate({ left: 132 }, 500)
            .animate({ top: 132 }, 500)
            .animate({ width: 30, height: 30 }, 500)
            .animate({ left: 12, top: 12, width: 60, height: 60 }, 500);
    });

    $("#reset-sequence").on("click", function () {
        $("#sequence-box").stop(true, true).css({ left: 12, top: 12, width: 60, height: 60 });
    });

    $("#animate-combined").on("click", function () {
        $("#combined-box").stop(true, true)
            .css({ left: 12, top: 12, width: 60, height: 60, opacity: 1 })
            .animate({ left: 112, top: 82, width: 100, height: 100, opacity: 0.4 }, 900);
    });

    $("#reset-combined").on("click", function () {
        $("#combined-box").stop(true, true).css({ left: 12, top: 12, width: 60, height: 60, opacity: 1 });
    });

    $(".accordion-button").on("click", function () {
        let button = $(this);
        let panel = button.parent().next(".accordion-panel");

        panel.stop(true, true).slideToggle(300);
        button.attr("aria-expanded", button.attr("aria-expanded") === "false" ? "true" : "false");
    });
});

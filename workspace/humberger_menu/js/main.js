$(document).ready(function() {

    $(".nav-toggle-close").hide();
    $(".nav-list").hide();
    $(".nav-toggle-open").click(function() {
        $(".nav-list").slideToggle("slow", function() {
            $(".nav-toggle-open").hide();
            $(".nav-toggle-close").show();
        });
    });

    $(".nav-toggle-close").click(function() {
        $(".nav-list").slideToggle("slow", function() {
            $(".nav-toggle-close").hide();
            $(".nav-toggle-open").show();
        });
    });

});
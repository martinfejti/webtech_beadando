$(document).ready(function() {
    $("#content").load("home.html");

    $.each($(".navigation_bar_div_span"), function(navBarIndex, navBarValue) {
        $(navBarValue).click(function(event) {
            event.preventDefault();
            
            if (!($(this).find("a").attr("href") == "index.html")) {
                $("#content").load($(this).find("a").attr("href"));
            } else {
                open("index.html", "_self");
            }
        });
    });
});

function showForm(formToShow) {
    $("#" + formToShow).css("display", "block");
}

function closeForm(formToClose) {
    $("#" + formToClose).css("display", "none");
}

function getCarsByManufacturer(manufacturer) {
    document.cookie="name=" + manufacturer;

    $("#selected_cars_list").remove();

    $.getJSON("manufacturer", function(data) {
        var table = $("<table class='content_list_table'></table>");
        $(table).append("<p>" + manufacturer + " cars in the database:</p>");
        $(table).append("<tr><th>Name</th><th>Consumption</th><th>Color</th><th>Manufacturer</th><th>Available</th><th>Year</th><th>Horse Power</th></tr>");
        $.each(data, function(key, value) {
            var row = $("<tr></tr>");
            var name = $("<td>" + value.name + "</td>");
            var consumption = $("<td>" + value.consumption + "</td>");
            var color = $("<td>" + value.color + "</td>");
            var manufacturer = $("<td>" + value.manufacturer + "</td>");
            var available = $("<td>" + value.manufacturer + "</td>");
            var year = $("<td>" + value.year + "</td>");
            var horsepower = $("<td>" + value.horsepower + "</td>");

            $(row).append(name);
            $(row).append(consumption);
            $(row).append(color);
            $(row).append(manufacturer);
            $(row).append(available);
            $(row).append(year);
            $(row).append(horsepower);
            
            $(table).append(row);
        })
        $(table).append("<button onClick=closeForm('selected_cars_list')>Close</button>");
        $("#content").append("<div id='selected_cars_list'></div>");
        $("#selected_cars_list").append(table);
    })
}
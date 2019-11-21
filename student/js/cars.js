$(document).ready(function() {
    loadCarsTable();
})

function loadCarsTable() {
    $.getJSON("cars", function(data) {
        var table = $("<table class='content_list_table'></table>");
        $(table).append("<tr><th>Name</th><th>Consumption</th><th>Color</th><th>Manufacturer</th><th>Available</th><th>Year</th><th>Horsepower</th></tr>");

        $.each(data, function(key, value) {
            var row = $("<tr></tr>");
            var nameCell = $("<td>" + value.name + "</td>");
            var consumptionCell = $("<td>" + value.consumption + "</td>");
            var colorCell = $("<td>" + value.color + "</td>");
            var manufacturerCell = $("<td>" + value.manufacturer + "</td>");
            var availableCell = $("<td>" + value.available + "</td>");
            var yearCell = $("<td>" + value.year + "</td>");
            var horsePowerCell = $("<td>" + value.horsepower + "</td>")

            $(row).append(nameCell);
            $(row).append(consumptionCell);
            $(row).append(colorCell);
            $(row).append(manufacturerCell);
            $(row).append(availableCell);
            $(row).append(yearCell);
            $(row).append(horsePowerCell);

            $(table).append(row);
        })

        $("#cars_table_div").append(table);
    })
}

function addCar() {
    var name = $("#name").val();
    var consumption = $("#consumption").val();
    var color = $("#color").val();
    var manufacturer = $("#manufacturer").val();
    var available = $("#available").val();
    var year = $("#year").val();
    var horsepower = $("#horsepower").val();

    if (name == "" || consumption == "" || color == "" || manufacturer == "" || available == "" || year == "" || horsepower == "") {
        alert("All input fields must be filled!");
    } else {
        var car = {
            name: name,
            consumption: consumption,
            color: color,
            manufacturer: manufacturer,
            available: available,
            year: year,
            horsepower: horsepower
        }

        $.post("addCar", car)
            .done(function() {
                alert("New car successfully added to the database!");
                $("#content").load("cars.html");
            })
            .fail(function() {
                alert("An error has occured during the process!");
            })
    }
}
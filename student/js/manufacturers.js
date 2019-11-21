$(document).ready(function() {
    loadManufacturersTable();
})

function loadManufacturersTable() {
    $.getJSON("manufacturers", function(data) {
        var table = $("<table class='content_list_table'></table>");
        $(table).append("<tr><th>Name</th><th>Country</th><th>Foundation</th></tr>");

        $.each(data, function(key, value) {
            var row = $("<tr></tr>");
            var nameCell = $('<td id="authorId" onClick="getCarsByManufacturer(' +
            "'" +
            value.name +
            "'" +
            ')">' + value.name + '</td>');
            var countryCell = $("<td>" + value.country + "</td>");
            var foundationCell = $("<td>" + value.founded + "</td>")

            $(row).append(nameCell);
            $(row).append(countryCell);
            $(row).append(foundationCell);

            $(table).append(row);
        })

        $("#manufacturers_table_div").append(table);
    })
}

function addManufacturer() {
    var name = $("#name").val();
    var country = $("#country").val();
    var founded = $("#founded").val();

    if (name == "" || country == "" || founded == "") {
        alert("All input fields must be filled!");
    } else {
        var manufacturer = {
            name: name,
            country: country,
            founded: founded
        }

        $.post("addManufacturers", manufacturer)
            .done(function() {
                alert("New manufacturer successfully added to the database!");
                $("#content").load("manufacturers.html");
            })
            .fail(function() {
                alert("Some problem occured during the process!");
            })
    }
}


var four_four_table = [
    {Header1: "1, 1", Header2: "1,2", Header3: "1,3", Header4: "1,4"},
    {Header1: "2,1", Header2: "2,2", Header3: "2,3", Header4: "2,4"},
    {Header1: "3,1", Header2: "3,2", Header3: "3,3", Header4: "3,4"},
    {Header1: "4,1", Header2: "4,2", Header3: "4,3", Header4: "4,4"},
];

function build_table(data) {
    var table = document.createElement("table");

    var fields = Object.keys(data[0]);
    var headRow = document.createElement("tr");

    fields.forEach(function(field) {
        var headCell = document.createElement("th");
        headCell.textContent = field;
        headRow.appendChild(headCell);
    });
    table.appendChild(headRow);

    data.forEach(function(object) {
        var row = document.createElement("tr");

        fields.forEach(function(field) {
            var cell = document.createElement("td");
            cell.textContent = object[field];
            if (typeof object[field] == "number")
            cell.style.textAlign = "right";
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    return table;
}

create_button = function(id, text) {
    var new_button = document.createElement('button');
    new_button.setAttribute('id', id);
    new_button.textContent = text

    return new_button
}

document.body.appendChild(build_table(four_four_table));


document.body.appendChild(create_button('upbutton', 'UP'));
document.body.appendChild(create_button('downbutton', 'DOWN'));
document.body.appendChild(create_button('leftbutton', 'LEFT'));
document.body.appendChild(create_button('rightbutton', 'RIGHT'));

document.getElementById('upbutton').addEventListener("click", function() {
    console.log('upbutton click');
});

document.getElementById('downbutton').addEventListener("click", function() {
    console.log('downbutton click');
});

document.getElementById('leftbutton').addEventListener("click", function() {
    console.log('leftbutton click');
});

document.getElementById('rightbutton').addEventListener("click", function() {
    console.log('rightbutton click');
});

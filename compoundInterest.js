// Write the code to generate table
// This function generates a compound interest table.

function generateTable(form) {

  var amount; // accumulated value for each new year
  var rate; // interest rate
  var years; // years for principal to grow
  var interest; // interest earned each year
  var table; // compound interest table
  var year = 1; // the year being calculated
  amount = form.elements['deposit'].valueAsNumber;
  rate = form.elements['rate'].valueAsNumber;
  years = form.elements['years'].valueAsNumber;
  table =
    '<table>' +
    '<tr><th>Year</th><th>Starting Value</th>' +
    '<th>Interest Earned</th><th>Ending Value</th></tr>';


// ---> Write your code here to generate the table and show it in the page

    const tbl = document.createElement("table");

    var cellText;

    const tblBody = document.createElement("tbody");


    const row0 = document.createElement("tr");

    var row0cell0 = document.createElement('th');
    cellText = document.createTextNode('Year');
    row0cell0.appendChild(cellText);
    row0.appendChild(row0cell0);

    var row0cell1 = document.createElement('th');
    cellText = document.createTextNode('Starting Value');
    row0cell1.appendChild(cellText);
    row0.appendChild(row0cell1);

    var row0cell2 = document.createElement('th');
    cellText = document.createTextNode('Interest Earned');
    row0cell2.appendChild(cellText);
    row0.appendChild(row0cell2);

    var row0cell3 = document.createElement('th');
    cellText = document.createTextNode('Ending Value');
    row0cell3.appendChild(cellText);
    row0.appendChild(row0cell3);

    tblBody.appendChild(row0);

    for (let i = 0; i < years; i++) {

        interest = (amount * rate) / 100;

        var row = document.createElement("tr");

        var cell0i = document.createElement("td");
        cellText = document.createTextNode(i+1);

        cell0i.appendChild(cellText);

        row.appendChild(cell0i);

        amount = amount + interest;

        var cell1i = document.createElement("td");
        cellText = document.createTextNode(amount);

        cell1i.appendChild(cellText);

        row.appendChild(cell1i);

        var cell3i = document.createElement("td");
        cellText = document.createTextNode(interest);

        cell3i.appendChild(cellText);

        row.appendChild(cell3i);

        var cell4i = document.createElement("td");
        cellText = document.createTextNode(amount);

        cell4i.appendChild(cellText);

        row.appendChild(cell4i);

        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);

    document.body.appendChild(tbl);
    
} // end generateTable

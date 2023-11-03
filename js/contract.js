document.getElementById('info').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;


    // Create new table row
    const newRow = document.createElement('tr');

    // Create table cells
    const nameCell = document.createElement('td');
    const ageCell = document.createElement('td');
    const addressCell = document.createElement('td');
    const phoneCell = document.createElement('td');

    // Set cell values
    nameCell.textContent = name;
    ageCell.textContent = age;
    addressCell.textContent = address;
    phoneCell.textContent = phone;
    // Append cells to row
    newRow.appendChild(nameCell);
    newRow.appendChild(ageCell);
    newRow.appendChild(addressCell);
    newRow.appendChild(phoneCell);
    // Append row to table
    document.getElementById('infoTable').appendChild(newRow);

    // Reset form
    document.getElementById('info').reset();
});
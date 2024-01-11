function displayData() {
    const form = document.getElementById('registrationForm');
    const userDataDiv = document.getElementById('userData');

    // Collect form data
    const formData = new FormData(form);
    const entries = formData.entries();

    // Create a table to display the user data
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    headerRow.insertCell(0).textContent = 'Field';
    headerRow.insertCell(1).textContent = 'Value';

    // Iterate through form data and populate the table
    for (const entry of entries) {
        const [fieldName, fieldValue] = entry;
        const row = table.insertRow();
        row.insertCell(0).textContent = fieldName;
        row.insertCell(1).textContent = fieldValue;
    }

    // Display the table
    userDataDiv.innerHTML = '';
    userDataDiv.appendChild(table);
}
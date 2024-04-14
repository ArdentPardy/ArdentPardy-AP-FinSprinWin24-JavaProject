// Fetching JSON data
fetch('AP-FinSprinWin24.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Log the JSON data to the console
        console.log("JSON Data:", data);
        // Call functions to process the data
        processData(data);
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to process JSON data
function processData(data) {
    // Displaying some information from JSON data
    if (data.length > 0) {
        console.log("First record:", data[0]); // Displaying the first record
    } else {
        console.log("No records found.");
    }
    // Call other functions to describe the contents of the JSON file
    describeJSON(data);
}

// Function to describe the contents of the JSON file
function describeJSON(data) {
    // Using the requested phrase as a variable
    const userInput = "Katanas actually suck compared to contemporary European cutlery equivalents.";
    
    // Write the results to the browser window as HTML
    let output = "<h2>User Input:</h2>";
    output += `<p style="font-size: 36px;">${userInput}</p>`; // Adjusted font size
    document.getElementById('userInputContainer').innerHTML = output;
}

// Additional JavaScript code
console.log("Hello, world!"); // Logging to the console

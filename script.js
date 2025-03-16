// Function to show the clicked tab and hide others
function showTab(tabId) {
     // Get all tab contents
     const contents = document.querySelectorAll('.tab-content');
     const buttons = document.querySelectorAll('.tab-button');
     
     // Hide all tab contents and remove active class from buttons
     contents.forEach(content => content.classList.remove('active'));
     buttons.forEach(button => button.classList.remove('active'));
     
     // Show the clicked tab content and add active class to the button
     document.getElementById(tabId).classList.add('active');
     const activeButton = [...buttons].find(button => button.textContent.toLowerCase() === tabId);
     activeButton.classList.add('active');
 }
 
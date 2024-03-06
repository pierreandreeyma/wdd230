// Declare variables for input, button, and list elements
const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');

// Add click event listener to the button
button.addEventListener('click', () => {
  // Check if input is not blank
  if (input.value !== '') {
    // Create a new list item element
    const listItem = document.createElement('li');

    // Populate the list item content
    listItem.textContent = input.value;

    // Create a delete button element
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    // Add delete button to the list item
    listItem.appendChild(deleteButton);

    // Add the list item to the list
    list.appendChild(listItem);

    // Add click event listener to the delete button
    deleteButton.addEventListener('click', () => {
      list.removeChild(listItem);
    });

    // Clear the input value and focus it
    input.value = '';
    input.focus();
  }
});

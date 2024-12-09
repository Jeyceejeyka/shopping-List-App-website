## Shopping List Application
The Shopping List Application is a simple yet powerful web app that allows users to manage their shopping lists efficiently. It enables users to add items, mark them as purchased, remove them, and clear the entire list. The app utilizes the browser's session storage to preserve data, allowing the list to persist as long as the page is open.

The application is built with HTML, CSS, and JavaScript, and features a user-friendly interface for managing a shopping list dynamically.

## Features
Add Items: Allows users to input item names and prices and add them to the shopping list.
Mark as Purchased: Users can mark an item as purchased by clicking the "Mark purchased" button, which strikes through the item.
Delete Items: Users can remove items from the list by clicking the "X" button next to an item.
Clear List: Clears all the items from the shopping list at once.
Persistent Storage: The shopping list data is stored in the browser's session storage, ensuring the list is retained as long as the session is active.
How it Works
## JavaScript Logic:
## Session Storage:

When the user adds an item, the item is stored in an array (arrayList) and then saved in the session storage. This allows the list to persist during the current session.
Items are retrieved from session storage when the page is loaded, ensuring that the list is available even if the page is refreshed.
## Adding Items:

When the user clicks the Add button, the app checks if both the item name and price are entered. If either is missing, an alert will prompt the user to fill in the fields.
A new list item (li) is created with the item name and price displayed. The item also contains two buttons:
Mark Purchased: When clicked, it toggles a line-through effect to mark the item as purchased.
Delete Item: Removes the item from the list and updates the session storage.
## Clear List:

When the user clicks the Clear list button, all the items are removed from the list, and the session storage is reset.
## Persisting Data:

The list of items is saved in the session storage as an array, allowing for persistence. Even if the user refreshes the page, the list will be reloaded from session storage.
Features Breakdown
## Add Items:
Type the name and price of the item in the input fields and click Add. The item will appear in the list, and the data will be saved in session storage.

## Mark Items as Purchased:
Click the Mark purchased button next to any item to strike through it, indicating it has been purchased. The item will be visually marked with a line through it for easier identification.

## Delete Items:
To remove an item from the list, click the X button next to it. The item will be removed from the DOM, and session storage will be updated to reflect the changes.

## Clear the List:
Click the Clear list button to remove all items from the list. This will also clear the session storage, resetting the list entirely.

## Installation
To run this project locally:

## Clone the repository:

bash
Copy code
git clone https://github.com/your-username/shopping-list.git
Navigate to the project folder:

bash
Copy code
cd shopping-list
Open the index.html file in any web browser to start using the app.

## Files Overview
index.html: Contains the HTML structure of the application, including input fields, buttons, and the display area for the shopping list.
style.css: Provides the styling for the application, ensuring it is visually appealing and responsive on different screen sizes.
index.js: The JavaScript file that handles the logic of the application. It manages user interactions such as adding, deleting, marking, and clearing items. It also handles the session storage to ensure the list persists across page refreshes.
Technology Stack
HTML: Used to create the structure of the application.
CSS: Responsible for styling the app and ensuring responsiveness on different devices.
JavaScript: Handles the dynamic functionality of the app, including user interactions and session storage management.
How to Use
Open the app in a browser.
Enter an item name and price in the input fields and click the Add button to add the item to the list.
Click Mark purchased to mark an item as purchased (striking it through).
Click the X button next to any item to delete it.
Click the Clear list button to remove all items and reset the list.
## License
This project is open source.

## Acknowledgements
Inspired by various to-do list applications, but specifically designed for managing shopping lists.
This project was created as part of a self-learning effort in web development.

# Simple To-Do App

A clean and intuitive To-Do application built with vanilla JavaScript, HTML, and CSS. This project focuses on fundamental web development concepts, including dynamic DOM manipulation, event handling, and client-side data persistence using Local Storage.

### ✨ [View the Live Demo](https://soustern.github.io/To-Do-App/)

## Key Features

*   **Add & Remove Tasks:** Easily add new tasks to your list and remove them with a single click.
*   **Data Persistence:** Your to-do list is automatically saved to your browser's **Local Storage**, so your tasks will be there when you return.
*   **Clean UI:** A minimalist and user-friendly interface for a distraction-free experience.
  
## Tech Stack

This project was built from the ground up using core web technologies, demonstrating a strong understanding of the fundamentals.

*   **JavaScript (ES6+):** Used for all the application logic, including DOM manipulation, event listeners, and interacting with Local Storage.
*   **HTML5:** Semantic markup for a structured and accessible layout.
*   **CSS3:** Custom styling for the user interface, including Flexbox for a responsive layout.

## How to Run Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

You just need a modern web browser that supports HTML5, CSS3, and JavaScript.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/soustern/To-Do-App.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd To-Do-App
    ```
3.  **Open the `index.html` file in your browser:**
    *   You can simply double-click the file, or right-click and choose "Open with" your preferred browser.

## Architectural Overview

The application follows a simple yet effective architecture:

1.  **Event-Driven Logic:** The application listens for user events (like form submissions and button clicks) to trigger functions.
2.  **DOM Manipulation:** When tasks are added, removed, or updated, the JavaScript code dynamically creates, modifies, or deletes the corresponding HTML elements in the DOM without requiring a page refresh.
3.  **Local Storage API:** The entire to-do list is stored as a JSON string in the browser's Local Storage. The application retrieves and parses this data on load, and updates it whenever a change is made, ensuring data persistence.

## Future Improvements

*   **Edit Tasks:** Implement a feature to allow users to edit the text of an existing task.
*   **Drag-and-Drop Reordering:** Allow users to reorder tasks by dragging and dropping them.
*   **Multiple Lists:** Add the ability for users to create and manage multiple to-do lists.

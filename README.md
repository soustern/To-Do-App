# Vanilla JS Kanban Board

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-orange?logo=html5)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-blue?logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)

A feature-rich Kanban board application built from the ground up with **vanilla JavaScript (ES6+), HTML5, and CSS3**. This project demonstrates a deep understanding of core web technologies, focusing on a modular architecture, advanced DOM manipulation, and a polished user experience without relying on any external frameworks or libraries.

**✨ [View the Live Demo](https://soustern.github.io/To-Do-App/)**

---

## Technical Highlights & Architectural Decisions

This application was architected to be robust, maintainable, and performant, showcasing best practices in a vanilla JS environment.

### 1. Modular, Event-Driven Architecture
The application logic is cleanly separated into distinct modules based on functionality (`create-card.js`, `delete-card.js`, `drag-and-drop.js`, etc.). This separation of concerns ensures the codebase is easy to navigate, debug, and extend—a best practice often enforced by frameworks, implemented here manually to demonstrate strong architectural fundamentals.

### 2. Advanced Drag-and-Drop Implementation
The drag-and-drop functionality was engineered for a smooth and intuitive user experience:
- **`mousedown` Event:** Initiates the drag, dynamically cloning the card and appending it to the `body` to escape the overflow constraints of the columns.
- **Performance:** The cloned card's position is updated using the `transform: translate()` CSS property during the `mousemove` event, ensuring hardware-accelerated, GPU-powered animation that is smoother than legacy `top`/`left` positioning.
- **Dynamic Placeholder:** A placeholder element is intelligently inserted into the list to provide clear visual feedback on the drop location.
- **Precision Calculation:** The `getDragAfterElement` function calculates the precise insertion point in real-time by comparing the cursor's Y-coordinate against the vertical midpoint of potential sibling elements.

### 3. Dynamic DOM Manipulation & State Management
Full CRUD (Create, Read, Update, Delete) functionality for tasks is handled via efficient and direct DOM manipulation.
- **Modals for CRUD:** Task creation and editing are handled through modal windows, preventing page reloads and providing a seamless UX.
- **Graceful Deletion:** When a card is deleted, it is not instantly removed. Instead, a CSS class is applied, triggering a smooth scale-out and fade animation. The element is only removed from the DOM after the animation completes, using a `transitionend` event listener.

### 4. Modern CSS & UI/UX
The interface was designed with a modern aesthetic and user experience in mind.
- **Glassmorphism UI:** Columns and modals use a `backdrop-filter: blur()` to create a stylish, semi-transparent "glass" effect.
- **Custom CSS Animations:** Subtle animations (`@keyframes`) for events like card creation (`appearFromWithin`) and modal pop-ups (`jumpUp`) enhance the user's perception of interactivity.
- **Fluid & Responsive Design:** The layout uses modern CSS like Flexbox and `clamp()` for fluid sizing, ensuring a consistent experience across different viewports.
- **User Customization:** Users can select their preferred background, which is dynamically applied to the `body` element.

## Tech Stack

| Category      | Technology                                    |
|---------------|-----------------------------------------------|
| **Core Logic**| Vanilla JavaScript (ES6+)                     |
| **Markup**    | Semantic HTML5                                |
| **Styling**   | Modern CSS3 (Flexbox, Animations, `clamp()`) |
| **Code Style**| Modular, Event-Driven                         |

## Project Structure

The codebase is organized with a focus on modularity and separation of concerns.

```
/
├── images/             # Background images (.webp)
├── scripts/            # Modular JavaScript files
│   ├── create-card.js
│   ├── delete-card.js
│   ├── drag-and-drop.js
│   ├── edit-card.js
│   └── select-background.js
├── index.html          # Main HTML structure
├── style.css           # All custom styles
└── reset.css           # CSS reset for browser consistency
```

## Local Setup

To run this project on your local machine, no special tools are needed—just a modern web browser.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/soustern/To-Do-App.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd To-Do-App
    ```
3.  **Open the `index.html` file in your browser.**

## License

This project is licensed under the MIT License.

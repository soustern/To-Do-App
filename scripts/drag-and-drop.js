const cards = document.querySelectorAll(`.column .card`);
const columnsMain = document.querySelectorAll(`.column-main`);
let draggedCard = null;
let offsetX = 0;
let offsetY = 0;

cards.forEach(card => {
    card.addEventListener(`animationend`, () => {
        card.style.animationName = `none`;
    });
    card.addEventListener(`mousedown`, dragAndDrop);  
});

function dragAndDrop(event) {
    // Prevent animation from happening again
    this.style.animationName = `none`;

    event.preventDefault();
    if (event.target.matches(`.button-edit, .button-delete`)) return;

    draggedCard = this;

    const draggedCardRect = draggedCard.getBoundingClientRect();
    offsetX = event.clientX - draggedCardRect.left;
    offsetY = event.clientY - draggedCardRect.top;

    draggedCard.insertAdjacentHTML(
        `beforebegin`,
        `<div class="placeholder" style="height:${draggedCardRect.height}px"></div>`
    );

    draggedCard.classList.add(`dragging`);
    draggedCard.style.width = `${draggedCardRect.width}px`;
    draggedCard.style.position = "absolute";
    draggedCard.style.zIndex = 1000;
    draggedCard.style.pointerEvents = "none"; // prevent flickering

    document.body.appendChild(draggedCard);

    moveAt(event.pageX, event.pageY);

    draggedCard.addEventListener(`animationend`, () => {
        card.style.animationName = `none`;
    });
    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp, { once: true });
}

function moveAt(x, y) {
    // use translate for smoother GPU rendering
    draggedCard.style.transform = `translate(${x - offsetX}px, ${y - offsetY}px)`;
}

function onMouseMove(event) {
    document.body.style.cursor = `grab`;
    if (!draggedCard) return;
    moveAt(event.pageX, event.pageY);
    updatePlaceholderPosition(event.clientX, event.clientY);
}

function onMouseUp() {
    document.body.style.cursor = `default`;
    if (!draggedCard) return;

    const placeholder = document.querySelector(`.placeholder`);
    if (placeholder) {
        placeholder.parentElement.insertBefore(draggedCard, placeholder);
        placeholder.remove();
    }

    draggedCard.style.transform = "";
    draggedCard.style.position = "";
    draggedCard.style.zIndex = "";
    draggedCard.style.width = "";
    draggedCard.style.pointerEvents = "";

    draggedCard.classList.remove(`dragging`);
    document.removeEventListener(`mousemove`, onMouseMove);
    draggedCard = null;
}

function updatePlaceholderPosition(x, y) {
    const placeholder = document.querySelector(`.placeholder`);
    if (!placeholder) return;

    const targetColumn = Array.from(columnsMain).find(column => {
        const rect = column.getBoundingClientRect();
        return x >= rect.left && x <= rect.right &&
               y >= rect.top && y <= rect.bottom;
    });

    if (targetColumn) {
        const afterElement = getDragAfterElement(targetColumn, y);
        if (afterElement) {

            // This would be necessary to animate the placeholder
            // if (!afterElement.previousElementSibling?.matches(`.placeholder`)){}
            targetColumn.insertBefore(placeholder, afterElement);

        } else {
            // this would be necessary to animate the placeholder
            // if (!targetColumn.querySelector(`.placeholder`)){}
            targetColumn.appendChild(placeholder);
        }
    }
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll(`.card:not(.dragging)`)];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

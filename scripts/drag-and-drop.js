const cards = document.querySelectorAll(`.column .card`);
const columnMain = document.querySelectorAll(`.column-main`);
let draggedCard = null;

cards.forEach(card => {
    card.addEventListener(`dragstart`, (event) => {
        draggedCard = event.target;
        console.log(draggedCard.id);
        setTimeout(() => {
            draggedCard.classList.add(`dragging`);
        }, 0);
    });
    card.addEventListener(`dragend`, (event) => {

        draggedCard.classList.remove(`dragging`);
    });
})
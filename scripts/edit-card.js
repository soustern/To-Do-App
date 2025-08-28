// const columns = document.querySelectorAll(`.column`);
const editModal = document.querySelector(".card-editor-wrapper");
const buttonCancel = editModal.querySelector(".button-cancel");
const buttonConfirm = editModal.querySelector(".button-confirm");
const editModalTitle = editModal.querySelector(`#ftitle`);
const editModalDescription = editModal.querySelector(`#fdescription`);
let currentlySelectedCard = null;

// Had to change a lot to make this state-driven instead of action-driven

columns.forEach(column => {
    column.addEventListener(`click`, (event) => {
        if (event.target.matches(".button-edit")) {
            const card = event.target.closest(".card")

            if (card) {
                currentlySelectedCard = card;
                editModalTitle.value = currentlySelectedCard.querySelector(`h3`).textContent;
                editModalDescription.value = currentlySelectedCard.querySelector(`p`).textContent;
                editModal.classList.remove(`disabled`);

                const cardEditor = editModal.querySelector(`.card-editor`);
                cardEditor.classList.add(`start-animation-jumpUp`);
                cardEditor.addEventListener(`animationend`, function() {
                    this.classList.remove(`start-animation-jumpUp`);
                }, {once: true});
            }
        };
    })
});

buttonConfirm.addEventListener(`click`, () => {
    currentlySelectedCard.querySelector(`h3`).textContent = editModalTitle.value;
    currentlySelectedCard.querySelector(`p`).textContent = editModalDescription.value;
    resetEditModal();
});

buttonCancel.addEventListener(`click`, () => {
    resetEditModal();
});

function resetEditModal() {
    currentlySelectedCard = null;
    editModal.classList.add(`disabled`);
};
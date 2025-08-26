const createModal = document.querySelector(".card-creator-wrapper"); 
const createModalTitle = createModal.querySelector(`#ftitle`);
const createModalDescription = createModal.querySelector(`#fdescription`);
let currentlySelectedColumn = null;

columns.forEach(column => {
    column.addEventListener('click', (event) => {
        if (event.target.matches(".button-add"))
        {
            currentlySelectedColumn = column;
            createModal.classList.remove('disabled');
        }
    });
});

// Button Cancel
createModal.querySelector(`.button-cancel`).addEventListener(`click`, () => {
    resetCreateModal();
});

// Button Confirm
createModal.querySelector(`.button-confirm`).addEventListener(`click`, () => {
    const columnMain = currentlySelectedColumn.querySelector(`.column-main`);
    const card = `<div class="card" id="${crypto.randomUUID()}">
                        <div class="card-header">
                            <h3>${createModalTitle.value}</h3>
                        </div>
                        <div class="card-main">
                            <p>${createModalDescription.value}</p>
                        </div>
                        <div class="card-footer">
                            <button class="button-edit">Edit</button>
                            <button class="button-delete">Delete</button>
                        </div>
                    </div>`
    columnMain.insertAdjacentHTML(`afterbegin`, card);
    resetCreateModal();
});

function resetCreateModal() {
    let currentlySelectedColumn = null;
    createModalTitle.value = ``;
    createModalDescription.value = ``;
    createModal.classList.add('disabled');
}
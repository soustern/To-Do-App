const toDo = document.getElementById("ToDo");

toDo.addEventListener(`click`, (event) => {
        if (event.target.matches(`.button-delete`)) {
            const card = event.target.closest(`.card`);

            if (card) {
                const cardId = card.id;
                console.log(`clicked card with id: ${cardId}`);
                
                card.classList.add(`deleted-card`);
                // setTimeout(() => card.remove(), 500);

                card.addEventListener(`transitioned`, () => {
                    card.remove()
                }, {once: true})
            }
        };
    }
);
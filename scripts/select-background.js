const images = document.querySelectorAll(`img`);
const selectedDivs = document.querySelectorAll(`.selected`);
const buttonSelect = document.querySelector(`.button-select`);
const arrowIcon = document.querySelector(`.fa-arrow-down-long`);
let imagesListOnScreen = false;

[...selectedDivs][0].style.opacity = 1;

buttonSelect.addEventListener(`click`, () => {
    const imagesList = buttonSelect.nextElementSibling;

    imagesList.classList.toggle(`onScreen`);
    arrowIcon.classList.toggle(`arrow-turned-up`);
});

images.forEach(image => {
    image.addEventListener(`click`, (event) => {

        selectedDivs.forEach(selectedDiv => {
            selectedDiv.style.opacity = 0;
        });

        console.log(image.id);
        document.body.style.backgroundImage = `url(images/${image.id}.webp)`;
        const selectedDiv = event.target.closest("li").querySelector(`.selected`);
        selectedDiv.style.opacity = `1`;
    });
});
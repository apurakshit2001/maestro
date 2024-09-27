const div = document.querySelector('.custom-div');

const getRandomValue = () => {
    return (Math.floor(Math.random() * 500));
}

const applyRandomBorderRadius = () => {
    const rand1 = getRandomValue();
    const rand2 = getRandomValue();
    const rand3 = getRandomValue();
    const rand4 = getRandomValue();

    div.style.borderRadius = `${rand1}px ${rand2}px ${rand3}px ${rand4}px`;
}

setInterval(() => {
    applyRandomBorderRadius()
}, 200);
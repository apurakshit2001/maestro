const div1 = document.querySelector('.item1');
const div2 = document.querySelector('.item2');
const div3 = document.querySelector('.item3');
const div4 = document.querySelector('.item4');


const getRandomValue = () => {
    return (Math.floor(Math.random() * 500));
}

const applyRandomBorderRadius = () => {
    const rand1 = getRandomValue();
    const rand2 = getRandomValue();
    const rand3 = getRandomValue();
    const rand4 = getRandomValue();

    div1.style.borderRadius = `${rand1}px ${rand2}px ${rand3}px ${rand4}px`;
    div2.style.borderRadius = `${rand1}px ${rand2}px ${rand3}px ${rand4}px`;
    div3.style.borderRadius = `${rand1}px ${rand2}px ${rand3}px ${rand4}px`;
    div4.style.borderRadius = `${rand1}px ${rand2}px ${rand3}px ${rand4}px`;
}

setInterval(() => {
    applyRandomBorderRadius()
}, 200);
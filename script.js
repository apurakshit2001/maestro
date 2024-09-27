const div1 = document.querySelector('.item1');
const div2 = document.querySelector('.item2');
const div3 = document.querySelector('.item3');
const div4 = document.querySelector('.item4');


const getRandomValue = () => {
    return (Math.floor(Math.random() * 500));
}

const applyRandomBorderRadius1 = () => {
    let rand1 = getRandomValue();
    let rand2 = getRandomValue();
    let rand3 = getRandomValue();
    let rand4 = getRandomValue();

    div1.style.borderRadius = `${rand1}px ${rand2}px ${rand3}px ${rand4}px`;
}
const applyRandomBorderRadius2 = () => {
    let rand1 = getRandomValue();
    let rand2 = getRandomValue();
    let rand3 = getRandomValue();
    let rand4 = getRandomValue();

    div2.style.borderRadius = `${rand1}px ${rand2}px ${rand3}px ${rand4}px`;
}
const applyRandomBorderRadius3 = () => {
    let rand1 = getRandomValue();
    let rand2 = getRandomValue();
    let rand3 = getRandomValue();
    let rand4 = getRandomValue();

    div3.style.borderRadius = `${rand1}px ${rand2}px ${rand3}px ${rand4}px`;
}
const applyRandomBorderRadius4 = () => {
    let rand1 = getRandomValue();
    let rand2 = getRandomValue();
    let rand3 = getRandomValue();
    let rand4 = getRandomValue();

    div4.style.borderRadius = `${rand1}px ${rand2}px ${rand3}px ${rand4}px`;
}

setInterval(() => {
    applyRandomBorderRadius1();
    applyRandomBorderRadius2();
    applyRandomBorderRadius3();
    applyRandomBorderRadius4();
}, 400);
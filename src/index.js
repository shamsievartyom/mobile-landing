import './index.css';
import { priceNew, priceOld, timer, slider, sliderImages, sliderButton0, sliderButton1, sliderButton2, sliderButton3, buttonsList, form } from './components/utils.js'

const AppConfig = { //Write here base parameters for app
    priceOld: 'R 250.00',
    priceNew: 'R 160.00',
    timer: 300,//time in seconds(number)
}
//price
priceOld.textContent = AppConfig.priceOld
priceNew.textContent = AppConfig.priceNew
//timer
function startTimer(baseSeconds) {
    const interval = setInterval(() => {
        const hours = Math.floor(baseSeconds / 3600);
        const minutes = Math.floor((baseSeconds % 3600) / 60);
        const seconds = Math.floor(baseSeconds % 60);

        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        timer.textContent = `${formattedHours}.${formattedMinutes}.${formattedSeconds}`;
        --baseSeconds

        if (baseSeconds === -1) clearInterval(interval)
    }
        , 1000)
};

startTimer(AppConfig.timer)
//slider
let currentSlide = 0;

function goToSlide(slideNumber) {
    currentSlide = slideNumber;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

buttonsList[0].classList.add('slider-buttons__list-item_opacity')//add default style for selected image

function handleClickSliderButton(number) {
    buttonsList[currentSlide].classList.remove('slider-buttons__list-item_opacity')//remove style from previous button
    goToSlide(number)
    buttonsList[number].classList.add('slider-buttons__list-item_opacity')
}

sliderButton0.addEventListener('click', () => handleClickSliderButton(0))
sliderButton1.addEventListener('click', () => handleClickSliderButton(1))
sliderButton2.addEventListener('click', () => handleClickSliderButton(2))
sliderButton3.addEventListener('click', () => handleClickSliderButton(3))
//form
function handleSubmit(e){
    e.preventDefault()
    window.location.href = 'https://youtube.com';
}

form.addEventListener('submit', (e) => handleSubmit(e))
import {modals} from './modules/modals';
import {sliders} from './modules/sliders';
import {forms} from './modules/forms';
import {mask} from './modules/mask';
import {checkTextInputs} from './modules/checkTextInputs';

window.addEventListener('DOMContentLoaded', () => {
    'usestrict'
    modals();
    sliders({
        slidesSelector:'.feedback-slider-item', 
        pos: '', 
        prev:'.main-prev-btn', 
        next:'.main-next-btn'
    });
    sliders({
        slidesSelector:'.main-slider-item', 
        pos: 'vertical', 
        prev:'', 
        next:'',
    });
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
});


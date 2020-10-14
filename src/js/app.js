import {MDCRipple} from '@material/ripple';

const btn = document.querySelector('#learn');
const buttonRipple = new MDCRipple(btn);

btn.addEventListener('click', (event) => {
    alert('good to go');
});
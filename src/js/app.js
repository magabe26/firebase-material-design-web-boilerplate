const $ = require('jquery');
import {MDCRipple} from '@material/ripple';

const btn = document.querySelector('#learn');
const buttonRipple = new MDCRipple(btn);

$(btn).on('click',(event) => {
    alert('good jquery. go');
});

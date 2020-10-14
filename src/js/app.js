const $ = require('jquery');
import {MDCRipple} from '@material/ripple';

const btn = document.querySelector('#learn');
const buttonRipple = new MDCRipple(btn);

$(btn).on('click', (event) => {
    if(typeof  firebase === "undefined"){
        alert('error -undefied');
    }
    firebase.firestore().collection('people').add(
        {
            name: 'chura',
            age: 45
        }
    ).then((ref) => alert("added" + ref.id)).catch((err) => alert(err));
});

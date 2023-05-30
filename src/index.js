import _ from 'lodash';
import myName from './myName.js';
import './style.css';
import Icon from './icon.jpeg';
import Data from './data.xml';
import Notes from './data.csv';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML += myName('Sha3bola');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);
    console.log(Notes);

    return element;
  }
  
  document.body.appendChild(component());
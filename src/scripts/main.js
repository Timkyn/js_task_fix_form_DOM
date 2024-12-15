'use strict';
// get all 'inputs' from 'form' tag on the page
const forms = document.body.querySelectorAll('form');
const inputs = [];

for (let f = 0; f < forms.length; f++) {
  const form = forms[f].querySelectorAll('input');

  for (let i = 0; i < form.length; i++) {
    inputs.push(form[i]);
  }
}

// set placeholder for each input
for (const input of inputs) {
  const text = input.getAttribute('name');
  const capitalized = text.charAt(0).toUpperCase() + text.slice(1);
  input.setAttribute('placeholder', capitalized);
}

// step 2 + 4 , create and append label to input
for (const input of inputs) {
  // create label
  const label = document.createElement('label');
  label.setAttribute('class', 'field-label');
  label.setAttribute('for', input.getAttribute('id'));
  label.textContent = input.getAttribute('name');

  // append label

  input.parentElement.appendChild(label);
}



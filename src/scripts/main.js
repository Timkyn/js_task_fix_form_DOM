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

console.log(inputs);

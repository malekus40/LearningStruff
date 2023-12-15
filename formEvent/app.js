const creditCardInput = document.querySelector('#cc');
const termsCheckedBox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');


const form = document.querySelector("#signup-form");
form.addEventListener('submit', function (e) {
  alert("submitted the form");
  console.log('cc', creditCardInput.value);
  console.log('terms', termsCheckedBox.checked);
  console.log('veggieSelect', veggieSelect.value);
  e.preventDefault();
});

const formData = {};
// veggieSelect.addEventListener('input', (e) => {
//   console.log('CC CHANGED!', e);
//   formData['cc'] = e.target.value;
// });

// termsCheckedBox.addEventListener('input', (e) => {
//   console.log('CHECKBOX', e);
//   formData['agreeToTerms'] = e.target.value;
// });

for (let input of [creditCardInput, termsCheckedBox, veggieSelect]) {
  input.addEventListener('change', ({target}) => {
    const {name, type, value, checked} = target;

    formData[type] = type === 'checkbox' ? checked : value;
  });
}
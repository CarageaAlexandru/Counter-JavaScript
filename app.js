// Set initial count value

let count = 0;

// Select the value and all the buttons

const value = document.getElementById('value');

// Select all the button with the generic btn value
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function (btn) {
  // adding event listeners
  btn.addEventListener('click', function (event) {
    // showing which button and class we select
    // console.log(event.currentTarget.classList)

    const styles = event.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else
      count = 0;

    //  Changing the color when the value goes below 0 and after 0
    if ( count < 0 ) {
      value.style.color = 'red';
    } else if ( count > 0 ) {
      value.style.color = 'green';
    } else 
      value.style.color = 'black';

    // Updating the value with the chosen button
    value.textContent = count;
  });
});
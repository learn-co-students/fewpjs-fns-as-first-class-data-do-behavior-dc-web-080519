/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  const hour = Number(timeString.slice(0, -3))
  if (hour < 12 ) {
    return "Good Morning";
  }
  else if (hour > 17) {
    return "Good Evening";
  }
  else {
    return "Good Afternoon";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(str) {
  console.log(str)
  let greeting = document.getElementById('greeting');
  greeting.innerText = str;
}
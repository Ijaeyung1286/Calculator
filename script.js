// script.js
function appendToDisplay(value) {
  const display = document.getElementById('display');
  if (display.value === "0" && value === "0"){
    return;
  } 
  //display.value += value;
  if (display.value ==="0" && value !=="."){
    display.value = value;
  }else{
    display.value += value;
  }
}

function clearDisplay() {
  const display = document.getElementById('display');
  display.value = '';
}

function calculate() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch (e) {
    //display.value = 'خطا';
    return
  }
}


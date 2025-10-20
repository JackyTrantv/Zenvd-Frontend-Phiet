const numberOneId = document.getElementById("number-one");
const numberTwoiD = document.getElementById("number-two");
const result = document.getElementById("result");

const onCaculate = (cal) => {
  let numberOne = parseInt(numberOneId.value);
  let numberTwo = parseInt(numberTwoiD.value);
  if (typeof numberOne !== "number" || typeof numberTwo !== "number") return;
  switch (cal) {
    case '+':

      break;
    case '-':
      result.innerText = `Result: ${numberOne - numberTwo}`

      break;
    case 'x': result.innerText = `Result: ${numberOne * numberTwo}`

      break;
    case '/':
      {
        if (numberTwo === 0) {
          // alert
          console.error("So thu 2 phai khac 0");
        }
        else {
          result.innerText = `Result: ${numberOne / numberTwo}`
        }
      }
      break;

    default:
      break;
  }
  result.innerText = `Result: ${result_ouput}`
}


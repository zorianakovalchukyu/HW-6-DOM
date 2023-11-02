const input = document.querySelectorAll(".arr");

const sendButton = document.querySelector(".btn");
let outBlock = document.querySelector(".out");
sendButton.onclick = () => {
  for (let i = 0; i < input.length; i++) {
    let inputValue = document.createElement("p");
    inputValue.textContent = input[i].value;
    outBlock.append(inputValue);
  }
};

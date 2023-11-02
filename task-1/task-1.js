const list = document.querySelector(".list");

const listOfChildrens = [];

const firstChild = list.firstElementChild;
listOfChildrens.push(firstChild.textContent);

const lastChild = list.lastElementChild;
listOfChildrens.push(lastChild.textContent);

const secondChild = firstChild.nextElementSibling;
listOfChildrens.push(secondChild.textContent);

const fourthChild = lastChild.previousElementSibling;
listOfChildrens.push(fourthChild.textContent);

const thirdChild = fourthChild.previousElementSibling;
listOfChildrens.push(thirdChild.textContent);

alert(listOfChildrens);

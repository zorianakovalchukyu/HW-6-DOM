let body = document.body;

let main = document.createElement("main");
main.classList.add("mainClass");
main.classList.add("check");
main.classList.add("item");
body.prepend(main);

let div = document.createElement("div");
div.id = "myDiv";
main.append(div);

let p = document.createElement("p");
p.textContent = "First paragraph";
div.append(p);

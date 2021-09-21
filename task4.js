/*ЗАДАНИЕ №4

Задание 1
На странице есть верстка:

<div id="string-1">Ядра в вёдра, выдру в тундру!</div>
<div id="string-2">Выдрав с выдры в тундре гетры</div>
<div id="string-3">В недрах тундры, выдры в гетрах </div>
<div id="string-4">Вытру гетрой выдре морду </div>
<div id="string-5">Тырят в вёдра ядра кедров!</div>
<div id="string-6">Вытру выдрой ядра кедров</div>
	
Необходимо поочередно обратиться к каждому тэгу в нужном порядке, 
и вывести их содержимое в консоль, чтобы получилась осмысленная скороговорка.

Вывод в консоли:
В недрах тундры, выдры в гетрах
Тырят в вёдра ядра кедров!
Выдрав с выдры в тундре гетры
Вытру выдрой ядра кедров
Вытру гетрой выдре морду
Ядра в вёдра, выдру в тундру!*/

let string1 = document.querySelector("#string-1");
let string2 = document.querySelector("#string-2");
let string3 = document.querySelector("#string-3");
let string4 = document.querySelector("#string-4");
let string5 = document.querySelector("#string-5");
let string6 = document.querySelector("#string-6");

console.log(string3.textContent);
console.log(string5.textContent);
console.log(string2.textContent);
console.log(string6.textContent);
console.log(string4.textContent);
console.log(string1.textContent);

/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Задание 2
На странице есть верстка

<div class="element">Element 1</div>
<div class="element">Element 2</div>
<div class="element">Element 3</div>
<div class="element">Element 4</div>
<div class="element">Element 5</div>
<div class="element">Element 6</div>

С помощью JS необходимо первым трем  элементам задать красный цвет текста, а остальным трем - зеленый.*/

let elements = document.querySelectorAll(".element");
for (let i = 0; i < elements.length / 2; i++) {
  elements[i].style.cssText = "color: red";
}
for (let j = elements.length / 2; j < elements.length; j++) {
  elements[j].style.cssText = "color: green";
}

/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Задание 3
На странице есть контейнер <ol id="todo-list"></ol>, необходимо 
с помощью цикла добавить в него пять задач (элементов <li>) с классом task и текстом, 
взятым из массива задач из пяти элементов: 
var tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
Ожидаемый результат в инспекторе после выполнения скрипта:

<ol id="todo-list">
	<li class="task">Buy lemonade</li>
	<li class="task">Make toasts</li>
	<li class="task">Repair car</li>
	<li class="task">Play games</li>
	<li class="task">Pet a cat</li>
</ol>*/
var tasks = [
  "Buy lemonade",
  "Make toasts",
  "Repair car",
  "Play games",
  "Pet a cat",
];
for (let i = 0; i < 5; i++) {
  let listItem = document.createElement("li");
  listItem.className = "task";
  listItem.textContent = tasks[i];
  document.querySelector("#todo-list").appendChild(listItem);
}

/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Задание 4
На странице есть следующая разметка:

<article>
<h3>What is Lorem Ipsum?</h3>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
<h3>Where does it come from?</h3>
<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. from "The Extremes of Good and Evil" by Cicero</p>
<h3>Why do we use it?</h3>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
</article>

Вам необходимо с помощью JavaScript вставить после каждого тега <p> тег <hr>, для визуального отделения абзацев друг от друга.
	
Указания:
Подразумевается, что вышеуказанная разметка находится внутри тега <body>.
Нельзя модифицировать указанную разметку.
За использование цикла дополнительные баллы.*/

let paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
  let hr = document.createElement("hr");
  paragraphs[i].parentElement.insertBefore(hr, paragraphs[i].nextSibling);
}

/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Задание 5
Дана такая разметка:

<div id="cart-items">
	<div class="item">Milk 1 l.<span class="qty">x 2</span></div>
	<div class="item">Cola 1.5 l. <span class="qty">x 1</span></div>
	<div class="item">Bread<span class="qty">x 2</span></div>
	<div class="item">Cheese<span class="qty">x 1</span></div>
	<div class="item">Chocolate bar<span class="qty">x 3</span></div>
</div>

Необходимо с помощью JavaScript удалить элемент "Cola 1.5 l" и заменить товар "Chocolate bar" на "Canned Fish", количеством 4 штуки.

Указания:
Для удаления использовать .remove()
Для замены использовать .replaceChild()
Подразумевается, что вышеуказанная разметка находится внутри тега <body>.*/

let newItem = document.createElement("div");
newItem.className = "item";
newItem.textContent = "Canned Fish";
let newItemChild = document.createElement("span");
newItemChild.className = "qty";
newItemChild.textContent = " x 4";
newItem.appendChild(newItemChild);
// Согласно уголовному кодексу МВД КР за использование innerHTML грозит от 2 до 8 лет тюремного срока строгого режима
// innerHTML является небезопасной с точки зрения безопасности

let cartItems = document.querySelectorAll(".item");
for (let i = 0; i < cartItems.length; i++) {
  if (cartItems[i].innerHTML == 'Cola 1.5 l. <span class="qty">x 1</span>') {
    cartItems[i].remove();
  }
  if (cartItems[i].innerHTML == 'Chocolate bar<span class="qty">x 3</span>') {
    cartItems[i].parentElement.replaceChild(newItem, cartItems[i]);
  }
}

/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Задание 6
Напишите программу для создания списка задач, которые будет вводить пользователь:
в
Для каждого пункта:
Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте пункт и добавляйте его к UL.
Процесс прерывается, когда пользователь нажимает "Отмена" или вводит пустую строку.*/

function activateToDoList() {
  let todoListContainer = document.querySelector(".todoListContainer");
  let userInput = true;
  while (userInput != null && userInput != false) {
    userInput = prompt("Make an input to the todo-list: ");
    if (userInput != false) {
      let todo = document.createElement("li");
      todo.textContent = userInput;
      todoListContainer.appendChild(todo);
    }
  }
}

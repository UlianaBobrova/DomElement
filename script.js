'use strict';

//Получаем элементы со страницы
//let enterInput = document.querySelector('.header-input');
//let btnInput = document.querySelector('.header-button');
let pageContainer = document.querySelector('.container');

//Класс 
const DomElement = function(selector, height, width, bg, fontSize) {
this.selector = selector; 
this.height = height;
this.width = width; 
this.bg = bg;
this.fontSize = fontSize;
this.createElement = function() {
    
    if (this.selector.includes('.')) {
        createDiv();
        }
   else if (this.selector.includes('#')) {
           createP();
        }
    else {
           alert('Вы ввели не селектор');
           return;
        }    
    };
}

let newClass = new DomElement('200px', '200px', 'grey', '25px');
let newId = new DomElement('25px');

newClass.createElement();
newId.createElement();


// //createSelector-метод, который создает элемент на странице в зависимости от условия
//DomElement.prototype.createSelector = function() {

// let selector = prompt('Какой элемент будем создавать? ', '.block');
//         //let selector = document.querySelector('.header-input');
//         if (selector.includes('.')) {
//             createDiv();
//             }
//        else if (selector.includes('#')) {
//                createP();
//             }
//         else {
//                alert('Вы ввели не селектор');
//                return;
//             }    
//            };


//Метод для создания div
let createDiv = function() {
    const newDiv = document.createElement('div');
    newDiv.style.width = newClass.width;
    newDiv.style.height = newClass.height;
    newDiv.style.background = newClass.background;
    newDiv.style.fontSize = newClass.fontSize;
    newDiv.textContent = 'Создался новый элемент class';
    newDiv.title = 'Новый div';
    newDiv.classList.add('selector');
    pageContainer.append(newDiv);
};

//Метод для создания p
let createP = function() {
    const newP = document.createElement('p');
    newP.innerHTML = 'Создался элемент с id';
    newP.textContent = 'Создался элемент с id';
    newP.classList.add('selector');
    pageContainer.append(newP);
};









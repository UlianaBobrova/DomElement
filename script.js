'use strict';

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
        this.createDiv();
        }
   else if (this.selector.includes('#')) {
        this.createP();
        }
    };   

//Метод для создания div
this.createDiv = function() {

    const newDiv = document.createElement('div');
    newDiv.style.width = this.width;
    newDiv.style.height = this.height;
    newDiv.style.background = this.background;
    newDiv.style.fontSize = this.fontSize;
    newDiv.textContent = 'Создался новый элемент class';
    newDiv.title = 'Новый div';
    newDiv.classList.add('selector');
    pageContainer.append(newDiv);
    };

//Метод для создания p
this.createP = function() {

    const newP = document.createElement('p');
    newP.innerHTML = 'Создался элемент с id';
    newP.textContent = 'Создался элемент с id';
    newP.classList.add('selector');
    pageContainer.append(newP);
    };
};

const newClass = new DomElement('.div', '200px', '200px', 'grey', '25px');

newClass.createElement();









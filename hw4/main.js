//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a, b) {
    return a * b;
}

let result = square(8, 4)
console.log(result + 'см²')

//- створити функцію яка обчислює та повертає площу кола з радіусом r
let pi = 3.14

function squarecircle(r) {
    return pi * r * r
}

let result1 = squarecircle(7)
console.log(result1)

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function squarecilinder(h, r) {
    return 2 * pi * r * r + 2 * pi * r * h
}

let result2 = squarecilinder(9, 5)
console.log(result2)
//- створити функцію яка приймає масив та виводить кожен його елемент
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

function arr(arr) {
    for (const arrObj of arr) {
        console.log(arrObj)
    }
}

arr(users)

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function text(text) {
    document.write(`<p>${text}</p>`)
}

text('собака пісяла, собака какала, собака сіла і заплакала')

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ul(litext) {
    document.write(`
        <ul>
            <li>${litext}</li>
            <li>${litext}</li>
            <li>${litext}</li>
        </ul>
    `)
}

ul('собака')

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulnumber(textLi, numberOfLi) {
    document.write('<ul>')
    for (let i = 0; i < numberOfLi; i++) {
        document.write(`<li>${textLi}</li>`)
    }
    document.write('</ul>')
}

ulnumber("Австрійський художник", 12)

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function array(arrName) {
    document.write('<ul>')
    for (const arrObj of arrName) {
        document.write(`<li>${arrObj.name} ${arrObj.age} ${arrObj.status}</li>`)
    }
    document.write('</ul>')
}

array(users)
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users1 = [
    {name: 'vasya', age: 31, id: 0},
    {name: 'petya', age: 30, id: 1},
    {name: 'kolya', age: 29, id: 2},
    {name: 'olya', age: 28, id: 3},
    {name: 'max', age: 30, id: 4},
    {name: 'anya', age: 31, id: 5},
    {name: 'oleg', age: 28, id: 6},
    {name: 'andrey', age: 29, id: 7},
    {name: 'masha', age: 30, id: 8},
    {name: 'olya', age: 31, id: 9},
    {name: 'max', age: 31, id: 10}
];

function array1(arrName) {
    for (const arrObj of arrName) {
        document.write(`<div style="display: flex; justify-content: center; align-items: center">${arrObj.name} ${arrObj.age} ${arrObj.id}</div>`)
    }
}

array1(users1)

//- створити функцію яка повертає найменьше число з масиву
function minNumber() {
    let min = arguments[0]
    for (const item of arguments) {
        if (item < min) {
            min = item
        }
    }
    console.log(min)
}

minNumber(19, 293, 23436, -5345, 12, 423)

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
arraynumbers = [19,23,24,19,40]
function calculateSum(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        sum += arrayElement;
    }
    console.log(sum)
}
calculateSum(arraynumbers)
//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
function swap(arr, index1, index2){
    let id1 = arr[index1]
    let id2 = arr[index2]
    arr[index1] = id2
    arr[index2] = id1
    return arr
}
let result0 = swap([21,23,53,74],0,2)
console.log(result0)
//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


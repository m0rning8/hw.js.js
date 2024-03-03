//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let calc = (a, b) => a + b;
console.log(calc(12, 19))
//- створити функцію яка обчислює та повертає площу кола з радіусом r
let pi = 3.14;
let square = (r) => pi * r * r;
console.log(square(9))
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cilindersquare = (h, r) => 2 * pi * r * r + 2 * pi * r * h;
console.log(cilindersquare(9, 4))
//- створити функцію яка приймає масив та виводить кожен його елемент
let arr = (arrName) => {
    for (const arrObj of arrName) {
        console.log(arrObj)
    }
}
arr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
let text = (textName) => {
    document.write(`<p>${textName}</p>`)
}
text('собака пісяла')
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let li = (litext) => {
    document.write(`
        <ul>
            <li>${litext}</li>
            <li>${litext}</li>
            <li>${litext}</li>
        </ul>
    `)
}
li('собака')
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let ul = (litext, ulValue) => {
    document.write('<ul>')
    for (let i = 0; i < ulValue; i++) {
        document.write(`<li>${litext}</li>`)
    }
    document.write('</ul>')
}
ul("книга", 9)
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array = (arrName) => {
    document.write('<ul>')
    for (const arrObj of arrName) {
        document.write(`<li>${arrObj}</li>`)
    }
    document.write('</ul>')
}
array([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
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
let arraydispersion = (arrName) => {
    for (const arrObj of arrName) {
        document.write(`<div style="display: flex; justify-content: center; align-items: center">${arrObj.name} ${arrObj.age} ${arrObj.id}</div>`)
    }
}
arraydispersion(users1)
//- створити функцію яка повертає найменьше число з масиву
let minNumber = (arrName) => {
    let min = arrName[0]
    for (const item of arrName) {
        if (item < min) {
            min = item
        }
    }
    console.log(min)
}
minNumber([234, 23, 34, 37, 323, 8, 123, 532])
//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let calculateSum = (arrName) => {
    let sum = 0;
    for (let i = 0; i < arrName.length; i++) {
        const arrayElement = arrName[i];
        sum += arrayElement;
    }
    console.log(sum)
}
calculateSum([19, 10, 20, 30, 123, 123, 2, 45, 123, 123, 53, 1234])
//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
let swap = (arr, index1, index2) =>{
    let id1 = arr[index1]
    let id2 = arr[index2]
    arr[index1] = id2
    arr[index2] = id1
    console.log(arr)
}
swap([1,2,3,4,5,6,7,8,9],1,8)
//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let currency = [
    {currency:'USD',value:40},
    {currency:'EUR',value:42},
];
let exchange = (sumUAH, currencyValues, exchangeCurrency) =>{
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency){
            let k = sumUAH/currencyValue.value
            console.log(k)
        }
    }
}
exchange(10000,currency,'EUR')

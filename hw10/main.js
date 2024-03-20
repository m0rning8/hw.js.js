//Стоврити форму з трьома полями для name,surname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.querySelector('input[name="name"]').value;
    let surname = document.querySelector('input[name="surname"]').value;
    let age = document.querySelector('input[name="age"]').value;

    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = "Name: " + name + "<br>Surname: " + surname + "<br>Age: " + age;
});
let currentCount = localStorage.getItem('counter');
if (!currentCount) {
    currentCount = 0;
} else {
    currentCount = parseInt(currentCount);
}

currentCount++;

document.getElementById('counter').innerText = currentCount;

localStorage.setItem('counter', currentCount.toString());
//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію


//ЗРОБИВ В ІНШИХ ФАЙЛАХ

//- Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

document.getElementById('hideButton').addEventListener('click', function() {
    let textElement = document.getElementById('text');
    if (textElement) {
        textElement.style.display = 'none';
    }
});

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
document.getElementById('verifyButton').addEventListener('click', function() {
    let ageInput = document.getElementById('ageInput');
    let age = parseInt(ageInput.value);

    if (age >= 18) {
        alert("Age verified!");
    } else {
        alert('You are underage');
    }
});
//*** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
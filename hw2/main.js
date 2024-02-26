//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let travis = {
    id: 1,
    name: "Travis",
    surname: "Scott",
    song: "Highest in the room",
    genre: "trap",
    views: "507mil",
    date: "04.10.2019",
    length: 2.55,
    label: "cactus jack",
    album: "single"
}
console.log(travis.id)
console.log(travis.name)
console.log(travis.surname)
console.log(travis.song)
console.log(travis.genre)
console.log(travis.views)
console.log(travis.date)
console.log(travis.length)
console.log(travis.label)
console.log(travis.album)
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let books1 = {
    title: "Master i Margarita",
    pagecount: 318,
    genre: "novel"
}
console.log(books1)
let books2 = {
    title: "The Lord of the Rings",
    pagecount: 752,
    genre: "fantasy"
}
console.log(books2)
let books3 = {
    title: "To Kill a Mockingbird",
    pagecount: 323,
    genre: "fiction"
}
console.log(books3)
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let author1 = [
    {id: 1, name: 'George Orwell', age: 46}
]
let book1 =
    {title: "1984", pagecount: 328, genre: "science fiction", author1}

let author2 = [
    {id: 2, name: 'J.R.R. Tolkien', age: 81}
]
let book2 = {title: "The Lord of the Rings", pagecount: 1216, genre: "fantasy", author2}

let author3 = [
    {id: 3, name: 'F. Scott Fitzgerald', age: 43}
]
let book3 = {title: "The Great Gatsby", pagecount: 180, genre: "novel", author3}
console.log(book1)
console.log(book2)
console.log(book3)
//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = -3
if (x != 0) {
    console.log(true)
}
else{
    console.log(false)
}
//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 46
if(time >=1 && time<=15){
    console.log('1-ша чверть')
}
else if(time >15 && time<=30){
    console.log('2-га чверть')
}
else if(time >30 && time<=45){
    console.log('3-тя чверть')
}
else if(time >45 && time<=59){
    console.log('4-та чверть')
}
//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 31
if(day >1 && day<=11){
    console.log('1 dek')
}
else if(day >11 && day<=21){
    console.log('2 dek')
}
else if(day >21 && day<=31){
    console.log('3 dek')
}
else{
    console.log("нє, фігня якась")
}
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let timetable = {daynumber: 7, dayname1:'monday', dayname2:'tuesday', dayname3:'wednesday', dayname4:'thursday', dayname5:'friday', dayname6:'saturday', dayname7:'sunday'}

switch (timetable.daynumber){
    case 1:
        console.log(timetable.dayname1);
        break;
    case 2:
        console.log(timetable.dayname2);
        break;
    case 3:
        console.log(timetable.dayname3);
        break;
    case 4:
        console.log(timetable.dayname4);
        break;
    case 5:
        console.log(timetable.dayname5);
        break;
    case 6:
        console.log(timetable.dayname6);
        break;
    case 7:
        console.log(timetable.dayname7);
        break;
}
//

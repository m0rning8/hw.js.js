//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function Con(id, name, surname, email, number) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.number = number
}

let users = [
    new Con(1, 'Alex', 'Thomasino', 'email', 102),
    new Con(2, 'Alex', 'Thomasino', 'email', 102),
    new Con(3, 'Alex', 'Thomasino', 'email', 102),
    new Con(4, 'Alex', 'Thomasino', 'email', 102),
    new Con(5, 'Alex', 'Thomasino', 'email', 102),
    new Con(6, 'Alex', 'Thomasino', 'email', 102),
    new Con(7, 'Alex', 'Thomasino', 'email', 102),
    new Con(8, 'Alex', 'Thomasino', 'email', 102),
    new Con(9, 'Alex', 'Thomasino', 'email', 102),
    new Con(10, 'Alex', 'Thomasino', 'email', 102)
]

console.log(users)
//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
users.filter((user) => {
    if (user.id % 2 === 0) {
        console.log(user)
    }
})
//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortresult = users.sort((u1, u2) => {
    return u1.id - u2.id
})
console.log(sortresult)
//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
    }
}

let arrayofproducts = [
    new Client(1, 'Tim', 'Kazakov', 'email', '404', '12'),
    new Client(2, 'Tim', 'Kazakov', 'email', '404', '32'),
    new Client(3, 'Tim', 'Kazakov', 'email', '404', '9'),
    new Client(4, 'Tim', 'Kazakov', 'email', '404', '0'),
    new Client(5, 'Tim', 'Kazakov', 'email', '404', '1'),
    new Client(6, 'Tim', 'Kazakov', 'email', '404', '23'),
    new Client(7, 'Tim', 'Kazakov', 'email', '404', '75'),
    new Client(8, 'Tim', 'Kazakov', 'email', '404', '11'),
    new Client(9, 'Tim', 'Kazakov', 'email', '404', '6'),
    new Client(10, 'Tim', 'Kazakov', 'email', '404', '8')
]
console.log(arrayofproducts)
//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortresult2 = arrayofproducts.sort((c1, c2) => {
    return c1.order - c2.order
})
console.log(sortresult2);
//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Cars {
    constructor(brand, model, author, since, maxspeed, enginecap) {
        this.brand = brand
        this.model = model
        this.author = author
        this.since = since
        this.maxspeed = maxspeed
        this.enginecap = enginecap
    }
}
let arrayofcars = new Cars('BMW', 'M5 F90', 'BMW Group', 1985, 308, 4.4)
console.log(arrayofcars)
class carPlus extends Cars {
    constructor(...add) {
        super(...add);
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maxspeed} кілометрів на годину`)
        }
    }
}
let arrayofcars2 = new carPlus('BMW', 'M5 F90', 'BMW Group', 1985, 308, 4.4)
arrayofcars2.drive()
class carPlus1 extends Cars {
    constructor(...add) {
        super(...add);
        this.info = function (){
            console.log(`Бренд - ${this.brand}`)
            console.log(`Модель - ${this.model}`)
            console.log(`Концерн - ${this.author}`)
            console.log(`Рік випуску - ${this.since}`)
            console.log(`Макс. швидкість - ${this.maxspeed}`)
            console.log(`Об'єм двигуна - ${this.enginecap}`)

        }
    }
}
let carinfo = new carPlus1('BMW', 'M5 F90', 'BMW Group', 1985, 308, 4.4)
carinfo.info()
class carPlus2 extends Cars{
    constructor(...add) {
        super(...add);
        this.increaseMaxSpeed = function (newSpeed){
            console.log(`Нова макс. швидкість - ${this.maxspeed+newSpeed}`)
        }
    }
}
let increasemaxspeed = new carPlus2('BMW', 'M5 F90', 'BMW Group', 1985, 308, 4.4)
increasemaxspeed.increaseMaxSpeed(10)
class carPlus3 extends Cars{
    constructor(...add) {
        super(...add);
        this.changeYear = function (newValue) {
            console.log(`Нова дата випуска - ${this.since = newValue}`)
        }
    }
}
let changeYear = new carPlus3('BMW', 'M5 F90', 'BMW Group', 1985, 308, 4.4)
changeYear.changeYear(1920)
class carPlus4 extends Cars{
    constructor(...add) {
        super(...add);
        this.addDriver = function (name, surname) {
            let drivermain = {name, surname}
            this.driver = []
            this.driver.push(drivermain)
        }
    }
}
let driverchange = new carPlus4('BMW', 'M5 F90', 'BMW Group', 1985, 308, 4.4)
driverchange.addDriver('Shumaher','Shumaherovich')
console.log(driverchange)


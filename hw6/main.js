//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
let hello = 'hello world'
for (const helloElement of hello) {
    console.log(helloElement.length)
}
let lorem = 'lorem ipsum'
for (const loremElement of lorem) {
    console.log(loremElement.length)
}
let js = 'javascript is cool'
for (const jsElement of js) {
    console.log(jsElement.length)
}
//- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
let k = 'hello world'
console.log(k.toUpperCase())
let d = 'lorem ipsum'
console.log(d.toUpperCase())
let l = 'javascript is cool'
console.log(l.toUpperCase())
//- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', ''
let a = 'HELLO WORLD'
console.log(a.toLowerCase())
let b = 'LOREM IPSUM'
console.log(b.toLowerCase())
let c = 'JAVASCRIPT IS COOL'
console.log(c.toLowerCase())
//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(
    str
        .substring(
            str.indexOf(' ') + 1,
            str.lastIndexOf(' ') - 2
        )
)
//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let arrsplit = (str) => {
    let arr = str.split(' ');
    console.log(arr)
}
arrsplit('Ревуть воли як ясла повні')
//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
let map = array.map((number) => {
    let num = '' + number
    return num
})
console.log(map)
console.log(typeof (map[1]))
//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
let sort = nums.sort((n1, n2) => {
    return n2 - n1;
})
console.log(sort);

let sort1 = nums.sort((n1, n2) => {
    return n1 - n2;
})
console.log(sort1);
//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sort2 = coursesAndDurationArray.sort((c1, c2) => {
    return c2.monthDuration - c1.monthDuration
})
console.log(sort2)
let filter = coursesAndDurationArray.filter((course) => course.monthDuration > 5)
console.log(filter)
let map1 = coursesAndDurationArray.map((course, index) => {
    let courseid = {title: course.title, monthDuration: course.monthDuration, id: index + 1}
    return courseid
})
console.log(map1)
//описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},

    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'clubs', value: '7', color: 'black'},

    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'clubs', value: '8', color: 'black'},

    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'clubs', value: '9', color: 'black'},

    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'clubs', value: '10', color: 'black'},

    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},

    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},

    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},

    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
];
let filtercards = cards.filter((card) => card.value === 'ace' && card.cardSuit === 'spade')
console.log(filtercards)
let filtercards1 = cards.filter((card) => card.value === '6')
console.log(filtercards1)
let filtercards2 = cards.filter((card) => card.color === 'red')
console.log(filtercards2)
let filtercards3 = cards.filter((card) => card.cardSuit === 'diamond')
console.log(filtercards3)
let filtercards4 = cards.filter((card) => card.cardSuit === 'clubs' && card.value === '9')
console.log(filtercards4)
//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduce = cards.reduce((accum, card) => {
    switch (card.cardSuit) {
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break
        case 'heart':
            accum.hearts.push(card);
            break
        case 'clubs':
            accum.clubs.push(card);
            break
    }
    return accum
}, {spades: [], diamonds: [], hearts: [], clubs: []})

console.log(reduce)
//взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let findSass = (arr) => {
    return arr.filter((item) => item.modules.find(item => item === 'sass'))
}
console.log(findSass(coursesArray))
let findDocker = (arr) => {
    return arr.filter((item) => item.modules.find(item => item === 'docker'))
}
console.log(findDocker(coursesArray))

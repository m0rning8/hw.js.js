//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let arr = [
    {name:'1'},
    {name:'2'},
    {name:'3'},
    {name:'4'},
    {name:'5'},
    {name:'6'},
    {name:'7'},
    {name:'8'},
    {name:'9'},
    {name:'10'},
]
for (let i = 0; i < arr.length; i++){
    const arrElement = arr[i];
    document.write(`<div>${arrElement.name}</div>`)
}
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let arr1 = [
    {tag:'one'},
    {tag:'two'},
    {tag:'three'},
    {tag:'four'},
    {tag:'five'},
    {tag:'six'},
    {tag:'seven'},
    {tag:'eight'},
    {tag:'nine'},
    {tag:'ten'},
]
for (let i = 0; i < arr.length; i++){
    const arrElement1 = arr1[i];
    document.write(`<div>${arrElement1.tag} ${i}</div>`)
}
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let array = [
    {class:'sadd'},
    {class:'sadd'},
    {class:'sadd'},
    {class:'sadd'},
    {class:'sadd'},
    {class:'sadd'},
    {class:'sadd'},
    {class:'sadd'},
    {class:'sadd'},
    {class:'sadd'},
    {class:'sadd'},
    {class:'sadd'},
    {class:'sadd'},
    {class:'sadd'},
    {class:'sadd'},
    {class:'sadd'},
    {class:'sadd'},
    {class:'sadd'},
    {class:'sadd'},
    {class:'sadd'},
    {class:'sadd'},
]
let i2 = 0;
let arrayElement = array[i2]
while(i2 < array.length){
    i2++
    document.write(`<h1>${arrayElement.class}</h1>`)
}
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let array1 = [
    {call:'happy'},
    {call:'happy'},
    {call:'happy'},
    {call:'happy'},
    {call:'happy'},
    {call:'happy'},
    {call:'happy'},
    {call:'happy'},
    {call:'happy'},
    {call:'happy'},
    {call:'happy'},
    {call:'happy'},
    {call:'happy'},
    {call:'happy'},
    {call:'happy'},
    {call:'happy'},
    {call:'happy'},
    {call:'happy'},
    {call:'happy'},
    {call:'happy'},
    {call:'happy'},
]

let i3 = 0;
let arrayElement1 = array1[i3]
while(i3 < array1.length){
    i3++
    document.write(`<h1>${arrayElement1.call}</h1>`)
}
//- Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (const listOfItem of listOfItems) {
    document.write(`<ul>
        <li>${listOfItem}</li>
    </ul>`)
}
//Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products) {
    document.write(`<div class="product-card">
<h3 class="product-title">${product.title}  <br>
Price- ${product.price}</h3>
<img src="${product.image}" alt="" class="product-image">
</div>`)
}
//є масив
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
for (const user of users) {
    if (user.status===false){
         console.log(user.name,"'s status",user.status)
    }
    if (user.status===true){
         console.log(user.name,"'s status",user.status)
    }
    if (user.age>30){
        console.log(user.name,'is',user.age)
    }
}
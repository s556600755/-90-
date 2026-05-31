// const name = 'Wenjie';
// const age = 28;

// console.log('我叫' + name + '今年' + age)

// const height = 170;
// const weight = 50;

// const bmi = weight / ((height / 100) * (height / 100));

// console.log(bmi);

// const score = 59;
// score >= 60 ? console.log('及格分數為' + score) : console.log('不及格 需要補考')

// const admin = 'user';
// const password = 1234;

// (admin === 'user' && password === 1234) ? console.log('登入成功') : console.log('帳號或密碼錯誤')

// function calculatePrice(price, quantity) {
//     const totalPrice = price * quantity
//     return totalPrice;
// }

// const result = calculatePrice(60, 10)

// console.log('總價:' + result + "元");

// const foods = ["raman", "pizza"];
// foods.push('sushi')
// console.log(foods)

// const scores = [80, 90, 70];
// let total = 0;
// for (let i = 0; i < scores.length; i++) {
//     total += scores[i];
// }
// console.log(total)

/* 這是第8天
const users = [
    {
        name: "Wen",
        age: 28,
        city: "Tainan",
        hobby: '網球'
    },
    {
        name: "Amy",
        age: 24,
        city: "Taipei",
        hobby: '足球'
    },
    {
        name: "Huang",
        age: 30,
        city: "Taipei",
        hobby: '桌球'
    }
];

for (let i = 0; i < users.length; i++) {
    console.log("名字：" + users[i].name);
    console.log("年齡：" + users[i].age);
    console.log("城市：" + users[i].city);
    console.log("興趣：" + users[i].hobby)
    console.log("------------");
}

const title = document.querySelector('#title');
let content = ''
for (let i = 0; i < users.length; i++) {
    console.log(users[i])
    content += `
    姓名: ${users[i].name} <br> 
    居住地: ${users[i].city} <br> 
    年齡: ${users[i].age} <br> 
    興趣: ${users[i].hobby} <br>
    `

    

}console.log(content)

title.innerHTML = `<p>${content}</p>`

const body = document.querySelector('#body'); */

/* 這是第9天
const input = document.querySelector('#input');
const btn  = document.querySelector('#btn');
const message = document.querySelector('#message');

btn.addEventListener('click', () => {
    const content = input.value;
    console.log(input.value)
    message.textContent = "歡迎你,"+content
    input.value = '';
});

const bmiBtn = document.querySelector('#bmiBtn');
const weightInput = document.querySelector('#weightInput');
const heightInput = document.querySelector('#heightInput');
const output = document.querySelector('.output');
bmiBtn.addEventListener('click', () => {
    const weightValue = weightInput.value;
    const heightValue = heightInput.value;
    const result = weightValue / ((heightValue/100)**2)
    console.log(result)
    output.textContent = result.toFixed(2);
}); */

//這是第10天
/* const input = document.querySelector("#input");

const btn = document.querySelector("#btn");

const list = document.querySelector("#list");

const output = document.querySelector('.output');

const now = new Date(); 
console.log(now)
btn.addEventListener("click", function () {
     const inputText = input.value;

     if(inputText ==='你好'){
        
        output.innerHTML+=`
        <p>你:${inputText}</p>
        <p>AI:你好,我是AI助手</p>
        `
        return;
     }
  output.innerHTML += `
    <p>使用者 : ${inputText} </p> 
    <p>${now.toLocaleTimeString()}</p>

    
  `;

}); */
//這是第11天
/* const chats = []
const data = []
const todos = []
const input = document.querySelector('#input');
const list = document.querySelector('#list');

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    const inputText = input.value;
    if(inputText===""){return}

    if(inputText==="你好"){
        chats.push({user:inputText,bot:'你好,我是AI'})
        console.log(chats)
    }else{
        chats.push({user:inputText,bot:'我還在學習中'})
    }
    data.push({user:"wen",text:inputText})
    console.log(data)
    todos.push({text:inputText})
    console.log(todos)
    
    
    render();
});

function render() {
    list.innerHTML = '';

    todos.forEach((todo) => {
        list.innerHTML += `
        <li>${todo.text} <button >刪除</button></li>
        `
    })

    data.forEach(data => {  
        list.innerHTML +=`
        <li>${data.user}:${data.text}</li>
        `
    });

    chats.forEach((chat)=>{
        list.innerHTML+=`
        <li>你:${chat.user}:</li>
        <li>AI:${chat.bot}</li>
        `
    })
} */
let todos = [];
const list = document.querySelector("#list");
const input = document.querySelector("#input");

const btn = document.querySelector("#btn");

const savedTodos = localStorage.getItem("todos");
console.log(savedTodos)
if (savedTodos) {

    todos = JSON.parse(savedTodos);
    console.log(todos)
}
render();
btn.addEventListener("click", function () {

    if (input.value === "") {
        return;
    }

    todos.push({
        text: input.value
    });

    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );

    render();
    getTodo(input.value);
    input.value = "";

});


function render() {

    let html = "";

    todos.forEach(function (todo, index) {

        html += `
      <li>
        ${todo.text}
        <button onclick="editTodo(${index})">
            編輯
        </button>
        <button onclick="removeTodo(${index})">
            刪除
        </button>
      </li>
    `;

    });

    list.innerHTML = html;

}

function removeTodo(deleteIndex) {
    // confirm("確定刪除？")
    /* const newTodos = todos.filter(function (todo, index) {
  
      return index !== deleteIndex;
  
    });
  
    todos.length = 0;
  
    newTodos.forEach(function (todo) {
  
      todos.push(todo);
  
    }); */
    todos.splice(deleteIndex, 1);

    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );

    render();

}

function editTodo(index) {

    const newText = prompt("請修改" , todos[index].text);

    if(newText.trim() === "") {
        return
    }
    if (newText === null) {
        return
    }

    todos[index].text = newText;
    render();

    localStorage.setItem("todos", JSON.stringify(todos))
}

async function getPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    
    const data = await response.json();
    console.log(data)

    data.forEach((post)=>{
        console.log(post.title)
    })
    
}



async function getTodo(value) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
    const todos = await response.json();
    console.log(todos[value].name)

    
    
}


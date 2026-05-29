const name = 'Wenjie';
const age = 28;

console.log('我叫' + name + '今年' + age)

const height = 170;
const weight = 50;

const bmi = weight / ((height / 100) * (height / 100));

console.log(bmi);

const score = 59;
score >= 60 ? console.log('及格分數為' + score) : console.log('不及格 需要補考')

const admin = 'user';
const password = 1234;

(admin === 'user' && password === 1234) ? console.log('登入成功') : console.log('帳號或密碼錯誤')

function calculatePrice(price, quantity) {
    const totalPrice = price * quantity
    return totalPrice;
}

const result = calculatePrice(60, 10)

console.log('總價:' + result + "元");

const foods = ["raman", "pizza"];
foods.push('sushi')
console.log(foods)

const scores = [80, 90, 70];
let total = 0;
for (let i = 0; i < scores.length; i++) {
    total += scores[i];
}
console.log(total)

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

const body = document.querySelector('#body');


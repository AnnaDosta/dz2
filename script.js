//задание 1

let name = prompt("Ваше имя?");
console.log("Меня зовут " + name);

let age = prompt("Ваш возраст?");
console.log("Мне " + age + " лет");

let city = prompt("Ваш город?");
let company = prompt("Ваша компания?");
console.log("Я проживаю в городе " + city + " и работаю в компании " + company);

let phone = prompt("Ваш телефон?");
let email = prompt("Ваш email?");
console.log("Мои контактные данные: " + phone + " " + email);

//задание 2
let years = 2022 - age;
console.log(name + " родился в " + years + " году.");

//задание 3
let s = 1,
  c = 1,
  v = 1,
  h = 1,
  m = 1,
  l = 1;
s + c + v == h + m + l ? console.log("да") : console.log("нет");

// задание 4
let x = 1;
let access = x > 0 ? true : false;
console.log(access);

//задание 5
let a = 10;
let b = 2;
let sum = a + b;
let min = a - b;
let mult = a * b;
let division = a / b;
console.log(sum, min, mult, division);
if (sum > 1) {
  console.log(sum * sum);
}
//задание 6

console.log((a > 2 && a < 11) || (b >= 6 && b < 14) ? true : false);

//задание 7
let n = 45;
if (n > 0 && n < 16) {
  console.log("1 четверть часа");
} else if (n > 15 && n < 31) {
  console.log("2 четверть часа");
} else if (n > 30 && n < 46) {
  console.log("3 четверть часа");
} else if (n > 45 && n < 60) {
  console.log("4 четверть часа");
}
//задание 8
let day = 6;
if (day > 0 && day < 11) {
  console.log("1 декада месяца");
} else if (day > 10 && day < 21) {
  console.log("2 декада месяца");
} else if (day > 20 && day < 32) {
  console.log("3 декада месяца");
}
//задание 9(day из 8го задания)
let month = day / 31;
let year = day / 365;
let week = day / 7;
let hour = day * 24;
let minute = hour * 60;
let sec = minute * 60;
console.log(month, year, week, hour, minute, sec);
if (month < 1 && week > 1) {
  console.log(month + " Меньше месяца");
} else if (year < 1 && month > 1) {
  console.log(year + " Меньше года");
} else if (week < 1) {
  console.log(week + " Меньше недели");
}
//задание 10(day из 8го задания,month из 9го)
month = Math.ceil(month);
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log(month + " Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log(month + " Весна");
    break;
  case 6:
  case 7:
  case 9:
    console.log(month + " Лето");
    break;
  default:
    console.log(month + " Осень");
}

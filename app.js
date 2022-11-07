console.log('HELLO');


if (5>4) {
    console.log("5 more than 4");// условие выполняется если if ()в этих скобочках true в может быть какое угодно true
}//обычно никогда не пишем конкретное значение внутри условий

// const age = 18;//15
age = +age;
if (age > 18) {//false
    console.log("Вам больше 18 лет");//в консоли ничего не выводится пропускается выполнение этого блока и переходим на строку 12 которая была пустая
} else {//если else тоже false то тоже пропускается //последнее else должно быть без if
    console.log ("Вам меньше 18 лет");//то есть в консоли выводится это!
} 


if (age > 18) {
    console.log("Вам больше 18 лет");//20
} else if (age <18) {
    console.log ("Вам меньше 18 лет");//15 18
}  else { 
    console.log ("Вам 18 лет");//будет выводиться если age=18

}

let ages;
if (ages > 18) {
    console.log("Вам больше 18 лет");//20
} else if (ages <18) {
    console.log ("Вам меньше 18 лет");//15 18
}  else { 
    console.log ("Вам 18 лет");//будет выводиться если age=18 так как условия не будут выполняться 
}
 
let age = NaN;
age = +age;
if (!isNaN(age)) {//!- это отрицание не //или if (isNaN(age)===false){//то есть age=NaN//помним что условие выполняется если true а так как у нас false то выполняется условие c else 

} else {console.log ("Введите корректные данные");
}
if (age > 18) {
    console.log("Вам больше 18 лет");
} else if (age <18) {
    console.log ("Вам меньше 18 лет");//let age = null;=0
}  else if (age===18) { 
    console.log ("Вам 18 лет");
} else {
    console.log ("Укажите ваш возраст");//будет выполняться при let age = undefined;
}


const gender = "male"//"female"
if (gender.toLocaleLowerCase === "male") {//сначала все переведется в нижний регистр а потом уже будем сравниваться с ===male
    console.log("You should go to left");
}
if (gender.toLocaleLowerCase === "female") {
    console.log("You should go to right");//не отображается в консоли 
}




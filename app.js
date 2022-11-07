console.log('HELLO');


if (5>4) {
    console.log("5 more than 4");// условие выполняется если if ()в этих скобочках true в может быть какое угодно true
}//обычно никогда не пишем конкретное значение внутри условий

const age = 15;
if (age > 18) {//false
    console.log("You older than 18");//в консоли ничего не выводится пропускается выполнение этого блока и переходим на строку 12
}
const gender = "male"//"female"
if (gender.toLocaleLowerCase === "male") {//сначала все переведется в нижний регистр а потом уже будем сравниваться с ===male
    console.log("You should go to left");
}
if (gender.toLocaleLowerCase === "female") {
    console.log("You should go to right");//не отображается в консоли 
}
let country = "Ukraine"
let city = "Mykolaiv"
let adress ="Lasurnaya str"
let fullAdress = `${country}, ${city}, ${adress}`
console.log(fullAdress)

let width = 20
let height = 5
let area = width * height
console.log(area)

let number1 = 17
let number2 = 6
let summe = Math.pow(number1, number2)
console.log(summe)

let randomNumber =Math.floor(Math.random()* 71)
console.log(randomNumber)

let number =10
if (number%2==0){
    console.log("even");
}
    else {console.log("not even");

    }

let text ="this book cost $20"
    if (text.includes("$"))
        {
        text=text.replace("$" , ("€"));
    }
    console.log(text)

    let monthNumber = 5;
    let monthName;
    switch (monthNumber) {
        case 1:
            monthName = "January";
            break;
        case 2:
            monthName = "February";
            break;
        case 3:
            monthName = "March";
            break;
        case 4:
            monthName = "April";
            break;
        case 5:
            monthName = "May";
            break;
        case 6:
            monthName = "June";
            break;
        case 7:
            monthName = "July";
            break;
        case 8:
            monthName = "August";
            break;
        case 9:
            monthName = "September";
            break;
        case 10:
            monthName = "October";
            break;
        case 11:
            monthName = "November";
            break;
        case 12:
            monthName = "December";
            break;
        default:
            monthName = "wrong month number";
    }
    console.log(monthName);

    let password = "  &strongpassword#123 ";
    password = password.trim();
    if (password.length > 10 && password.includes("&") && password.includes("#")) {
        console.log("you have strong password");
    } else {
        console.log("please change your password");
    }


    let a = 10;
    let b = 20;
    if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    } else {
        console.log("Sum of those items can\’t be counted");
    }

    const number12 =[12 , 13 ,15];
    number12 [2] = 14; 
    number12[3] =15;
    number12.push (16);
    number12.pop();
    number12.unshift (11);


    const fruits = ["cherry", "apple", "banana"];
    const vegit = ["potato", "tomato", "cucumber"];
    const allItems = fruits.concat(vegit);
    console.log(allItems);
    allItems.reverse();
    allItems.join("*");
    const car =["bmw", "tayota", "opel", "tesla"];
    // const car1 = car.slice(0,2);
    // const car2 = car.slice(2);
    const otherCars = car.toSpliced(2,4);

    const nums = [1,2,3,4,5,6,7,8,9,10];
    const NewNums = nums;

    const Zifer = [
        [1,[3,[2,7]]],[4,[5,[6,8]]]
    ];
    console.log(Zifer[0][0]);
    console.log(Zifer[0][1][1][0]);
    console.log(Zifer[0][1][0]);
    console.log(Zifer[1][0]);
    console.log(Zifer[1][1][0]);
    console.log(Zifer[1][1][1][0]);

    const totalDataObjekt ={
        kilakalorie: "1200",
        hour: "1h30min",
        steps: 3750,
        melies: 2300,
    };

    for (let i = 1000; i >= 0; i -= 7) {
            console.log(`${i}: ${i-7}`);
    }
    
    const right = 5;
    let guess = Math.floor(Math.random()*10);

    while (true) {
        console.log(guess);
        if (guess===right){
            break
        }
        guess = Math.floor(Math.random()*10);
    }
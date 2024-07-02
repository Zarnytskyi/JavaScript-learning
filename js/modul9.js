// 1. Вивести одним рядком мінімальне значення масиву за допомогою деструктуризації та Math
const array = [1, 2, 3, 4, 6, 710, 34013, 13];
const min = Math.min(...array);

// 2. Функція multiply не приймає явно ніяких параметрів
const multiplyArrow = (...numbers) =>numbers.reduce((acc, curr)=> acc*curr);
function multiply() {
    return multiplyArrow(...arguments);
}
result = multiply(100, 200, 83902, 1230);
console.log(result);
// В результаті має повернутися число, котре є результатом множення усіх аргументів переданих у функцію

// 3. У нас є функція totalPrice - за допомогою деструктуризації об'єкту зробити так, що б функція працювала
const product = {
  productName: "Water",
  price: 20,
  count: 3,
};

function totalPrice({price, count}) {
  return price * count;
}
const result2 =totalPrice(product);
console.log(result2);
// 4. Написати об'єкт у котрому буде властивість items ( спочатку пустий масив)
// метод об'єкту setItems котрий приймає масив значень і встановлює цей масив як значення властивості items
// метод об'єкту sum котрий повертає суму усіх елементів масиву items
// метод maxValue котрий поверає максимальне значення з масиву items з використанням деструктуризації масиву
const arrayObject = {
    items: [],
  
    setItems(array) {
      this.items = [...array];
    },
  
    sum() {
      return this.items.reduce((acc, curr) => acc + curr, 0);
    },
  
    maxValue() {
        const [maxValue] = this.items.sort((a, b) => b - a);
        return maxValue;
    }
  };
  arrayObject.setItems([1, 2, 3, 4, 5]);
  console.log(arrayObject.sum());
  console.log(arrayObject.maxValue());
// 5. Написати функционал так, що б при виклику showPrediction виводилась випадковий вираз з масиву predictArr
// кожні 3 секунди
// Додати метод для зупинки роботи виводу виразів

const predictsArr = [
  "Удача прийде звідки не чекаєте.",
  "Давні борги будуть повернуті вам.",
  "Вас чекає несподіване грошове надходження.",
  "Всі незакінчені справи будуть завершені.",
  "Яскрава пригода вже чекає на вас.",
  "Планування часу допоможе вам не запізнитися на зустріч.",
  "Інтуїція цього разу не підведе вас. Використовуйте це.",
  "Прислухайтеся до себе і відповідь на запитання буде знайдено.",
  "З'явиться можливість вирушити в дорогу.",
  "Ваш цінний досвід зможе комусь допомогти, якщо перестанете його ховати в собі.",
  "Вам не вдасться сподобатися всім, не витрачайте на це енергію.",
  "Одяг, який вас старить, не дістанеться вам.",
];

const obj = {
    predictions: [],
    intervalId: null,
  
    setPredictions(arr) {
      this.predictions = arr;
    },
  
    showPrediction() {
      this.intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * this.predictions.length);
        console.log(this.predictions[randomIndex]);
      }, 3000);
    },
  
    stopShowing() {
      clearInterval(this.intervalId);
    },
  };
  
  const predictions = obj;
  predictions.setPredictions(predictsArr);
  predictions.showPrediction();

  setTimeout(() => {
    predictions.stopShowing();
  }, 100000);
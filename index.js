// var readlineSync = require("readline-sync"),
//   themes = ["Yastreb", "Vidra", "Enot"],
//   index = readlineSync.keyInSelect(themes, "Viberite temy?");
// let variant = "вариант вопроса";
// console.log(index);
// console.log("Ok, " + themes[index] + variant);

// class Theme {
//   constructor(name, color, font) {
//     this.name = name;
//     this.color = color;
//     this.font = font;
//   }
// }

// const pr = new Theme("Вася", "красный", "зелень");
// const pr1 = new Theme("Валентин", "красный", "зелень");
// const pr2 = new Theme("Игорь", "красный", "зелень");

// const themes = [pr, pr1, pr2];
// console.log(themes.name);

const { nighthawk } = require("./what");
const { otter } = require("./what");
const { raccoon } = require("./what");

async function Vivod() {
  let variant = "";
  var readlineSync = require("readline-sync"),
    themes = ["Yastreb", "Vidra", "Enot"],
    index = readlineSync.keyInSelect(themes, "Выберите тему?");
  //   let read = readlineSync.question("poluchitsya ly ?");
  let count = 0;
  if (index === 0) {
    for (let i = 0; i < 5; i++) {
      n = await nighthawk();
      variant = readlineSync.question(n[0]);

      if (variant === n[1]) {
        count += 1;
        console.log(`Молодец? верный ответ! ${count}`);
        // console.log(`${count}\n`);
      } else {
        count = count - 1;
        console.log(
          `Неправильно но у тебя еще есть шанс. У тебя ${count} баллов!`
        );
        // console.log(`${count}\n`);
      }
      variant = await nighthawk();
    }
  } else if (index === 1) {
    for (let i = 0; i < 5; i++) {
      o = await otter();
      variant = readlineSync.question(o[0]);

      if (variant === o[1]) {
        count += 1;
        console.log(`Молодец? верный ответ! ${count}\n`);
        // console.log(`${count}\n`);
      } else {
        count = count - 1;
        console.log(
          `Неправильно но у тебя еще есть шанс. У тебя ${count} баллов!\n`
        );
        // console.log(`${count}\n`);
      }
      variant = await otter();
    }
  } else if (index === 2) {
    for (let i = 0; i < 5; i++) {
      r = await raccoon();
      variant = readlineSync.question(r[0]);

      if (variant === r[1]) {
        count += 1;
        console.log(`Молодец? верный ответ! ${count}`);
        // console.log(`${count}\n`);
      } else  {
        count = count - 1;
        console.log(
          `Неправильно но у тебя еще есть шанс. У тебя ${count} баллов!`
        );
        // console.log(`${count}\n`);
      }
      variant = await raccoon();
    }
    console.log(`\n\nКонец игры! Ты молодец! У тебя ${count} баллов!`);
  }
}
Vivod();

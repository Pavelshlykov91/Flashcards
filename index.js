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
    index = readlineSync.keyInSelect(themes, "Viberite temy?");
  //   let read = readlineSync.question("poluchitsya ly ?");
  if (index === 0) {
    let n = await nighthawk();
    variant = readlineSync.question(n);
    console.log(variant);
  } else if (index === 1) {
    o = await otter();
    variant = readlineSync.question(o);
    // variant = await otter();
    console.log(variant);
  } else if (index === 2) {
    r = await raccoon();
    variant = readlineSync.question(r);
    // variant = await raccoon();
    console.log(variant);
  }
}
Vivod();
var readlineSync = require("readline-sync"),
  themes = ["Yastreb", "Vidra", "Enot"],
  index = readlineSync.keyInSelect(themes, "Viberite temy?");
let variant = "вариант вопроса";
console.log(index);
console.log("Ok, " + themes[index] + variant);

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

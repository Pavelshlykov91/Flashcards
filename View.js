const inquirer = require("inquirer");

class Theme {
  constructor(tname, addres) {
    this.tname = tname;
    this.addres = addres;
  }

  // chooseTopic(listOfTopics) {
  //   const topic = this.getTopicFromUser(listOfTopics);
  //   console.log("Выбранная тема:", topic);

  chooseTopic2(listOfTopics) {
    return this.prompt({
      type: "list",
      name: "topic",
      message: "Выберите тему вопросов:",
      choices: listOfTopics,
    });
  }
}
const theme = new Theme("ястребы", "ул. Пушкина, д. 10");
console.log(theme);
// theme.inquirer
//   .prompt(["ястребы", "волки", "японцы"])
//   .then("ответ1", "ответ2", "ответ3");

// const theme = new Theme();
// theme.chooseTopic();
// theme.showQuest();

// let theme = new Theme();
// theme[0].tname = "Ястреб";
// theme[0].addres = "racoon";
// console.log("Выберите тему для игры в квиз:");
// console.log(theme);

// class SodaMachine {
//   constructor(args = {}) {
//     this.sodas = args.sodas;
//     this.cash = args.cash;
//   }

//   currentInventoryCount() {
//     return this.sodas.length;
// //   }

// async chooseTopic(listOfTopic) {
//   return await this.inquirer.prompt({
//     type: "list",
//     name: "topics",
//     message: "Выбери тему вопросов",
//     choices: listOfTopic,
//   });
// }

// async showQuest(entire) {
//   return await this.inquirer.prompt({
//     type: "input",
//     name: "questions",
//     message: `${entire.question}`,
//   });
// }

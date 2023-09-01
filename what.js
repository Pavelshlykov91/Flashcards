const fs = require("fs").promises;

async function nighthawk() {
  try {
    const content = await fs.readFile(
      "./topics/nighthawk_flashcard_data.txt",
      "utf-8"
    );
    const cont = content.split("\n");
    const resc = [];
    cont
      .filter((word) => word.length > 15)
      .forEach((el) => {
        resc.push(el);
      });
    let rand = Math.floor(1 + Math.random() * (5 + 1 - 1));

    console.log(resc[rand]);
  } catch (err) {
    console.error(err);
  }
}

async function otter() {
  try {
    const content = await fs.readFile(
      "./topics/otter_flashcard_data.txt",
      "utf-8"
    );
    const cont = content.split("\n");
    const resc = [];
    cont
      .filter((word) => word.length > 15)
      .forEach((el) => {
        resc.push(el);
      });
    let rand = Math.floor(1 + Math.random() * (6 + 1 - 1));

    console.log(resc[rand]);
  } catch (err) {
    console.error(err);
  }
}

async function raccoon() {
  try {
    const content = await fs.readFile(
      "./topics/raccoon_flashcard_data.txt",
      "utf-8"
    );
    const cont = content.split("\n");
    const resc = [];
    cont
      .filter((word) => word.length > 15)
      .forEach((el) => {
        resc.push(el);
      });
    let rand = Math.floor(1 + Math.random() * (7 + 1 - 1));

    console.log(resc[rand]);
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  nighthawk,
  otter,
  raccoon,
};

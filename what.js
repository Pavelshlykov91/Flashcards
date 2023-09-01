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
    const rand = Math.floor(1 + Math.random() * (5 + 1 - 1));
    let contOtvet = content.split("\n");
    const rescOtvet = [];
    let arr = [];
    contOtvet
      .filter((word) => word.length < 10 && word.length > 2)
      .forEach((el) => {
        rescOtvet.push(el);
      });

    const otvet = rescOtvet[rand];
    arr.push(resc[rand]);
    arr.push(otvet);

    return arr;
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
    const rand = Math.floor(1 + Math.random() * (5 + 1 - 1));
    let contOtvet = content.split("\n");
    const rescOtvet = [];
    let arr = [];
    contOtvet
      .filter((word) => word.length < 10 && word.length > 2)
      .forEach((el) => {
        rescOtvet.push(el);
      });

    const otvet = rescOtvet[rand];
    arr.push(resc[rand]);
    arr.push(otvet);

    return arr;
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
    const rand = Math.floor(1 + Math.random() * (5 + 1 - 1));
    let contOtvet = content.split("\n");
    const rescOtvet = [];
    let arr = [];
    contOtvet
      .filter((word) => word.length < 10 && word.length > 2)
      .forEach((el) => {
        rescOtvet.push(el);
      });

    const otvet = rescOtvet[rand];
    arr.push(resc[rand]);
    arr.push(otvet);

    return arr;
  } catch (err) {
    console.error(err);
  }
}

raccoon();
module.exports = {
  nighthawk,
  otter,
  raccoon,
};

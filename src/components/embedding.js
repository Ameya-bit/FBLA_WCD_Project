const tf = require("@tensorflow/tfjs")

const fs = require("fs");

let sourcePath = "./src/components/JobLIst_rows.csv";
const min_para_words = 5;

function embedding() {
  let rawText = fs.readFileSync(sourcePath, {
    encoding: "utf-8",
    flag: "r",
  });

  let paras = [];

  // Split text into paragraphs
  // To understand this regex, head over to https://regexr.com/
  let rawParas = rawText.split(/\r\n|\n|\r/);

  

  for (let i = 0; i < rawParas.length; i++) {
    let rawPara = rawParas[i].trim().replaceAll("\n", " ").replace(/\r/g, "");

    // Check of it is a question and has greater length than minimum
    if (rawPara.charAt(rawPara.length - 1) != "?") {
      if (rawPara.split(/\s+/).length >= min_para_words) {
        paras.push(rawPara);
      }
    }
  }
  var count = paras.length;
  console.log(paras[0])
}

console.log("hello world");
embedding();

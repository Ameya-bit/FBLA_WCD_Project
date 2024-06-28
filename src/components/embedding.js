
import * as fs from 'fs';
import '@tensorflow/tfjs';
import 'dotenv/config';
import {PDFExtract} from 'pdf.js-extract';


import * as use from '@tensorflow-models/universal-sentence-encoder' ;
import { createClient } from "@supabase/supabase-js";

let sourcePath = "./src/components/JobLIst_rows.csv";
const min_para_words = 5;
 
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const embedding = async (rawText) => {


  let paras = [];
  let rawParas = rawText.split(/\n\s*\n/).join().split(".");


  for (let i = 0; i < rawParas.length; i++) {
    let rawPara = rawParas[i].trim().replaceAll("\n", " ").replace(/\r/g, "");

    if (rawPara.charAt(rawPara.length - 1) != "?") {
      if (rawPara.split(/\s+/).length >= min_para_words) {
        paras.push(rawPara);
      }
    }
  }

  var count = paras.length;

  console.log(paras);

  try {
    console.log("embed started");

    const model = await use.load()
    const embed = await model.embed(paras);

    console.log("embed complete");

    const uploadEmbed = async (i) => {
      const { data, error } = await supabase
        .from('profiles')
        .update({ resumeEmbed: embed.arraySync(), resumeBody: paras })
        .eq("id", 'd21d731e-4635-409f-9edd-2d705bda3407')
        .select()

      if(error) {
        console.log(error);
      }
    }

    for(let i =1; i < count-1; i++) {
      uploadEmbed(i);
      console.log(i + "% of embed uploaded")
    }
  } catch(e) {
    console.log(e);    
  }
}

function pdfEmbedding() {

  var completeStr ="";
  
  const pdfExtract = new PDFExtract();
  const options = {}; /* see below */
  pdfExtract.extract("src/components/fba37775-e39f-4ff9-b630-53b5205d5d5d.pdf", options, (err, data) => {
    if (err) return console.log(err);
    for(let i = 0; i < data.pages[0]['content'].length; i++){
      completeStr += data.pages[0]['content'][i]["str"];
    }
    console.log(completeStr);
    embedding(completeStr);
  });

  console.log(completeStr);
  
}



console.log("hello world");

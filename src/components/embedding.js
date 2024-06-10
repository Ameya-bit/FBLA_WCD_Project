
import * as fs from 'fs';
import '@tensorflow/tfjs';
import 'dotenv/config';

import * as use from '@tensorflow-models/universal-sentence-encoder' ;
import { createClient } from "@supabase/supabase-js";

let sourcePath = "./src/components/JobLIst_rows.csv";
const min_para_words = 5;

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const embedding = async () => {
  let rawText = fs.readFileSync(sourcePath, {
    encoding: "utf-8",
    flag: "r",
  });

  let paras = [];
  let rawParas = rawText.split(/\r\n|\n|\r/);

  for (let i = 0; i < rawParas.length; i++) {
    let rawPara = rawParas[i].trim().replaceAll("\n", " ").replace(/\r/g, "");

    if (rawPara.charAt(rawPara.length - 1) != "?") {
      if (rawPara.split(/\s+/).length >= min_para_words) {
        paras.push(rawPara);
      }
    }
  }

  var count = paras.length;

  try {
    console.log("embed started");

    const model = await use.load()
    const embed = await model.embed(paras);

    console.log("embed complete");

    const uploadEmbed = async (i) => {
      const { data, error } = await supabase
        .from('posts')
        .insert([
          {id: i, title: paras[i].split(',')[0], body: paras[i], embedding: embed.arraySync()[i] },
        ])
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

console.log("hello world");

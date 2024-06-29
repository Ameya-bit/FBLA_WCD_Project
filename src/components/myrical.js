import axios from "axios";
import OpenAI from "openai";
import '@tensorflow/tfjs';

import * as use from '@tensorflow-models/universal-sentence-encoder' ;
import React, { useState } from "react";
import "react-chatbot-kit/build/main.css";
import { Inputs, Button } from "./navbar";
import {
  supabase,
  RetrieveDataset,
  setUserData,
  signInUser,
  getCurrentUser,
  getResume,
} from "../components/supabase.js";
import ChatBot, { createChatBotMessage } from "react-chatbot-kit";
const OpenAIKey = process.env.REACT_APP_OPENAI_KEY;
const getData = async () => {
  
  return embedArr;
}


function OffCanvas() {
  const embedArr = RetrieveDataset('posts', 200);
  const config = {
    initialMessages: [
      createChatBotMessage("I am Myrical, your job finding assistant!"),
    ],
    botName: "Myrical AI",
    customStyles: {
      botMessageBox: {
        backgroundColor: "#376B7E",
      },
      chatButton: {
        backgroundColor: "rgba(255, 255, 255, 0)",
      },
    },
    embedArr: embedArr,
    
  };
  const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const removeLoadingMessage = (prevstateArray) => {
      
      prevstateArray?.messages?.splice(
        prevstateArray?.messages?.findIndex(
          (a) => a?.message?.message === <Loader/>
        ),
        1
      );
      return prevstateArray;
      
    };
    const handleHello = async (message) => {
      const loading = createChatBotMessage(<Loader />)
      setState((prev) => ({ ...prev, messages: [...prev.messages, loading], }))

      const resp = await generateResponse(message, config['embedArr'])
      
      
      setState((prev) => (
        removeLoadingMessage(prev),  
      {
        ...prev,
        messages: [...prev.messages, createChatBotMessage(resp)],
      }));

    };
    return (
      <div>
        <pre>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            actions: {
              handleHello,
            },
          });
        })}
      </pre>
      </div>
      
    );
  };
  return (
    
      <div
          class="modal fade bd-example-modal shaded"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-lg ">
            <div class="modal-content transparent">
            <ChatBot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
            </div>
          </div>
        </div>
      
      
  );
}


const Loader = (props) => {
  return (
      <div className="bouncing-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
  );
};



{/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div> */}


const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    actions.handleHello(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

const generateResponse = async (query, embedArr, req, res) => {
  try {
    if(query == ""){
      return "It seems you did not enter a question. Please enter one into the textbox below before sending.";
    }
    const model = await use.load()
    const embed = await model.embed(query);

    const embedQ = embed.arraySync()[0];

    var context = findClosestParagraphs(embedArr, embedQ, 5);

    const newQuery = "Answer the following question, also use your own knowledge when necessary :\n\n" +
    "Context :\n" +
    context.join("\n\n") +
    "\n\nQuestion :\n" +
    query +
    "?"

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: newQuery }],
        temperature: 0,
        max_tokens: 1000,
      },
      {
        headers: {
          Authorization: `Bearer ${OpenAIKey}`,
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error generating response:", error);
    throw error;
  }
};

const findClosestParagraphs = (embeds, questionEmbedding, count) => {
  var items = [];

  for (const key in embeds) {
    let paragraph = embeds[key]['title'] + ": " + embeds[key]['body'];
    let currentEmbedding = embeds[key]['embedding'];


    items.push({
      paragraph: paragraph,
      score: compareEmbeddings(questionEmbedding, currentEmbedding.split('[').join(',').split(']').join(',').split(',')),
    });
  }

  items.sort(function (a, b) {
    return b.score - a.score;
  });

  return items.slice(0, count).map((item) => item.paragraph);
};

const compareEmbeddings = (embedding1, embedding2) => {
  var length = Math.min(embedding1.length, embedding2.length - 1);
  var dotprod = 0;

  for (var i = 0; i < length; i++) {
    dotprod += embedding1[i] * embedding2[i+1];
  }

  return dotprod;
};





export default OffCanvas;
export { generateResponse, compareEmbeddings, findClosestParagraphs };

import axios from 'axios';
const OpenAI = require("openai");
import { Inputs, Button } from './navbar'
const OpenAIKey = process.env.REACT_APP_OPENAI_KEY;


function OffCanvas() {
    return (
        <div class="offcanvas offcanvas-end round shaded" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h1 id="offcanvasRightLabel">MyricalAI</h1>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <Inputs
                    ids="call"
                    name="Ask Myrical AI"
                    type="text"

                    value=""
                />
                <button
                    type="button"
                    class="btn btn-success btn-sm"
                    
                >
                    Answer my Question
                </button>
            </div>
        </div>
    );
}

// function openAICall() {
//     if (document.getElementById('call')) {
//         let query = document.getElementById('call').value;;
//         console.log(query);
//         console.log(generateResponse(query));

//     }


// }

// const openai = new OpenAI({
//     apiKey: OpenAIKey,
// });

// const generateResponse = async (query, req, res) => {
//     try {
//         const message = query;
//         const response = await openai.chat.completions.create({
//             model: "gpt-3.5-turbo",
//             messages: [{ role: "user", content: message }],
//             temperature: 0,
//             max_tokens: 1000,
//         });
//         return (response);
//     } catch (err) {
//         return (err.message);
//     }
// };




export { OffCanvas }
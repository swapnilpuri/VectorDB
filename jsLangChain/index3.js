import { OpenAI } from "@langchain/openai";

const model = new OpenAI({ model: "gpt-3.5-turbo-instruct" });
const result = await model.invoke("The sky is");
console.log(result);
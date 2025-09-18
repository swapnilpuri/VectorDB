import { OpenAI } from "@langchain/openai";

const llm = new OpenAI({
  model: "gpt-3.5-turbo-instruct",
  temperature: 0,
  maxTokens: undefined,
  timeout: undefined,
  maxRetries: 2,
  apiKey: process.env.OPENAI_API_KEY,
  // other params...
});

const inputText = "OpenAI is an AI company that ";

const completion = await llm.invoke(inputText);
completion;
console.log(completion);
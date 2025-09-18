import { ChatOpenAI } from '@langchain/openai'
import { HumanMessage } from '@langchain/core/messages'

const model = new ChatOpenAI();
const prompt = [new HumanMessage('What is the capital of France?')]
const result = await model.invoke(prompt)
console.log(result)
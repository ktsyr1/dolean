


## Api

```js
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',
  baseURL: 'https://integrate.api.nvidia.com/v1',
})

async function main() {
  const completion = await openai.chat.completions.create({
    model: "nvidia/nemotron-4-340b-instruct",
    messages: [{"role":"user","content":"Write a limerick about the wonders of GPU computing."}],
    temperature: 0.2,
    top_p: 0.7,
    max_tokens: 1024,
    stream: true,
  })
   
  for await (const chunk of completion) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '')
  }
  
}

main();
```
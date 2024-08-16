
import OpenAI from 'openai';

// console.log(process.env.nvidiaApiKey , openai);
export async function Ai(content) {

    const openai = new OpenAI({
        apiKey: process.env.nvidiaApiKey,
        baseURL: 'https://integrate.api.nvidia.com/v1',
    })
    const completion = await openai.chat.completions.create({
        model: "nvidia/nemotron-4-340b-instruct",
        messages: [{ "role": "user", content }],
        temperature: 0.2,
        top_p: 0.7,
        max_tokens: 1024,
        stream: false,
    })
    return completion.choices[0].message.content
    // for await (const chunk of completion) {
    //     process.stdout.write(chunk.choices[0]?.delta?.content || '')
    // }

}

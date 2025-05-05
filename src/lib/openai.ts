import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function generateReportContent(prompt: string) {
  // Implement your GPT-4 generation logic here
  // This is a simplified example
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant that generates professional report content." },
      { role: "user", content: prompt }
    ],
    model: "gpt-4",
  })

  return completion.choices[0].message.content
}
import { Configuration, OpenAIApi } from 'openai';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  result: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: req.body.prompt,
  });

  res.status(200).json({ result: completion.data.choices[0].text });
}

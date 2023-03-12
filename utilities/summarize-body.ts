import { FieldHook } from 'payload/types';
import axios from 'axios';

export const summarizeBody =
  (): FieldHook =>
  async ({ value, originalDoc, data }) => {
    try {
      const { body } = data;

      const summary = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/ask`,
        {
          prompt: `give me short summary of "${body}"`,
        }
      );

      console.log(summary.data.result.replace(/\r?\n|\r/g, '').trim());
      return summary.data.result.replace(/\r?\n|\r/g, '').trim();
    } catch (err) {
      const message = 'Error parsing SEO summary from body';

      console.error(`action=summarize-body.ts message=${message} err=${err}`);

      return message;
    }
  };

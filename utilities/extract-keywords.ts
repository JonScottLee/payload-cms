import { FieldHook } from 'payload/types';
import axios from 'axios';

export const extractKeywords =
  (): FieldHook =>
  async ({ value, originalDoc, data }) => {
    try {
      const { body } = data;

      const keywords = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/ask`,
        {
          prompt: `give me a comma-separated list of the SEO keywords from "${body}"`,
        }
      );

      return keywords.data.result.replace(',', ' ');
    } catch (err) {
      const message = 'Error parsing keywords from body';

      console.error(`action=extract-keywords.ts message=${message} err=${err}`);

      return 'Error parsing keywords from body';
    }
  };

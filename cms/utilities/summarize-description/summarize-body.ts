import { FieldHook } from 'payload/types';
import axios from 'axios';
import { MetaDescription } from '../../fields/meta-description/model';

export const summarizeBody =
  (): FieldHook =>
  async ({ value, originalDoc, data }) => {
    try {
      const {
        body: originalBody,
        meta: { description: originalDescription },
      } = originalDoc;

      const { body: newBody } = data;

      const description = new MetaDescription(originalDescription);

      // If page body hasn't changed, and we already have a description filled out,
      // don't call the AI API to generate a new one. We already have it.
      if (originalBody === newBody && description.isValid()) {
        return description;
      }

      const summary = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/ask`,
        {
          prompt: `summarize "${newBody}"`,
        }
      );

      return summary.data.result.replace(/\r?\n|\r/g, '').trim();
    } catch (err) {
      // TODO: This method doesn't belong on MetaDescription; it
      // has nothing to do with the MetaDescription.
      const message = MetaDescription.formatErrorMessage(
        'Error parsing SEO summary from body'
      );

      console.error(`action=summarize-body.ts message=${message} err=${err}`);

      return message;
    }
  };

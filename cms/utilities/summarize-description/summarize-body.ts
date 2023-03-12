import { FieldHook } from 'payload/types';
import axios from 'axios';

export class Description {
  static #errorKey: string = 'Error';
  #description: string;

  constructor(description: string) {
    this.#description = description;
  }

  static formatErrorMessage(error: string) {
    return `${Description.#errorKey}: ${error}`;
  }

  isErrorMessage() {
    if (!this.#description.length) return false;

    return this.#description.indexOf(Description.#errorKey) > -1;
  }

  normalize() {
    return this.#description.replace(/\r?\n|\r/g, '').trim();
  }

  isValid() {
    if (!this.#description.length) return false;

    return !this.isErrorMessage();
  }
}

export const summarizeBody =
  (): FieldHook =>
  async ({ value, originalDoc, data }) => {
    try {
      const {
        body: originalBody,
        meta: { description: originalDescription },
      } = originalDoc;

      const { body: newBody } = data;

      const description = new Description(originalDescription);

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
      const message = Description.formatErrorMessage(
        'Error parsing SEO summary from body'
      );

      console.error(`action=summarize-body.ts message=${message} err=${err}`);

      return message;
    }
  };

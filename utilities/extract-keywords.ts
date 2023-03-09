import { FieldHook } from 'payload/types';

const keyword_extractor = require('keyword-extractor');

export const extractKeywords =
  (): FieldHook =>
  ({ value, originalDoc, data }) => {
    try {
      const { body } = data;

      const result = keyword_extractor.extract(body, {
        language: 'english',
        remove_digits: true,
        return_changed_case: true,
        remove_duplicates: false,
      });

      return result.join(' ') || '';
    } catch (err) {
      const message = 'Error parsing keywords from body';

      console.error(`action=extract-keywords.ts message=${message} err=${err}`);

      return 'Error parsing keywords from body';
    }
  };

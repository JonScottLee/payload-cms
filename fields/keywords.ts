import { Field } from 'payload/types';
import { extractKeywords } from '../utilities/extract-keywords';

export const keywords: Field = {
  name: 'keywords',
  label: 'Keywords',
  type: 'text',
  admin: {
    position: 'sidebar',
  },
  hooks: {
    beforeValidate: [extractKeywords()],
  },
};

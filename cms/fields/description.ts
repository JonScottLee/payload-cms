import { Field } from 'payload/types';
import { summarizeBody } from '../utilities/summarize-description/summarize-body';

export const description: Field = {
  name: 'description',
  label: 'Description',
  type: 'textarea',
  admin: {
    position: 'sidebar',
  },
  hooks: {
    beforeValidate: [summarizeBody()],
  },
};

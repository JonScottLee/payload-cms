import type { Field } from 'payload/types';
import { keywords } from './keywords';

export const meta: Field = {
  name: 'meta',
  label: 'Page Meta',
  type: 'group',
  admin: {
    position: 'sidebar',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    keywords,
  ],
};

import type { Field } from 'payload/types';
import { keywords } from './keywords';
import { metaTitle as title } from './meta-title';

export const meta: Field = {
  name: 'meta',
  label: 'Page Meta',
  type: 'group',
  admin: {
    position: 'sidebar',
  },
  fields: [
    title,
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    keywords,
  ],
};

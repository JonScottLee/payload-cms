import type { Field } from 'payload/types';
import { description } from './description';
import { keywords } from './keywords';
import { metaTitle as title } from './meta-title';

export type Type = {
  meta?: {
    title?: string;
    description?: string;
    keywords?: string;
  };
};

export const meta: Field = {
  name: 'meta',
  label: 'Page Meta',
  type: 'group',
  admin: {
    position: 'sidebar',
  },
  fields: [title, description, keywords],
};

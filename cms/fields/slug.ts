import { formatSlug } from '../../utilities/format-slug';
import { Field } from 'payload/types';

export const slug: Field = {
  name: 'slug',
  label: 'Slug',
  type: 'text',
  admin: {
    position: 'sidebar',
  },
  hooks: {
    beforeValidate: [formatSlug('title')],
  },
};

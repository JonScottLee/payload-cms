import { Field } from 'payload/types';
import { formatSlug } from '../../utilities/format-slug';

export const metaTitle: Field = {
  name: 'title',
  label: 'Title',
  type: 'text',
  hooks: {
    beforeValidate: [
      ({ data }) => {
        return data.title;
      },
    ],
  },
};

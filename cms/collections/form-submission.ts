import { CollectionConfig } from 'payload/types';

export const FormSubmission: CollectionConfig = {
  slug: 'form-submission',
  fields: [
    {
      name: 'from',
      type: 'text',
      label: 'From',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Message',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'source',
      type: 'text',
      label: 'souce',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
  ],
};

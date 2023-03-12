import { GlobalConfig } from 'payload/types';
import { zip } from '../fields';

export const contact: GlobalConfig = {
  slug: 'contact',
  label: 'Contact',
  fields: [
    {
      name: 'street',
      label: 'Street',
      type: 'text',
      required: true,
    },
    {
      name: 'unit',
      label: 'Unit',
      type: 'text',
      admin: {
        description: 'Building unit, apartment #, etc.',
      },
    },
    {
      name: 'city',
      label: 'City',
      type: 'text',
      required: true,
    },
    {
      name: 'state',
      label: 'State',
      type: 'text',
      required: true,
    },
    zip,
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'number',
      required: true,
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'text',
      required: true,
    },
  ],
};

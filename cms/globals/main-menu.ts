import { GlobalConfig } from 'payload/types';
import { link } from '../fields/link';

export const MainMenu: GlobalConfig = {
  slug: 'main-menu',
  fields: [
    {
      name: 'logo_large',
      label: 'Large Screen Logo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'This logo will be used on large screens',
      },
    },
    {
      name: 'logo_small',
      label: 'Small Screen Logo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'This logo will be used on small screens',
      },
    },
    {
      name: 'nav',
      label: 'Navigation',
      type: 'array',
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      fields: [link],
    },
  ],
};

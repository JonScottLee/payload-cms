import { GlobalConfig } from 'payload/types';
import { link } from '../fields/link';

export const MainMenu: GlobalConfig = {
  slug: 'main-menu',
  fields: [
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

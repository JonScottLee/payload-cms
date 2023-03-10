import { GlobalConfig } from 'payload/types';

export const MainMenu: GlobalConfig = {
  slug: 'main-menu',
  fields: [
    {
      name: 'nav',
      label: 'Navigation',
      type: 'array',
      fields: [
        {
          name: 'type',
          type: 'radio',
          options: [
            {
              label: 'Custom URL',
              value: 'custom',
            },
            {
              label: 'Page',
              value: 'page',
            },
          ],
          admin: {
            layout: 'horizontal',
          },
        },
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
        },
        {
          name: 'page',
          label: 'Page to link to',
          type: 'relationship',
          relationTo: 'pages',
          required: true,
          admin: {
            condition: (data, siblingData) => siblingData?.type === 'page',
          },
        },
        {
          name: 'url',
          label: 'Custom URL',
          type: 'text',
          required: true,
          admin: {
            condition: (data, siblingData) => siblingData?.type === 'custom',
          },
        },
      ],
    },
  ],
};

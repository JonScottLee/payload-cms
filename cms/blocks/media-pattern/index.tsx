import { Block } from 'payload/types';

export type MediaPatternType = {
  blockType: 'mediaPattern';
  blockName?: string;
  content: unknown;
};

export const MediaPattern: Block = {
  slug: 'media-pattern',
  fields: [
    {
      name: 'text',
      label: 'Text',
      type: 'text',
      required: true,
    },
    {
      name: 'body',
      label: 'Body',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'heroType',
      label: 'Hero Type',
      type: 'radio',
      admin: {
        layout: 'vertical',
      },
      options: [
        {
          label: 'Minimal',
          value: 'minimal',
        },
        {
          label: 'Image Left',
          value: 'imageLeft',
        },
        {
          label: 'Image Right',
          value: 'imageRight',
        },
        {
          label: 'Image as Background',
          value: 'imageAsBackground',
        },
      ],
    },
  ],
};

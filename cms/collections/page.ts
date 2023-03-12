import { CollectionConfig } from 'payload/types';
import { slug } from '../fields/slug';
import { meta, Type as MetaType } from '../fields/meta';
import { Content, Type as ContentType } from '../blocks/content';
import { Image, Type as ImageType } from '../blocks/image';

import { CallToAction, CallToActionType } from '../blocks/call-to-action';
import { MediaPattern, MediaPatternType } from '../blocks/media-pattern';

export type Layout =
  | MediaPatternType
  | CallToActionType
  | ContentType
  | ImageType;

export type Type = {
  title: string;
  heroType: 'minimal' | 'contentAboveImage' | 'contentLeftOfImage';
  heroContent: unknown;
  slug: string;
  layout: Layout[];
  meta: MetaType;
};

export const Page: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: (): boolean => true, // Everyone can read Pages
  },
  fields: [
    {
      name: 'title',
      label: 'Page Title',
      type: 'text',
      required: true,
    },
    {
      name: 'body',
      label: 'Body',
      type: 'textarea',
      required: true,
    },
    // {
    //   type: 'radio',
    //   name: 'heroType',
    //   label: 'Hero Type',
    //   required: true,
    //   defaultValue: 'minimal',
    //   options: [
    //     {
    //       label: 'Minimal',
    //       value: 'minimal',
    //     },
    //     {
    //       label: 'Content Above Image',
    //       value: 'contentAboveImage',
    //     },
    //     {
    //       label: 'Content Left of Image',
    //       value: 'contentLeftOfImage',
    //     },
    //   ],
    // },
    // {
    //   name: 'heroContent',
    //   label: 'Hero Content',
    //   type: 'richText',
    //   required: true,
    // },
    // {
    //   name: 'heroImage',
    //   label: 'Hero Image',
    //   type: 'upload',
    //   relationTo: 'media',
    //   required: true,
    //   admin: {
    //     condition: (_, siblingData) =>
    //       siblingData?.heroType === 'contentAboveImage' ||
    //       siblingData?.heroType === 'contentLeftOfImage',
    //   },
    // },
    // {
    //   name: 'layout',
    //   label: 'Page Layout',
    //   type: 'blocks',
    //   minRows: 1,
    //   blocks: [CallToAction, Content, Image],
    // },
    meta,
    slug,
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 1,
      blocks: [MediaPattern, CallToAction],
    },
  ],
};

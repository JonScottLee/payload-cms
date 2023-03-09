import { CollectionConfig } from 'payload/types';
import { MediaType } from './media';
import { slug, meta } from '../fields';
import { Image, Type as ImageType } from '../blocks/Image';
import { CallToAction, Type as CallToActionType } from '../blocks/CallToAction';
import { Content, Type as ContentType } from '../blocks/Content';
import { TeamMember, Type as TeamMemberType } from '../blocks/team-member';

export type Layout = CallToActionType | ContentType | ImageType;

export type Type = {
  title: string;
  body: string;
  slug: string;
  image?: MediaType;
  // layout: Layout[];
  meta: {
    title?: string;
    description?: string;
    keywords?: string;
  };
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
    {
      name: 'image',
      label: 'Featured Image',
      type: 'upload',
      relationTo: 'media',
    },
    // {
    //   name: 'layout',
    //   label: 'Page Layout',
    //   type: 'blocks',
    //   minRows: 1,
    //   blocks: [CallToAction, Content, Image, TeamMember],
    // },
    slug,
    meta,
  ],
};

import { useQuery } from 'react-query';

export type MainMenu = {
  globalType: string;
  createdAt: string;
  updatedAt: string;
  nav: Nav[];
  logo: Logo;
  logo_large: Logo;
  logo_small: Logo;
  id: string;
};

export type Nav = {
  link: Link;
  id: string;
};

export type Link = {
  type: string;
  label: string;
  page: Page;
};

export type Page = {
  id: string;
  title: string;
  layout: Layout[];
  meta: Meta;
  slug: string;
  createdAt: string;
  updatedAt: string;
};

export type Layout = {
  name: string;
  image: string;
  bio: Bio[];
  id: string;
  blockType: string;
};

export type Bio = {
  children: Children[];
};

export type Children = {
  text: string;
};

export type Meta = {};

export type Logo = {
  id: string;
  alt: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  sizes: Sizes;
  createdAt: string;
  updatedAt: string;
  url: string;
};

export type Sizes = {
  card: Card;
  feature: Feature;
};

export type Card = {
  width: number;
  height: number;
  mimeType: string;
  filesize: number;
  filename: string;
  url: string;
};

export type Feature = {
  url: any;
  width: any;
  height: any;
  mimeType: any;
  filesize: any;
  filename: any;
};

const fetchMainMenu = async (): Promise<MainMenu> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/globals/main-menu`
  );
  return res.json();
};

export const useMainMenuQuery = () => {
  return useQuery('main-menu', fetchMainMenu);
};

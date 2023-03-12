import { apiRoutes } from '../../api-routes';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useMainMenuQuery } from '../../hooks/use-main-menu-query';

type MainMenuLinks = MainMenuLink[];

type MainMenuLink = {
  link: Link;
};

type Page = {
  title: string;
};

type Link = {
  type: string;
  label: string;
  page: Page;
};

const getMainMenuItems = async () => {
  const response = await fetch(apiRoutes.mainMenu);
  const data = await response.json();
  return data.nav || {};
};

export const MainMenu = () => {
  const { data } = useMainMenuQuery();

  if (!data) return null;

  return (
    <nav>
      <ul>
        {data.nav.map(({ link }) => (
          <li key={link.label}>{link.label}</li>
        ))}
      </ul>
    </nav>
  );

  return null;
};

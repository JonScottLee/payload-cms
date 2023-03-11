import { apiRoutes } from '../../api-routes';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
  const [navItems, setNavItems] = useState<MainMenuLinks>([]);

  useEffect(() => {
    axios
      .get(apiRoutes.mainMenu)
      .then(({ data }) => {
        const nav: MainMenuLinks = data.nav;
        setNavItems(data.nav);
      })
      .catch((err) => {
        console.error('Error:', err);
      });
  }, []);

  return (
    <nav>
      <ul>
        {navItems &&
          navItems.map(({ link }) => <li key={link.label}>{link.label}</li>)}
      </ul>
    </nav>
  );
};

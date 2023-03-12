import { apiRoutes } from '../../api-routes';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useMainMenuQuery } from '../../hooks/use-main-menu-query';

export const MainMenu = () => {
  const { data } = useMainMenuQuery();

  if (!data) return null;

  return (
    <header>
      <img src={data.logo_large.url} alt={data.logo_large.alt} />
      <img src={data.logo_small.url} alt={data.logo_small.alt} />
      <nav>
        <ul>
          {data.nav.map(({ link }) => (
            <li key={link.label}>{link.label}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

type RouteNames = 'mainMenu';

type Route = {
  [key in RouteNames]: string;
};

export const apiRoutes: Route = {
  mainMenu: `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/globals/main-menu`,
};

export const baseUrl = process.env.NEXT_PUBLIC_API_URL;

import {
  allowedPathsWithoutAuthentication,
  applicationPath,
} from '../../config/routePath';

export const isHomePage = () => {
  return window.location.pathname.toLowerCase() === applicationPath.Home;
};

export const allowedToAccessWithoutLogin = () => {
  return allowedPathsWithoutAuthentication.includes(
    window.location.pathname.toLowerCase(),
  );
};

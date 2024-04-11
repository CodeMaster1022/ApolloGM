import { useRoutes } from 'react-router-dom';

// project import
import LoginRoutes from './LoginRoutes';
import { MainRoutes, LPMainRoutes } from './MainRoutes';
import { useEffect } from 'react';
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const role = (JSON.parse(localStorage.getItem('user')) || {}).role;
  useEffect(() => console.log(role));
  let routesToRender = [LoginRoutes]; // Default routes

  if (role) {
    if (role === 1) {
      routesToRender.push(MainRoutes);
    } else if (role == 2) {
      routesToRender.push(LPMainRoutes);
    }
  }
  // return useRoutes([LoginRoutes, MainRoutes]);
  return useRoutes(routesToRender);
}

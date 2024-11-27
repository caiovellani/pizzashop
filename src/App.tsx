import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import "./global.css";
import { router } from './routes';

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | Pizzashop'/>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

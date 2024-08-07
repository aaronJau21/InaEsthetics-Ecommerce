import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './presentation/layout/Layout';
import { Blog, Contacto, HomePage, Nosotros, Tienda, Tratamientos } from './presentation/pages';

export const router = createBrowserRouter( [
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '/',
        Component: HomePage,
        index: true
      },
      {
        path: 'nosotros',
        Component: Nosotros,
      },
      {
        path: 'tienda',
        Component: Tienda,
      },
      {
        path: 'tratamiento',
        Component: Tratamientos
      },
      {
        path: 'blog',
        Component: Blog
      },
      {
        path: 'contacto',
        Component: Contacto
      }
    ]
  }
] );
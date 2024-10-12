import { createBrowserRouter, Navigate } from 'react-router-dom';
import { TextArea } from './components/TextArea';
import { Speak } from './components/Speak';
import { Type } from './components/Type';
import { Layout } from './components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to='text' replace />,
      },
      {
        path: 'text',
        element: <TextArea />,
      },
      {
        path: 'listen',
        element: <Speak />,
      },
      {
        path: 'type',
        element: <Type />,
      },
    ],
  },
]);

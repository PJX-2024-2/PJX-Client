import { createBrowserRouter } from 'react-router-dom';
import Start from '../pages/Start/Start';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <Start />
      },
    ],
  },
]);

export default router;
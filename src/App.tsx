import { TextProvider } from './context/TextContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

function App() {
  return (
    <TextProvider>
      <RouterProvider router={router} />
    </TextProvider>
  );
}

export default App;

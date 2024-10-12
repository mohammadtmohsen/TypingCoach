import { Outlet } from 'react-router-dom';
import { Nav } from './Nav';

export const Layout = () => {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <div className='flex justify-between items-center'>
        <h1 className='uppercase'>Typing Coach</h1>
        <Nav />
      </div>
      <Outlet />
    </div>
  );
};

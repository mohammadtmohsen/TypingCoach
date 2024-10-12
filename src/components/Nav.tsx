import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className='flex items-center gap-5'>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'clickable !bg-gray-900' : 'clickable'
        }
        to='/text'
      >
        Text
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'clickable !bg-gray-900' : 'clickable'
        }
        to='/listen'
      >
        Listen
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'clickable !bg-gray-900' : 'clickable'
        }
        to='/type'
      >
        Type
      </NavLink>
    </nav>
  );
};

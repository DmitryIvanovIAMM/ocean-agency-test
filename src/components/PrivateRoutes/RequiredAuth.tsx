import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const RequiredAuth = () => {
  const { user } = useAuth();

  console.log('user:  ', user);
  return user ? <Outlet /> : <Navigate to="/" replace />;
};
export default RequiredAuth;

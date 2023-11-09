import { Navigate } from 'react-router-dom';
import { useLoginContext } from './ContextHooks/LoginContext';

const RequireAuth = ({ children }) => {
  const { isLogged } = useLoginContext();

  return isLogged ? children : <Navigate to="/login" replace />;
};

export default RequireAuth;
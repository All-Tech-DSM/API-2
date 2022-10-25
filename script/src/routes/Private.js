//import { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}){
  //const { signed, loading } = useContext(AuthContext);
  const loading = {};
  const signed = {};

  if(loading){
    return(
      <div></div>
    )
  }

  if(!signed && isPrivate){
    return <Navigate to="/" />
  }

  if(signed && !isPrivate){
    return <Navigate to="/cadastro" />
  }

  return(
    <Route
      {...rest}
      render={ props => (
        <Component {...props} />
      )}
    />
  )
}
import React from 'react';
import {Link} from 'react-router-dom';
import App from '../../App';

class NotFound extends React.Component{
  render(){
    return(
      <p>Page not found baby. Go back to <Link to="/">HOME</Link></p>
    )
  }
}

export default NotFound;

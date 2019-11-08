import React from 'react';

import classes from './Header.module.scss'
import { Link } from 'react-router-dom';
import Button from '../UI/Button';

const Header = () => {
  return (
    <div className={classes.header}>
      <Link to="/"><h1>Menu</h1></Link>

      <Link to='/create'>
        <Button type='primary' disabled={false}>Add category</Button>
      </Link>
    </div>
  );
};

export default Header;

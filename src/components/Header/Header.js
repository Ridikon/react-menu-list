import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../UI/Button';
import classes from './Header.module.scss'

const Header = () => {
  return (
    <div className={classes.header}>
      <Link to="/"><h1>Menu</h1></Link>

      <Link to='/create'>
        <Button typeColor='primary' disabled={false}>Add category</Button>
      </Link>
    </div>
  );
};

export default Header;

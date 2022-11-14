import React from 'react';

import styles from './Nav.module.css';

function Nav() {
  return (
          <nav className={styles.Nav}>
            <a href='#Welcome' className={styles.Choosen}>Welcome</a>
            <a href='#WhoIAm'>Who I am</a>
            <a href='#WhatIDo'>What I do</a>
            <a href='#ContactMe'>Contact me</a>
          </nav>
  );
}

export default Nav;

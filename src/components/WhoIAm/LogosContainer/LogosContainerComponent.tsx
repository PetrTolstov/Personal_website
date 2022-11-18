import React from 'react';
import styles from './LogosContainer.module.scss';
import logo from './logos/GraphQL.png'
import logo1 from './logos/react.png'
import logo2 from './logos/next.png'

function LogosContainerComponent() {
  return (
    <div className={styles.LogosContainer}>
        <div className={styles.ImageContainer}>
            <img src={logo} alt={''}/>
        </div>
        <div className={styles.ImageContainer}>
            <img src={logo1} alt={''}/>
        </div>
        <div className={styles.ImageContainer}>
            <img src={logo2} alt={''}/>
        </div>
    </div>
  );
}

export default LogosContainerComponent;

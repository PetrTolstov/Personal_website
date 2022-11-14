import React from 'react';
import styles from './Welcome.module.css';
import Nav from "./Nav/Nav";
import SocNets from "./SocNets/SocNets";
import PersonalPhoto from  '../../images/PersonalPhoto.png'

function WelcomeComponent() {
  return (
    <article className={styles.WelcomeComponent} id={'Welcome'}>
      <div className={styles.WelcomeHeader}>
          <Nav/>
          <SocNets/>
      </div>
      <div className={styles.WelcomeMainContainer}>
            <span className={styles.primaryText}>Full-stack</span>
            <span className={styles.secondaryText}>developer</span>
            <img src={PersonalPhoto} alt={'Personal Photo'} className={styles.PersonalPhoto}/>
      </div>
    </article>
  );
}

export default WelcomeComponent;

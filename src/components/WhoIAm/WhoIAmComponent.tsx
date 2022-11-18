import React from 'react';
import styles from './WhoIAm.module.scss';
import LogosContainerComponent from "./LogosContainer/LogosContainerComponent";


function WhoIAmComponent() {
  return (
    <article className={styles.WhoIAmComponent}>
        <div className={styles.topShadow}></div>
        <div className={styles.centerContainer}>
            <div className={styles.containerForContent}>
                <h2>Who am I?</h2>

                <div className={styles.MainContent}>
                    <LogosContainerComponent/>
                    <p className={styles.Description}>I am Petr Tolstov and a young but <span className={styles.markedText}>ambitious</span> specialist in the field of full stack development and an outstanding graduate of Ida-Virumaa Kutsehariduskeskus. I have an extensive range of knowledge in <span className={styles.markedText}>React</span>, <span className={styles.markedText}>Android (kotlin)</span> and <span className={styles.markedText}>Apollo server (backend)</span> development and am constantly improving my skills, looking for new <span className={styles.markedText}>challenges</span>. I also like to participate in <span className={styles.markedText}>team projects</span> and do tutoring, helping people enter the field of Web development.</p>
                </div>
            </div>
        </div>
        <div className={styles.bottomShadow}></div>
    </article>
  );
}

export default WhoIAmComponent;

import React from 'react';

import styles from './SocNets.module.css';
import LinkedIn from '../../../images/LinkedIn.svg'
import GitHub from '../../../images/github.svg'
import Instagram from '../../../images/Inst.svg'
import Telegram from '../../../images/Telegram.svg'

function SocNets() {
  return (
          <div className={styles.SocNets}>
            <a href='https://www.linkedin.com/in/petr-tolstov-ab66861b1/' target="_blank" rel="noreferrer">
                <img src={LinkedIn} alt={'LinkedIn'}/>
            </a>
            <a href='https://github.com/PetrTolstov' target="_blank" rel="noreferrer">
                <img src={GitHub} alt={'GitHub'}/>
            </a>
            <a href='https://www.instagram.com/piotrtolstov/' target="_blank" rel="noreferrer">
                <img src={Instagram} alt={'Instagram'}/>
            </a>
            <a href='https://t.me/Peter7461' target="_blank" rel="noreferrer">
                <img src={Telegram} alt={'Telegram'}/>
            </a>

          </div>
  );
}

export default SocNets;

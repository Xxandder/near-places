import React from 'react';

import * as styles from './styles.module.css';

type Props = {
    message: string
}

const PlaceError: React.FC<Props> = ({message}) => { 
        
   return  <div className={styles['place-error']}>
      <p className={styles['place-error__text']}>{message}</p>
   </div>
  
  };

  export { PlaceError };
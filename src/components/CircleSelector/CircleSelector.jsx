import React from 'react';
import styles from './CircleSelector.module.css';

const CircleSelector = (props) => (
    <div className={styles.CircleSelector}>
      <button onClick={() => props.handleColorSelection()}>Select Circle 1</button>
      <button>Select Circle 2</button>
      <button>Select Circle 3</button>
      <button>Select Circle 4</button>
    </div>
  );
  
  export default CircleSelector;
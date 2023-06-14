import React from 'react';
import './FilterToggle.css';

function FilterToggle({value, onChange}){
  return(
    <div className={value ? 'toggle-back toggle-back_active' : 'toggle-back toggle-back_inactive'} onClick={onChange}>
      <div className={value ? 'toggle-front toggle-front_active' : 'toggle-front toggle-front_inactive'}/>
    </div>
  )
}

export default FilterToggle;
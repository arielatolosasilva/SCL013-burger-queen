import React from 'react';
import logoinicio from '../assets/images/logo.png'
import style from './Logo.module.css';



const Logo =()=> {
  return (
<div className={style.father}>    
<div className={style.logoApp}>

<img className={style.inicio} src={logoinicio} alt="user pic"/>
</div>
</div>
  )
}
export default Logo

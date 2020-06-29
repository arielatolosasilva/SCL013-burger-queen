import React from 'react';
import style from './Header.module.css'
import logoinicio from '../../assets/images/logo.png'


const Header =()=> {
  return (
<div className={style.header}>
    <div >
    <img  className={style.logoHeader}  src={logoinicio} alt="logo-header"/>
    </div>
  </div>
  )
}
export default Header

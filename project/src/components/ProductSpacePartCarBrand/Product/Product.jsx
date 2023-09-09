import React from 'react';
import s from './Product.module.css';
import Skeleton from './Skeleton';
import { NavLink } from 'react-router-dom';

const Product = (props) => {
  return (
    <div className={s.NewsPost}>
      <NavLink className={s.NewsPost}>
        <div>
          <img src={props.Src} alt='#logo#' className={s.img} />
          <div className={s.Name}>{props.Name}</div>
          <div className={s.Price}>{props.Price} </div>
          <button className={s.Butt}>{props.Color}</button>
        </div>
      </NavLink>
    </div>
  );
};

export default Product;

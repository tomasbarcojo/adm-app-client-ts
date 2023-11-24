import React from 'react';
import './Cards.css';
import arrow from './arrow.svg';
import { Link } from 'react-router-dom';

// interface DataProps {
//   title: string;
//   info: string;
//   icon: string;
//   iconBackgroundColor: string;
//   link: string;
// }
export const Cards = (props: {
  title: string;
  dataNumber: number | string;
  link: string;
}): JSX.Element => {
  return (
    <div className="rectangle">
      <div className="cantidad-ventas">{props.title}</div>
      <div className="element">{props.dataNumber}</div>
      <hr className="line" />
      <Link to={props.link} className="botton-info">
        <div className="see-more">Ver más</div>
        <img className="arrow" alt="arrow" src={arrow} />
      </Link>
    </div>
  );
};

export default Cards;

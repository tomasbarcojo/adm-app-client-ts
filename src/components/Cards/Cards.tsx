import React from 'react';
import './Cards.css';
import iconImg from './frame.svg';
import arrowImg from './arrow.svg';
import lineImg from './line.svg';

// interface DataProps {
//   title: string;
//   info: string;
//   icon: string;
//   iconBackgroundColor: string;
//   link: string;
// }

// export const Cards = (data: DataProps): JSX.Element => {
export const Cards = (): JSX.Element => {
  return (
    <div className="overlap-group">
      <div className="rectangle" />
      <div className="iconBackgroundYellow" />
      <div className="cantidad-ventas">Cantidad Ventas Mensuales</div>
      <div className="see-more">See more</div>
      <div className="element">45</div>
      <img className="arrow" alt="Arrow" src={arrowImg} />
      <img className="line" alt="Line" src={lineImg} />
      <img className="frame" alt="Frame" src={iconImg} />
    </div>
  );
};

export default Cards;

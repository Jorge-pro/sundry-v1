import React from "react";
import { Link } from 'react-router-dom';
import "./Card.css";

const PromotionCard = ({promotion}) => (
  <div className="promotion-card">
    <img src={promotion.imageUrl} alt="text" className="promotion-card_image" />
    <div className="promotion-card_info">
      <h2 className="promotion-card_title"><strong> {promotion.title} </strong></h2><br/>
      <p className="promotion-card_details"><strong>Detalhes:</strong>  {promotion.details}</p><br/>
      <p className="promotion-card_email">E-mail:  {promotion.email}</p>
      <h2 className="promotion-card_price"> Price: {promotion.price}</h2>
      <footer className="promotion-card_footer">
        {promotion.comments.length > 0 && (
          <div className="promotion-card_comment"> 
            " {promotion.comments[0].comment} " 
          </div>
        )}
        <div className="promotion-card_comments-count"> {promotion.comments.length} {' '} {promotion.comments.length > 1 ? 'Comentários' : 'Comentário'} </div>
        <button className="promotion-card__btn" type="submit">
          <a href={promotion.url} target="_blank" rel="noopener noreferrer"> advertiser's website </a>
        </button>
        
        <button className="promotion-card__btn" type="submit">
          <Link to={`/edit/${promotion.id}`}> Edit ad </Link>
        </button>
      </footer>
    </div>
  </div>
);


export default PromotionCard;
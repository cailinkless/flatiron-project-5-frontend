import React from 'react';

const QuoteCard = (props) =>

  <div>
        <h2>{props.playbill.title}</h2>
        <p>{props.playbill.about}</p>
        <ul>
            {props.playbill.credits.map(cred => <li>{cred.name} as {cred.role}</li>)}
        </ul>
  </div>;

export default QuoteCard;

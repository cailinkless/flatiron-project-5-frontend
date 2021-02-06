import React from 'react';

const PlaybillTemplate = (props) => // takes in props from parent and displays a formatted version

  <div>
        <h2>{props.playbill.title}</h2>
        <p>{props.playbill.about}</p>
        <ul>
            {props.playbill.credits.map(cred => <li>{cred.name} as {cred.role}</li>)}
        </ul>
  </div>;

export default PlaybillTemplate;

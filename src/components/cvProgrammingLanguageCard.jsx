import React from 'react';

function CVProgrammingLanguageCard(props) {
  return (
    <div className="card bg-light" style={{height:"9rem", width:"9rem"}}>
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <img src={props.url} height="80" width="80" alt={props.altText} id={props.altText} />
            <label className="text-dark text-center" htmlFor={props.altText}>{props.altText}</label>
        </div>
    </div>
  );
};

export default CVProgrammingLanguageCard;

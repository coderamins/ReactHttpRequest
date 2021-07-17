import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.postObj.title}</h1>
        <div className="Info">
            <div className="Author">{props.postObj.author}</div>
        </div>
    </article>
);

export default post;
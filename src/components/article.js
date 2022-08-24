import React from "react";
import "./article.css"

const Article = props => (
    <div className="article">
        <a src={props.link}>
            <h4>{props.title}</h4>
        </a>
        <p>{props.description}</p>
    </div>
)

export default Article
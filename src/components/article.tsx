import React from "react";
import * as styles from "./article.module.css"

const Article = props => (
    <div className={styles.article}>
        <img src={props.thumbnail}/>
        <div>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    </div>
)

export default Article
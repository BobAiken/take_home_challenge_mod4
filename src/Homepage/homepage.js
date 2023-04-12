import React from "react";
import "./homepage.css"
import { Link } from "react-router-dom";

export default function Homepage({articles}) {

  const articleCards = articles.map((article,index) => {
    return(
      <Link to={article.title}>
        <div className="article-card" key={index}>
          <div>{article.title}</div>
          {article.multimedia && <img className="article-image" src={article.multimedia[2].url}/>}
        </div>
      </Link>
    )
  })

  return (
    <section className="article-card-container">
      {articleCards}
    </section>
  )
}
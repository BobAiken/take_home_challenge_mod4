import React from "react";
import "./homepage.css"

export default function Homepage({articles}) {

  const articleCards = articles.map(article => {
    return(
      <div className="article-card">
        <p>{article.title}</p>
        <img className="article-image" src={article.multimedia[2].url}/>
      </div>
    )
  })

  return (
    <section className="article-card-container">
      {articleCards}
    </section>
  )
}
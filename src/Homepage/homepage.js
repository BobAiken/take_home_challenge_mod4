import React from "react";
import "./homepage.css"

export default function Homepage({articles}) {

  const articleCards = articles.map((article,index) => {
    return(
      <div className="article-card" key={index}>
        <div>{article.title}</div>
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
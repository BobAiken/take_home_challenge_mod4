import React , {useEffect, useState} from "react";
import "./homepage.css"
import { Link } from "react-router-dom";

export default function Homepage({articles}) {

  const [articleCards, setArticleCards] = useState()

  useEffect(()=>{
    if(articles){
      setArticleCards(articles.map((article,index) => {  
        return(
          <Link to={article.title} key={index}>
            <div className="article-card" key={index}>
              <div>{article.title}</div>
              {article.multimedia && <img className="article-image" src={article.multimedia[2].url}/>}
            </div>
          </Link>
        )
    }))
    } else {
      setArticleCards(<>Something has gone wrong...</>)
    }
  },[articles])

  return (
    <section className="article-card-container">
      {articleCards}
    </section>
  )
}
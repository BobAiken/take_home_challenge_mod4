import React, {useEffect, useState} from "react"
import { useParams, Link } from "react-router-dom"
import "./Article.css"

export default function Article({articles}) {

  const {articleTitle} = useParams()
  const [articleInfo,setArticleInfo] = useState()

  useEffect(()=>{
    setArticleInfo(
      articles.find(article=>{
        return article.title===articleTitle
      })
    )
  },[articles])


  return (
  <>
  {articleInfo ? 

    <div className="article">
      <h2>{articleInfo.title}</h2>
      <h3>{articleInfo.abstract}</h3>
      {articleInfo.multimedia && <img className="single-article-image" src={articleInfo.multimedia[1].url}/>}
      <br/>
      <Link to={articleInfo.url}>
        <button>Read the Article Here!</button>
      </Link>
      <br/>
      <Link to="/">
        <button>Go Home</button>
      </Link>
    </div>

   : <h2>Loading</h2>}
    
  </>
  )
}
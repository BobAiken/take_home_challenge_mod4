import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"

export default function Article({articles}) {

  const {articleTitle} = useParams()
  console.log(articleTitle)
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
  </div>
   
   
   
   : <h2>Loading</h2>}
    
  </>
  )
}
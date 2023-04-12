import "./Header.css"
import { useState, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"

export default function Header({section, setSection}) {

  const [displayDropDown, setDisplayDropDown] = useState(false)
  let location = useLocation()

  useEffect(()=>{
    setDisplayDropDown(false)
  },[location])

  const handleDropDown = () => {
    if(location.pathname === "/") {
      setDisplayDropDown(!displayDropDown)
    } else {
      setDisplayDropDown(false)
    }
  }

  return(
    <header className="header">
      <Link to="/">
        <h1>NY Times Top Articles</h1> 
      </Link>
      <div className="dropdown"> Choose a Category 
        <button className="dropdown-button" onClick={handleDropDown}>{section}</button>
        { displayDropDown && 
          <div className="dropdown-content">
            <div className="dropdown-category" onClick={()=>setSection("arts")}>Arts</div>
            <div className="dropdown-category" onClick={()=>setSection("automobiles")}>Automobiles</div>
            <div className="dropdown-category" onClick={()=>setSection("books")}>Books</div>
            <div className="dropdown-category" onClick={()=>setSection("business")}>Business</div>
            <div className="dropdown-category" onClick={()=>setSection("fashion")}>Fashion</div>
            <div className="dropdown-category" onClick={()=>setSection("food")}>Food</div>
            <div className="dropdown-category" onClick={()=>setSection("health")}>Health</div>
            <div className="dropdown-category" onClick={()=>setSection("home")}>Home</div>
            <div className="dropdown-category" onClick={()=>setSection("insider")}>Insider</div>
            <div className="dropdown-category" onClick={()=>setSection("magazine")}>Magazine</div>
            <div className="dropdown-category" onClick={()=>setSection("movies")}>Movies</div>
            <div className="dropdown-category" onClick={()=>setSection("nyregion")}>NY Region</div>
            <div className="dropdown-category" onClick={()=>setSection("obituaries")}>Obituaries</div>
            <div className="dropdown-category" onClick={()=>setSection("opinion")}>Opinion</div>
            <div className="dropdown-category" onClick={()=>setSection("politics")}>Politics</div>
            <div className="dropdown-category" onClick={()=>setSection("realestate")}>Real Estate</div>
            <div className="dropdown-category" onClick={()=>setSection("science")}>Science</div>
            <div className="dropdown-category" onClick={()=>setSection("sports")}>Sports</div>
            <div className="dropdown-category" onClick={()=>setSection("sundayreview")}>Sunday Review</div>
            <div className="dropdown-category" onClick={()=>setSection("technology")}>Technology</div>
            <div className="dropdown-category" onClick={()=>setSection("theater")}>Theater</div>
            <div className="dropdown-category" onClick={()=>setSection("t-magazine")}>T-Magazine</div>
            <div className="dropdown-category" onClick={()=>setSection("travel")}>Travel</div>
            <div className="dropdown-category" onClick={()=>setSection("upshot")}>Upshot</div>
            <div className="dropdown-category" onClick={()=>setSection("us")}>US</div>
            <div className="dropdown-category" onClick={()=>setSection("world")}>World</div>
          </div>
        }
      </div>
    </header>
  )
}
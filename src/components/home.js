import "../styles/home.css"
import {Link} from 'react-router-dom';
 
function Home() {
  return(
    <div className = "main">
      <div className="images">
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
        <div className="obj"></div>
        
      </div>
      <Link to={'/making'} className="btn">
        <p>지금 만들러 가기</p>
        <img src = "arrow.png"></img>
      </Link>
    </div>
  )
}
export default Home
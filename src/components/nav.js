import '../styles/nav.css';
import Hamburger from 'hamburger-react'
import { useNavigate } from 'react-router-dom';

function Nav(props)
{
    const nav = useNavigate();
    console.log(props);
    return(
        <div className="nav-root">
            <input type = "checkbox" id = "menuicon"></input>
            <label for = "menuicon" class = "menubtn">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <div class = "sidebar">
                <ul class = "navi">
                    <li class = "sidelogo">MEC</li>
                    <li class = "menu"><a href = "/community">커뮤니티</a></li>
                    <li class = "menu"><a href = "/making">나만의 빌리지</a></li>
                </ul>
            </div>
            <div className='nav-icon' onClick={()=>{ nav('/') }} style={{ cursor: "pointer" }} >
                <span className='nav-icon-big'>M</span>
                <span className='nav-icon-small'>y</span>
                <span className='nav-icon-big'>E</span>
                <span className='nav-icon-small'>co</span>
                <span className='nav-icon-big'>C</span>
                <span className='nav-icon-small'>ity</span>
            </div>
            <div className='nav-user'>
                <span className='nav-userName'>홍길동님</span>
                <div className='nav-usericon-div'>
                    <img src="logo192.png" alt="icon" className='nav-userIcon' />
                </div>
            </div>
        </div>
    )
}
export default Nav;
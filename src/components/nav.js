import '../styles/nav.css';
import Hamburger from 'hamburger-react'

function Nav(props)
{
    console.log(props);
    return(
        <div className="nav-root">
            {props.isOpen ? <div className='nav-hamBtn' style={{ color: 'white' }}>
                <Hamburger toggled={props.isOpen} toggle={props.modal}/>
            </div> : <div className='nav-hamBtn' style={{ color: 'gray' }}>
                <Hamburger toggled={props.isOpen} toggle={props.modal}/>
            </div>}
            <div className='nav-icon'>
                <span className='nav-icon-big'>M</span>
                <span className='nav-icon-small'>y</span>
                <span className='nav-icon-big'>M</span>
                <span className='nav-icon-small'>ade</span>
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
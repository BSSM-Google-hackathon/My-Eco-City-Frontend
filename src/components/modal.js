import { Link } from 'react-router-dom';
import '../styles/modal.css';

function Modal()
{   
    return(
        <div className="modal-root">
            <h1 className='modal-title'>MEC</h1>
            <div className='modal-link'>
                <Link to={'/community'}>커뮤니티</Link>
                <Link to={'/making'}>나만의 빌리지</Link>
                <Link to={'/login'}>로그인 / 회원가입</Link>
            </div>
        </div>
    )
}
export default Modal;
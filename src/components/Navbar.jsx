import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div className='navbar'>
            <Link to="/">
                <img src="./src/assets/home-icon.png" alt="" />
            </Link>
        </div>

    )

}

export default Navbar;

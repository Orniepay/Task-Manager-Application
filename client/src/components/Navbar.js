import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear token from localStorage
        localStorage.removeItem('Token');
        // Update authentication state
        setIsAuthenticated(false);
        // Redirect to home
        navigate('/');
    };

    return (
        <nav className='navbar'>
            <div className='navbar-brand'>
                <Link to='/'>Tasklify</Link>
            </div>
            <ul className="navbar-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                { isAuthenticated ? (
                    <>
                     <li><Link to='/dashboard'>Dashboard</Link></li>
                     <li><Link to='/tasks'>Task</Link></li>
                     <li>
                        <button className='logout-btn' onClick={handleLogout}>
                            Logout
                        </button>
                     </li>
                    </>
                ) : (
                    <>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                    </>
                )}

            </ul>
        </nav>
    );
};

export default Navbar;
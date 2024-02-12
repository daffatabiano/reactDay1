import './style.css';

const Navbar = () => {
    const navList = ['Home', 'About', 'Contact', 'Login', 'Help'];

    return (
        <div className='nav-list'>
            { navList.map((list)=> {
                return (<li>{list}</li>);
            })};
        </div>
    )
}

export default Navbar;
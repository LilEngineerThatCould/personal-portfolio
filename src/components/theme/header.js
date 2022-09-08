import React from 'react';
import MenuIcon from '../icons/menuIcon';

class Header extends React.Component {
    render() {
        return (
            <header>
                <MenuIcon height="20px" width="20px"/>
                <p>Personal Portfolio Header</p>
            </header>
        );
    }
}

export default Header;
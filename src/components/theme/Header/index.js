import React from 'react';
import MenuIcon from '../../Icons/MenuIcon';

class Header extends React.Component {
    render() {
        return (
            <header className=''>
                <MenuIcon height="20px" width="20px"/>
                <p>Personal Portfolio Header</p>
            </header>
        );
    }
}

export default Header;
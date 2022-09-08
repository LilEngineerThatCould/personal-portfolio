import React from 'react';
import Navigation from './navigation'
import styles from './Theme.module.css';
import Header from './header'

const { themeContainer } = { ...styles }

class Theme extends React.Component {

    render() {
        return (
            <div className={themeContainer}>
                <Header />
                <Navigation />
            </div>
        )
    }
}

export default Theme;

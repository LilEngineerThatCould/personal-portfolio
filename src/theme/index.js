import React from 'react';
import SideNav from './navigation/SideNav'
import styles from './Theme.module.css';

const { themeContainer } = { ...styles }
class Theme extends React.Component {

    render() {
        return (
            <div className={themeContainer}>
                <h2>{this.props.header}</h2>
                <SideNav />
            </div>
        )
    }
}

export default Theme;

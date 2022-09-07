import React from 'react';
import SideNav from './navigation/side-nav'

class Theme extends React.Component {

    render() {
        return (
            <>
                <h2>{this.props.header}</h2>
                <SideNav />
            </>
        )
    }
}

export default Theme;

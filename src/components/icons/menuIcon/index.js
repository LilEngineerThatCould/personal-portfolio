import React from 'react';

class MenuIcon extends React.Component {
    render() {
        return (
            <svg
                height={this.props.height}
                width={this.props.width}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                >
                </path>
            </svg>
        );
    }
}

export default MenuIcon;



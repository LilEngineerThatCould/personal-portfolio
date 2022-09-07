import React from 'react';
import Link from 'next/link'

class SideNav extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link href="/projects"><a>Projects</a></Link>
                    </li>
                    <li>
                        <Link href="/about"><a>About</a></Link>
                    </li>
                    <li>
                        <Link href="/contact"><a>Contact</a></Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default SideNav;
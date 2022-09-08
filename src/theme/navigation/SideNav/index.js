import React from 'react';
import Link from 'next/link'
import styles from './SideNav.module.css'

const { nav, li, ul, a } = { ...styles }

class SideNav extends React.Component {
    render() {
        return (
            <nav className={nav}>
                <ul className={ul}>
                    <li className={li}>
                        <Link href="/projects"><a className={a}>Projects</a></Link>
                    </li>
                    <li className={li}>
                        <Link href="/about"><a>About</a></Link>
                    </li>
                    <li className={li}>
                        <Link href="/contact"><a>Contact</a></Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default SideNav;
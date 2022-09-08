import React from 'react';
import Link from 'next/link'
import styles from './Navigation.module.css'

const { nav, li, ul, a } = { ...styles }

class Navigation extends React.Component {
    render() {
        return (
            <nav className={nav}>
                <ul className={ul}>
                    <li className={li}>
                        <Link href="/"><a className={a}>Home</a></Link>
                    </li>
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

export default Navigation;
import React from 'react';
import { Link } from "react-router-dom";
import * as Lang from '../language';

export default function Home() {
    return (
        <div className="home-container">
            <div className="center">
            <div className="punkowl">{Lang.LOGO_TEXT}</div>
                <div className="punkowl-subtitle">{Lang.LOGO_SUBTEXT}</div>
                <ul className="home-menu">
                    <li>
                        <Link className="no-underline" to="/projects"><div>{Lang.MENU_PROJECTS}</div></Link>
                    </li>
                    <li>
                        <Link className="no-underline" to="/about"><div>{Lang.MENU_ABOUT}</div></Link>
                    </li>
                    <li>
                        <Link className="no-underline" to="/"><div>{Lang.MENU_DEVNOTE}</div></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home-container">
            <div className="center">
                <div className="punkowl">PunkOwl</div>
                <div className="punkowl-subtitle">programming as poetry @ ulaanbaatar</div>
                <ul className="home-menu">
                    <li>
                        <Link className="no-underline" to="/projects"><div>projects_төслүүд</div></Link>
                    </li>
                    <li>
                        <Link className="no-underline" to="/about"><div>about_тухай</div></Link>
                    </li>
                    <li>
                        <Link className="no-underline" to="/"><div>developerNote_тэмдэглэл</div></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
import React from 'react';
import '../asset/punk-style.css';

export default function Template(props) {
    return (
        <main>
            {props.children}
            <footer>
                <div className="footer-container">
                    <div className="center footer-content">
                        {/* Language: EN / MN  */}
                        <br/>
                        Github: <b><a rel="noopener noreferrer" target={"_blank"} href="https://github.com/PunkOwl/">github.com/PunkOwl</a></b>
                        <br/>
                        © {(new Date().getFullYear())}
                    </div>
                </div>
            </footer>
        </main>
    );
}


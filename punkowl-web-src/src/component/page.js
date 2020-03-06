import React, { useState } from 'react';
import { Link } from "react-router-dom";
import * as Lang from '../language';

import ColorNoteCode from './pages/colornotecode';

export default function Page(props) {
    const [pages] = useState([
        {   
            title: 'Gestalt',
            path: 'colornotecode',
            component: <ColorNoteCode lang={props.match.params.lang}/> 
        }
    ]);
    
    return (
        <div>
            {renderPage(props.match.params.name)}
        </div>
    )

    function renderPage(url) {
        var comp = <div>PageNotFound</div>
        var title ='null';
        pages.some((page, key) => {
            if(url === page.path) {
                comp = page.component;
                title = page.title;
                return true;
            }
        });
        return (
            <div>
                <div className="punkowl sml"><Link to="/" className="no-underline white-text">{Lang.LOGO_TEXT} / <span className="head-path">[{title}]</span></Link></div>
                {comp}
            </div>
        );
    }

}
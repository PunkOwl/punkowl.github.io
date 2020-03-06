import React, { useState } from 'react';
import { Link } from "react-router-dom";
import * as Lang from '../language';

export default function Projects() {

    const [lang, setLang] = useState('mn');

    const [projects, setProjects] = useState([
        {
            'title': 'Gestalt & ColorNoteCode',
            'image': '',
            'desc_en': 'Creative coding integrations',
            'desc_mn': 'Мэдкүү мэдкүү',
            'actions': [
                {
                    'text_en': 'Facebook',
                    'text_mn': 'Facebook',
                    'url': 'https://www.facebook.com/colornotecode/',
                    'is_active': true,
                    'is_route': false
                },
                {
                    'text_en': Lang.BTN_REPO,
                    'text_mn': Lang.BTN_REPO,
                    'url': 'https://github.com/PunkOwl/gestalt/',
                    'is_active': true,
                    'is_route': false
                },
                {
                    'text_en': Lang.BTN_MORE_EN,
                    'text_mn': Lang.BTN_MORE_MN,
                    'url': '',
                    // 'url': '/p/colornotecode/',
                    'is_active': false,
                    'is_route': true
                }
            ]
        }
    ]);

    return (
        <div>
            <div className="punkowl sml"><Link to="/" className="no-underline white-text">{Lang.LOGO_TEXT} / <span className="head-path">[{Lang.MENU_PROJECTS}]</span></Link></div>
            <div className="ribbon-space">
            </div>
            {renderLanguage()}
            <div className="project-container">
                {renderProjects(projects)}
            </div>
        </div>
    );

    function renderLanguage() {
        var eng = 'English';
        var mon = 'Монгол';
        if(lang === 'en') eng = <b>{eng}</b>
        else if(lang === 'mn') mon = <b>{mon}</b>
        return (
            <div className="language-container">
                <span onClick={() => setLang('en')}>{eng}</span> / <span onClick={() => setLang('mn')}>{mon}</span>
            </div>
        );
    }

    function renderProjects(projects) {
        return (
            projects.map((project, key) => {
                var desc = '';
                if(lang === 'en') desc = project.desc_en;
                else if(lang === 'mn') desc = project.desc_mn;
                return (
                    <div className="project-item">
                        <div className="project-title">{project.title}</div>
                        <div className="project-desc">{desc}</div>
                        <div className="project-actions">
                            {project.actions.map((action, key) => {
                                var text = '';
                                if(lang === 'en') text = action.text_en;
                                else if(lang === 'mn') text = action.text_mn;
                                return renderUrlButton(text, action.url, action.is_active, action.is_route)
                            })}
                        </div>
                    </div>
                );
            })
        );
    }

    function renderUrlButton(text, url, is_active, is_route) {
        var classes = "project-btn"
        if(!is_active) classes += " btn-disabled"
        var button = <button className={classes}>{text}</button>;
        if(url === '') return button;
        if(is_route) return <Link to={url+lang}>{button}</Link> 
        return <a className="no-underline" href={url} target="_blank" rel="noopener noreferrer">{button}</a>
    }
}
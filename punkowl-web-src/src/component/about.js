import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Lang from '../language';
import { Timeline, Event } from 'react-trivial-timeline';
import Header from './common/header';

export default function About() {

    const [lang, setLang] = useState('en');
    const members = [
        {
            'name': 'vonqo',
            'src': 'https://avatars1.githubusercontent.com/u/7321444?s=460&v=4',
        }
    ];
    const gratitudes = [
        {
            'name': 'Even Tide',
            'text_en': '[music band] Collaboration on Color, Note, Code',
            'text_mn': '[хамтлаг] Color, Note, Code дээрхи хамтийн ажиллагаа',
        }
    ];
    const timeline = [
        {
            'date': '2019.04.07',
            'component_en': <div>Color, Note, Code (repo:Gestalt) development started.</div>,
            'component_mn': <div>Color, Note, Code (repo:Gestalt) хөгжүүлэлт эхэлсэн.</div>,
            'color': '#282828'
        }
    ];

    return (
        <div>
            <div className="punkowl sml"><Link to="/" className="no-underline white-text">{Lang.LOGO_TEXT} / <span className="head-path">[{Lang.MENU_ABOUT}]</span></Link></div>
            <Header/>
            <div className="about-container">
                {renderLanguage()}
                <hr/>
                {renderAbout()}
                {renderMembers()}
                {renderGratitude()}
                {renderTimeline()}
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

    function renderAbout() {
        return (
            <div>
                <p className="about-text">
                    {(lang === 'en') ? Lang.ABOUT_EN : Lang.ABOUT_MN}
                </p>
            </div>
        );
    }

    function renderMembers() {
        return (
            <div>
                <div><h3>{(lang === 'en') ? Lang.TITLE_MEMBERS_EN : Lang.TITLE_MEMBERS_MN}</h3></div>
                <div className="members-container">
                    {members.map((member, key) => {
                        return (
                            <div className="member-container">
                                <div>
                                    <img src={member.src} alt="Logo" height='50' />
                                </div>
                                {member.name}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    function renderGratitude() {
        return (
            <div>
                <div><h3>{(lang === 'en') ? Lang.TITLE_GRATITUDE_EN : Lang.TITLE_GRATITUDE_MN}</h3></div>
                <ul>
                    {gratitudes.map((gratitude, key) => {
                        var text = ((lang === 'en') ? gratitude.text_en : gratitude.text_mn)
                        return (
                           <li>
                                <span className="grat-name">{gratitude.name}</span>
                                <span className="grat-text">{text}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    function renderTimeline() {
        return (
            <div className="timeline-block">
                <Timeline lineColor="black">
                    {timeline.map((event, key) => {
                        return (
                            <Event 
                                lineColor={event.color} 
                                intervalColor={'white'} 
                                intervalBackground={event.color} 
                                interval={event.date}    
                            >
                                {(lang === 'en') ? event.component_en : event.component_mn}
                            </Event>
                        );
                    })}
                </Timeline>
            </div>
        );
    }
}


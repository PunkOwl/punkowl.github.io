import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Lang from '../language';
import { Timeline, Event } from 'react-trivial-timeline';

export default function About() {

    const [lang, setLang] = useState('mn');
    const members = [
        {
            'name': 'vonqo'
        }
    ];
    const gratitudes = [
        {
            'name': 'Even Tide'
        }
    ];
    const timeline_en = [
        {
            'date': '2018 - *',
            'component': <div></div>
        }
    ];
    const timeline_mn = [
        {
            'date': '2018 - *',
            'component': <div></div>
        }
    ]

    return (

        <div>
            <div className="punkowl sml"><Link to="/" className="no-underline white-text">{Lang.LOGO_TEXT} / <span className="head-path">[{Lang.MENU_ABOUT}]</span></Link></div>
            <div className="ribbon-space">
            </div>
            <div className="about-container">
                {renderAbout()}
                {renderMembers()}
                {renderGratitude()}
                {renderTimeline()}
            </div>
        </div>
    );

    function renderAbout() {
        return (
            <div>
                <p>
                    {(lang === 'en') ? Lang.ABOUT_EN : Lang.ABOUT_MN}
                </p>
            </div>
        );
    }

    function renderMembers() {
        return (
            <div>
                <div><h3>{(lang === 'en') ? Lang.TITLE_MEMBERS_EN : Lang.TITLE_MEMBERS_MN}</h3></div>
                {members.map((member, key) => {
                    return (
                    <span>{member.name}</span>
                    );
                })}
            </div>
        );
    }

    function renderGratitude() {
        return (
            <div>
                <div><h3>{(lang === 'en') ? Lang.TITLE_GRATITUDE_EN : Lang.TITLE_GRATITUDE_MN}</h3></div>
                {gratitudes.map((gratitude, key) => {
                    return (
                        <span>{gratitude.name}</span>
                    );
                })}
            </div>
        );
    }

    function renderTimeline() {
        var timeline = (lang === 'en') ? timeline_en : timeline_mn;
        return (
            <div className="timeline-block">
                <Timeline lineColor="black">
                    {timeline.map((event, key) => {
                        return (
                            <Event interval={event.date} title="Event title" subtitle="Subtitle">
                                {event.component}
                            </Event>
                        );
                    })}
                </Timeline>
            </div>
        );
    }
}


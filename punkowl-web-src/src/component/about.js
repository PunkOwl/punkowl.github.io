import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Timeline, Bookmark, Marker } from 'react-vertical-timeline';
import * as Lang from '../language';


export default function About() {

    return (
        <div>
            <div className="punkowl sml"><Link to="/" className="no-underline white-text">{Lang.LOGO_TEXT} / <span className="head-path">[{Lang.MENU_ABOUT}]</span></Link></div>
            <div className="ribbon-space">
            </div>
            <div className="about-container">
                {renderAbout()}
                {renderMembers()}
                {renderTimeline()}
            </div>
        </div>
    );

    function renderAbout() {

        // TODO: implement
        return (
            <div></div>
        );
    }

    function renderMembers() {

        // TODO: implement
        return (
            <div></div>
        );
    }

    function renderTimeline() {
        return (
            <div></div>
        );
        // return (
        //     <Timeline height={300} progress={ progress } onSelect={p => setProgress(p)}>
        //         <Bookmark progress={20} onSelect={p => setProgress(p)}>
        //             Hi there 20%
        //         </Bookmark>
        //         <Marker progress={33}/>
        //         <Bookmark progress={55} onSelect={p => setProgress(p)}>
        //             Hi there 55%
        //         </Bookmark>
        //         <Bookmark progress={75} onSelect={p => setProgress(p)}>
        //             Hi there 75%
        //         </Bookmark>
        //     </Timeline>
        // )
    }
}


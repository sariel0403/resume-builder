import React, { useEffect, useState } from 'react';

import Badge from '../components/Badge';
import Logo from '../components/Logo';
import ResumeField from './ResumeField/ResumeField';

import './Layout.scss';


const Layout = () => {
    const [page_mode, setPageMode] = useState("home");

    const setMode = (mode: string) => {
        localStorage.setItem('mode', mode);
        setPageMode(mode);
    }

    const getMode = (): string => {
        let mode: any = localStorage.getItem('mode');
        return (mode !== undefined ? mode : "");
    }

    useEffect(() => {
        if (getMode() === "")
            localStorage.setItem('mode', "home");
    }, []);

    useEffect(() => { }, [page_mode]);

    return (
        <div>
            <div className="layout inline justify-content-space-between">
                <div className="inline v-center">
                    <div className={page_mode === "home" ? "active menu-item" : 'menu-item'} onClick={() => { setMode('home') }}>
                        Home
                    </div>
                    <div className={page_mode === "resume" ? "active menu-item" : 'menu-item'} onClick={() => { setMode('resume') }}>
                        Resume
                    </div>
                    <div className={page_mode === "jobs" ? "active menu-item" : 'menu-item'} onClick={() => { setMode('jobs') }}>
                        Jobs
                    </div>
                    <div className={page_mode === "messages" ? "active menu-item" : 'menu-item'} onClick={() => { setMode('messages') }}>
                        Messages
                        <Badge />
                    </div>
                </div>
                <div className="v-center">
                    <Logo />
                </div>
            </div>
            <ResumeField />
        </div>
    );
}

export default Layout;
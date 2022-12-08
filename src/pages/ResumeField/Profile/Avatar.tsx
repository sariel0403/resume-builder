import React from 'react'

import { AiOutlineCamera } from 'react-icons/ai';

import './Avatar.scss'

const Avatar = () => {
    return (
        <div className="avatar">
            <div className="avatar-img"></div>
            <div className="avatar-camera center">
                <div className="v-center">
                    <AiOutlineCamera />
                </div>
            </div>
        </div>
    );
}

export default Avatar;
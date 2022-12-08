import React from 'react';

import Avatar from './Avatar';
import TextInput from '../../../components/TextInput';

import './Profile.scss';

const Profile = () => {
    return (
        <div className="profile-field">
            <div className="avatar-field inline h-center">
                <Avatar />
            </div>
            <div className="name-field">
                <TextInput placeholder="Name" />
            </div>
            <div className="family-field">
                <TextInput placeholder="Family" />
            </div>
            <div className="profession-title-field">
                <TextInput placeholder="Profession Title" />
            </div>
        </div>
    );
}

export default Profile;
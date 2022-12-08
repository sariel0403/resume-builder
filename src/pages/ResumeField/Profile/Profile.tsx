import React from 'react';

import Avatar from './Avatar';
import TextInput from '../../../components/TextInput';

import './Profile.scss';

const Profile = () => {
    return (
        <div>
            <Avatar />
            <TextInput placeholder="Name" />
            <TextInput placeholder="Family" />
            <TextInput placeholder="Profession Title" />
        </div>
    );
}

export default Profile;
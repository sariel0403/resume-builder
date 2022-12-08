import React from 'react';

import Profile from './Profile/Profile';
import EducationField from './EducationField/EducationField';
import ExperienceField from './ExprienceField/ExperienceField';
import SkillField from './SkillField/SkillField';

import './ResumeField.scss';

const ResumeField = () => {
    return (
        <div>
            <Profile />
            <EducationField />
            <ExperienceField />
            <SkillField />
        </div>
    );
}

export default ResumeField;
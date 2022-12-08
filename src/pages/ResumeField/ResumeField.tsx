import React from 'react';

import Profile from './Profile/Profile';
import EducationField from './EducationField/EducationField';
import ExperienceField from './ExprienceField/ExperienceField';
import SkillField from './SkillField/SkillField';

import './ResumeField.scss';

const ResumeField = () => {
    return (
        <div className="resume-field inline h-center">
            <div className="profile-skill">
                <div className="profile">
                    <Profile />
                </div>
                <div className="skill">
                    <SkillField />
                </div>
            </div>
            <div className="education-experience">
                <div className="education">
                    <EducationField />
                </div>
                <div className="experience">
                    <ExperienceField />
                </div>
            </div>
        </div>
    );
}

export default ResumeField;
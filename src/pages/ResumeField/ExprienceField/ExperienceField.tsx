import React, { useState } from 'react'

import AddExperience from './AddExperience';
import ExperienceListItem from './ExperienceListItem';

import './ExperienceField.scss'

const ExperienceField = () => {
    const [experienceList, setExperienceList] = useState<string[]>([]);

    const addExperience = (experienceListItem: string) => {
        let newExperienceList: string[] = [...experienceList];
        newExperienceList.push(experienceListItem);
        setExperienceList(newExperienceList);
        console.log("HERE");
    }

    return (
        <div className="experience-field">
            <div className="experience-field-heading">
                <p>Experiences</p>
            </div>
            <AddExperience />
            {/* {experienceList.map((experienceListItem: string) => {
                return <ExperienceListItem what={experienceListItem} />
            })} */}
            <ExperienceListItem what="Senior" from="08-01-2016" to="09-22-2022" />
        </div>
    );
}

export default ExperienceField;
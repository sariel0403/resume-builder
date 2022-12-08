import React, { useState } from 'react'

import AddExperience from './AddExperience';
import ExperienceListItem from './ExperienceListItem';

import './ExperienceField.scss'

interface ExperienceListItemValue {
    what: string,
    from: string,
    to: string,
}

const ExperienceField = () => {
    const [experienceList, setExperienceList] = useState<ExperienceListItemValue[]>([]);

    const addExperience = (what: string, from: string, to: string) => {
        let newExperienceList: ExperienceListItemValue[] = [...experienceList];
        newExperienceList.push({ what, from, to });
        setExperienceList(newExperienceList);
    }

    return (
        <div className="experience-field">
            <div className="experience-field-heading">
                <p>Experiences</p>
                <hr></hr>
            </div>
            <AddExperience addExperience={(what: string, from: string, to: string) => { addExperience(what, from, to) }} />
            {experienceList.map((experienceListItem: ExperienceListItemValue) => (
                <div className="mt-10">
                    <ExperienceListItem what={experienceListItem.what} from={experienceListItem.from} to={experienceListItem.to} />
                </div>
            ))}
        </div>
    );
}

export default ExperienceField;
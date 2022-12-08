import React, { useState } from 'react'

import AddEducation from './AddEducation';
import EducationListItem from './EducationListItem';

import './EducationField.scss'

const EducationField = () => {
    const [educationList, setEducationList] = useState<string[]>([]);

    const addEducation = (educationListItem: string) => {
        let newEducationList: string[] = [...educationList];
        newEducationList.push(educationListItem);
        setEducationList(newEducationList);
        console.log("HERE");
    }

    return (
        <div className="education-field">
            <div className="education-field-heading">
                <p>Educations</p>
            </div>
            <AddEducation />
            {educationList.map((educationListItem: string) => {
                return <EducationListItem label={educationListItem} />
            })}
        </div>
    );
}

export default EducationField;
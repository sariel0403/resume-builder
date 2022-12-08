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
    }

    return (
        <div className="education-field">
            <div className="education-field-heading">
                <p>Educations</p>
                <hr></hr>
            </div>
            <AddEducation addEducation={(newEducation: string) => addEducation(newEducation)} />
            {educationList.map((educationListItem: string, index: number) => (
                <div className="mt-10">
                    <EducationListItem key={index} label={educationListItem} />
                </div>
            ))}
        </div>
    );
}

export default EducationField;
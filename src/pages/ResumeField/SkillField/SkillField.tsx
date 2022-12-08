import React, { useState } from "react";

import SkillTitleInput from "./SkillTitleInput";
import SkillRating from "./SkillRate";
import AddButton from "../../../components/AddButton";
import SkillItem from "./SkillItem";

import './SkillField.scss';

interface SkillListItemValue {
    skill: string,
    rate: number,
    label: string,
}

const SkillField = () => {
    const [skill, setSkill] = useState('');
    const [rate, setRate] = useState(0);
    const [label, setLabel] = useState('');
    const [skillList, setSkillList] = useState<SkillListItemValue[]>([]);

    const handleAddSkill = (event: any) => {
        let newSkillList: SkillListItemValue[] = [...skillList];
        newSkillList.push({ skill: skill, rate: rate, label: label });
        setSkillList(newSkillList);
    }

    return (
        <div className="skill-field">
            <div className="skill-field-heading">
                <p>Skills</p>
                <hr></hr>
            </div>
            <div className="">
                {skillList.map((skillListItem: SkillListItemValue) => (
                    <div className="mt-10">
                        <SkillItem skill={skillListItem.skill} rate={skillListItem.rate} label={skillListItem.label} />
                    </div>
                ))}
            </div>
            <div className="inline justify-content-space-between mt-10">
                <SkillTitleInput setSkill={(newSkill: string) => { setSkill(newSkill) }} />
                <SkillRating setRate={(newRate: number, newLabel: string) => {
                    setRate(newRate);
                    setLabel(newLabel);
                }} />
            </div>
            <div className="inline h-center mt-10">
                <AddButton onClick={handleAddSkill} />
            </div>
        </div>
    );
}

export default SkillField;
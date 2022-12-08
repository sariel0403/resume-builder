import React from "react";

import SkillTitleInput from "./SkillTitleInput";
import SkillRating from "./SkillRate";
import AddButton from "../../../components/AddButton";

import './SkillField.scss';

const SkillField = () => {
    return (
        <div className="skill-field">
            <div className="skill-field-heading">
                <p>Skills</p>
                <hr></hr>
            </div>
            <div className="inline justify-content-space-between">
                <SkillTitleInput />
                <SkillRating />
            </div>
            <div className="inline h-center mt-10">
                <AddButton />
            </div>
        </div>
    );
}

export default SkillField;
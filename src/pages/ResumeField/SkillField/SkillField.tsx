import React from "react";

import SkillTitleInput from "./SkillTitleInput";
import SkillLevelInput from "./SkillLevelInput";
import SkillYearInput from "./SkillYearInput";

import './SkillField.scss';

const SkillField = () => {
    return (
        <div>
            <SkillTitleInput />
            <SkillLevelInput />
            <SkillYearInput />
        </div>
    );
}

export default SkillField;
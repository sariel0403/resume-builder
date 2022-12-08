import React, { useState } from "react";
import { BiMinusCircle, BiPlusCircle } from 'react-icons/bi';

import './SkillYearInput.scss';

const SkillYearInput = () => {
    const [value, setValue] = useState(1);

    const handleIncreaseNumber = (event: React.MouseEvent<HTMLElement>) => {
        setValue(value + 1);
    }

    const handleDecreaseNumber = (event: React.MouseEvent<HTMLElement>) => {
        if (value > 1)
            setValue(value - 1);
    }

    return (
        <div className="skill-year-input inline justify-content-space-between">
            <div className="inline v-center placeholder">
                <p>Years of Experience</p>
            </div>
            <div className="inline v-center decrease-btn" onClick={handleDecreaseNumber}>
                <BiMinusCircle />
            </div>
            <div className="inline v-center value">
                <p>{value}</p>
            </div>
            <div className="inline v-center increase-btn" onClick={handleIncreaseNumber}>
                <BiPlusCircle />
            </div>
        </div>
    );
}

export default SkillYearInput;
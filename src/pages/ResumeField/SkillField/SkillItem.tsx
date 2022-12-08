import React from "react";
import Rating from '@mui/material/Rating';

import './SkillItem.scss';

interface SkillItemProps {
    skill: string,
    rate: number,
    label: string,
}

const SkillItem = (props: SkillItemProps) => {
    return (
        <div className="inline skill-item">
            <div className="skill-item-skill">
                <p>
                    {props.skill}
                </p>
            </div>
            <div className="skill-item-rate">
                <Rating name="half-rating-read" defaultValue={props.rate} precision={0.5} readOnly />
            </div>
            <div>
                <p>
                    {props.label}
                </p>
            </div>
        </div>
    );
}

export default SkillItem;
import React from "react";

import './EducationListItem.scss';

interface EducationListItemProps {
    label: string,
}

const EducationListItem = (props: EducationListItemProps) => {
    return (
        <div className="education-list-item">
            <p>
                {props.label}
            </p>
        </div>
    );
}

export default EducationListItem;
import React from "react";

import './ExperienceListItem.scss';

interface ExperienceListItemProps {
    what: string,
    from: string,
    to: string,
}

const ExperienceListItem = (props: ExperienceListItemProps) => {
    return (
        <div className="experience-list-item justify-content-space-between inline">
            <div>
                <p>
                    {props.what}
                </p>
            </div>
            <div className="inline">
                <p>
                    From {props.from}
                </p>
                <p>
                    To {props.to}
                </p>
            </div>
        </div>
    );
}

export default ExperienceListItem;
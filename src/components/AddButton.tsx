import React from 'react'

import './AddButton.scss'


const AddButton = (props: any) => {
    return (
        <div className="add-button" onClick={(e) => props.onClick(e)}>
            <p>Add New</p>
        </div>
    );
}

export default AddButton;
import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import './SkillLevelInput.scss';

const SkillLevelInput = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <div className="skill-level-input">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Skill Level</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    label="Skill Level"
                >
                    <MenuItem value={10}>Newbie</MenuItem>
                    <MenuItem value={20}>Junior</MenuItem>
                    <MenuItem value={30}>Senior</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default SkillLevelInput;
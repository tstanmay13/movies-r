import React from 'react';
import Slider from "@mui/material/Slider";
import { styled } from '@mui/material/styles';


function valuetext(value) {
    return `${value}°C`;
}

const Years = () => {
    const [value, setValue] = React.useState([1945, 2022])

    const handleChange = (event, newValue) => {
        setValue(newValue)
        console.log(value)
    }

    return (
        <div>
            <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                aria-label="Always visible"
                onChange={handleChange}
                valueLabelDisplay="on"
                getAriaValueText={valuetext}
                min={1945}
                max={2022}
            />
        </div>
    );
}

export default Years;



import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { update } from "./slice";
import { Link } from 'react-router-dom';

const contents = [
   "Hero_Section",
    "Carousel_Slider",
    "Half_Content_Half_Photo",
    "Text_Only",
    "Photo_Only",
];

const Redux = () => {
    const [selectedContent, setSelectedContent] = useState([]);
    const [type, setType] = useState();
    const dispatch = useDispatch();

    const handleSelectChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedContent(
            typeof value === 'string' ? value.split(',') : value,
        );
    }

    const handleLayout =()=>{
        let data = {
            content: selectedContent, 
            type: type,
        }
        dispatch(update(data));
    }

    return (
        <>
            <div><h3 className='text-center mt-5'>Design Your Webpage</h3></div>
            <div className="forms d-flex justify-content-center" >
                <div className="form" style={{ margin: "5rem 0 0 5rem" }}>
                    <FormControl sx={{ minWidth: 200 }}>
                        <InputLabel id="demo-simple-select-label">Webpage</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Webpage"
                            onChange={(e) => {setType(e.target.value)}}
                        >
                            <MenuItem value={"Home"}>Home</MenuItem>
                            <MenuItem value={"About"}>About</MenuItem>
                            <MenuItem value={"Career"}>Career</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div style={{ margin: "5rem 0 0 5rem" }}>
                    <FormControl sx={{ minWidth: 500 }}>
                        <InputLabel id="demo-multiple-checkbox-label">Contents</InputLabel>
                        <Select
                            multiple
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            value={selectedContent}
                            onChange={handleSelectChange}
                            input={<OutlinedInput label="Tag" />}
                            renderValue={(selected) => selected.join(', ')}
                        >
                            {contents.map((item) => (
                                <MenuItem key={item} value={item}>
                                    <Checkbox checked={selectedContent.indexOf(item) > -1} />
                                    <ListItemText primary={item} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                {/* <div style={{ margin: "5rem 0 0 5rem" }}>
                    <FormControl sx={{ minWidth: 200 }}>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Type"
                        >
                            <MenuItem value={"Half"}>Half Page</MenuItem>
                            <MenuItem value={"Full"}>Full Page</MenuItem>
                        </Select>
                    </FormControl>
                </div> */}

            </div>
            <div className='d-flex justify-content-center mt-5'>
                   <Link to="/custompage">
                   <button className='btn btn-secondary' onClick={handleLayout}>Create Page</button>
                   </Link>
                </div>
        </>
    )
}

export default Redux
import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import { green, red } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Autocomplete from '@mui/material/Autocomplete';

import { postProduct } from '../store/request.js';

// -----------------------------------------------------------------------------

const fabStyle = {
    // position: 'absolute',
    // bottom: 16,
    // right: 1,
    mr: 1,
};

const fabGreenStyle = {
    color: 'common.white',
    bgcolor: green[500],
    '&:hover': {
      bgcolor: green[600],
    },
};

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
]

export default function BoxAddProduct () {
    const [ json, setJson ] = useState({});

    json.taxid = '22099131';
    json.part_number = '90909';
    json.name = 'CPU INTER IC 9';

    const postData = async () => {
        postProduct(json.taxid, json.part_number, json.name)
            .then((response)=> {
                const data = response.data;
                setJson(data);

                // console.log('json', data);
                console.log('id', data.id);
            })
            .catch(err=> {
                console.log(err);
            });
    }

    const fabs = [
        {
            // color: 'secondary',
            sx: { ...fabStyle, ...fabGreenStyle },
            icon: <AddIcon />,
            label: 'Add',
        }
    ];

    const buttonClick = (value) => {
        // console.log('value', value);
        if( value === 'Add' )
            postData();
    };

    useEffect(() => {
        // postData();
    }, []);

    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '30ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 300}}
                    renderInput={(params) => 
                    <TextField {...params} label="Supplier Tax ID" />}
                />
                <TextField required id="tax-id" label="Supplier Tax ID" variant="filled"
                    helperText="8 Digits.">
                    {json.taxid}</TextField>
                <TextField required id="part-number" label="Part Number" variant="filled">
                    {json.taxid}</TextField>
                <TextField required id="name" label="Name" variant="filled">
                    {json.name}</TextField>
            </Box>

            {fabs.map((fab, index) => (
            <Fab sx={fab.sx} aria-label={fab.label} color={fab.color} key={index}
                onClick={() => {
                    buttonClick(fab.label);
                }} >
                {fab.icon}
            </Fab>
        ))}
        </div>
    );
}
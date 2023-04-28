import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import { green, red } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

import { postSupplier } from '../store/request.js';

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

export default function BoxAddSupplier () {
    const [ json, setJson ] = useState({});

    json.taxid = '111';
    json.name = 'aaabbb';

    const postData = async () => {
        postSupplier(json.taxid, json.name)
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
        console.log('value', value);
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
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField required id="tax-id" label="Tax ID Number" variant="filled"
                    helperText="8 Digits.">
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
import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

import { postSupplier } from '../store/request.js';

// -----------------------------------------------------------------------------

export default function BoxAddSupplier () {
    const [ json, setJson ] = useState({});

    json.taxid = '111';
    json.name = 'aaabbb';

    const addSupplier = async () => {
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

    useEffect(() => {
        addSupplier();
    }, []);

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField required id="tax-id" label="Tax ID Number" variant="filled"
                helperText="8 Digits."
                value={json.taxid || ''} />
            <TextField required id="name" label="Name" variant="filled"
                value={json.name || ''} />

        </Box>
    );
}
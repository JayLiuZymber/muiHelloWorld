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
    const [ posts, setPosts ] = useState();
    // let [ taxid, setTaxid ] = useState();
    // let [ name, setName ] = useState();
    let taxid, name;

    const addSupplier = async () => {
        postSupplier(taxid, name)
            .then((response)=> {
                setPosts((posts) => [response.data, ...posts]);
            })
            .catch(err=> {
                console.log(err);
            });
    }
    
    useEffect(() => {
        taxid = '444';
        name = 'aaaadd';
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
                helperText="8 Digits." />
            <TextField required id="name" label="Name" variant="filled" />
            
        </Box>
    );
}
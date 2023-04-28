import * as React from 'react';
import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { getSupplier } from '../store/request.js';

// -----------------------------------------------------------------------------

export default function BoxSupplier () {
    const [json, setJson]=useState({});

    json.taxid = 22099131;

    useEffect(() => {
        getSupplier(json.taxid)
                .then((response)=> {
                    // console.log('response', response);
                    const data = response.data;

                    // console.log('json', data);
                    console.log('id', data.id);
                    // console.log('taxid', data.taxid);
                    // console.log('name', data.name);
                    setJson(data);
                })
                .catch(err=> {
                    console.log(err);
                })
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
            <TextField id="id" label="ID" variant="filled"
                value={json.id || ''}
                InputProps={{
                    readOnly: true,
                }} />
            <TextField id="tax-id" label="Tax ID Number" variant="filled"
                value={json.taxid || ''}
                InputProps={{
                    readOnly: true,
                  }} />
            <TextField id="name" label="Name" variant="filled"
                value={json.name || ''}
                InputProps={{
                    readOnly: true,
                }} />
        </Box>
    );
}
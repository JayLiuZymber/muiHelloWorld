import * as React from 'react';
import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { getSupplier } from '../store/request.js';

// -----------------------------------------------------------------------------

export default function BoxSupplier () {
    var [id, setId]=useState(0);
    var [taxid, setTaxid]=useState(0);
    var [name, setName]=useState("");
    // var [json, setJson]=useState([]);

    useEffect(() => {
        taxid = 22099131;
        getSupplier(taxid)
                .then((response)=> {
                    // console.log('response', response);
                    var json = response.data;
                    // console.log('json', json);
                    // console.log('id', json.id);
                    // console.log('taxid', json.taxid);
                    // console.log('name', json.name);

                    setId(json.id);
                    setTaxid(json.taxid);
                    setName(json.name);
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
                value={id}
                InputProps={{
                    readOnly: true,
                }} />
            <TextField id="tax-id" label="Tax ID Number" variant="filled"
                value={taxid}
                InputProps={{
                    readOnly: true,
                  }} />
            <TextField id="name" label="Name" variant="filled"
                value={name}
                InputProps={{
                    readOnly: true,
                }} />
        </Box>
    );
}
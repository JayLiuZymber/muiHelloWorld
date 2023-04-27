import * as React from 'react';
import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

import { apiSupplier } from './api.js';


export default function LayoutSupplier () {
    var [id,setId]=useState(0);
    var [taxid, setTaxid]=useState(0);
    var [name, setName]=useState("");
    // var [json, setJson]=useState();
    // var id, taxid, name;
    // var json;

    useEffect(() => {
        taxid = 22099131;
        apiSupplier(taxid)
                .then((response)=> {
                    // console.log('response', response);
                    var json = response.data;
                    setId(json.id);
                    setTaxid(json.taxid);
                    setName(json.name);

                    // id = json.id;
                    // taxid = json.taxid;
                    // name = json.name;
                    console.log('json', json);
                    // console.log('id', id);
                    // console.log('taxid', taxid);
                    // console.log('name', name);
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
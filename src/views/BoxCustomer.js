import * as React from 'react';
import {useState, useEffect} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { green, red, blue } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { getCustomer, deleteCustomer } from '../store/request.js';

// -----------------------------------------------------------------------------

const fabStyle = {
    // position: 'absolute',
    // bottom: 16,
    // right: 1,
    mr: 1,
};

const fabRedStyle = {
    color: 'common.white',
    bgcolor: red[500],
    '&:hover': {
      bgcolor: red[600],
    },
};

const fabBlueStyle = {
    color: 'common.white',
    bgcolor: blue[500],
    '&:hover': {
      bgcolor: blue[600],
    },
};

export default function BoxCustomer () {
    const [json, setJson]=useState({});

    // json.taxid = 22;
    json.taxid = 222;

    const getData = async () => {
        getCustomer(json.taxid)
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
    }

    const deleteData = async () => {
        if( json.taxid ) {
            deleteCustomer(json.taxid)
            // deleteCustomer('222')
                    .then((response)=> {
                        // console.log('response', response);
                        const data = response.data;
                        console.log('json', data);
                    })
                    .catch(err=> {
                        console.log(err);
                    });
        }
    }

    const fabs = [
        {
            // color: 'secondary',
            sx: { ...fabStyle, ...fabBlueStyle },
            icon: <EditIcon />,
            label: 'Edit',
        },
        {
            // color: 'primary',
            sx: { ...fabStyle, ...fabRedStyle } ,
            icon: <DeleteIcon />,
            label: 'Delete',
        }
    ];

    const buttonClick = (value) => {
        // console.log('value', value);
        if( value === 'Edit')
        {
            getData();
        }
        if( value === 'Delete' )
            deleteData();
    };

    useEffect(() => {
        // getData();
    }, []);

    return (
        <div>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '14ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="id" label="ID" variant="filled"
                InputProps={{
                    readOnly: true,
                }}
                value={json.id || ''} />
            <TextField id="tax-id" label="Tax ID Number" variant="filled"
                defaultValue={json.taxid} >
                {json.taxid}</TextField>
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="name" label="Name" variant="filled"
                InputProps={{
                    readOnly: true,
                  }}
                value={json.name || ''}>
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
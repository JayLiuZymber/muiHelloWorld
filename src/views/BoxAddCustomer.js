import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

export default function BoxAddCustomer () {
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
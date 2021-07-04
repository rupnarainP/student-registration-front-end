import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function FormPropsTextFields() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            {/*<div>*/}
            {/*    <TextField required id="firstName-required" label="Name" placeholder={'Name'} />*/}
            {/*    <TextField required id="surname-required" label="Surname" placeholder={'Surname'} />*/}
            {/*    <TextField*/}
            {/*        id="standard-password-input"*/}
            {/*        label="Password"*/}
            {/*        type="password"*/}
            {/*        autoComplete="current-password"*/}
            {/*    />*/}
            {/*    <TextField*/}
            {/*        id="standard-read-only-input"*/}
            {/*        label="Read Only"*/}
            {/*        defaultValue="Hello World"*/}
            {/*        InputProps={{*/}
            {/*            readOnly: true,*/}
            {/*        }}*/}
            {/*    />*/}
            {/*    <TextField*/}
            {/*        id="standard-number"*/}
            {/*        label="Number"*/}
            {/*        type="number"*/}
            {/*        InputLabelProps={{*/}
            {/*            shrink: true,*/}
            {/*        }}*/}
            {/*    />*/}
            {/*    <TextField id="standard-search" label="Search field" type="search" />*/}
            {/*    <TextField*/}
            {/*        id="standard-helperText"*/}
            {/*        label="Helper text"*/}
            {/*        defaultValue="Default Value"*/}
            {/*        helperText="Some important text"*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <TextField*/}
            {/*        required*/}
            {/*        id="filled-required"*/}
            {/*        label="Required"*/}
            {/*        defaultValue="Hello World"*/}
            {/*        variant="filled"*/}
            {/*    />*/}
            {/*    <TextField*/}
            {/*        disabled*/}
            {/*        id="filled-disabled"*/}
            {/*        label="Disabled"*/}
            {/*        defaultValue="Hello World"*/}
            {/*        variant="filled"*/}
            {/*    />*/}
            {/*    <TextField*/}
            {/*        id="filled-password-input"*/}
            {/*        label="Password"*/}
            {/*        type="password"*/}
            {/*        autoComplete="current-password"*/}
            {/*        variant="filled"*/}
            {/*    />*/}
            {/*    <TextField*/}
            {/*        id="filled-read-only-input"*/}
            {/*        label="Read Only"*/}
            {/*        defaultValue="Hello World"*/}
            {/*        InputProps={{*/}
            {/*            readOnly: true,*/}
            {/*        }}*/}
            {/*        variant="filled"*/}
            {/*    />*/}
            {/*    <TextField*/}
            {/*        id="filled-number"*/}
            {/*        label="Number"*/}
            {/*        type="number"*/}
            {/*        InputLabelProps={{*/}
            {/*            shrink: true,*/}
            {/*        }}*/}
            {/*        variant="filled"*/}
            {/*    />*/}
            {/*    <TextField id="filled-search" label="Search field" type="search" variant="filled" />*/}
            {/*    <TextField*/}
            {/*        id="filled-helperText"*/}
            {/*        label="Helper text"*/}
            {/*        defaultValue="Default Value"*/}
            {/*        helperText="Some important text"*/}
            {/*        variant="filled"*/}
            {/*    />*/}
            {/*</div>*/}
            <div>
                <TextField
                    required
                    id="outlined-required-firstName"
                    label="First Name"
                    variant="outlined"
                    placeholder={'First Name'}
                />
                <TextField
                    required
                    id="outlined-required-Surname"
                    label="Surname"
                    variant="outlined"
                    placeholder={'Surname'}
                />
                <TextField
                    required
                    id="outlined-required-DateOfBirth"
                    label="Date of Birth"
                    variant="outlined"
                    placeholder={'YYYY-MM-DD'}
                />
                {/*<TextField*/}
                {/*    required*/}
                {/*    id="outlined-required"*/}
                {/*    label="First Name"*/}
                {/*    variant="outlined"*/}
                {/*    placeholder={'First Name'}*/}
                {/*/>*/}
                {/*<TextField*/}
                {/*    disabled*/}
                {/*    id="outlined-disabled"*/}
                {/*    label="Disabled"*/}
                {/*    defaultValue="Hello World"*/}
                {/*    variant="outlined"*/}
                {/*/>*/}
                {/*<TextField*/}
                {/*    id="outlined-password-input"*/}
                {/*    label="Password"*/}
                {/*    type="password"*/}
                {/*    autoComplete="current-password"*/}
                {/*    variant="outlined"*/}
                {/*/>*/}
                {/*<TextField*/}
                {/*    id="outlined-read-only-input"*/}
                {/*    label="Read Only"*/}
                {/*    defaultValue="Hello World"*/}
                {/*    InputProps={{*/}
                {/*        readOnly: true,*/}
                {/*    }}*/}
                {/*    variant="outlined"*/}
                {/*/>*/}
                {/*<TextField*/}
                {/*    id="outlined-number"*/}
                {/*    label="Number"*/}
                {/*    type="number"*/}
                {/*    InputLabelProps={{*/}
                {/*        shrink: true,*/}
                {/*    }}*/}
                {/*    variant="outlined"*/}
                {/*/>*/}
                {/*<TextField id="outlined-search" label="Search field" type="search" variant="outlined" />*/}
                {/*<TextField*/}
                {/*    id="outlined-helperText"*/}
                {/*    label="Helper text"*/}
                {/*    defaultValue="Default Value"*/}
                {/*    helperText="Some important text"*/}
                {/*    variant="outlined"*/}
                {/*/>*/}
            </div>
        </form>
    );
}

import React, {useState, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {Context} from './DataStore'
// import { render } from '@testing-library/react'

const useStyles = makeStyles(theme => ({
    hidden:{
        display : "none"
    },
    root:{
        alignContent:"center",
        alignItems:"center",
        margin:0,
        top:"50%"
    },
    input:{
        
    },
    button:{
       
    }
}));


export default function Login() {
    const classes = useStyles();

    //Context
    const {allChats, sendChatAction, user, changeUsername} = useContext(Context); 

    return (
        <div className="Login" align="center" className={classes.root}>
            <TextField 
                className={classes.chatBox} 
                label="User Name"
                value={user}
                onFocus={e => changeUsername("")}
                onBlur={e => {
                    if(e.target.value==="")
                        changeUsername("Anonymous")
                }}
                onChange={e => changeUsername(e.target.value)}
            />
            <Button 
                variant="contained" 
                className={classes.button} 
                color="primary" 
                component="span"
                onClick={()=>{
                    if(user===""){
                        alert('Enter username');
                    } 
                    else{
                        changeUsername(user);
                    }
                }}
            >
                Chat
            </Button>
    </div>
    );
}
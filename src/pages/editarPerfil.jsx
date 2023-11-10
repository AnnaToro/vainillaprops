import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
    container: {
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       backgroundColor: '#F3F4F6',
       padding: '16px',
       borderRadius: '4px',
    },
    image: {
       width: '80px',
       height: '80px',
       marginBottom: '16px',
       borderRadius: '50%',
       objectFit: 'cover',
    },
    text: {
       marginBottom: '8px',
    },
    button: {
       marginTop: '8px',
    },
    imageUpload: {
       display: 'none',
    },
   }));
   
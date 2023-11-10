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
   export default function App() {
    const classes = useStyles();
    const [profileImage, setProfileImage] = useState('https://assets.imgix.net/dating-app/h1/image-80.png?auto=format,compress');
    const handleImageUpload = (event) => {
        const input = event.target;
    
        if (input.files && input.files[0]) {
          const reader = new FileReader();
    
          reader.onload = (e) => {
            setProfileImage(e.target.result);
          };
    
          reader.readAsDataURL(input.files[0]);
        }
     };
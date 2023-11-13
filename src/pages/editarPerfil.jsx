import React, { useState } from 'react';
// importanado los módulos React y useState desde la biblioteca 'react'. 
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
//importan los componentes makeStyles, Button y Box de la biblioteca @material-ui/core. makeStyles se utiliza para definir estilos personalizados.
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
   // Esta función acepta un parámetro, theme, que se puede usar para acceder al tema actual de Material-UI si es necesario.
   export default function App() {
    const classes = useStyles();
    const [profileImage, setProfileImage] = useState('https://assets.imgix.net/dating-app/h1/image-80.png?auto=format,compress');
   //Esto nos permitirá utilizar los estilos definidos en useStyles en el resto del componente.
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
      //Se ejecutará cuando se seleccione una imagen de perfil desde el campo de entrada de archivo.
     return (
        <div className={classes.container}>
          <img className={classes.image} src={profileImage} alt="profile" />
          <Box className={classes.text}>Profile picture</Box>
          <label htmlFor="imageUpload">
            <Button className={classes.button} variant="contained" color="primary" component="span">
              Edit profile picture
            </Button>
          </label>
          <input className={classes.imageUpload} type="file" id="imageUpload" accept="image/*" onChange={handleImageUpload} />
        </div>
     );
    }
    //se utiliza para permitir a los usuarios seleccionar una nueva imagen de perfil.
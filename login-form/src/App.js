import React, { useState } from 'react';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return ( <
        div className = "App" >
        <
        h1 > Formulario de inicio de sesión < /h1> <
        form onSubmit = { handleSubmit } >
        <
        label > Email: < /label> <
        input type = "email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }
        />

        <
        label > Password: < /label> <
        input type = "password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        />

        <
        button type = "submit" > Iniciar sesión < /button> <
        /form> <
        /div>
    );
}

export default App;
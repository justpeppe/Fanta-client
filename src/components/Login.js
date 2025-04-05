import React, { useState } from 'react';
import { AuthContext, useAuth} from '../context/AuthContext';

const Login = () => {
    const  { login }  = useAuth(AuthContext);
    const [username, setUsername] = useState ('');
    const [ password, setPassword] = useState ('');
    const [role, setRole] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login (username, password, role);
            console.log('Login avvenuto con successo!');

        } catch (error) {
            console.error('Errore login:', error);
        }
    };
    return (
        <form onSubmit= {handleSubmit}>
            <div> 
                <label> Username </label>
                <input value= {username} onChange = {(e) => setUsername(e.target.value)} required />

            </div>
            <div>
                <label>Password</label>
                <input type="password" value= {password} onChange={(e) => setPassword (e.target.value)} required />
            </div>
            <div>
             <label> RUolo:</label> <br/>
              <label>
             <input 
            type="radio"
            name="role"
            value="admin"
            onChange={(e) => setRole (e.target.value)}
    />
    Admin
    </label>
    <label>
    <input 
    type= "radio"
    name="role"
    value="creator"
    onChange={(e) => setRole (e.target.value)}
    />
    Creator
</label>
<label>
    <input
    type="radio"
    name="role"
    value="utente"
    onChange={(e) => setRole (e.target.value)}
    />
    Utente
</label>
</div>
            <button type="submit"> Login </button>


        </form>
        
    );

};

export default Login;

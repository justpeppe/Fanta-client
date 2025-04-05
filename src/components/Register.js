import React, {useState} from "react";
import { useAuth } from "../context/AuthContext";

const RegisterForm = () => {
    const { register } = useAuth();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        role: "utente",
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData (prev => ({ ...prev, [name] : value }));

    };
    const handleSubmit = async (e) => {
        e.preventDefault ();
        try {
            await register(formData.username, formData.password, formData.role);
            alert ("Registrazione completata con successo!")
        } catch (error) {
            alert ("Errore durante la registrazione");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2> Registrati </h2>
            <div>
                <label> Username: </label>
                <input 
                type="text"
                name="username"
                value = {formData.username}
                onChange= {handleChange}
                required
                />
            
            </div>
            <div>
                <label> Password </label>
                <input
                type ="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required/>
            
            </div>

            <div>
                <label> RUolo:</label> <br/>
                <label>
                <input 
                type="radio"
                name="role"
                value="admin"
                checked={formData.role === "admin"}
                onChange={handleChange}
                />
                Admin
                </label>
                <label>



                <input 
                type= "radio"
                name="role"
                value="creator"
                checked={formData.role === "creator"}
                onChange={handleChange}
                />
                Creator
            </label>
            <label>
                <input
                type="radio"
                name="role"
                value="utente"
                checked= {formData.role === "utente"}
                onChange={handleChange}
                />
                Utente
            </label>
            </div>
        <button type="submit"> Registrati</button>

        </form>
    );
};

export default RegisterForm;
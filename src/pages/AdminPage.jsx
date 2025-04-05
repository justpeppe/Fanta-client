import React, { useState } from "react";
import "../App.css";
import { Container, TextField, Button, Typography, Box, Avatar } from "@mui/material";

const AdminPage = () => {
  // Stato per il form
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    score: "",
  });

  // Funzione per gestire i cambiamenti nei campi del form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Funzione per gestire l'invio del form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nuova sfida:", formData);
    setFormData({ name: "", description: "", score: "" }); // Resetta il form
  };

  return (
    <div className="sfondoadmin"> {/* Usa una classe sfondo se necessario */}
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "white",
          borderRadius: 3,
          boxShadow: 3,
          p: 4,
          textAlign: "center",
        }}
      >
        {/* Foto del Capo */}
        <Avatar
          alt="Foto del Capo"
          src={require("../materials/admin.png")}
          sx={{ width: 100, height: 100, margin: "0 auto", mb: 2 }}
        />

        {/* Scritta di benvenuto */}
        <Typography variant="h4" 
          sx={{ /* serve per personalizzare */
            fontFamily: 'Kode Mono, monospace', 
            fontWeight: 'bold',
          }}
        gutterBottom>
          Bentornato Capo
        </Typography>

        <Typography variant="h6" 
        sx={{ /* serve per personalizzare */
          fontFamily: 'Kode Mono, monospace', 
        }}
        gutterBottom>
          Pubblica una nuova sfida
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="Nome Sfida"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            InputProps={{
              style: { fontFamily: 'Kode Mono, monospace' },
            }}
          />
          <TextField
            label="Descrizione"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            required
            InputProps={{
              style: { fontFamily: 'Kode Mono, monospace' },
            }}
          />
          <TextField
            label="Punteggio"
            name="score"
            type="number"
            value={formData.score}
            onChange={handleChange}
            fullWidth
            required
            InputProps={{
              style: { fontFamily: 'Kode Mono, monospace' },
            }}
          />
          <Button variant="contained" 
            sx={{ /* serve per personalizzare */
              fontFamily: 'Kode Mono, monospace', 
              fontWeight: 'bold',
            }} 
            
            color="primary" type="submit">
            
            Pubblica
          
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default AdminPage;

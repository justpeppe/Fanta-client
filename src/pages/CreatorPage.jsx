import React, { useState } from "react";
import "../App.css";
import { Container, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Avatar, Checkbox } from "@mui/material";

const CreatorPage = () => {
  // Stato per la checklist
  const [tasks, setTasks] = useState([
    { id: 1, text: "Sfida giornaliera", completed: false, score: 10 },
    { id: 2, text: "Sfida settimanale", completed: false, score: 70 },
    { id: 3, text: "Sfida mensile", completed: false, score: 300 },
  ]);

  // Funzione per gestire il toggle
  const handleToggle = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="sfondocreatorcolor"> {/* Usa la classe sfondocreator */}
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
        {/* Foto del Creator */}
        <Avatar
          alt="Foto del Creator"
          src={require("../materials/mario.jpg")} // Sostituisci con il percorso della tua immagine
          sx={{ width: 100, height: 100, margin: "0 auto", mb: 2 }}
        />

        {/* Scritta di benvenuto */}
        <Typography variant="h6"
          sx={{ /* serve per personalizzare */
            fontFamily: 'Kode Mono, monospace', 
            fontWeight: 'bold',
          }} 
          gutterBottom>
            Bentornato Creator
        </Typography>

        {/* Lista di checklist */}
        <Box>
          <List>
            {tasks.map((task) => (
              <ListItem
                key={task.id}
                button
                onClick={() => handleToggle(task.id)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={task.completed}
                    tabIndex={-1}
                    disableRipple
                    color="primary"
                  />
                </ListItemIcon>
                <ListItemText
                  primary={`${task.text} - Punti: ${task.score}`}
                  
                  style={{
                    textDecoration: task.completed ? "color: green" : "none",
                    color: task.completed ? "green" : "black",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </div>
  );
};

export default CreatorPage;

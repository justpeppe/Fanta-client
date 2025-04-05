import React from "react";
import "../App.css";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";

const LoginPage = () => {
  return (
    <div className="sfondologin"> {/* Usa la classe sfondo */}
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Typography className="kode-mono" variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField label="Email" type="email" fullWidth required />
            <TextField label="Password" type="password" fullWidth required />
            <Button variant="contained" color="primary" size="large" type="submit">
              Accedi
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default LoginPage;

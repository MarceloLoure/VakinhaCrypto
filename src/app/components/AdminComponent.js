import React from "react";

import { Box, Button, TextField, Typography } from "@mui/material";

const AdminComponent = () => {
    return (
        <Box>
            <Box>
                <Typography variant="body1">
                    Bloquear usuário
                </Typography>

                <TextField
                    id="outlined-basic"
                    label="Carteira do usuário"
                    variant="outlined"
                    fullWidth
                    sx={{
                        marginTop: 2
                    
                    }}
                />

                <Button
                    sx={{
                        marginTop: 2,
                        color: '#FFF',
                        backgroundColor: '#000',
                        ":hover": {
                            backgroundColor: '#333',
                        }
                    }}
                >
                    Bloquear
                </Button>
            </Box>
        </Box>
    )
}

export default AdminComponent;
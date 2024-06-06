'use client';

import React, { useState } from "react";
import { Box, Typography, Stack, TextField, InputAdornment, Button } from "@mui/material";

const HelpFormComponent = () => {
    const [formData, setFormData] = useState({});
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: '' });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let errors = {};
        let isValid = true;

        if (!formData.title || formData.title.trim() === '') {
            errors.title = 'Campo obrigatório';
            isValid = false;
        }

        if (!formData.description || formData.description.trim() === '') {
            errors.description = 'Campo obrigatório';
            isValid = false;
        }

        if (!formData.contact || formData.contact.trim() === '') {
            errors.contact = 'Campo obrigatório';
            isValid = false;
        }

        if (!formData.goal || formData.goal.trim() === '') {
            errors.goal = 'Campo obrigatório';
            isValid = false;
        }

        if (isValid) {
            console.log(formData); // Envie os dados se o formulário for válido
        } else {
            setFormErrors(errors);
        }
    }

    return (
        <Box>
            <Stack spacing={2} display='flex' flexDirection='column'>  
                <Typography variant="h2">Formulário de Ajuda</Typography>
                <Typography variant="p">Esta é a página de formulário de ajuda!</Typography>
                <Typography variant="p">Preencha todos os dados para sabermos o que você precisa.</Typography>
            </Stack>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    maxWidth: '500px',
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                fullWidth
            >
                <TextField
                    required
                    id="outlined-required-title"
                    label="O que você precisa?"
                    name="title"
                    onChange={handleChange}
                    error={!!formErrors.title}
                    helperText={formErrors.title}
                    fullWidth
                />

                <TextField
                    required
                    id="outlined-required-description"
                    label="Descreva o que você precisa"
                    name="description"
                    maxRows={4}
                    onChange={handleChange}
                    error={!!formErrors.description}
                    helperText={formErrors.description}
                />

                <TextField
                    required
                    id="outlined-required-contact"
                    label="Seu contato(E-mail ou telefone)"
                    name="contact"
                    onChange={handleChange}
                    error={!!formErrors.contact}
                    helperText={formErrors.contact}
                />

                <TextField
                    required
                    id="outlined-required-goal"
                    label="Meta (em MATIC)"
                    name="goal"
                    type="number"
                    sx={{
                        flexGrow: 1,
                        '& input[type=number]': {
                          MozAppearance: 'textfield',
                        },
                        '& input[type=number]::-webkit-outer-spin-button': {
                          WebkitAppearance: 'none',
                          margin: 0,
                        },
                        '& input[type=number]::-webkit-inner-spin-button': {
                          WebkitAppearance: 'none',
                          margin: 0,
                        }
                    }}
                    InputProps={{
                        endAdornment: <InputAdornment position="start">MATIC</InputAdornment>,
                    }}
                    onChange={handleChange}
                    error={!!formErrors.goal}
                    helperText={formErrors.goal}
                    fullWidth
                />
                <Box>
                    <Button
                     type="submit"
                     sx={{
                            color: '#FFF',
                            backgroundColor: '#000',
                            ":hover": {
                                backgroundColor: '#333',
                            }
                        }}
                    >
                        Enviar
                    </Button>
                </Box>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                maxWidth: '500px',
                marginTop: 2
            }}>

                <Typography variant="body2">Preencha todos os campos e clique em enviar para pedir ajuda.</Typography>

                <Typography variant="body2">Seu pedido de ajuda será exibido na lista de pedidos de ajuda.</Typography>

                <Typography variant="body2">Sua carteira deve ser na rede Polygon</Typography>

                <Typography variant="body2">As doações serão basicamente em MATIC, token principal da rede Polygon.</Typography>

                <Typography variant="body2">Você pode pedir ajuda para qualquer coisa, desde que seja honesto.</Typography>

                <Typography variant="body2">Obrigado por usar o Vakinha Crypto!</Typography>
            </Box>

        </Box>
    )
}

export default HelpFormComponent;

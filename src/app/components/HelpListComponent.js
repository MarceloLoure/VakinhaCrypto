'use client';

import React, { useState } from "react";
import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const HelpListComponent = () => {
    const [rows, setRows] = useState([]);

    const addRow = () => {
        setRows([
            ...rows,
            {
                title: 'Ajuda para o João',
                description: 'João precisa de ajuda para comprar remédios',
                goal: 'R$ 500,00',
                contact: '43 - 99999-9999'
            }
        ]);
    }

    return (
        <Box>
            <Button variant="contained" color="primary" onClick={addRow}>Adicionar pedido de ajuda</Button>
            <TableContainer component={Paper} sx={{marginTop: 2 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Título</TableCell>
                            <TableCell align="center">Descrição</TableCell>
                            <TableCell align="right">Meta</TableCell>
                            <TableCell align="right">Contato</TableCell>
                            <TableCell align="right">Ação</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.length > 0 ? (
                            rows.map((row) => (
                                <TableRow key={row.title}>
                                    <TableCell component="th" scope="row">{row.title}</TableCell>
                                    <TableCell align="center">{row.description}</TableCell>
                                    <TableCell align="right">{row.goal}</TableCell>
                                    <TableCell align="right">{row.contact}</TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained" sx={{
                                            backgroundColor: '#000',
                                            ":hover": {
                                                backgroundColor: '#333',
                                            }
                                        
                                        }}>Doar</Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} align="center">Nenhum pedido de ajuda cadastrado</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default HelpListComponent;

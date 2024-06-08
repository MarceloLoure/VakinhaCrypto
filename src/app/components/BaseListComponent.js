import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { acceptRequest, finishRequest, getOpenRequests } from "@/services/Web3Services";



export const BaseListComponent = ({accept}) => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        loadRequests(0);
    }, []);

    const loadRequests = async (lastId) => {
        try {
            const status = accept ? 1 : 3;
            const response = await getOpenRequests(lastId, status)
            
            if(lastId === 0){
                setRequests(response);
            } else {
                requests.push(...response);
                setRequests(requests);

            }
        } catch (error) {
            alert(`Erro ao carregar pedidos de ajuda: ${error.message}`);
        }
    }


    return (
        <Box>
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
                        {requests.length > 0 ? (
                            requests.map((request) => (
                                <TableRow key={request.id}>
                                    <TableCell component="th" scope="row">{request.title}</TableCell>
                                    <TableCell align="center">{request.description}</TableCell>
                                    <TableCell align="right">{request.balance ? 
                                    <>{`${Web3.utils.fromWei(request.balance, 'ether')} Matic obtidos de ${Web3.utils.fromWei(request.goal, 'ether')} Matic`}</>
                                    :
                                    <>{`${Web3.utils.fromWei(request.balance, 'ether')} Matic obtidos de ${Web3.utils.fromWei(request.goal, 'ether')} Matic`}</>
                                    }</TableCell>
                                    <TableCell align="right">{request.contact}</TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained" sx={{
                                            backgroundColor: '#000',
                                            ":hover": {
                                                backgroundColor: '#333',
                                            }
                                        }}
                                        onClick={() => {accept ? acceptRequest(request.id) : ''}}
                                        >
                                            {accept ? 'Aceitar' : ''}
                                        </Button>

                                        <Button variant="contained" sx={{
                                            backgroundColor: '#000',
                                            ":hover": {
                                                backgroundColor: '#333',
                                            }
                                        }}
                                        onClick={() => {finishRequest(request.id)}}
                                        >
                                           Encerrar
                                        </Button>
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
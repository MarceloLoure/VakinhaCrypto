'use client';

import React, { useState, useEffect } from "react";
import { IMaskInput } from 'react-imask';
import Web3 from "web3";
import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { closeRequest, getOpenRequests, donate } from "@/services/Web3Services";

const HelpListComponent = () => {
    const [requests, setRequests] = useState([]);
    const [donationAmount, setDonationAmount] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadRequests(0);
    }, []);

    const loadRequests = async (lastId) => {
        try {
            setLoading(true);
            const response = await getOpenRequests(lastId, 2);
            
            if(lastId === 0){
                setRequests(response);
            } else {
                requests.push(...response);
                setRequests(requests);

            }
            setLoading(false);
        } catch (error) {
            alert(`Erro ao carregar pedidos de ajuda: ${error.message}`);
        }
    }

    const handleCloseRequest = async (id) => {
        try {
            await closeRequest(id);
            alert('Pedido de ajuda encerrado com sucesso!');
            window.location.href = '/';
        } catch (error) {
            alert(`Erro ao encerrar pedido de ajuda: ${error.message}`);
        }
    }

    const handleDonate = async (id) => {
        try {
            setLoading(true);
            const amountInWei = Web3.utils.toWei(donationAmount[id], 'ether');
            await donate(id, amountInWei);
            alert('Doação realizada com sucesso!');
            setLoading(false);
            window.location.href = '/';

        } catch (error) {
            alert(`Erro ao realizar doação: ${error.message}`);
        }
    }

    const handleDonationAmountChange = (id, value) => {
        setDonationAmount(prevAmounts => ({
            ...prevAmounts,
            [id]: value
        }));
    }

    return (
        <Box>
            {loading && <Typography variant="h6" align="center">Carregando...</Typography>}

            {!loading && requests.length === 0 && <Typography variant="h6" align="center">Nenhum pedido de ajuda cadastrado</Typography>}

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
                                        {request.author.toLowerCase() === localStorage?.getItem('wallet')?.toLowerCase()
                                         ?
                                          (
                                            <Button variant="contained" sx={{
                                                backgroundColor: '#000',
                                                ":hover": {
                                                    backgroundColor: '#333',
                                                }
                                            
                                            }}
                                            onClick={() => handleCloseRequest(request.id)}
                                            >Encerrar</Button>
                                          )
                                        :
                                        (
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-around',
                                                alignItems: 'center',
                                            }}
                                        >
                                             <IMaskInput
                                                    mask={Number}
                                                    scale={4}
                                                    thousandsSeparator=''
                                                    padFractionalZeros={true}
                                                    normalizeZeros={true}
                                                    radix=','
                                                    mapToRadix={['.']}
                                                    type="text"
                                                    inputMode="decimal"
                                                    placeholder="0,0000"
                                                    value={donationAmount[request.id] || ''}
                                                    onAccept={(value) => handleDonationAmountChange(request.id, value)}
                                                    style={{ width: '50%', padding: '10px', fontSize: '16px' }}
                                                />
                                            <Button 
                                                variant="contained" 
                                                sx={{
                                                    backgroundColor: '#000',
                                                    ":hover": {
                                                        backgroundColor: '#333',
                                                    }
                                                }}
                                                onClick={() => handleDonate(request.id)}
                                            >
                                                Doar
                                            </Button>
                                        </Box>
                                        )
                                        }
                                        
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

'use client';

import React, { useEffect, useState } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";
import { 
    acceptRequest, 
    finishRequest, 
    addToBlacklist, 
    removeFromBlacklist, 
    getAdmin
} from "@/services/Web3Services";
import { BaseListComponent } from "./BaseListComponent";

const AdminComponent = () => {
    const [adminWallet, setAdminWallet] = useState('');
    const [blockUser, setBlockUser] = useState('');
    const [unblockUser, setUnblockUser] = useState('');

    useEffect(() => {
        getAdmin()
            .then(wallet => setAdminWallet(wallet))
            .catch(error => alert(`Erro ao carregar dados do administrador: ${error.message}`));
    }, []);

    const handleBlockUser = async () => {
        try {
            await addToBlacklist(blockUser);
            alert('Usuário bloqueado com sucesso!');
        } catch (error) {
            alert(`Erro ao bloquear usuário: ${error.message}`);
        }
    }

    const handleUnblockUser = async () => {
        try {
            await removeFromBlacklist(unblockUser);
            alert('Usuário desbloqueado com sucesso!');
        } catch (error) {
            alert(`Erro ao desbloquear usuário: ${error.message}`);
        }
    }

    return (
        <Box>
            {adminWallet.toLowerCase() === localStorage.getItem('wallet')?.toLowerCase() ? (
                <>
                 <Box>
                <Typography variant="body1">
                    Bloquear usuário
                </Typography>

                <TextField
                    id="outlined-basic"
                    label="Carteira do usuário"
                    variant="outlined"
                    onChange={(event) => setBlockUser(event.target.value)}
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
                    onClick={() => handleBlockUser(blockUser)}
                >
                    Bloquear
                </Button>
            </Box>

            <Box>
                <Typography variant="body1">
                    Bloquear usuário
                </Typography>

                <TextField
                    id="outlined-basic"
                    label="Carteira do usuário"
                    variant="outlined"
                    onChange={(event) => setUnblockUser(event.target.value)}
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
                    onClick={() => handleUnblockUser(blockUser)}
                >
                    Desbloquear
                </Button>
            </Box>

           <Box>
                <BaseListComponent accept={true} />
           </Box>

           <Box>
                <BaseListComponent accept={false} />
           </Box>
                </>
            )
            :
            (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: 2
                    }}
                >
                    <Typography variant="body1">
                        Você não tem permissão para acessar essa página
                    </Typography>
                </Box>
            )
        }
        </Box>
    )
}

export default AdminComponent;
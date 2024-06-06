import { Box } from "@mui/material";
import React from "react";
import AdminComponent from "../components/AdminComponent";

const AdminPage = () => {
    return (
        <Box
        component="main"
         sx={{
            flexGrow: 1,
            py: 2,
            width: '100%',
            maxWidth: '1100px',
            margin: '0 auto',
         }}>
           <AdminComponent />
        </Box>
    )
}

export default AdminPage;
import { Box } from "@mui/material";
import React from "react";
import HelpFormComponent from "../components/HelpFormComponent";


const CreatePage = () => {
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
            <HelpFormComponent />
        </Box>
    )
}

export default CreatePage;
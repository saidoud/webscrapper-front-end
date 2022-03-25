import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Mediamarkt
                    </Typography>
                    <Button color="primary" variant="outlined">
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

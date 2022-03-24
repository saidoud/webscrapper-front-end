import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Footer() {
    return (
        <footer>
            <Box
                sx={(theme) => ({
                    backgroundColor: theme.palette.primary.dark,
                    py: theme.spacing(2)
                })}
            >
                <Container maxWidth="xs">
                    <Typography variant="subtitle1" component="p" color="white">
                        Copyright 2022 Mediamarkt | All Rights Reserved
                    </Typography>
                </Container>
            </Box>
        </footer>
    );
}

export default Footer;

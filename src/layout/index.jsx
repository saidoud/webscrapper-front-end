import React, { Fragment } from 'react';
import { Container } from '@mui/material';

import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
    return (
        <Fragment>
            <Header />
            <Container
                sx={(theme) => ({
                    minHeight: '90vh',
                    py: theme.spacing(3)
                })}
            >
                {children}
            </Container>
            <Footer />
        </Fragment>
    );
}

export default Layout;

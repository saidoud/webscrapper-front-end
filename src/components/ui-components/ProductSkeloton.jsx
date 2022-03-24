import React from 'react';
import { Grid, Skeleton, Stack } from '@mui/material';

function ProductSkeloton() {
    return (
        <Grid container spacing={4}>
            {Array.from(new Array(6)).map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Stack spacing={1}>
                        <Skeleton variant="rectangular" height={260} />
                        <Skeleton variant="text" width={'50%'} />
                    </Stack>
                </Grid>
            ))}
        </Grid>
    );
}

export default ProductSkeloton;

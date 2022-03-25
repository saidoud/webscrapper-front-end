import React from 'react';
import { Box, Card, Grid, CardMedia, Stack, Rating, Typography, Link } from '@mui/material';

function ProductCard({ title, price, imageUrl, rating, url, ratingNumber }) {
    return (
        <Card>
            <Link href={url}>
                <CardMedia component="img" height="194" image={imageUrl} loading="lazy" />
            </Link>

            <Box
                sx={(theme) => ({
                    p: theme.spacing(1),
                    textDecoration: 'none'
                })}
            >
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" sx={{ textDecoration: 'none' }}>
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Rating precision={1} name="size-small" value={rating} size="small" readOnly />
                            <Typography variant="caption">({ratingNumber})</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Grid container spacing={1}>
                                <Grid item>
                                    <Typography variant="h6">${price}</Typography>
                                </Grid>
                                {/* <Grid item>
                                    <Typography variant="body1" sx={{ color: 'grey.500', textDecoration: 'line-through' }}>
                                        ${300}
                                    </Typography>
                                </Grid> */}
                            </Grid>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    );
}

export default ProductCard;

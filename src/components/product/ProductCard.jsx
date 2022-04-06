import React, { useState } from 'react';
import { Box, Card, Grid, CardMedia, Stack, Rating, Typography, Link, CardActions, IconButton, Collapse } from '@mui/material';
import { styled } from '@mui/material/styles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Specification from './Specification';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
    })
}));

function ProductCard({ title, price, imageUrl, rating, url, ratingNumber, delivery, availibility, specification = [] }) {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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
                    <Grid item xs={12}>
                        <Stack direction={'row'} spacing={1}>
                            <Typography fontWeight={600} variant="caption">
                                availibility
                            </Typography>
                            <Typography variant="body2">{availibility}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction={'row'} spacing={1}>
                            <Typography fontWeight={600} variant="caption">
                                Delivery
                            </Typography>
                            <Typography variant="caption">{delivery}</Typography>
                        </Stack>
                    </Grid>
                    {/* <Grid item xs={12}>
                        <Stack direction={'row'} spacing={1}>
                            <Typography fontWeight={600} variant="caption">
                                Brand
                            </Typography>
                            <Typography variant="body2">HP</Typography>
                        </Stack>
                    </Grid> */}
                </Grid>
            </Box>
            <CardActions disableSpacing>
                <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Specification specification={specification} />
            </Collapse>
        </Card>
    );
}

export default ProductCard;

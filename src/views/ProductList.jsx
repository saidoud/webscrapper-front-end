import React from 'react';
import { Grid } from '@mui/material';
import FilterCatgory from 'components/FilterCatgory';

function ProductList() {
    return (
        <Grid container spacing={2}>
            {/* Category Filter */}
            <Grid item md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
                <FilterCatgory />
            </Grid>
            {/* Product List */}
            <Grid item>
                <Grid item xs={12} md={9}>
                    <Grid container spacing={2}>
                        {/* {products.map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <ProductCard title={item.name} imageUrl={item.image.url} price={item.price.raw} />
                            </Grid>
                        ))} */}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ProductList;

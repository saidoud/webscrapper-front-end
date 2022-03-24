import React, { useState } from 'react';
import { Grid } from '@mui/material';
import FilterCatgory from 'components/FilterCatgory';
import ProductSkeloton from 'components/ui-components/ProductSkeloton';

function ProductList() {
    const [loading, setLoading] = useState(true);
    return (
        <Grid container spacing={4}>
            {/* Category Filter */}
            <Grid item md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
                <FilterCatgory />
            </Grid>
            {/* Product List */}
            <Grid item xs={12} md={9}>
                {loading ? (
                    <ProductSkeloton />
                ) : (
                    <Grid container spacing={2}>
                        {/* {products.map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <ProductCard title={item.name} imageUrl={item.image.url} price={item.price.raw} />
                            </Grid>
                        ))} */}
                    </Grid>
                )}
            </Grid>
        </Grid>
    );
}

export default ProductList;

import React, { useState } from 'react';
import { Grid } from '@mui/material';
import FilterCatgory from 'components/FilterCatgory';
import ProductSkeloton from 'components/ui-components/ProductSkeloton';
import ProductCard from 'components/product/ProductCard';

function ProductList() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    const handleCategory = (name) => {
        console.log(name);
    };
    return (
        <Grid container spacing={4}>
            {/* Category Filter */}
            <Grid item xs={12} md={3}>
                <FilterCatgory handleCategory={handleCategory} category={category} />
            </Grid>
            {/* Product List */}
            <Grid item xs={12} md={9}>
                {loading ? (
                    <ProductSkeloton />
                ) : (
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <ProductCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <ProductCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <ProductCard />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <ProductCard />
                        </Grid>

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

const category = [
    {
        id: 1,
        name: 'Bath Preparations',
        url: '#'
    },
    {
        id: 2,
        name: 'Eye Makeup Preparations',
        url: '#'
    },
    {
        id: 3,
        name: 'Fragrance',
        url: '#'
    }
];

const productsApp = [];

export default ProductList;

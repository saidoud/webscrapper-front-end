import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';

import FilterCatgory from 'components/FilterCatgory';
import ProductSkeloton from 'components/ui-components/ProductSkeloton';
import ProductCard from 'components/product/ProductCard';
import image from 'components/product/prod-2.jpg';

function ProductList() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const handleCategory = (name) => {
        console.log(name);
    };

    useEffect(() => {
        setProducts(productsApp);
        return setLoading(false);
    }, []);
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
                        {products.map((item) => (
                            <Grid item xs={12} sm={6} md={4} key={item.id}>
                                <ProductCard
                                    title={item.name}
                                    price={item.price}
                                    imageUrl={item.imageUrl}
                                    rating={item.rating}
                                    ratingNumber={item.ratingNumber}
                                    url={item.url}
                                />
                            </Grid>
                        ))}
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

const productsApp = [
    {
        id: 1,
        name: 'Product 1',
        url: 'https://mui.com/',
        ratingNumber: 10,
        rating: 5,
        imageUrl: image,
        price: 250
    },
    {
        id: 2,
        name: 'Product 2',
        url: 'https://mui.com/',
        ratingNumber: 10,
        rating: 5,
        imageUrl: image,
        price: 250
    },
    {
        id: 3,
        name: 'Product 3',
        url: 'https://mui.com/',
        ratingNumber: 10,
        rating: 5,
        imageUrl: image,
        price: 250
    },
    {
        id: 4,
        name: 'Product 4',
        url: 'https://mui.com/',
        ratingNumber: 10,
        rating: 5,
        imageUrl: image,
        price: 250
    },
    {
        id: 5,
        name: 'Product 5',
        url: 'https://mui.com/',
        ratingNumber: 10,
        rating: 5,
        imageUrl: image,
        price: 250
    }
];

export default ProductList;

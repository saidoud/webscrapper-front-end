import React, { useState, useEffect, useCallback } from 'react';
import { Grid } from '@mui/material';

import FilterCatgory from 'components/FilterCatgory';
import ProductSkeloton from 'components/ui-components/ProductSkeloton';
import ProductCard from 'components/product/ProductCard';
import { getProduct } from 'service';

function ProductList() {
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState(0);
    const [products, setProducts] = useState([]);

    const getData = useCallback(async () => {
        setLoading(true);
        const data = await getProduct(category[selected].url);
        setProducts(data);
        setLoading(false);
    }, [selected]);

    const handleCategory = (item) => {
        setSelected(item.id);
    };

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <Grid container spacing={4}>
            {/* Category Filter */}
            <Grid item xs={12} md={3}>
                <FilterCatgory handleCategory={handleCategory} category={category} selected={selected} />
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
        name: 'Convertibles 2 en 1',
        url: '/es/category/convertibles-2-en-1-160.html'
    },
    {
        id: 2,
        name: 'Portátiles de menos de 14"',
        url: '/es/category/portátiles-de-menos-de-14-155.html'
    },
    {
        id: 3,
        name: 'Portátiles de 14" a 16.9"',
        url: '/es/category/portátiles-de-14-a-16-9-156.html'
    }
];

export default ProductList;

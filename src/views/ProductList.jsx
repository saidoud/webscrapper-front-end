import React, { useState, useEffect, useCallback } from 'react';
import { Grid, Typography } from '@mui/material';

import FilterCatgory from 'components/FilterCatgory';
import ProductSkeloton from 'components/ui-components/ProductSkeloton';
import ProductCard from 'components/product/ProductCard';
import { getCategory, getProduct } from 'service';

const url = 'https://www.mediamarkt.es';

function ProductList() {
    const [loading, setLoading] = useState(true);
    const [loadingCategory, setLoadingCategory] = useState(true);
    const [selected, setSelected] = useState(null);
    const [products, setProducts] = useState([]);
    const [categorys, setCategorys] = useState([]);

    // get products
    const getProductData = useCallback(
        async (link) => {
            if (categorys.length !== 0) {
                setLoading(true);
                // const link = categorys[selected - 1].url;
                const data = await getProduct(link);
                setProducts(data);
                setLoading(false);
            }
        },
        [categorys]
    );

    // const getProduct = async () => {
    //     if (categorys.length !== 0) {
    //         const link = categorys[selected - 1].url;
    //         const data = await getProduct(link);
    //         setProducts(data);
    //         setLoading(false);
    //     }
    // };

    // get Category
    const getCategoryData = async () => {
        const data = await getCategory();
        setCategorys(data);
        setLoadingCategory(false);
        console.log(data);
    };

    const handleCategory = (item) => {
        setSelected(item.id);
        getProductData(item.url);
    };

    useEffect(() => {
        getProductData();
    }, [getProductData]);

    useEffect(() => {
        getCategoryData();
    }, []);

    // useEffect(() => {
    //     getProductData();
    // }, [getProductData]);

    return (
        <Grid container spacing={4}>
            {/* Category Filter */}
            <Grid item xs={12} md={3}>
                <FilterCatgory handleCategory={handleCategory} category={categorys} selected={selected} loading={loadingCategory} />
            </Grid>
            {/* Product List */}
            {!selected ? (
                <Grid item xs={12} md={9}>
                    <Typography variant="h5" component="p">
                        Select Category
                    </Typography>
                </Grid>
            ) : (
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
                                        url={url + item.url}
                                        specification={item.specifications}
                                        availibility={item.availibility}
                                        delivery={item.delivery}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Grid>
            )}
        </Grid>
    );
}

export default ProductList;

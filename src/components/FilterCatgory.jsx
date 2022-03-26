import React from 'react';
import { Card, Stack, CardContent, Typography, Button, Skeleton } from '@mui/material';

function FilterCatgory({ category, handleCategory, selected, loading }) {
    return (
        <Card>
            <CardContent>
                {/* Category */}

                <Stack direction="column" spacing={1}>
                    <Typography component="p" variant="h6" align="center">
                        Category
                    </Typography>
                    {loading ? (
                        <>
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                        </>
                    ) : (
                        <>
                            {category.map((item) => (
                                <Button
                                    size="small"
                                    variant={selected === item.id ? 'contained' : 'text'}
                                    key={item.id}
                                    onClick={() => handleCategory(item)}
                                >
                                    {item.name}
                                </Button>
                            ))}
                        </>
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
}

export default FilterCatgory;

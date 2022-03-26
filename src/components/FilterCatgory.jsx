import React from 'react';
import { Card, Stack, CardContent, Typography, Button } from '@mui/material';

function FilterCatgory({ category, handleCategory, selected }) {
    return (
        <Card>
            <CardContent>
                {/* Category */}
                <Stack direction="column" spacing={1}>
                    <Typography component="p" variant="h6" align="center">
                        Category
                    </Typography>
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
                </Stack>
            </CardContent>
        </Card>
    );
}

export default FilterCatgory;

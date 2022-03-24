import React from 'react';
import { Card, Stack, CardContent, Typography } from '@mui/material';

function FilterCatgory() {
    return (
        <Card>
            <CardContent>
                {/* Category */}
                <Stack direction="column" spacing={1}>
                    <Typography component="p" variant="h6">
                        Category
                    </Typography>
                    <Typography component="p" variant="body2" color={'text.secondary'}>
                        All categories
                    </Typography>
                    <Typography component="p" variant="body2" color={'text.secondary'}>
                        Bath Preparations
                    </Typography>
                    <Typography component="p" variant="body2" color={'text.secondary'}>
                        Eye Makeup Preparations
                    </Typography>
                    <Typography component="p" variant="body2" color={'text.secondary'}>
                        Fragrance
                    </Typography>
                    <Typography component="p" variant="body2" color={'text.secondary'}>
                        Hair PreparationsHair Preparations
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default FilterCatgory;

import React from 'react';
import { Stack, Typography } from '@mui/material';

function Specification({ specification = [] }) {
    return (
        <Stack direction={'column'} spacing={2} sx={{ p: 1 }}>
            {specification.map((item, index) => (
                <Stack direction={'row'} spacing={1} key={index}>
                    <Typography variant="caption" fontWeight={600}>
                        {item.key}
                    </Typography>
                    <Typography variant="body2">{item.value}</Typography>
                </Stack>
            ))}
        </Stack>
    );
}

export default Specification;

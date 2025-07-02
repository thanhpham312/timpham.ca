import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const AlbumCard = ({ image, title, artist }) => {
  return (
    <Card sx={{ width: '100%', borderRadius: 3 }}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          paddingTop: '100%',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>

      <CardContent sx={{ padding: '8px 12px' }}>
        <Typography variant="subtitle1" fontWeight="bold" noWrap title={title}>
          {title}
        </Typography>
        <Typography variant="body2" noWrap color="text.secondary">
          {artist}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AlbumCard;

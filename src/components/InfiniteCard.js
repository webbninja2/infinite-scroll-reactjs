import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfinteCard({item}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 345 }}
        image={item.images.jpg.image_url}
        title={item.title}
      />
      <CardContent sx={{margin:0, padding:"0 15px"}}>
        <Typography gutterBottom variant="h6" component="div" sx={{margin:"0px !important"}}>
         {item.title}
        </Typography>
        <Typography sx={{color:"gray"}} variant='body2'>Duration:  {item.duration}</Typography>
        <Typography variant="body2" color="text.secondary">
         {item.describeExperience}
        </Typography>
      </CardContent>
      
    </Card>
  );
}

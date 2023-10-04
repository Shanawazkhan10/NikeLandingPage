import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { addQty, reduceQty } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

export default function MediaCard(item) {
    const dispatch = useDispatch();
    console.log(item?.item, "KDKDKDDKDKK");
    return (
        <Card sx={{ maxWidth: 320 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={item?.item?.imgURL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item?.item?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item?.item?.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => { dispatch(reduceQty(item.item)) }} size="small">-</Button>
                <Typography variant="body2" color="text.secondary">
                    {item?.item?.quantity}
                </Typography>
                <Button onClick={() => { dispatch(addQty(item.item)) }} size="small">+</Button>
            </CardActions>
        </Card>
    );
}

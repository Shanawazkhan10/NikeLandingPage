import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useSelector } from 'react-redux';
import MediaCard from './cartCard';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

export default function SwipeableTemporaryDrawer({ openDrawer, setopenDrawer }) {
    const cartItem = useSelector(state => state.cart.cart)
    const [TotalPrice, setTotalPrice] = React.useState(0)
    // let TotalPrice = 0
    React.useEffect(() => {
        let sum = 0;
        cartItem?.forEach(element => {
            console.log(parseFloat(element.price?.replace("$", "")) * parseFloat(element.quantity), "KDKODDOKDKODOKDOKDODODKOD");
            sum = sum + (parseFloat(element.price?.replace("$", "")) * parseFloat(element.quantity));
            // setTotalPrice((parseFloat(element.price?.replace("$", "")) * parseFloat(element.quantity)) + TotalPrice)
        });
        setTotalPrice((sum).toFixed(2));
    }, [cartItem])
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (newOpen) => () => {
        setopenDrawer(!newOpen)
    };
    const list = (anchor) => (
        <div style={{ marginLeft: 90 }}>
            <Box
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : "auto" }}
                role="presentation"
                width={100}
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
            >
                <p>CHECK OUT</p><span>Rs. {TotalPrice}</span>
                <br />
                <List>
                    {cartItem?.map((item) => (
                        // <ListItem key={item?.name} disablePadding>
                        //     <ListItemButton>
                        <MediaCard key={item?.name} item={item} />

                    ))}
                </List>
                {/* <Divider /> */}
            </Box>
        </div>
    );

    return (
        <div>
            {/* {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
            <SwipeableDrawer
                PaperProps={{
                    sx: { width: "35%" },
                }}
                anchor={"right"}
                open={openDrawer}
                onClose={toggleDrawer(false)}
                // onClick={toggleDrawer(!openDrawer)}
                onOpen={toggleDrawer(true)}
                disableSwipeToOpen={false}
            >
                {list('right')}
                <span style={{ cursor: 'pointer' }} onClick={() => { setopenDrawer(!openDrawer) }}>CLOSED</span>
            </SwipeableDrawer>
            {/* </React.Fragment>
            ))} */}
        </div>
    );
}
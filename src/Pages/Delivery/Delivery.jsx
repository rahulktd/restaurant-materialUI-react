import React from 'react';
import { Typography, styled } from '@mui/material';
import { Box, Container} from '@mui/material';
import deliveryImg from "../../assets/DeliveryImg.png";
import CustomButton from '../../Components/CustomButton/CustomButton';

const Delivery = ()=> {
    const CustomContainer = styled(Container)(({theme}) => ({
        backgroundColor:'#FED801',
        height:'416px',
        borderRadius:'15px',
        display:"flex",
        justifyContent:'space-around',
        alignItems:"center",
        marginTop: theme.spacing(5),
        [theme.breakpoints.down('md')]:{
            height:'auto',
            alignItems:"center",
            flexDirection:"column",
            padding:theme.spacing(3,3,0,3),
            width:'90%',
        },
    }));

    const CustomBox = styled(Box)(({theme}) => ({
        padding:theme.spacing(10,0,10,0),
        margin:theme.spacing(0,2,0,2),
        [theme.breakpoints.down('md')]:{
            padding:'0',
        },
    }));


  return (
    <CustomBox>
        <CustomContainer>
            <Box>

                <Typography
                sx={{color:"#white", 
                fontSize:'35px',fontWeight:'700',fontFamily:'monospace'}}>
                    Super Fast Home Delivery
                </Typography>

                <Typography
                sx={{color:"#000", 
                fontSize:'16px',fontWeight:'800',my:3,fontFamily:'monospace'}}
                >
                    Door to Door Delivery
                </Typography>

                <CustomButton
                backgroundColor='#fff'
                color='#17275F'
                buttonText='Order Now!' />
            </Box>

            <img src={deliveryImg} alt="" style={{maxWidth:'100%'}} />
        </CustomContainer>
    </CustomBox>
  )
}

export default Delivery
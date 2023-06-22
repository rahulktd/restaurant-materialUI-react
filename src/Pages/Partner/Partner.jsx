import {styled} from '@mui/system';
import React from 'react';
import logoImg from "../../assets/logo.png";
import starImg from "../../assets/Star.png";
import logosImg from "../../assets/logos.png";
import { Box, Container, Typography } from '@mui/material';


const Partner = ()=> {
    const CustomContainer = styled(Container)(({theme}) => ({
        display:"flex",
        justifyContent:'space-between',
        [theme.breakpoints.down('md')]:{
            flexDirection:"column",
            alignItems:"center",
            textAlign:"center",
            marginBottom: theme.spacing(4),
        },

    }));

    const CustomBox = styled(Box)(({theme}) => ({
        [theme.breakpoints.down('md')]:{
            marginBottom: theme.spacing(4),
        },

    }));
  return (
    <Box 
    sx={{mt : 10}}
    >
        <CustomContainer>

        <CustomBox>
            <img src={logoImg} alt="" style={{maxWidth:"100%"}} />
            <Typography
            variant='body2'
            sx={{
                color:"#7D8589",
                fontSize:"16px",
                fontWeight:"bold",
                mt:2,
            }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </Typography>

        </CustomBox>

        <Box>
            <img src={starImg} alt=""  style={{maxWidth:"100%"}} />
            <Typography
            variant='body2'
            sx={{
                color:"#7D8589",
                fontSize:"16px",
                fontWeight:"bold",
                mt:2,
            }}
            >
                Have a nice day.
            </Typography>

        </Box>           

        </CustomContainer>

        <Container sx={{ display:"flex", flexDirection:"column"}}>
            <img src={logosImg} alt="" />

        </Container>
        

    </Box>
  )
}

export default Partner
import React from 'react'
import { Typography, styled } from '@mui/material';
import { Box, Container} from '@mui/material';
import houseCard from "../../assets/ambience.jpg";
import { Padding } from '@mui/icons-material';

const Ambience = () => {
    const CustomBox = styled(Box)(({theme}) => ({
        display:"flex",
        gap:theme.spacing(10),
        alignItems:"center",
        [theme.breakpoints.down('md')]:{
            textAlign:"center",
            flexDirection:"column",
        },
    }));

    const ImgContainer = styled(Box)(({theme}) => ({
        width:'100%',
        [theme.breakpoints.down('md')]:{
            display:"flex",
            alignItems:"center",
            flexDirection:"column",
        },
    }));

    const LargeText = styled(Typography)(({theme}) => ({
        fontSize:'64px',
        color:"#000",
        fontWeight:'700',
        [theme.breakpoints.down('md')]:{
            fontSize:'32px',
        },
    }));

    const SmallText = styled(Typography)(({theme}) => ({
        fontSize:'18px',
        color:"#7B8087",
        fontWeight:'500',
        [theme.breakpoints.down('md')]:{
            fontSize:'14PX',
        },
    }));

    const TextFlexbox = styled(Box)(({theme}) => ({
        marginTop:theme.spacing(7),
        display:"flex",
        justifyContent:'space-between',
        Padding: theme.spacing(0,5,0,5),
        [theme.breakpoints.down('sm')]:{
            gap:theme.spacing(5),
            flexDirection:"column",
        },
    }));

    const Divider = styled('div')(({theme}) => ({
        width:'13%',
        height:'5px',
        backgroundColor:'#000339',
        [theme.breakpoints.down('md')]:{
            marginLeft:'auto',
            marginRight:'auto',
        },
    }));


  return (
    <Box sx={{py:10}}>

        <Container>

            <CustomBox>
                <ImgContainer>
                <img src={houseCard} alt="" style={{maxWidth:'100%'}} />
                </ImgContainer>
                <Box>
                    <Divider/>
                    <Typography
                     sx={{color:"#000339",
                      fontSize:'35px',
                      fontWeight:'700',
                      my:1,}}
                    >
                        You've found a ambiance you love.
                    </Typography>

                    <Typography
                     sx={{color:"#5A6473",
                      fontSize:'16px',
                      lineHeight:'27px,'}}
                    >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </Typography>
                </Box>
            </CustomBox>

            <TextFlexbox>
                <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                }}
                >
                    <LargeText>250+</LargeText>
                    <SmallText>Dishes</SmallText>
                </Box>

                <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                }}
                >
                    <LargeText>300+</LargeText>
                    <SmallText>Trusted Clients</SmallText>
                </Box>

                <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                }}
                >
                    <LargeText>350+</LargeText>
                    <SmallText>######</SmallText>
                </Box>

            </TextFlexbox>


        </Container>

    </Box>
  )
}

export default Ambience
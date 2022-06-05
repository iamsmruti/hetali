import { Box, Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import DividerWhite from "./DividerWhite";
import { Link } from "react-router-dom";
import logo from '../images/logo-white.png'

const Footer = () => {
    return (
        <Box sx={{bgcolor: '#004A74', height: 340}}>
            <Container sx={{display: 'flex', justifyContent: 'space-between', paddingTop: 4}}>
                <img src={logo} alt="" />

                <Box sx={{display: 'flex'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex start', marginLeft: 3}}>
                        <Typography
                            variant="h6"
                            sx={{color: 'white', mb: 1}}
                        >Quick Links</Typography>
                        <Link className="link" to='/' sx={{color: 'lightgray', textTransform: 'capitalize', textAlign: 'left'}}>Contact Us</Link>
                        <Link className="link" to='/' sx={{color: 'lightgray', textTransform: 'capitalize'}}>About Us</Link>
                        <Link className="link" to='/' sx={{color: 'lightgray', textTransform: 'capitalize'}}>Testimonials</Link>
                        <Link className="link" to='/' sx={{color: 'lightgray', textTransform: 'capitalize'}}>Gallery</Link>
                        <Link className="link" to='/' sx={{color: 'lightgray', textTransform: 'capitalize'}}>Site Map</Link>
                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex start', marginLeft: 6}}>
                        <Typography
                            variant="h6"
                            sx={{color: 'white', mb: 1}}
                        >Quick Links</Typography>
                        <Link className="link" to='/' sx={{color: 'lightgray', textTransform: 'capitalize', textAlign: 'left'}}>Contact Us</Link>
                        <Link className="link" to='/' sx={{color: 'lightgray', textTransform: 'capitalize'}}>About Us</Link>
                        <Link className="link" to='/' sx={{color: 'lightgray', textTransform: 'capitalize'}}>Testimonials</Link>
                        <Link className="link" to='/' sx={{color: 'lightgray', textTransform: 'capitalize'}}>Gallery</Link>
                        <Link className="link" to='/' sx={{color: 'lightgray', textTransform: 'capitalize'}}>Site Map</Link>
                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex start', marginLeft: 6}}>
                        <Typography
                            variant="h6"
                            sx={{color: 'white', mb: 1}}
                        >Quick Links</Typography>
                        <Link className="link" to='/' sx={{color: 'lightgray', textTransform: 'capitalize', textAlign: 'left'}}>Contact Us</Link>
                        <Link className="link" to='/' sx={{color: 'lightgray', textTransform: 'capitalize'}}>About Us</Link>
                        <Link className="link" to='/' sx={{color: 'lightgray', textTransform: 'capitalize'}}>Testimonials</Link>
                        <Link className="link" to='/' sx={{color: 'lightgray', textTransform: 'capitalize'}}>Gallery</Link>
                        <Link className="link" to='/' sx={{color: 'lightgray', textTransform: 'capitalize'}}>Site Map</Link>
                    </Box>
                </Box>
            </Container>
            
            <DividerWhite />
            <Typography
                align="center"
                sx={{color: 'white', mt: -2}}
            >Copyright @ 2022 Hetali Enterprises - All Rights Reserved</Typography>
        </Box>
    );
}
 
export default Footer;
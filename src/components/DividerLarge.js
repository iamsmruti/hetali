import { Box, Paper } from "@mui/material";
import gradRect from '../images/rectGradientLarge.png'
import logo from '../images/logoOnly.png'
import '../index.css'

const DividerLarge = () => {
    const width = 300
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center',
                mt: 5,
                mb: 5
            }}
        >
            <img src={gradRect} alt="" />
            <img width={30} src={logo} alt="" />
            <img src={gradRect} alt="" />
        </Box>
    );
}
 
export default DividerLarge;
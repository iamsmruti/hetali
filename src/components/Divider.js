import { Box } from "@mui/material";
import logo from '../images/logoOnly.png'
import gradRect from '../images/gradRectSmall.png'
import '../index.css'

const Divider = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 4,
                mt: 2
            }}
        >
            <img src={gradRect} alt="" />
            <img width={30} src={logo} alt="" />
            <img src={gradRect} alt="" />
        </Box>
    );
}
 
export default Divider;
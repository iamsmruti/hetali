import { Box } from "@mui/material";
import logo from '../images/whitelogo.png'
import gradRect from '../images/RectangleWhite.png'
import '../index.css'

const DividerWhite = () => {
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
 
export default DividerWhite;
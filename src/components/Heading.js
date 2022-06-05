import { Typography } from "@mui/material";

const Heading = ({title}) => {
    return (
        <Typography
                align='center'
                sx={{
                    fontFamily: 'Cinzel',
                    fontSize: 36,
                    color: '#474747'
                }}
            >
                {title}
            </Typography>
    );
}
 
export default Heading;
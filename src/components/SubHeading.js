import { Typography } from "@mui/material";

const SubHeading = ({title}) => {
    return (
            <Typography
                align='center'
                sx={{
                    fontFamily: 'Cinzel',
                    fontSize: 28
                }}
            >
                {title}
            </Typography>
    );
}
 
export default SubHeading;
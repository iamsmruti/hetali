import { Paper, Typography } from '@mui/material'

const FeatureCard = ({item}) => {
    return (
        <Paper sx={{display: 'flex' , flexDirection: 'column', alignItems: 'center', p: 3, minHeight: 300, pt: 5}}>
            <img width={60} src={item.icon} alt="" />
            <Typography
                variant='body2'
                sx={{
                    mt: 3
                }}
            >{item.text}</Typography>
        </Paper>
    );
}
 
export default FeatureCard;
import { Grid, Hidden } from "@mui/material";
import { Container } from "@mui/system";
import {useState} from 'react'
import asset1 from '../images/personalised.png'
import asset2 from '../images/pic2.jpeg'
import asset3 from '../images/pic1.jpeg'
import CustomizedAccordions from "./Accordion";

const AccordianSection = () => {
    const [img1, setImg1] = useState(true)
    const [img2, setImg2] = useState(false)
    const [img3, setImg3] = useState(false)

    return (
        <Container>
            <Grid container spacing={4}>
                <Grid sx={{height: 450, overflow: 'hidden'}} item md={6}>
                    {img1 === true && <img width={'100%'} src={asset1} />}
                    {img2 && <img width={'100%'} src={asset2} />}
                    {img3 && <img width={'100%'} src={asset3} />}
                </Grid>
                <Grid item md={6}>
                    <CustomizedAccordions setImg1={setImg1} setImg2={setImg2} setImg3={setImg3} />
                </Grid>
            </Grid>
        </Container>
    );
}
 
export default AccordianSection;
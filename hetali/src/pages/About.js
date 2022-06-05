import { Box, Typography, Container, Grid, Paper } from '@mui/material'
import Divider from '../components/Divider';
import DividerLarge from '../components/DividerLarge';
import Heading from '../components/Heading';
import banner from '../images/banner1.png'
import asset1 from '../images/asset1.png'
import asset2 from '../images/asset2.png'
import asset3 from '../images/asset3.png'
import asset4 from '../images/asset4.png'
import founder from '../images/founder.png'
import company from '../images/company.png'

import FeatureCard from '../components/FeatureCard'
import SubHeading from '../components/SubHeading';
import Footer from '../components/Footer';
import AccordianSection from '../components/MissionSection';
import AccordianSection2 from '../components/ResponsibilitySection';


const featureItems = [
    {
        icon: asset1,
        text: 'Our track record has been impeccable with project completion on time and have surpassed expectations many a time, society members have positively received our redevelopment plans and encourage our modern and urbane designs to their neighbours. '
    },
    {
        icon: asset2,
        text: 'The Hetali Group is a redeveloper like no other with a profound focus on quality and long term satisfaction of its residents.'
    },
    {
        icon: asset3,
        text: 'They just dont endeavour but build homes which make its residents proud of their address by putting home-owners at the heart and soul of everything they do from start to finish and post completion.'
    },
    {
        icon: asset4,
        text: 'Hetali Group lives by the ethos of building homes to live and not houses to stay in.'
    }
]

const About = () => {
    return (
        <Box>
            <Box
                sx={{
                    height: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Heading title={'About Us'} />
            </Box>
            <Divider />
            <img src={banner} alt="" />

            <Box className='svgBackground1' sx={{pt: 4, mt: -1}}>
                <Typography
                    align='center'
                    sx={{
                        width: 500, textAlign: 'center', fontWeight: 400, ml: 'auto', mr: 'auto', mb: 1
                    }}
                >
                    We endeavour to build homes which make it's residents happy and proud of their address. Residents are at heart of everything we do, we build homes to live in, not houses to stay in.
                </Typography>
                <DividerLarge />

                <Container sx={{width: '60%', mb: 5}}>
                    <Grid container spacing={3}>
                        {featureItems.map((item) => (
                            <Grid item xs={12} md={6}>
                                <FeatureCard item={item}/>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                <Box sx={{height: 120, bgcolor: 'rgba(0,0,0,0.8)'}}></Box>

                <Container sx={{width: '60%'}}>
                    <Box sx={{ pt: 12, pb: 12}}>
                        <Typography
                            variant='body1'
                            sx={{fontWeight: 400}}
                        >Established in 1992, Hetali Group is a leading real estate developer of residential spaces across Mumbai and have earned an unmatched reputation amongst its very loyal customers. The company's customer-centric values, project management proficiency and technical expertise are amplified with over 6.5 lakh sq.ft. built and almost 1 lakh sq.ft underway leading to more than families! 
                        </Typography>

                        <Typography
                            variant='body1'
                            sx={{fontWeight: 400, mt: 3}}
                        >Established in 1992, Hetali Group is a leading real estate developer of residential spaces across Mumbai and have earned an unmatched reputation amongst its very loyal customers. The company's customer-centric values, project management proficiency and technical expertise are amplified with over 6.5 lakh sq.ft. built and almost 1 lakh sq.ft underway leading to more than families! 
                        </Typography>

                        <Typography
                            variant='body1'
                            sx={{fontWeight: 400, mt: 3}}
                        >Established in 1992, Hetali Group is a leading real estate developer of residential spaces across Mumbai and have earned an unmatched reputation amongst its very loyal customers. The company's customer-centric values, project management proficiency and technical expertise are amplified with over 6.5 lakh sq.ft. built and almost 1 lakh sq.ft underway leading to more than families! 
                        </Typography>
                    </Box>
                </Container>
            </Box>

            <Box className='svgBackground2' sx={{height: 200, pt: 4}}>
                    <Box className='glassmorphism' sx={{height: 150, border: 'none', mt: '25', mb: '25'}}>
                    <Typography
                        align='center'
                        sx={{
                            fontFamily: 'Cinzel',
                            fontSize: 28,
                            color: 'lightgray',
                            marginBottom: 2
                        }}
                    >
                        Vision
                    </Typography>
                    <Typography
                        align='center'
                        sx={{
                            width: 500, textAlign: 'center', fontWeight: 400, ml: 'auto', mr: 'auto', mb: 1, color: 'white'
                        }}
                    >
                        We aim to ensure top-class service to our stakeholders & diversify our business to other service-oriented sectors with the ultimate goal of achieving customer satisfaction & end-user interaction.
                    </Typography>
                    </Box>
            </Box>
            <Box sx={{padding: 2}}>
                <SubHeading title={"Mission"} />
                <Divider />

                <AccordianSection />
            </Box>

            <Box sx={{padding: 4}}>
                <SubHeading title={"Corporate Social Responsibility"} />
                <Divider />

                <AccordianSection2 />
            </Box>

            <Box className='svgBackground1' sx={{}}>
                <Container sx={{display: 'flex',flexDirection: 'column', p: 10, alignItems: 'center', pb: 3}}>
                    <Paper sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', p: 5, width: '80%'}}>
                        <SubHeading title={'Founder\'s Message'} />
                        <Box sx={{borderRadius: '50%', border: '2px solid black', p: 1, m: 4}}>
                            <Paper sx={{borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid black'}}>
                                <img className='founderImage' src={founder} alt="" />
                            </Paper>
                        </Box>

                        <Divider />

                        <Typography sx={{fontWeight: 700}} variant='h4'>Mr. Jayesh H. Pandya</Typography>
                        <Typography
                            align='center'
                            sx={{
                                width: 500, textAlign: 'center', fontWeight: 400, ml: 'auto', mr: 'auto', mb: 4, color: 'black', mt: 1
                            }}
                        >
                            “When a customer buys a home, he is giving up a major chunk of his life's savings to do so. It is imperative to give him exactly what he looks for in his home.”
                        </Typography>

                        <Typography variant='body2' sx={{fontWeight: 300, width: '80%', mt: 4}}>
                            We bring to our clients much wanted human values, integrity, trust and an assurance of responsibility all coupled with our expertise in construction, engineering & management. Our biggest assets have always been our small but highly trained team of professional managers and engineers who are backed by a very able team of administrators. We have a clear vision about building on our strengths and our achievements while holding dear to us our basic principles
                        </Typography>
                    </Paper>

                    <DividerLarge />
                </Container>
            </Box>

            <Box sx={{padding: 2}}>
                <SubHeading title={"Group Companies"} />
                <Divider />

                <Container sx={{display: 'flex', overflowX: 'scroll'}}>
                        <Box width={500} sx={{marginRight: 4}}>
                            <img src={company} alt="" />
                            <Typography align='center'>Fuel</Typography>
                        </Box>
                        <Box width={500} sx={{marginRight: 4}}>
                            <img src={company} alt="" />
                            <Typography align='center'>Fuel</Typography>
                        </Box>
                        <Box width={500} sx={{marginRight: 4}}>
                            <img src={company} alt="" />
                            <Typography align='center'>Fuel</Typography>
                        </Box>
                        <Box width={500} sx={{marginRight: 4}}>
                            <img src={company} alt="" />
                            <Typography align='center'>Fuel</Typography>
                        </Box>
                        <Box width={500} sx={{marginRight: 4}}>
                            <img src={company} alt="" />
                            <Typography align='center'>Fuel</Typography>
                        </Box>
                        
                </Container>
            </Box>

            <Footer />
        </Box>
    );
}

export default About;
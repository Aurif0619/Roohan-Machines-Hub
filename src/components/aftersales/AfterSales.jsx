import { Box, Container, Typography, Grid, Avatar, IconButton, Button } from '@mui/material';
import React from 'react';
import Nauman from '../assets/Nauman Ahmed.jpg';
import Aqib from '../assets/Aqib Manzoor.jpg';
import Faisal from '../assets/Faisal Wali.jpg';
import MuhammadSuleiman from '../assets/Muhammad Suleiman.jpg';
import MuhammadIkram from '../assets/Muhammad Akram.jpg';
import Saqib from '../assets/Saqib Khan.jpg';
import Shafiq from '../assets/Shafiq Hussain.jpg';
import Samiullah from '../assets/Samiullah.jpg';
import logo from '../assets/logo.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const salespeople = [
    { name: 'Nauman Ahmed', img: Nauman, info: 'Engineering Head Lahore' },
    { name: 'Aqib Manzoor Hussain', img: Aqib, info: 'Hussain Engineer Lahore' },
    { name: 'Faisal Wali', img: Faisal, info: 'Engineer Lahore' },
    { name: 'Muhammad Suleiman', img: MuhammadSuleiman, info: 'Engineer Peshawar' },
    { name: 'Muhammad Ikram', img: MuhammadIkram, info: 'Engineer Multan' },
    { name: 'Saqib Khan', img: Saqib, info: 'Engineer Karachi' },
    { name: 'Shafiq Hussain', img: Shafiq, info: 'Engineer Islamabad Area' },
    { name: 'Samiullah', img: Samiullah, info: 'Intern Lahore' },
];
const links = ["Quick Links", "Machines", "Aftersales Services", "Let's Talk Aesthetics", "About Us", "Client Gallery", "Blog"];

const AfterSales = () => {
    return (
        <Box sx={{ backgroundColor: '#727272', color: '#fff', py: 5 }}>
            <Container>
                <Typography variant="h3" sx={{ textAlign: 'center', mb: 5, color: '#c59d33' }}>
                    Machines
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', mb: 3 }}>
                    Roohan Traders has unbeatable aftersales services for aesthetic laser machines and beauty devices across Pakistan. With our offices in 6 different cities, and a dedicated team of more than 12 engineers, we make sure that our doctors don’t have to wait for too long to get their machines serviced/fixed in case of a problem.
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', mb: 3 }}>
                    At Roohan Traders we own up to our machines, making sure our resident engineers are there to guide our doctors on the machines if they need.
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center', mb: 5 }}>
                    Service of laser machines, repairing of laser machines, and maintenance of your Roohan Traders bought laser machines, all just a simple call away.
                </Typography>

                <Typography variant="h4" sx={{ textAlign: 'center', mb: 3, color: '#c59d33' }}>
                    Our After Sales Engineers
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {salespeople.map((person, index) => (
                        <Grid item key={index}>
                            <Box sx={{ textAlign: 'center', cursor: 'pointer' }}>
                                <Avatar
                                    alt={person.name}
                                    src={person.img}
                                    sx={{
                                        width: 120,
                                        height: 120,
                                        margin: '0 auto',
                                        border: '3px solid gold',
                                    }}
                                />

                                <Typography
                                    sx={{
                                        mt: 1,
                                        textTransform: 'none',
                                        fontWeight: 600,
                                        fontSize: '18px',
                                        background: 'linear-gradient(90deg, #ff512f, #dd2476)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        transition: 'all 0.3s ease-in-out',
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: 0,
                                            height: '2px',
                                            backgroundColor: '#dd2476',
                                            transition: 'width 0.3s ease',
                                        },
                                        '&:hover::after': {
                                            width: '100%',
                                        },
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                        },
                                    }}
                                >
                                    {person.name}
                                </Typography>

                                <Typography
                                    sx={{
                                        mt: 1, textTransform: 'none',
                                        fontWeight: 600,
                                        fontSize: '1rem', background: 'linear-gradient(90deg,rgb(255, 153, 0),rgb(13, 245, 5))',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        transition: 'all 0.3s ease-in-out',
                                        position: 'relative',
                                        '&::after': {
                                            content: '""', position: 'absolute',
                                            bottom: 0, left: 0, width: 0,
                                            height: '2px',
                                            backgroundColor: '#0072ff',
                                            transition: 'width 0.3s ease',
                                        },
                                        '&:hover::after': {
                                            width: '100%',
                                        },
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                        },
                                    }}
                                >
                                    {person.info}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

            </Container>

            {/* Footer */}
            <hr style={{ margin: '40px 0', borderColor: '#333' }} />
            <Container>
                <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" gap={4}>
                    <Box textAlign="center">
                        <img width={80} src={logo} alt="logo" style={{ borderRadius: '50%', cursor: 'pointer' }} />
                        <Box mt={2} display="flex" justifyContent="center" gap={2}>
                            <IconButton sx={{ color: '#3b5998' }}><FacebookIcon /></IconButton>
                            <IconButton sx={{ color: '#E1306C' }}><InstagramIcon /></IconButton>
                            <IconButton sx={{ color: '#0077B5' }}><LinkedInIcon /></IconButton>
                        </Box>
                        <Typography marginTop={3} sx={{ color: '#c59d33' }}>+92 333 4215964</Typography>
                        <Typography marginTop={2} sx={{ color: '#c59d33' }}>+92 321 8514176</Typography>
                    </Box>

                    <Box display="flex" flexDirection="column" gap={1}>
                        {links.map((label, index) => (
                            <Button key={index} sx={{ color: '#c59d33', fontSize: '17px', fontWeight: 'bold', textTransform: 'none', '&:hover': { color: '#c59d33' } }}>
                                {label}
                            </Button>
                        ))}
                    </Box>

                    <Box>
                        <Button variant="contained"
                            sx={{
                                background: 'linear-gradient(135deg,rgb(243, 14, 63),rgb(6, 30, 243))',
                                color: '#000',
                                textTransform: 'none',
                                borderRadius: '999px', py: 1, px: 5,
                                fontWeight: 'bold',
                                '&:hover': { backgroundColor: '#e4b946' }
                            }}
                            endIcon={<span style={{ fontWeight: 'bold' }}>↗</span>}>
                            Get in Touch
                        </Button>
                    </Box>
                </Box>
            </Container>

            <Typography variant="h6" align="center" mt={6} sx={{ color: '#c59d33', }}>
                © 2023 Roohan Traders. All rights reserved.
            </Typography>
        </Box>
    );
};

export default AfterSales;

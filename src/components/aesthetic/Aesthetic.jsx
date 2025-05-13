import { Box, Button, Container, Grid, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import DrRehana from '../assets/Dr-Rehana.jpg';
import DrAisha from '../assets/Dr-Arisha.jpg';
import logo from '../assets/logo.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Aesthetic = () => {

    const links = ["Quick Links", "Machines", "Aftersales Services", "Let's Talk Aesthetics", "About Us", "Client Gallery", "Blog"];

    return (
        <>
            <Box sx={{ backgroundColor: '#727272', color: '#fff', py: 5 }}>
                <Container>
                    <Typography variant="h3" sx={{ textAlign: 'center', mb: 5, color: '#c59d33' }}>
                        Let's Talk Aesthetics
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', mb: 3 }}>
                        In 2023, we launched Pakistan’s first community that is dedicated to bridging the gap between the field of dermatology/aesthetics and best business practices, growth of your skincare clinic and building a strong personal brand for yourself as a doctor! Let’s Talk Aesthetics is an online community of Tayyab Traders doctors that aims to uplift each other by knowledge sharing and by guiding their juniors to reach new heights in the world of dermatology and aesthetics.
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', mb: 3 }}>
                        We just hosted the first ever webinar of its kind with the uber talented Dr. Aisha Ghias where she taught doctors from across Pakistan on how to leverage Social Media to Build your Personal Brand as a Dermatologist. A truly insightful conversation loved and appreciated by doctors from across the country and beyond borders!
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', mb: 5 }}>
                        Stay tuned for more upcoming sessions to upskill yourself as a doctor, and to expand your business and knowledge skillset around the world of aesthetics and dermatology.
                    </Typography>

                    <Typography variant="h4" sx={{ textAlign: 'center', mb: 3, color: '#c59d33' }}>
                        Our After Sales Engineers
                    </Typography>
                </Container>
                <Box sx={{ py: 5, px: 2 }}>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <Paper
                                elevation={4}
                                sx={{
                                    p: 2,
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                                    }
                                }}
                            >
                                <Box sx={{ textAlign: 'center' }}>
                                    <img src={DrAisha} alt="Dr Aisha Ghias" width="100%" style={{ borderRadius: 10 }} />
                                    <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 500 }}>
                                        Episode 1: Leveraging Social Media to Build Your Brand as a Dermatologist with Dr. Aisha Ghias
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>

                        {/* Episode 2 */}
                        <Grid item xs={12} md={6}>
                            <Paper
                                elevation={4}
                                sx={{
                                    p: 2,
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                                    }
                                }}
                            >
                                <Box sx={{ textAlign: 'center' }}>
                                    <img src={DrRehana} alt="Dr Rehana Kausar Marwat" width="100%" style={{ borderRadius: 10 }} />
                                    <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 500 }}>
                                        Episode 2: Peel the Deal: Chemical Peels for Dark Circles and Pigmentation (LIVE DEMO) with Dr. Rehana Kausar Marwat
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
                <hr style={{ margin: '40px 0', borderColor: '#333' }} />

                {/* Footer */}
                <Container>
                    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" gap={4}>
                        <Box textAlign="center">
                            <img width={80} src={logo} alt="logo" style={{ borderRadius: '50%', cursor: 'pointer' }} />
                            <Box mt={2} display="flex" justifyContent="center" gap={2}>
                                {[<FacebookIcon sx={{ color: '#c59d33' }} />, <InstagramIcon sx={{ color: '#c59d33' }} />, <LinkedInIcon sx={{ color: '#c59d33' }} />].map((icon, i) => (
                                    <IconButton key={i} sx={{ color: '#f2f2f2', '&:hover': { color: '#c59d33' } }}>{icon}</IconButton>
                                ))}
                            </Box>
                            <Typography marginTop={3} sx={{ color: '#c59d33' }}>+92 333 4215964</Typography>
                            <Typography marginTop={2} sx={{ color: '#c59d33' }}>+92 321 8514176</Typography>
                        </Box>

                        <Box display="flex" flexDirection="column" gap={1}>
                            {links.map((label, index) => (
                                <Button key={index} sx={{ color: '#c59d33', fontSize: '16px', textTransform: 'none', '&:hover': { color: '#c59d33' } }}>
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

                <Typography variant="h6" align="center" mt={6} sx={{color: '#c59d33', }}>
                    © 2023 Roohan Traders. All rights reserved.
                </Typography>
            </Box >
        </>
    )
}

export default Aesthetic;
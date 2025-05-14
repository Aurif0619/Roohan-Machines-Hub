import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import React from 'react'
import logo from '../assets/logo.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Gallery = () => {
    const links = ["Quick Links", "Machines", "Aftersales Services", "Let's Talk Aesthetics", "About Us", "Client Gallery", "Blog"];
    return (
        <>
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
                            <Button key={index} sx={{ color: '#c59d33', textTransform: 'none', '&:hover': { color: '#c59d33' } }}>
                                {label}
                            </Button>
                        ))}
                    </Box>

                    <Box>
                        <Button variant="contained"
                            sx={{
                                background: 'linear-gradient(135deg,rgb(243, 14, 63),rgb(6, 30, 243))',
                                color: '#000',
                                textTransform: 'none', borderRadius: '999px', py: 1, px: 5,
                                fontWeight: 'bold',
                                '&:hover': { backgroundColor: '#e4b946' }
                            }}
                            endIcon={<span style={{ fontWeight: 'bold' }}>↗</span>}>
                            Get in Touch
                        </Button>
                    </Box>
                </Box>
            </Container>

            <Typography variant="h6" align="center" mt={6} sx={{ opacity: 0.7 }}>
                © 2023 Roohan Traders. All rights reserved.
            </Typography>
        </>
    )
}

export default Gallery;
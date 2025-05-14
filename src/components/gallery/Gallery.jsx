import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import React from 'react'
import logo from '../assets/logo.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Links } from 'react-router-dom';

const Gallery = () => {
    const links = ["Quick Links", "Machines", "Aftersales Services", "Let's Talk Aesthetics", "About Us", "Client Gallery", "Blog"];

    return (
        <>
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
                        {Links.map((label, index) => (
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
        </>
    )
}

export default Gallery;
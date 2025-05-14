import React, { useState } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, IconButton, Modal, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Roohan from '../assets/Muhammad Tayyab.png';
import Zarfisha from '../assets/Zarfishar Tayyab.png';
import logo from '../assets/logo.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = () => {
    const teamMembers = [
        {
            name: 'Muhammad Tayyab',
            role: 'OUR CEO', image: Roohan,
            shortDesc: 'For the last 10 years I have built Tayyab Traders because I felt...',
            fullMessage: `For the last 10 years I have built Tayyab Traders because I felt that the dermatology community in Pakistan was not up-to-date with the global community and I wanted to change that. ...`,
            position: 'Chief Executive Officer',
        },
        {
            name: 'Zarfishar Tayyab',
            role: 'OUR COO',
            image: Zarfisha,
            shortDesc: 'Some of you have met me in person but most of you know me through our announcements...',
            fullMessage: `Some of you have met me in person but most of you know me through the opening sentences of all our announcements. ...`,
            position: 'Chief Operating Officer',
        },
    ];

    const [open, setOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const handleOpen = (member) => {
        setSelectedMember(member);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedMember(null);
    };

    const links = [
        { label: 'Quick Links', path: '/' },
        { label: 'Machines', path: '/machines' },
        { label: 'Aftersales Services', path: '/aftersales' },
        { label: 'Let\'s Talk Aesthetics', path: '/aesthetic' },
        { label: 'About Us', path: '/about' },
        { label: 'Client Gallery', path: '/gallery' },
        { label: 'Blog', path: '/blog' }
    ];

    return (
        <Box sx={{ backgroundColor: '#727272', color: '#fff', py: 5 }}>
            <Typography variant="h3" sx={{ textAlign: 'center', mb: 5, color: '#c59d33' }}>
                GET TO KNOW US!
            </Typography>

            <Container>
                <Grid container spacing={4} justifyContent="center">
                    {teamMembers.map((member, idx) => (
                        <Grid item xs={12} md={6} key={idx}>
                            <Card
                                sx={{
                                    textAlign: 'center',
                                    boxShadow: 6,
                                    borderRadius: 3,
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                        boxShadow: 12,
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={member.image}
                                    alt={member.name}
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent>
                                    <Typography variant="h6" sx={{ color: '#c59d33', fontWeight: 'bold' }}>
                                        - {member.role} -
                                    </Typography>
                                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                                        {member.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {member.shortDesc}
                                    </Typography>
                                    <Button
                                        onClick={() => handleOpen(member)}
                                        variant="outlined"
                                        sx={{ mt: 2, color: '#c59d33', borderColor: '#c59d33' }}
                                    >
                                        Read More
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Modal */}
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        maxWidth: 600,
                        maxHeight: '90vh',
                        overflowY: 'auto',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        mx: 'auto',
                        my: 6,
                        borderRadius: 2,
                        outline: 'none',
                    }}
                >
                    {selectedMember && (
                        <>
                            <Typography
                                variant="h6"
                                sx={{ color: '#c59d33', fontWeight: 'bold', textAlign: 'center' }}
                            >
                                - {selectedMember.role} -
                            </Typography>
                            <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
                                {selectedMember.name}
                            </Typography>
                            <Typography variant="body1" textAlign="justify">
                                {selectedMember.fullMessage}
                            </Typography>
                            <Typography sx={{ color: '#c59d33', mt: 3, textAlign: 'right' }}>
                                {selectedMember.name} <br />
                                {selectedMember.position}
                            </Typography>
                            <Box textAlign="center" mt={3}>
                                <Button onClick={handleClose} variant="contained" sx={{ bgcolor: '#c59d33' }}>
                                    Close
                                </Button>
                            </Box>
                        </>
                    )}
                </Box>
            </Modal>

            <hr style={{ margin: '40px 0', borderColor: '#333' }} />

            {/* Footer */}
            <Container>
                <Box
                    display="flex"
                    flexDirection justifyContent="space-between"
                    alignItems="center"
                    gap={4}
                >
                    <Box textAlign="center">
                        <img
                            width={80} src={logo} alt="logo"
                            style={{ borderRadius: '50%', cursor: 'pointer' }}
                        />
                        <Box mt={2} display="flex" justifyContent="center" gap={2} sx={{ color: '#c59d33' }}>
                            {[<FacebookIcon />, <InstagramIcon />, <LinkedInIcon />].map((icon, i) => (
                                <IconButton
                                    key={i}
                                    sx={{ color: '#f2f2f2', '&:hover': { color: '#c59d33' } }} >
                                    {icon}
                                </IconButton>
                            ))}
                        </Box>
                        <Typography marginTop={3} sx={{ color: '#c59d33' }}>
                            +92 333 4215964
                        </Typography>
                        <Typography marginTop={2} sx={{ color: '#c59d33' }}>
                            +92 321 8514176
                        </Typography>
                    </Box>

                    <Box display="flex" flexDirection="column" gap={1}>
                        {links.map((link, index) => (
                            <Link to={link.path} key={index} style={{ textAlign: 'center', textDecoration: 'none' }}>
                                <Button
                                    sx={{
                                        color: '#c59d33', fontSize: '18px',
                                        fontWeight: 'bold', textTransform: 'none',
                                        '&:hover': { color: '#e4b946' },
                                    }} >
                                    {link.label}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box>
                        <Button
                            variant="contained"
                            sx={{
                                background: 'linear-gradient(135deg,rgb(243, 14, 63),rgb(6, 30, 243))',
                                color: '#fff', textTransform: 'none',
                                borderRadius: '999px',
                                py: 1, px: 5, fontWeight: 'bold',
                                '&:hover': { backgroundColor: '#e4b946' },
                            }}
                            endIcon={<span style={{ fontWeight: 'bold' }}>↗</span>}
                        >
                            Get in Touch
                        </Button>
                    </Box>
                </Box>
            </Container>

            <Typography variant="h6" align="center" mt={6} sx={{ color: '#c59d33' }}>
                © 2023 Roohan Traders. All rights reserved.
            </Typography>
        </Box>
    );
};

export default About;

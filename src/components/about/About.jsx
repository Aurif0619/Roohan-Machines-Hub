import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    IconButton,
    Modal,
    Typography
} from '@mui/material';
import React, { useState } from 'react';
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
            role: 'OUR CEO',
            image: Roohan,
            shortDesc: 'For the last 10 years I have built Tayyab Traders because I felt...',
            fullMessage: `For the last 10 years I have built Tayyab Traders because I felt that the dermatology community in Pakistan was not up-to-date with the global community and I wanted to change that. Getting access to high quality laser machines does not only mean that dermatologists in Pakistan are able to practice their craft, but also, and more importantly, their patients are satisfied with the results that they get.

Over the years, we have seen aesthetic dermatology from being nothing to growing and evolving into one of the fastest growing industries in Pakistan. Seeing its growth and seeing so many dermatologists across Pakistan whether it’s Laiyyah, or Azad Kashmir, or Quetta or Peshawar or our home: Lahore and our second home: Islamabad – I am so proud to see how far doctors have come, and it humbles me to know that Tayyab Traders has been their number 1, go-to brand of choice.

Now we stand at a crucial point in time – what do we want to do from here onwards? For me at Tayyab Traders the answer is really simple: continue to prioritize dermatologists and continue to put them first. This core value is at the heart of all company decisions I have made whether it is machines, or unbeatable after sales services, or free-of-cost consultation sessions that sometimes extend to several hours.

As I end my note, I want to extend a note of gratitude to every single doctor who has believed in us and chosen us to be their partner in advancing aesthetic dermatology. The level of trust, and the feedback both positive and negative is what drives us to constantly improve and evolve; so I want to say to each and every doctor that believes in us: thank you. Thank you so so much.

Lastly, as always Tayyab Traders will always keep its door open and will always be willing to listen to feedback. So if you have a query of any sort, don’t hesitate to reach out. You are, were, and will always remain our number 1 priority.`,
            position: 'Chief Executive Officer',
        },
        {
            name: 'Zarfishar Tayyab',
            role: 'OUR COO',
            image: Zarfisha,
            shortDesc: 'Some of you have met me in person but most of you know me through our announcements...',
            fullMessage: `Some of you have met me in person but most of you know me through the opening sentences of all our announcements. I’ve historically been working behind the scenes, but as I take on a more prominent role, I would just like to share some of the philosophy behind how we work.

At our core lies the doctor that will be using the machine – this means not just the devices you get, but how you get them, what happens after you get them, and how our relationship develops after you get your TT energy device is all done with a lot of intent and a doctor-centric approach.

Our teams across Pakistan work diligently to ensure we can bring the best aftersales to our doctors. Our engineers are always at top of their work striving hard to ensure safety, efficiency, and results for patients. Among this all, I am so proud to share that we are committed to innovate by conducting in-house research and development so that when you buy a machine from Tayyab Traders, you don‘t feel isolated, but rather you enter into a community of doctors, engineers, and students that love learning from one another, and are always on the lookout of new developments within the field of aesthetic dermatology.

To an era of continued research, growth and quality products with the best aftersales services as we embark on Tayyab Traders‘ journey committed to excellence for our clients across Pakistan, UAE, South Africa, and Afghanistan!`,
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
        "Quick Links",
        "Machines",
        "Aftersales Services",
        "Let's Talk Aesthetics",
        "About Us",
        "Client Gallery",
        "Blog"
    ];

    return (
        <>
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
                        flexDirection={{ xs: 'column', md: 'row' }}
                        justifyContent="space-between"
                        alignItems="center"
                        gap={4}
                    >
                        <Box textAlign="center">
                            <img
                                width={80}
                                src={logo}
                                alt="logo"
                                style={{ borderRadius: '50%', cursor: 'pointer' }}
                            />
                            <Box mt={2} display="flex" justifyContent="center" gap={2}>
                                {[<FacebookIcon />, <InstagramIcon />, <LinkedInIcon />].map((icon, i) => (
                                    <IconButton
                                        key={i}
                                        sx={{ color: '#f2f2f2', '&:hover': { color: '#c59d33' } }}
                                    >
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
                            {links.map((label, index) => (
                                <Button
                                    key={index}
                                    sx={{
                                        color: '#c59d33',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        textTransform: 'none',
                                        '&:hover': { color: '#e4b946' },
                                    }}
                                >
                                    {label}
                                </Button>
                            ))}
                        </Box>

                        <Box>
                            <Button
                                variant="contained"
                                sx={{
                                    background: 'linear-gradient(135deg,rgb(243, 14, 63),rgb(6, 30, 243))',
                                    color: '#fff',
                                    textTransform: 'none',
                                    borderRadius: '999px',
                                    py: 1,
                                    px: 5,
                                    fontWeight: 'bold',
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
        </>
    );
};

export default About;

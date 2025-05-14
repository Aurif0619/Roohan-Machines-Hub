import React from 'react'
import logo from '../assets/logo.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Avatar, Box, Button, Container, Grid, IconButton, Typography } from '@mui/material';
import img1 from '../assets/Img-1.jpg';
import img2 from '../assets/img-2.jpg';
import img3 from '../assets/img-3.jpg';
import img4 from '../assets/img-4.jpg';
import img5 from '../assets/img-5.jpg';
import img6 from '../assets/img-6.jpg';
import img7 from '../assets/img-7.jpg';
import img8 from '../assets/img-8.jpg';
import img9 from '../assets/img-9.jpg';
import img10 from '../assets/img-10.jpg';
import img11 from '../assets/img-11.jpg';
import img12 from '../assets/img-12.jpg';
import img13 from '../assets/img-13.jpg';
import img14 from '../assets/img-14.jpg';
import img15 from '../assets/img-15.jpg';
import img16 from '../assets/img-16.jpg';
import img17 from '../assets/img-17.jpg';
import img18 from '../assets/img-18.jpg';
import img19 from '../assets/img-19.jpg';
import img20 from '../assets/img-20.jpg';
import img21 from '../assets/img-21.jpg';
import img22 from '../assets/img-22.jpg';
import img23 from '../assets/img-23.jpg';
import img24 from '../assets/img-24.jpg';
import img25 from '../assets/img-25.jpg';
import img26 from '../assets/img-26.jpg';
import img27 from '../assets/img-27.jpg';
import img28 from '../assets/img-28.jpg';
import img29 from '../assets/img-29.jpg';
import img30 from '../assets/img-30.jpg';
import img31 from '../assets/img-31.jpg';
import img32 from '../assets/img-32.jpg';
import img33 from '../assets/img-33.jpg';
import img34 from '../assets/img-34.jpg';
import img35 from '../assets/img-35.jpg';
import img36 from '../assets/img-36.jpg';
import img37 from '../assets/img-37.jpg';
import img38 from '../assets/img-38.jpg';
import img39 from '../assets/img-39.jpg';
import img40 from '../assets/img-40.jpg';
import img41 from '../assets/img-41.jpg';
import img42 from '../assets/img-42.jpg';
import img43 from '../assets/img-43.jpg';
import img44 from '../assets/img-44.jpg';
import img45 from '../assets/img-45.jpg';
import img46 from '../assets/img-46.jpg';
import img47 from '../assets/img-47.jpg';
import img48 from '../assets/img-48.jpg';
import img49 from '../assets/img-49.jpg';
import img50 from '../assets/img-50.jpg';
import img51 from '../assets/img-51.jpg';
import img52 from '../assets/img-52.jpg';
import img53 from '../assets/img-53.jpg';
import img54 from '../assets/img-54.jpg';
import img55 from '../assets/img-55.jpg';
import img56 from '../assets/img-70.jpg';
import img57 from '../assets/img-71.jpg';
import img58 from '../assets/img-72.jpg';
import img59 from '../assets/img-73.jpg';
import img60 from '../assets/img-60.jpg';
import img61 from '../assets/img-74.jpg';
import img62 from '../assets/img-62.jpg';
import img63 from '../assets/img-63.jpg';
import img64 from '../assets/img-64.jpg';
import img65 from '../assets/img-65.jpg';
import img66 from '../assets/img-66.jpg';
import img67 from '../assets/img-67.jpg';
import img68 from '../assets/img-68.jpg';
import img69 from '../assets/img-69.jpg';
import img70 from '../assets/img-77.jpg';
import img71 from '../assets/img-78.jpg';
import img72 from '../assets/img-79.jpg';
import img73 from '../assets/img-80.jpg';
import img74 from '../assets/img-81.jpg';
import img75 from '../assets/img-82.jpg';
import img76 from '../assets/img-103.jpg';
import img77 from '../assets/img-84.jpg';
import img78 from '../assets/img-85.jpg';
import img79 from '../assets/img-86.jpg';
import img80 from '../assets/img-87.jpg';
import img81 from '../assets/img-88.jpg';
import img82 from '../assets/img-80.jpg';
import img83 from '../assets/img-89.jpg';
import img85 from '../assets/img-90.jpg';
import img86 from '../assets/img-91.jpg';
import img87 from '../assets/img-92.jpg';
import img88 from '../assets/img-101.jpg';
import img89 from '../assets/img-94.jpg';
import img90 from '../assets/img-95.jpg';
import img91 from '../assets/img-96.jpg';
import img92 from '../assets/img-97.jpg';
import img93 from '../assets/img-98.jpg';
import img94 from '../assets/img-102.jpg';
import img95 from '../assets/img-100.jpg';

const Gallery = () => {

    const clients = [
        { img: img1, }, { img: img2 }, { img: img3 }, { img: img4 }, { img: img5 }, { img: img6 },
        { img: img7, }, { img: img8 }, { img: img9 }, { img: img10 }, { img: img11 }, { img: img12 },
        { img: img13, }, { img: img14 }, { img: img15 }, { img: img16 }, { img: img17 }, { img: img18 },
        { img: img19, }, { img: img20 }, { img: img21 }, { img: img22 }, { img: img23 }, { img: img24 },
        { img: img25, }, { img: img26 }, { img: img27 }, { img: img28 }, { img: img29 }, { img: img30 },
        { img: img31, }, { img: img32 }, { img: img33 }, { img: img34 }, { img: img35 }, { img: img36 },
        { img: img37, }, { img: img38 }, { img: img39 }, { img: img40 }, { img: img41 }, { img: img42 },
        { img: img43, }, { img: img44 }, { img: img45 }, { img: img46 }, { img: img47 }, { img: img48 },
        { img: img49, }, { img: img50 }, { img: img51 }, { img: img52 }, { img: img53 }, { img: img54 },
        { img: img55, }, { img: img56 }, { img: img57 }, { img: img58 }, { img: img59 }, { img: img60 },
        { img: img61, }, { img: img62 }, { img: img63 }, { img: img64 }, { img: img65 }, { img: img65 },
        { img: img66, }, { img: img67 }, { img: img68 }, { img: img69 }, { img: img70 }, { img: img71 },
        { img: img72, }, { img: img73 }, { img: img74 }, { img: img75 }, { img: img76 }, { img: img77 },
        { img: img78, }, { img: img79 }, { img: img80 }, { img: img81 }, { img: img82 }, { img: img83 },
        { img: img88, }, { img: img85 }, { img: img86 }, { img: img87 }, { img: img89 }, { img: img90 },
        { img: img91, }, { img: img92 }, { img: img93 }, { img: img94 }, { img: img95 }
    ];

    const links = [
        { label: "Quick Links", path: '/' },
        { label: "Machines", path: '/machines' },
        { label: "Aftersales Services", path: '/aftersales' },
        { label: "Let's Talk Aesthetics", path: '/aesthetics' },
        { label: "About Us", path: '/about' },
        { label: "Client Gallery", path: '/gallery' },
        { label: "Blog", path: '/blog' }
    ];
    return (
        <>
            <Box sx={{ backgroundColor: '#000', color: '#fff', py: 5 }}>
                <Grid container spacing={4} justifyContent="center">
                    {clients.map((person, index) => (
                        <Grid item key={index}>
                            <Box sx={{ textAlign: 'center', cursor: 'pointer' }}>
                                <Avatar
                                    src={person.img}
                                    sx={{
                                        width: 210, height: 210,
                                        margin: '0 auto',
                                        border: '3px solid gold',
                                    }}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
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
                            {links.map((link, index) => (
                                <Button
                                    key={index}
                                    href={link.path}
                                    sx={{
                                        color: '#c59d33', fontSize: '17px', fontWeight: 'bold',
                                        textTransform: 'none',
                                        '&:hover': { color: '#c59d33' }
                                    }}>
                                    {link.label}
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
        </>
    )
}

export default Gallery
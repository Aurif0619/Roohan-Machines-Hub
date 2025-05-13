import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, Modal, Fade, Backdrop, Container, IconButton } from '@mui/material';
import LaserBarsImg from '../assets/laser-bars.png';
import NdYagImg from '../assets/Nd-Yag.png';
import Soprano from '../assets/soprano-shell.png';
import Soprano2 from '../assets/soprano.png';
import FractionalBar from '../assets/CO2.png';
import Poise from '../assets/hydrafacial-8.png';
import Levo from '../assets/untrasound.png';
import Untrasound from '../assets/untrasound-2.png';
import PICOSECOND from '../assets/picosecond.png';
import Microneedle from '../assets/Microneedle.png';
import Carve from '../assets/Carve.png';
import CarveEm from '../assets/carve Em.png';
import Centifigure from '../assets/Centrifuge.png';
import NDyag from '../assets/Nd-Yag.png';
import QSwitch from '../assets/tube.png';
import Intens from '../assets/Intense.png';
import CoolingUnit from '../assets/cooling-unit.png';
import Hydra from '../assets/hydrafacial.png';
import Portable from '../assets/portable.png';
import Hydra14 from '../assets/hydrafacial-14.png';
import Slim from '../assets/slim.png';
import Led from '../assets/10-led.png';
import DrPen from '../assets/dr-pen.png';
import Capsogen from '../assets/capsogen.png';
import Plasma from '../assets/plasma.png';
import IceRoller from '../assets/ice-roller.png';
import Microneedle2 from '../assets/microneedle-rf.png';
import Elcetrocautery from '../assets/electrocautery.png';
import logo from '../assets/logo.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Machines = () => {
    const [open, setOpen] = useState(false);
    const [selectedMachine, setSelectedMachine] = useState(null);

    const handleOpen = (machine) => {
        setSelectedMachine(machine);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedMachine(null);
    };

    const machineData = [
        {
            title: 'The King of Hair Reduction...',
            image: LaserBarsImg,
            description: 'A powerful Diode Laser system ideal for permanent hair reduction.'
        },
        {
            title: 'Diode Plus Q-switched Nd-YAG',
            image: NdYagImg,
            description: 'Dual-mode laser for pigmentation and hair removal treatments.'
        },
        {
            title: 'Advanced Laser Technology...',
            image: Soprano,
            description: 'Combines three wavelengths to target different depths of hair.'
        },
        {
            title: 'CO2 Fractional Laser...',
            image: FractionalBar,
            description: 'Ideal for skin resurfacing and acne scar treatment.'
        },
        {
            title: 'POISE+ 9-in-1 hydrafacial machine',
            image: Poise,
            description: 'Multifunctional hydrafacial machine with 9 treatment features.'
        },
        {
            title: 'LEVO 7D High Intensity Focused',
            image: Levo,
            description: 'High-intensity facial lifting and tightening technology.'
        },
        {
            title: 'LEVO 4D High Intensity Focused',
            image: Untrasound,
            description: 'Focused ultrasound for non-invasive skin lifting.'
        },
        {
            title: 'PICOSECOND LASER',
            image: PICOSECOND,
            description: 'Breaks down pigment into smaller particles for faster removal.'
        },
        {
            title: 'Microneedle RF (with/without vacuum)',
            image: Microneedle,
            description: 'Combines microneedling and RF for deeper collagen stimulation.'
        },
        {
            title: 'CARVE EM (simple and neo)',
            image: Carve,
            description: 'Body contouring device using EM muscle stimulation.'
        },
        {
            title: 'CARVE EM NEO',
            image: CarveEm,
            description: 'Next-gen EM sculpting machine for toning and fat reduction.'
        },
        {
            title: 'Centrifuge (Advance/Simple)',
            image: Centifigure,
            description: 'Used in PRP treatments for separating blood components.'
        },
        {
            title: 'ND-YAG Laser',
            image: NDyag,
            description: 'Effective in treating pigmentation and vascular lesions.'
        },
        {
            title: 'Q-Switched Nd-YAG (Vertical/Portable)',
            image: QSwitch,
            description: 'Compact Q-switched laser for tattoos and skin pigmentation.'
        },
        {
            title: 'Intense Pulse Light IPL',
            image: Intens,
            description: 'Broad spectrum light for skin rejuvenation and hair removal.'
        },
        {
            title: 'IPL + Q switched',
            image: Soprano,
            description: 'Combo system offering IPL and Q-switch laser in one.'
        },
        {
            title: 'Soprano Shell Diode Low Quality',
            image: Soprano2,
            description: 'Basic Diode model suitable for small clinics or startups.'
        },
        {
            title: 'Cooling Unit',
            image: CoolingUnit,
            description: 'Used to reduce skin temperature during laser treatment.'
        },
        {
            title: 'hydrafacial 8-in1 or 9-in 1',
            image: Hydra,
            description: 'Comprehensive hydrafacial platform with multiple heads.'
        },
        {
            title: 'portable 6-in-1 hydrafacial',
            image: Portable,
            description: 'Compact hydrafacial solution for mobile professionals.'
        },
        {
            title: 'hydrafacial 14-in-1',
            image: Hydra14,
            description: 'Advanced system offering 14 facial functions in one unit.'
        },
        {
            title: 'slim hydrafacial',
            image: Slim,
            description: 'Slim model with core features for hydration and cleansing.'
        },
        {
            title: '10 LED Magnifier Glass',
            image: Led,
            description: 'Bright magnification for detailed skin analysis.'
        },
        {
            title: 'Dr. Pen',
            image: DrPen,
            description: 'Professional microneedling pen for skin rejuvenation.'
        },
        {
            title: 'Capsogen Kit for Oxygeneo Facial',
            image: Capsogen,
            description: 'Used for oxygenating facials and skin brightening.'
        },
        {
            title: 'Plasma Pen',
            image: Plasma,
            description: 'For non-surgical skin tightening and wrinkle reduction.'
        },
        {
            title: 'Ice Roller',
            image: IceRoller,
            description: 'Cools skin and reduces puffiness after treatments.'
        },
        {
            title: 'Microneedle RF tips',
            image: Microneedle2,
            description: 'Replaceable tips for microneedling RF devices.'
        },
        {
            title: 'Electrocautery NEO Frecator-200',
            image: Elcetrocautery,
            description: 'Used for mole removal, skin tags, and minor surgery.'
        }
    ];

    const gradientColors = [
        'linear-gradient(135deg, #f30e3f, #061ef3)',
        'linear-gradient(135deg, #f39c12, #d35400)',
        'linear-gradient(135deg, #8e44ad, #3498db)',
        'linear-gradient(135deg, #16a085, #f4d03f)',
        'linear-gradient(135deg, #ff416c, #ff4b2b)',
        'linear-gradient(135deg, #6a11cb, #2575fc)'
    ];
    const links = ["Quick Links", "Machines", "Aftersales Services", "Let's Talk Aesthetics", "About Us", "Client Gallery", "Blog"];

    return (
        <Box sx={{ backgroundColor: '#000', color: '#fff', py: 5 }}>
            <Typography variant="h3" sx={{ textAlign: 'center', color: '#e4b946', mb: 5 }}>
                Machines
            </Typography>

            <Grid container spacing={4} justifyContent="center" px={2}>
                {machineData.map((machine, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                background: gradientColors[index % gradientColors.length],
                                color: '#fff',
                                borderRadius: 3,
                                transition: 'transform 0.3s',
                                '&:hover': { transform: 'scale(1.03)' }
                            }} >
                            <CardMedia
                                component="img"
                                height="280"
                                image={machine.image}
                                alt={machine.title}
                                sx={{ objectFit: 'contain', p: 2 }}
                            />
                            <CardContent>
                                <Typography variant="h6" sx={{ mb: 2 }}>
                                    {machine.title}
                                </Typography>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    onClick={() => handleOpen(machine)}
                                    sx={{
                                        backgroundColor: '#ffffff22',
                                        color: '#fff',
                                        mb: 1,
                                        '&:hover': {
                                            backgroundColor: '#ffffff44',
                                            color: '#e4b946'
                                        }
                                    }}
                                >
                                    + Description
                                </Button>
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        borderColor: '#fff',
                                        color: '#fff',
                                        '&:hover': {
                                            borderColor: '#e4b946',
                                            color: '#e4b946'
                                        }
                                    }}
                                >
                                    Get in Touch
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
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

            <Typography variant="h6" align="center" mt={6} sx={{ opacity: 0.7 }}>
                © 2023 Roohan Traders. All rights reserved.
            </Typography>
            <Modal open={open}
                onClose={handleClose} closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={{
                        position: 'absolute',
                        top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: '#111', color: '#fff',
                        p: 4,
                        borderRadius: 2, boxShadow: 24,
                        width: 350,
                    }}>
                        <Typography variant="h6" sx={{ color: '#e4b946', mb: 2 }}>
                            {selectedMachine?.title}
                        </Typography>
                        <Typography>
                            {selectedMachine?.description || "No description available."}
                        </Typography>
                        <Button
                            onClick={handleClose}
                            sx={{ mt: 3, color: '#e4b946', textDecoration: 'underline' }}
                        >
                            Close
                        </Button>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
};

export default Machines;

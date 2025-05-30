import { Box, Button, Container, Typography, Stack, IconButton } from '@mui/material';
import React from 'react';
import bestImage from '../assets/Best-Quality machines.jpg';
import Machine1 from '../assets/Tayyab-machine.png';
import AftersaleImg from '../assets/services-img.png';
import PodcastImg from '../assets/podcast-img.png';
import DrSadia from '../assets/Dr-SADIA.jpg';
import logo from '../assets/logo.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {
  const links = [
    { label: "Quick Links", path: '/' },
    { label: "Machines", path: '/machines' },
    { label: "Aftersales Services", path: '/aftersales' },
    { label: "Let's Talk Aesthetics", path: '/aesthetics' },
    { label: "About Us", path: '/about' },
    { label: "Client Gallery", path: '/gallery' },
    { label: "Blog", path: '/blog' }
  ];
  const buttons = [
    { label: "Machines", path: "/machines" },
    { label: "Aftersale Services", path: "/aftersales" },
    { label: "Let's Talk Aesthetic", path: "/aesthetic" }
  ];
  return (
    <>
      <Box sx={{  backgroundColor: '#1a1302', color: '#fff', py: 5 }}>
        <Container maxWidth="md">
          <Typography variant="h5" align="center" fontWeight="bold" marginTop={2}>
            Looking for an aesthetic laser machine or energy device for your skin clinic, aesthetic center, spa or salon? Just keep scrolling
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            mt={3} >
            {buttons.map((btn, idx) => (
              <Button
                key={idx}
                variant="contained"
                fullWidth
                href={btn.path}
                sx={{
                  py: 1.2, textTransform: 'none',
                  background: 'linear-gradient(135deg,rgb(243, 14, 63),rgb(6, 30, 243))',
                  color: '#000',
                  fontWeight: 'bold',
                  borderRadius: '99px',
                  '&:hover': {
                    backgroundColor: '#e4b946',
                  }
                }}
              >
                {btn.label}
              </Button>
            ))}
          </Stack>
          <Box component="img" src={bestImage} alt="Best Machine" sx={{ mt: 5, width: '100%', borderRadius: 2 }} />
          <Typography variant="h5" mt={4} align="center" fontWeight="bold">
            A Wide range of Medical & Aesthetic Machines
          </Typography>
        </Container>

        {[
          {
            title: "Machines",
            description: "With Roohan Traders train to use your machines in the most efficient way yielding great results! Learn, train, and grow with us!",
            image: Machine1,
            reverse: false,
          },
          {
            title: "Aftersales Service",
            description: "A hardworking team of engineers who will travel day and night to ensure your machines get maintained earliest",
            image: AftersaleImg,
            reverse: true,
          },
          {
            title: "Let's Talk Aesthetics",
            description: "An exclusive community of prestigious dermatologists plus webinars that are open to all!",
            image: PodcastImg,
            reverse: false,
          }
        ].map(({ title, description, image, reverse }, idx) => (
          <Box
            key={idx}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: reverse ? 'row-reverse' : 'row' },
              background: 'linear-gradient(135deg,rgb(243, 14, 63),rgb(6, 30, 243))',
              borderRadius: 4,
              overflow: 'hidden', mt: 6,
              mx: { xs: 2, md: 10 },
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
              transition: 'transform 0.6s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(0.9)',
              },
            }}
          >
            <Box flex={1} display="flex" alignItems="center" justifyContent="center" p={2}>
              <Box
                component="img" src={image}
                alt={title}
                sx={{
                  width: '100%',
                  borderRadius: 2, maxHeight: 300,
                  objectFit: 'cover',
                }} />
            </Box>
            <Box
              flex={1}
              p={{ xs: 3, md: 5 }}
              display="flex"
              flexDirection="column" justifyContent="center"
              sx={{
                color: '#333',
              }} >
              <Typography variant="h4"
                fontWeight="bold" mb={2} sx={{
                  fontFamily: 'Poppins, sans-serif',
                  color: '#000',
                }} >
                {title}
              </Typography>
              <Typography
                variant="body1"
                mb={3}
                sx={{ lineHeight: 1.7, fontSize: '1.05rem' }}
              >
                {description}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#000',
                  color: '#fff',
                  borderRadius: '30px',
                  width: 'fit-content', px: 4, py: 1.3,
                  fontWeight: 'bold',
                  letterSpacing: 0.5, boxShadow: '3px 3px 0px #c59d33',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#222',
                    boxShadow: '4px 4px 0px #e4b946',
                  },
                }} >
                Learn More
              </Button>
            </Box>
          </Box>
        ))}


        {/* Doctor Testimonial */}
        <Typography variant="h5" mt={6} align="center" fontWeight="bold" color="#c59d33" sx={{}}>
          WHAT ARE DOCTORS SAYING?
        </Typography>

        <Container>
          <Typography variant="h6" mt={3} align="center" fontWeight="bold">
            The most important thing when you buy a product is TRUST. I have a very strong trust on Roohan Traders...
          </Typography>

          <Box display="flex" alignItems="center" mt={4}>
            <Box>
              <img width={52} height={52} style={{ borderRadius: '50%' }} src={DrSadia} alt="Dr Sadia" />
            </Box>
            <Box ml={2}>
              <Typography color="#c59d33">Dr Sadia Bano Cheema</Typography>
              <Typography variant="body2">MBBS, MCPS Consultant dermatologist - Cheema Eye and Skin Clinic</Typography>
            </Box>
          </Box>

          <Box display="flex" justifyContent="space-around" alignItems="center" mt={4}>
            {[
              { label: "DOCTORS", value: "2000+" },
              { label: "CITIES", value: "60+" },
            ].map((stat, i) => (
              <Box key={i} textAlign="center">
                <Typography variant="h2" color="#c59d33">{stat.value}</Typography>
                <Typography variant="h5">{stat.label}</Typography>
              </Box>
            ))}
          </Box>
          <Typography variant="h4" align="center" mt={4} color="#c59d33">4 COUNTRIES</Typography>
          <Typography variant="h6" align="center" mt={1}>PAKISTAN | UAE | SOUTH AFRICA | AFGHANISTAN</Typography>
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
              {links.map((link, index) => (
                <Button
                  key={index}
                  href={link.path}
                  sx={{
                    color: '#c59d33',
                    fontSize: '17px', fontWeight: 'bold',
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
  );
};

export default Home;

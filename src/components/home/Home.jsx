import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import bestImage from '../assets/Best-Quality machines.jpg'
import Card from '@mui/material/Card';
import Machine1 from '../assets/Tayyab-machine.png';
import AftersaleImg from '../assets/services-img.png';
import PodcastImg from '../assets/podcast-img.png';

const Home = () => {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', py: 5 }}>
      <Container maxWidth="md">
        <Typography
          variant="h5"
          align="center"
          sx={{ fontWeight: 'bold' }}
        >
          Looking for an aesthetic laser machine or energy device for your skin clinic, aesthetic center, spa or salon? Just keep scrolling
        </Typography>

        <Box sx={{ flexDirection: { xs: 'column', sm: 'row' }, gap: '3', display: 'flex', justifyContent: 'center', alignItems: 'center', justifyContent: "space-between", marginTop: '30px', }}>
          <Button variant="contained" fullWidth
            sx={{
              textTransform: 'none',
              backgroundColor: '#c59d33',
              py: '1.5', fontWeight: 'bold',
              color: '#000', borderRadius: '99px',
            }}>Machines</Button>

          <Button variant="contained"
            fullWidth sx={{
              textTransform: 'none', textTransform: 'none',
              backgroundColor: '#c59d33',
              color: '#000', fontWeight: 'bold',
              borderRadius: '99px', textTransform: 'none',
              backgroundColor: '#c59d33',
              color: '#000',
              borderRadius: '99px'
            }}>Aftersale Services</Button>

          <Button variant="contained"
            fullWidth sx={{
              textTransform: 'none', textTransform: 'none', textTransform: 'none',
              backgroundColor: '#c59d33',
              color: '#000', fontWeight: 'bold',
              borderRadius: '99px', textTransform: 'none',
              backgroundColor: '#c59d33',
              color: '#000',
              borderRadius: '99px'
            }}>Let's Talk Aesthetic</Button>
        </Box>

        <img style={{
          marginTop: '20px', display: 'block',
          marginLeft: 'auto', marginRight: 'auto',
          maxWidth: '100%', height: 'auto'
        }}
          src={bestImage}
          alt="Img"
        />

        <Typography
          variant="h5" marginTop={3}
          align="center"
          sx={{ fontWeight: 'bold' }}
        >A Wide range of Medical & Aesthetic Machines</Typography>
      </Container >

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          backgroundColor: '#c59d33',
          borderRadius: '30px', overflow: 'hidden',
          mt: 5, mx: { xs: 2, md: 10 },
        }} >
        <Box
          sx={{
            flex: 1, display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
          }}
        >
          <img src={Machine1}
            alt="Machines"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '20px' }}
          />
        </Box>

        <Box sx={{
          flex: 1,
          p: { xs: 3, md: 5 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: '#000',
        }}
        >
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Machines
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            With Tayyab Traders train to use your machines in the most efficient way
            yielding great results! Learn, train, and grow with us!
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#000',
              color: '#c59d33', borderRadius: '30px',
              width: 'fit-content', px: 4,
              py: 1.5, fontWeight: 'bold',
              boxShadow: '3px 3px 0px #000',

            }} >
            Learn More
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          backgroundColor: '#c59d33',
          borderRadius: '30px', overflow: 'hidden',
          mt: 5, mx: { xs: 2, md: 10 },
        }} >

        <Box
          sx={{
            flex: 1,
            p: { xs: 3, md: 5 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: '#000',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Aftersales Service
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            A hardworking team of engineers who will travel day and night to ensure your machines get maintained earliest
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#000',
              color: '#c59d33', borderRadius: '30px',
              width: 'fit-content', px: 4,
              py: 1.5, fontWeight: 'bold',
              boxShadow: '3px 3px 0px #000',

            }}
          >
            Learn More
          </Button>
        </Box>
        <Box
          sx={{
            flex: 1, display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
          }}>
          <img src={AftersaleImg}
            alt="Machines"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '20px' }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          backgroundColor: '#c59d33',
          borderRadius: '30px', overflow: 'hidden',
          mt: 5, mx: { xs: 2, md: 10 },
        }} >
        <Box
          sx={{
            flex: 1, display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
          }}
        >
          <img src={PodcastImg}
            alt="podcastImg"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '20px' }}
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            p: { xs: 3, md: 5 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: '#000',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Let's Talk Aesthetics
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            An exclusive community of prestigious dermatologists plus webinars that are open to all!
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#000',
              color: '#c59d33', borderRadius: '30px',
              width: 'fit-content', px: 4,
              py: 1.5, fontWeight: 'bold',
              boxShadow: '3px 3px 0px #000',

            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
      <Typography
        variant="h5" marginTop={3}
        align="center"
        sx={{ fontWeight: 'bold', color: '#c59d33' }}>WHAT ARE DOCTORS SAYING?
        </Typography>
      <Typography variant="h6" marginTop={3}
        align="center"
        sx={{ fontWeight: 'bold'}}>The most important thing when you buy a product is TRUST. I have a very strong trust on Tayyab Traders and am certain that I will get the best Aftersales Services. This is the most important thing when you buy a machine. Secondly, the quality of machines is great! And even if there ever is maintainance required, the team is available around the clock and fulfil their commitment to service</Typography>
    </Box >
  );
};

export default Home;

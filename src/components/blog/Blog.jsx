import { Box, Card, CardContent, Container, Typography, Button, IconButton } from '@mui/material';
import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Blog = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const blogData = [
    {
      title: 'How to choose the best technology for laser hair reduction for Pakistani Skin?',
      fullText: `Let’s get this clear: there is a ton of misinformation out there! Which means choosing the best laser machine for hair removal can become challenging. Especially when you want to give your patients the best results for hair reduction. In this article, we will cover the types of laser hair reduction/removal machines and what they do.

This is the BEST kind of laser hair reduction you can get. The diode laser has 3 wavelengths that target hair follicle at various lengths: 755nm, 808nm, and 1064nm. This triple wavelength works to ensure that your hair is targeted and hair reduction is achieved after a number of sessions (depending on your skin type and hair type, this can range from 6 to 10). After these initial sessions you will go on maintenance sessions; i.e. a session will be required once every year or every 2 years.

With the machines at Tayyab Traders, you get 5 types of options in the diode laser: ranging from various price points to qualities. Feel free to reach out to us to learn more!

The Long Pulse Nd:YAG laser:

This machine essentially uses 1064nm laser to target the hair follicle. Often in Pakistan, one can treat hair with this without shaving off the hair. The treatment is often painful, slow, and repeat time is the same as the diode laser treatment. At Tayyab Traders you can get a long pulse Nd:YAG machine on its own or, get it built-in with our Latest PICO + Long Pulse unit!`,
      borderColor: '#4285F4',
    },
    {
      title: 'Things to Consider before launching your Aesthetic Skincare Clinic!',
      fullText: `Hi there! If you’re reading this, chances are, you’re probably a dermatologist looking to start your own aesthetic clinic. The aesthetic skincare market in Pakistan is a growing industry with new innovations entering each day, making it an attractive industry for both doctors and healthcare providers. Before you launch your clinic, it’s important to take into consideration some factors to help you make the best decision:

1. **The Scope:**  
   First, define the scope of your work. What skincare services will you be offering? Do you want to incorporate clinical aspects to your work or do you just want to focus on aesthetic dermatology?

2. **The Budget:**  
   After you have a clear idea of what you want to do, budget budget budget! What laser machines/energy devices/beauty machines do you need? What consumables do you need?

3. **The Equipment:**  
   The aesthetic machines you use will directly influence the quality of results your clients will get. Make sure the quality of those machines is top-notch.

💡 Note: Pakistani skin differs from Western skin. Most people in Pakistan have Fitzpatrick type 3 or 4 skin. Choose equipment accordingly.`,
      borderColor: '#EA4335',
    },
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
      <Box sx={{ backgroundColor: '#1a1302', color: '#fff', py: 5 }}>
        <Container
          sx={{
            mt: 4,
            background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
            p: 4, borderRadius: 3,
          }}
        >
          {blogData.map((blog, index) => (
            <Card
              key={index}
              sx={{
                background: '#1c1c1c',
                color: '#fff',
                borderRadius: '20px',
                mb: 4,
                border: `3px solid ${blog.borderColor}`,
                boxShadow: `0 0 20px ${blog.borderColor}`,
                transition: '0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.01)',
                  boxShadow: `0 0 25px ${blog.borderColor}`,
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {blog.title}
                </Typography>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                  {expandedIndex === index
                    ? blog.fullText
                    : `${blog.fullText.slice(0, 300)}...`}
                </Typography>
                <Box mt={2}>
                  <Button
                    onClick={() => handleToggle(index)}
                    sx={{
                      color: '#FFB300',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      '&:hover': {
                        color: '#fff',
                        backgroundColor: '#FFB300',
                      },
                    }}
                  >
                    {expandedIndex === index ? 'SHOW LESS' : 'READ MORE »'}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
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

export default Blog;
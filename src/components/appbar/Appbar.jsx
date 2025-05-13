import React from 'react';
import {
  AppBar, Box, CssBaseline, Divider, Drawer, IconButton,
  List, Button, Toolbar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.jpg';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const navItems = ['Machines', 'Aftersales Services', "Let's Talk Aesthetics", 'About Us', 'Client Gallery', 'Blog'];

const navPaths = {
  'Machines': '/machines',
  'Aftersales Services': '/aftersales',
  "Let's Talk Aesthetics": '/aesthetics',
  'About Us': '/about',
  'Client Gallery': '/gallery',
  'Blog': '/blog',
};

function Appbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavClick = (item) => {
    navigate(navPaths[item]);
    setMobileOpen(false);
  };

  const drawer = (
    <Box
      sx={{
        textAlign: 'center',
        height: '10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <Box>
        <Box sx={{ p: 2 }}>
          <img
            src={logo}
            width={45}
            alt="logo"
            style={{ borderRadius: '50%', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          />
        </Box>
        <Divider />
        <List>
          {navItems.map((item) => (
            <Button
              key={item}
              onClick={() => handleNavClick(item)}
              sx={{
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                background: 'linear-gradient(90deg, #ff512f, #dd2476)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                transition: 'all 0.3s ease-in-out',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: '2px',
                  backgroundColor: '#dd2476',
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
                '&:hover': {
                  transform: 'scale(1.05)',
                }
              }}
            >
              {item}
            </Button>
          ))}
        </List>
      </Box>
      <Box sx={{ p: 2 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            background: 'linear-gradient(135deg,rgb(243, 14, 63),rgb(6, 30, 243))',
            color: '#000',
            textTransform: 'none',
            borderRadius: '999px',
            py: 1.5,
            '&:hover': {
              backgroundColor: '#b58d2a',
            },
          }}
          endIcon={<span style={{ fontWeight: 'bold' }}>↗</span>}
        >
          Contact us
        </Button>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position="fixed" sx={{ backgroundColor: '#000', py: '8px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              width={45}
              alt="logo"
              style={{ borderRadius: '50%', cursor: 'pointer' }}
              onClick={() => navigate('/')}
            />
          </Box>

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexGrow: 1,
              justifyContent: 'center',
              gap: 3,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => handleNavClick(item)}
                sx={{
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  background: 'linear-gradient(90deg, #ff512f, #dd2476)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  transition: 'all 0.3s ease-in-out',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: '2px',
                    backgroundColor: '#dd2476',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                  '&:hover': {
                    transform: 'scale(1.05)',
                  }
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(135deg,rgb(243, 14, 63),rgb(6, 30, 243))',
                color: '#000',
                textTransform: 'none',
                borderRadius: '999px',
                px: 3,
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#b58d2a',
                },
              }}
              endIcon={<ArrowOutwardIcon />}
            >
              Contact us
            </Button>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ width: '100%' }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Appbar;

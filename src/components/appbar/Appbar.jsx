import React from 'react';
import {
  AppBar, Box, CssBaseline, Divider, Drawer, IconButton,
  List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.png';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const drawerWidth = 240;
const navItems = ['Machines', 'Aftersales Services', "Let's Talk Aesthetics", 'About Us', 'Client Gallery', 'Blog'];

function Appbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{
      textAlign: 'center',
      height: '10%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <Box>
        <Box sx={{ p: 2 }}>
          <img src={logo} width={45} alt="logo" style={{ borderRadius: '50%' }} />
        </Box>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} sx={{ textTransform: 'none' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ p: 2 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#c59d33',
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
            <img src={logo} width={45} alt="logo" style={{ borderRadius: '50%' }} />
          </Box>

          <Box sx={{
            display: { xs: 'none', sm: 'flex' },
            flexGrow: 1,
            justifyContent: 'center',
            gap: 3,
          }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff', textTransform: 'none', fontWeight: 'bold' }}>
                {item}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#c59d33',
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
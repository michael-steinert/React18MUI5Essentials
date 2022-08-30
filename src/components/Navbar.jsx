import { useState } from 'react';
import { Pets, Mail, Notifications } from '@mui/icons-material';
import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const SearchField = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  width: '40%',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
}));

const IconField = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  // Rule applies to small and bigger Devices (and not for extra small Devices)
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const AvatarField = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  // Rule applies to small and bigger Devices (and not for extra small Devices)
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          Navbar
        </Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
        <SearchField>
          <InputBase placeholder='Search' />
        </SearchField>
        <IconField>
          <Badge badgeContent={42} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={21} color='error'>
            <Notifications />
          </Badge>
          <Avatar
            onClick={(event) => setOpenMenu(true)}
            src='https://images.pexels.com/photos/1790446/pexels-photo-1790446.jpeg'
            sx={{ width: 42, height: 42 }}
          />
        </IconField>
        <AvatarField onClick={(event) => setOpenMenu(true)}>
          <Avatar
            src='https://images.pexels.com/photos/1790446/pexels-photo-1790446.jpeg'
            sx={{ width: 42, height: 42 }}
          />
          <Typography variant='span'>Bruno</Typography>
        </AvatarField>
      </StyledToolbar>
      <Menu
        id='positioned-menu'
        aria-labelledby='positioned-button'
        open={openMenu}
        onClose={(event) => setOpenMenu(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;

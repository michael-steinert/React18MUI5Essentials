import React from 'react';
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position='fixed' width={300}>
        <Typography variant='h6' fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt='Remy Sharp'
            src='https://images.pexels.com/photos/1790446/pexels-photo-1790446.jpeg'
          />
          <Avatar
            alt='Travis Howard'
            src='https://images.pexels.com/photos/1790446/pexels-photo-1790446.jpeg'
          />
          <Avatar
            alt='Cindy Baker'
            src='https://images.pexels.com/photos/1790446/pexels-photo-1790446.jpeg'
          />
          <Avatar
            alt='Agnes Walker'
            src='https://images.pexels.com/photos/1790446/pexels-photo-1790446.jpeg'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://images.pexels.com/photos/1790446/pexels-photo-1790446.jpeg'
          />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src='https://images.pexels.com/photos/1790446/pexels-photo-1790446.jpeg'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.pexels.com/photos/1790446/pexels-photo-1790446.jpeg'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.pexels.com/photos/1790446/pexels-photo-1790446.jpeg'
              alt=''
            />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt='Remy Sharp'
                src='https://images.pexels.com/photos/1790446/pexels-photo-1790446.jpeg'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Brunch this weekend?'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Ali Connors
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt='Travis Howard'
                src='https://images.pexels.com/photos/1790446/pexels-photo-1790446.jpeg'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Summer BBQ'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt='Cindy Baker'
                src='https://images.pexels.com/photos/1790446/pexels-photo-1790446.jpeg'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Oui Oui'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Sandra Adams
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;

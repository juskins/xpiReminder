// NotificationList.js
import React from 'react';
import './notifications.scss'; // Add CSS for styling

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const NotificationList = ({ isVisible, toggleVisibility }) => {
  return (
    <div className={`notification-list ${isVisible ? 'visible' : ''}`}>
     <p>Notifications</p>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Gino Tomato has Expired"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  <h3 style={{fontWeight:'700'}}>- Quantity: 20</h3>
                  <h3 style={{fontWeight:'700'}}>- Batch No: 120</h3>

                </Typography>
                <small style={{fontWeight:'500', color:'darkblue',float:'right'}}>2 mins ago</small>
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li"/>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Bournvita 5ml"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  <h3 style={{fontWeight:'700'}}>- Quantity: 5</h3>
                  <h3 style={{fontWeight:'700'}}>- Batch No: 020</h3>

                </Typography>
                <small style={{fontWeight:'500', color:'darkblue',float:'right'}}>20 mins ago</small>
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Golden Penny noodles"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  <h3 style={{fontWeight:'700'}}>- Quantity: 200</h3>
                  <h3 style={{fontWeight:'700'}}>- Batch No: 90</h3>

                </Typography>
                <small style={{fontWeight:'500', color:'darkblue',float:'right'}}>1 hr ago</small>
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Munch it"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  <h3 style={{fontWeight:'700'}}>- Quantity: 50</h3>
                  <h3 style={{fontWeight:'700'}}>- Batch No: 1120</h3>

                </Typography>
                <small style={{fontWeight:'500', color:'darkblue',float:'right'}}>2 hrs ago</small>
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                   <h3 style={{fontWeight:'700'}}>- Quantity: 20</h3>
                  <h3 style={{fontWeight:'700'}}>- Batch No: 120</h3>

                </Typography>
                <small style={{fontWeight:'500', color:'darkblue',float:'right'}}>2 mins ago</small>
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  <h3 style={{fontWeight:'700'}}>- Quantity: 20</h3>
                  <h3 style={{fontWeight:'700'}}>- Batch No: 120</h3>

                </Typography>
                <small style={{fontWeight:'500', color:'darkblue',float:'right'}}>2 mins ago</small>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </div>
  );
};

export default NotificationList;

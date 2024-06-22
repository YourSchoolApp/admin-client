import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

const options = [
  { label: 'Home', path: '/' },
  { label: 'Section 1', path: '/section1' },
  { label: 'Section 2', path: '/section2' },
  { label: 'Section 3', path: '/section3' },
  { label: 'Register Student', path: '/register-student' },
];

export default function LongMenu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const list = (
    <List>
      {options.map((option) => (
        <ListItem button key={option.label} component={Link} to={option.path} onClick={toggleDrawer(false)}>
          <ListItemText primary={option.label} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <div className="menu-container">
      <IconButton
        aria-label="menu"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          style: {
            width: '300px',
            backgroundColor: 'white',
            color: 'black',
          },
        }}
      >
        {list}
      </Drawer>
    </div>
  );
}

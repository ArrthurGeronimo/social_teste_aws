import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CachedIcon from '@material-ui/icons/Cached';
import ClearIcon from '@material-ui/icons/Clear';
import PortraitIcon from '@material-ui/icons/Portrait';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton
            aria-label="account of current user"
                aria-controls="customized-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
            >
            <AccountCircle />
        </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <PortraitIcon />
          </ListItemIcon>
          <ListItemText primary="Perfil" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <CachedIcon />
          </ListItemIcon>
          <ListItemText primary="Alternar Conta" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <ClearIcon />
          </ListItemIcon>
          <ListItemText primary="Sair" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCommunities, selectCommunities } from './communitiesSlice';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './communities.css'


const ITEM_HEIGHT = 48;

export default function CommunitiesSmall() {
const dispatch = useDispatch();
  const communities = useSelector(selectCommunities);

  useEffect(() => {
      dispatch(loadCommunities()); 
  }, [dispatch]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  

  return (
    <div className='communities-small-container'>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon 
        fontSize='large'
        sx={{
            color: 'rgb(213, 213, 213)',
            '&:hover': {
                color: 'gray'
            }
        }}/>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
            backgroundColor: ' #303030'
          },
        }}
      > 
      <h3 className='communities-header'>Top Communities</h3>
        {communities.length > 0 && communities.map((sub) => {
                return (
                <MenuItem key={sub.name} className='communities-list-item'>
                    <Link to={`r/${sub.display_name}`} className='communities-list-link'>
                        {`r/${sub.display_name}`}
                    </Link>
                </MenuItem>
                )
               })}
      </Menu>
    </div>
  );
}
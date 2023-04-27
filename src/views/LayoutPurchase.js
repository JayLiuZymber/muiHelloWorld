import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import { green, red } from '@mui/material/colors';
import Box from '@mui/material/Box';
// Floating Action Button
import BarAddIcon from "@mui/icons-material/AddBusiness";
import BarViewIcon from "@mui/icons-material/Store";
import BarDeleteIcon from '@mui/icons-material/Delete';

import BoxSupplier from './BoxSupplier';
import BoxAddSupplier from "./BoxAddSupplier";

// -----------------------------------------------------------------------------

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

const fabRedStyle = {
  color: 'common.white',
  bgcolor: red[500],
  '&:hover': {
    bgcolor: red[600],
  },
};

const fabGreenStyle = {
  color: 'common.white',
  bgcolor: green[500],
  '&:hover': {
    bgcolor: green[600],
  },
};

export default function LayoutPurchase() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: 'primary',
      sx: { ...fabStyle, ...fabRedStyle },
      icon: <DeleteIcon />,
      label: 'Delete',
    },
    {
      color: 'secondary',
      sx: { ...fabStyle, ...fabGreenStyle },
      icon: <AddIcon />,
      label: 'Add',
    }
  ];

  return (
    <Box
      sx={{
        // bgcolor: 'background.paper',
        bgcolor: '#cfe8fc',
        width: 'sm',
        position: 'relative',
        minHeight: 250,
      }}
    >
      <AppBar position="static" sx={{bgcolor: "#a6d6fd"}} >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="View" {...a11yProps(0)} icon={<BarViewIcon />} />
          <Tab label="Add" {...a11yProps(1)} icon={<BarAddIcon />}/>
        </Tabs>
      </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <BoxSupplier></BoxSupplier>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <BoxAddSupplier></BoxAddSupplier>
        </TabPanel>
      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
          }}
          unmountOnExit
        >
          <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
            {fab.icon}
          </Fab>
        </Zoom>
      ))}
    </Box>
  );
}
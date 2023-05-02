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
import BarAddIcon from "@mui/icons-material/PersonAddAlt";
import BarViewIcon from "@mui/icons-material/Person";
import BarDeleteIcon from '@mui/icons-material/PersonOff';

import BoxProduct from './BoxProduct';
import BoxAddProduct from './BoxAddProduct';

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

export default function LayoutProduct() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <Tab label="All" {...a11yProps(2)} icon={<BarAddIcon />}/>
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <BoxProduct />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <BoxAddProduct></BoxAddProduct>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        {/* <BoxAddCustomer></BoxAddCustomer> */}
      </TabPanel>
    </Box>
  );
}
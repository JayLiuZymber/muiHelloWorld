import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PurchaseIcon from '@mui/icons-material/Storefront';
import SalesIcon from '@mui/icons-material/Groups';
import InventoryIcon from '@mui/icons-material/Inventory';
// npm install @mui/icons-material

import LayoutPurchase from "../views/LayoutPurchase";
import LayoutSales from "../views/LayoutSales";
import LayoutInventory from '../views/LayoutInventory';
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

export default function BottomPSI() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "sm" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction {...a11yProps(0)} label="Purchase" icon={<PurchaseIcon />} />
        <BottomNavigationAction {...a11yProps(1)} label="Sales" icon={<SalesIcon />} />
        <BottomNavigationAction {...a11yProps(2)} label="Inventory" icon={<InventoryIcon />} />
      </BottomNavigation>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <LayoutPurchase></LayoutPurchase>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <LayoutSales></LayoutSales>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <LayoutInventory></LayoutInventory>
      </TabPanel>
    </Box>
  );
}
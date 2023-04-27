import logo from "./logo.svg";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// npm install @mui/icons-material
import BottomPSI from "./components/BottomPSI";
import BottomInventory from "./components/BottomInventory";
import BottomSales from "./components/BottomSales";
import BottomPurchase from "./components/BottomPurchase";

import TabsPSI from './components/TabsPSI';
import ButtonsPurchase from "./components/ButtonsPurchase";
import ButtonsSales from "./components/ButtonsSales";
import ButtonsInventory from "./components/ButtonsInventory";
import TabsPurchase from "./components/TabsPurchase";
import FloatingActionButtonZoom from "./components/FloatingActionButtonZoom";

import LayoutPurchase from "./views/LayoutPurchase";
import LayoutSales from "./views/LayoutSales";

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          {/* <TabsPSI></TabsPSI> */}
          <BottomPSI></BottomPSI>
          {/* <TabsPurchase></TabsPurchase> */}
          {/* <ButtonsPurchase></ButtonsPurchase> */}
          {/* <ButtonsSales></ButtonsSales> */}
          {/* <ButtonsInventory></ButtonsInventory> */}
          <LayoutPurchase></LayoutPurchase>
          {/* <LayoutSales></LayoutSales> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <BottomPurchase></BottomPurchase> */}
          {/* <BottomSales></BottomSales> */}
          {/* <BottomInventory></BottomInventory> */}
        </Box>
      </Container>
    </div>
  );
}
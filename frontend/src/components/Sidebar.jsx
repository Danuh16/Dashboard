// import React from 'react';
// import{
//     Box,
//     CssBaseline,
//     Toolbar,
//     Divider,
//     MuiDrawer,
//     MuiAppBar,
//     IconButton,
//     List,
//     ListItem,
//     ListItemIcon,
//     ListItemButton,
//     ListItemText,
//     Typography,
//     useTheme
// } from "@mui/material";
// import{
//     SettingsOutlined,
//     MenuIcon,
//     ChevronLeft,
//     ChevronRightOutlined,
//     HomeOutlined,
//     ShoppingCartOutlined,
//     Groups2Outlined,
//     ReceiptLongOutlined,
//     PublicOutlined,
//     PointOfSaleOutlined,
//     TodayOutlined,
//     CalendarMonthOutlined,
//     AdminPanelSettingsOutlined,
//     TrendingUpOutlined,
//     PieChartOutlined
// } from "@mui/icons-material";
// import { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import FlexBetween from './FlexBetween';
// import profileImage from "../assets/hulu.jpg";
// import { styled, useTheme } from '@mui/material/styles';


// const navItems = [
//     {
//         text: "Dashboard",
//         icon: <HomeOutlined/>
//     },
//     {
//         text: "Client Facing",
//         icon: null,
//     },
//     {
//         text: "Products",
//         icon: <ShoppingCartOutlined/>
//     },
//     {
//         text: "Customers",
//         icon: <Groups2Outlined/>
//     },
//     {
//         text: "Transactions",
//         icon: <ReceiptLongOutlined/>
//     },
//     {
//         text: "Geography",
//         icon: <PublicOutlined/>
//     },
//     {
//         text: "Sales",
//         icon: null
//     },
//     {
//         text: "Overview",
//         icon: <PointOfSaleOutlined/>
//     },
//     {
//         text: "Daily",
//         icon: <TodayOutlined/>
//     },
//     {
//         text: "Monthly",
//         icon: <PointOfSaleOutlined/>
//     },
//     {
//         text: "Breakdown",
//         icon: <PieChartOutlined/>
//     },
//     {
//         text: "Management",
//         icon: null
//     },
//     {
//         text: "Admin",
//         icon: <AdminPanelSettingsOutlined/>
//     },
//     {
//         text: "Performance",
//         icon: <TrendingUpOutlined/>
//     },
// ]


// const Sidebar = ({
//     drawerWidth,
//     isSidebarOpen,
//     setIsSidebarOpen,
//     isNonMobile,
// }) => {
//     const { pathname } = useLocation();
//     const [active, setActive] = useState("");
//     const navigate = useNavigate();
//     const theme = useTheme();

//     useEffect(() => {
//         setActive(pathname.substring(1));
//     }, [pathname])
  
//   return (
//     <Box component="nav">
//        {isSidebarOpen && (
//         <Drawer
       
//         variant="permanent"
//           open={isSidebarOpen}
//           onClose={() => setIsSidebarOpen(false)}
         
//           anchor="left"
//           sx={{
//             width: drawerWidth,
//             "& .MuiDrawer-paper": {
//               color: theme.palette.secondary[200],
//               backgroundColor: theme.palette.background.alt,
//               boxSizing: "border-box",
//               borderWidth: isNonMobile ? 0 : "2px",
//               width: drawerWidth,
//             },
//           }}
//             >
//                 <Box width="100%">
//                  <Box m="1.5rem 2rem 2rem 3rem">
//                    <FlexBetween color={theme.palette.secondary.main}>
//                        <Box display="flex" alignItems="center" gap="0.5rem">
//                         <Typography variant="h4" fontWeight="bold">
//                             HULU MOBILE
//                         </Typography>
//                        </Box>
//                        {!isNonMobile && (
//                         <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
//                             <ChevronLeft/>
//                         </IconButton>
//                        )}
//                    </FlexBetween>
//                  </Box>
//                  <List>
//                  {navItems.map(({ text, icon }, index) => {
//                       if (!icon) {
//                              return (
//                                 <Typography key={index} sx={{ m: '2.25rem 0 1rem 3rem' }}>
//                                     {text}
//                                 </Typography>
//                             );
//                         }
//                         const lcText = text.toLowerCase();

//                         return(
//                             <ListItem key={text} disablePadding>
//                                 <ListItemButton 
//                                      onClick={() => { 
//                                         navigate(`/${lcText}`);
//                                         setActive(lcText);
//                                     }}
//                                     sx={{
//                                         backgroundColor:  active === lcText ? theme.palette.secondary[300] : "transparent",
//                                         color: active === lcText ? theme.palette.primary[600] : theme.palette.secondary[100],
//                                     }}
//                                 >
//                                     <ListItemIcon
//                                       sx={{
//                                         ml: "2rem",
//                                         color: active === lcText ? theme.palette.primary[600] : theme.palette.secondary[200],
//                                       }}
//                                     >
//                                       {icon}
//                                     </ListItemIcon>
//                                     <ListItemText primary = {text}/>
//                                     {active === lcText &&(
//                                         <ChevronRightOutlined sx={{ml: "autos"}}/>
//                                     )}
//                                 </ListItemButton>
//                             </ListItem>
//                         )
//                     })}
//                  </List>
//                 </Box>
//             </Drawer>
//         )}
//     </Box>
//   )
// };

// export default Sidebar




import React, { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  CssBaseline,
  Toolbar,
  Divider,
  Drawer,
  AppBar,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  InputBase,
} from '@mui/material';
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  HomeOutlined,
  ShoppingCartOutlined,
  GroupsOutlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMode } from '../state';
import Dashboard from '../scenes/dashboard';

const navItems = [
  {
    text: 'Dashboard',
    icon: <HomeOutlined />,
  },
  {
    text: 'Client Facing',
    icon: null,
  },
  // ... (rest of your nav items)
];

const FlexBetween = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Sidebar = ({ drawerWidth, isNonMobile}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);
 
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  }
 


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <FlexBetween>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <FlexBetween
              backgroundColor={theme.palette.background.alt}
              borderRadius="9px"
              gap="3rem"
              p="0.1rem 1.5rem"
            >
              <InputBase placeholder="Search..." />
              <IconButton>
                <Search />
              </IconButton>
            </FlexBetween>
          </FlexBetween>
          <FlexBetween gap="1.5rem">
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === 'dark' ? (
                <DarkModeOutlined sx={{ fontSize: '25px' }} />
              ) : (
                <LightModeOutlined sx={{ fontSize: '25px' }} />
              )}
            </IconButton>
            <IconButton>
              <SettingsOutlined sx={{ fontSize: '25px' }} />
            </IconButton>
          </FlexBetween>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        onClose={handleDrawerClose}
        anchor="left"
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            color: theme.palette.secondary[200],
            backgroundColor: theme.palette.background.alt,
            boxSizing: 'border-box',
            borderWidth: isNonMobile ? 0 : '2px',
            borderColor: theme.palette.secondary[200],
            borderStyle: 'solid',
          },
        }}
      >
        <Toolbar>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          {navItems.map((item, index) => (
            <ListItemButton
              key={index}
              onClick={() => navigate(`/${item.text.toLowerCase()}`)}
              selected={active === item.text.toLowerCase()}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          {active ? `You are on the ${active} page` : 'Home page'}
        </Typography>
        {active === 'dashboard' && <Dashboard />}
      </Box>
    </Box>
  );
};

export default Sidebar;
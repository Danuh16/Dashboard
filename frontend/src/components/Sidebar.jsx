// import React, { useState, useEffect } from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import {
//   Box,
//   CssBaseline,
//   Toolbar,
//   Divider,
//   Drawer,
//   IconButton,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Typography,
//   InputBase,
// } from "@mui/material";
// import MuiAppBar from "@mui/material/AppBar";
// import {
//   LightModeOutlined,
//   DarkModeOutlined,
//   Menu as MenuIcon,
//   Search,
//   SettingsOutlined,
//   ChevronLeft as ChevronLeftIcon,
//   ChevronRight as ChevronRightIcon,
//   HomeOutlined,
//   ShoppingCartOutlined,
//   Groups2Outlined,
//   ReceiptLongOutlined,
//   PublicOutlined,
//   PointOfSaleOutlined,
//   TodayOutlined,
//   CalendarMonthOutlined,
//   AdminPanelSettingsOutlined,
//   TrendingUpOutlined,
//   PieChartOutlined,
// } from "@mui/icons-material";
// import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setMode } from "../state";
// import FlexBetween from "./FlexBetween";
// import Dashboard from "../scenes/dashboard";




// const navItems = [
//   {
//     text: "Dashboard",
//     icon: <HomeOutlined />,
//     path: "dashboard",
//   },
//   {
//     text: "Client Facing",
//     icon: null,
//   },
//   {
//     text: "Products",
//     icon: <ShoppingCartOutlined />,
//   },
//   {
//     text: "Customers",
//     icon: <Groups2Outlined />,
//   },
//   {
//     text: "Transactions",
//     icon: <ReceiptLongOutlined />,
//   },
//   {
//     text: "Geography",
//     icon: <PublicOutlined />,
//   },
//   {
//     text: "Sales",
//     icon: null,
//   },
//   {
//     text: "Overview",
//     icon: <PointOfSaleOutlined />,
//   },
//   {
//     text: "Daily",
//     icon: <TodayOutlined />,
//   },
//   {
//     text: "Monthly",
//     icon: <PointOfSaleOutlined />,
//   },
//   {
//     text: "Breakdown",
//     icon: <PieChartOutlined />,
//   },
//   {
//     text: "Management",
//     icon: null,
//   },
//   {
//     text: "Admin",
//     icon: <AdminPanelSettingsOutlined />,
//   },
//   {
//     text: "Performance",
//     icon: <TrendingUpOutlined />,
//   },
// ];



// const drawerWidth = 240;

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   })
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-end",
// }));

// const Sidebar = () => {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);
//   const [active, setActive] = useState("");
//   const navigate = useNavigate();
//   const { pathname } = useLocation();
//   const dispatch = useDispatch();
//   const [isFocused, setIsFocused] = useState(false);
//   const isDarkMode = theme.palette.mode === 'dark';
  

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   useEffect(() => {
//     setActive(pathname.substring(1));
//   }, [pathname]);

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open} sx={{ backgroundColor: isDarkMode ? "#052d2f" : "#0a5a5e" }} >
//         <Toolbar>
//           <FlexBetween>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               onClick={handleDrawerOpen}
//               edge="start"
//               sx={{
//                 marginRight: 5,
//                 ...(open && { display: "none" }),
//               }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <FlexBetween
//               backgroundColor={theme.palette.background.alt}
//               borderRadius="15px"
//               border={isFocused ? "2px solid white" : ""}
//               gap="3rem"
//               p="0.1rem 2rem"
//               color={theme.palette.secondary.main}
//               onFocus={() => setIsFocused(true)}
//               onBlur={() => setIsFocused(false)}
//             >
//               <InputBase placeholder="Search..." />
//               <IconButton>
//                 <Search />
//               </IconButton>
//             </FlexBetween>
//           </FlexBetween>
//           <FlexBetween gap="1.5rem">
//             <IconButton onClick={() => dispatch(setMode())}>
//               {theme.palette.mode === "dark" ? (
//                 <DarkModeOutlined sx={{ fontSize: "25px" }}  />
//               ) : (
//                 <LightModeOutlined sx={{ fontSize: "25px", color: "#FFFFFF" }} />
//               )}
//             </IconButton>
//             <IconButton>
//               <SettingsOutlined sx={{ fontSize: "25px", color: theme.palette.mode === "dark" ? "#FFFFFF" : "#FFFFFF" }} />
//             </IconButton>
//           </FlexBetween>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             boxSizing: "border-box",
//             color: theme.palette.secondary[200],
//             backgroundColor: theme.palette.background.alt,
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <DrawerHeader>
//           <FlexBetween color={theme.palette.secondary.main}>
//             <Box display="flex" alignItems="center" gap="0.5rem">
//               <Typography variant="h4" fontWeight="bold">
//                 HULU MOBILE
//               </Typography>
//             </Box>
//           </FlexBetween>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === "ltr" ? (
//               <ChevronLeftIcon />
//             ) : (
//               <ChevronRightIcon />
//             )}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {navItems.map(({ text, icon }, index) => {
//             if (!icon) {
//               return (
//                 <Typography key={index} sx={{ m: "2.25rem 0 1rem 3rem" }}>
//                   {text}
//                 </Typography>
//               );
//             }
//             const lcText = text.toLowerCase();

//             return (
//               <ListItem key={text} disablePadding>
//                 <ListItemButton
//                   onClick={() => {
//                     navigate(`/${lcText}`);
//                     setActive(lcText);
//                   }}
//                   sx={{
//                     backgroundColor:
//                       active === lcText
//                         ? theme.palette.secondary[300]
//                         : "transparent",
//                     color:
//                       active === lcText
//                         ? theme.palette.primary[600]
//                         : theme.palette.secondary[100],
//                   }}
//                 >
//                   <ListItemIcon
//                     sx={{
//                       ml: "2rem",
//                       color:
//                         active === lcText
//                           ? theme.palette.primary[600]
//                           : theme.palette.secondary[200],
//                     }}
//                   >
//                     {icon}
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                   {active === lcText && (
//                     <ChevronRightIcon sx={{ ml: "autos" }} />
//                   )}
//                 </ListItemButton>
//               </ListItem>
//             );
//           })}
//         </List>
//       </Drawer>
//       <Main open={open}>
//         <DrawerHeader />
//         <Outlet />
//       </Main>
//     </Box>
//   );
// };

// export default Sidebar;
import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import profileImage from "../assets/hulu.jpg";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Client Facing",
    icon: null,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Customers",
    icon: <Groups2Outlined />,
  },
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Geography",
    icon: <PublicOutlined />,
  },
  {
    text: "Sales",
    icon: null,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
];

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="50px"
                width="50px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
                  <Typography variant="h4" fontWeight="bold">
                    HULU DASHBOARD
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          <Box position="absolute" bottom="2rem">
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;

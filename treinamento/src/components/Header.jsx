import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tabs,
  Tab,
  Avatar,
  Stack,
  Container,
  IconButton,
  Tooltip,
} from "@mui/material";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DashboardIcon from "@mui/icons-material/DashboardOutlined";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import BuildIcon from "@mui/icons-material/Build";

const Header = ({ tabValue, onTabChange, mode, toggleTheme }) => {
  const handleTabChange = (_, newValue) => {
    onTabChange(newValue);
  };

  const tabs = [
    { label: "Dashboard", icon: <DashboardIcon /> },
    { label: "Vendas", icon: <ShoppingCartIcon /> },
    { label: "Produtos", icon: <InventoryIcon /> },
    { label: "Serviços", icon: <BuildIcon /> },
    { label: "Clientes", icon: <PeopleIcon /> },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "background.header",
        color: "text.primary",
        borderBottom: "1px solid",
        borderColor: "divider",
        backdropFilter: "blur(10px)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: 82,
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              component="img"
              src="vite.svg"
              alt="Logo"
              sx={{
                width: 42,
                height: 42,
                objectFit: "contain",
                display: "block",
              }}
            />

            <Box>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.1,
                  fontWeight: 500,
                }}
              >
                Efeito Visual
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                Sistema de Controle de Estoque
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Tooltip
              title={
                mode === "dark"
                  ? "Trocar para modo claro"
                  : "Trocar para modo escuro"
              }
            >
              <IconButton
                onClick={toggleTheme}
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: "background.paper",
                  transition: "0.2s",
                  "&:hover": {
                    bgcolor: "action.hover",
                    transform: "scale(1.03)",
                  },
                }}
              >
                {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>

            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{
                pl: 1,
                pr: 1.5,
                py: 0.8,
                borderRadius: 999,
                bgcolor: "action.hover",
              }}
            >
              <Avatar sx={{ width: 36, height: 36, bgcolor: "primary.main" }}>
                GG
              </Avatar>

              <Box>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Guilherme
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  Admin
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Toolbar>

        <Box sx={{ pb: 1 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              "& .MuiTabs-indicator": {
                height: 3,
                borderRadius: 999,
              },
            }}
          >
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                icon={tab.icon}
                iconPosition="start"
                label={tab.label}
                sx={{
                  minHeight: 52,
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: 2,
                  mr: 1,
                  color: "text.secondary",
                  transition: "0.2s",
                  "&.Mui-selected": {
                    color: "primary.main",
                    bgcolor: "action.hover",
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
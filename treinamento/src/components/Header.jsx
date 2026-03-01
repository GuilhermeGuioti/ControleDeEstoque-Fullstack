import React from 'react'; // Removido o useState daqui, pois vem via props
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tabs,
  Tab,
  Avatar,
  Stack,
  Container
} from '@mui/material';

// Ícones
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import InventoryIcon from '@mui/icons-material/Inventory2Outlined';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

// Recebendo as props do App.js
const Header = ({ tabValue, onTabChange }) => {

  const handleTabChange = (event, newValue) => {
    onTabChange(newValue); // Notifica o App.js sobre a mudança
  };

  return (
    <AppBar position="static" color="inherit" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0', bgcolor: '#fff' }}>
      <Container maxWidth="xl">
        {/* Linha Superior: Logo e Perfil */}
        <Toolbar sx={{ justifyContent: 'space-between', pt: 2, pb: 1, px: '0 !important' }}>
          <Box>
            <Typography variant="h6" component="h1" sx={{ fontWeight: 600, color: '#001e3c', lineHeight: 1.2 }}>
              Stock Control System
            </Typography>
            <Typography variant="body2" sx={{ color: '#666' }}>
              Manage your inventory efficiently
            </Typography>
          </Box>

          <Stack direction="row" spacing={2} alignItems="center">
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, lineHeight: 1 }}>
                John Doe
              </Typography>
              <Typography variant="caption" sx={{ color: '#888' }}>
                Admin
              </Typography>
            </Box>
            <Avatar sx={{ bgcolor: '#0061ff', width: 40, height: 40, fontSize: '0.9rem' }}>
              JD
            </Avatar>
          </Stack>
        </Toolbar>

        {/* Linha Inferior: Navegação (Tabs) */}
        <Box sx={{ mt: 1 }}>
          <Tabs
            value={tabValue} // Usa o valor que vem do App.js
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                minWidth: 0,
                marginRight: 4,
                fontWeight: 500,
                fontSize: '0.95rem',
                color: '#555',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 1,
                px: 0,
                pb: 1.5,
              },
              '& .Mui-selected': {
                color: '#1976d2 !important',
              },
              '& .MuiTabs-indicator': {
                height: 3,
                borderRadius: '3px 3px 0 0',
              },
            }}
          >
            <Tab icon={<DashboardIcon fontSize="small" />} iconPosition="start" label="Dashboard" />
            <Tab icon={<InventoryIcon fontSize="small" />} iconPosition="start" label="Products" />
            <Tab icon={<SwapHorizIcon fontSize="small" />} iconPosition="start" label="Clients" />
            <Tab icon={<WarningAmberIcon fontSize="small" />} iconPosition="start" label="Stock Alerts" />
            <Tab icon={<QueryStatsIcon fontSize="small" />} iconPosition="start" label="Generic" />
          </Tabs>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
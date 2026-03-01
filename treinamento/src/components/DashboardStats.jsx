import React from 'react';
import { Box, Paper, Typography, Stack, Grid } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory2Outlined';
import ShowChartIcon from '@mui/icons-material/ShowChartOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoneyOutlined';
import WarningIcon from '@mui/icons-material/WarningAmberOutlined';

const StatCard = ({ title, value, icon, color }) => (
  <Paper 
    elevation={0} 
    sx={{ 
      p: 3, 
      border: '1px solid #f0f0f0', 
      borderRadius: 4, 
      height: '100%',
      bgcolor: '#fff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
      display: 'flex',
      alignItems: 'center', // Centraliza verticalmente
      justifyContent: 'center' // Centraliza horizontalmente
    }}
  >
    <Stack direction="row" spacing={3} alignItems="center" sx={{ width: '100%', justifyContent: 'space-around' }}>
      <Box>
        <Typography variant="body2" sx={{ color: '#888', fontWeight: 600, mb: 0.5 }}>
          {title}
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#1a1a1a' }}>
          {value}
        </Typography>
      </Box>
      <Box 
        sx={{ 
          bgcolor: `${color}15`, // Fundo suave (transparência)
          color: color, 
          p: 1.5, 
          borderRadius: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `0 8px 16px ${color}20` // Sombra na cor do ícone
        }}
      >
        {React.cloneElement(icon, { sx: { fontSize: 28 } })} {/* Tamanho equilibrado */}
      </Box>
    </Stack>
  </Paper>
);

const DashboardStats = () => (
  <Grid container spacing={3} sx={{ mb: 4 }}>
    <Grid item xs={12} sm={6} md={3}>
      <StatCard title="Total Products" value="6" icon={<InventoryIcon />} color="#0061ff" />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <StatCard title="Stock Units" value="680" icon={<ShowChartIcon />} color="#2e7d32" />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <StatCard title="Inventory Value" value="$90k" icon={<AttachMoneyIcon />} color="#9c27b0" />
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
      <StatCard title="Low Stock" value="0" icon={<WarningIcon />} color="#d32f2f" />
    </Grid>
  </Grid>
);

export default DashboardStats;
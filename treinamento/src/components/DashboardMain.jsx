import React from 'react';
import { Box, Paper, Typography, Grid, List, ListItem, ListItemText, ListItemAvatar, Avatar, LinearProgress, Stack } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const DashboardMain = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={7}>
      <Paper elevation={0} sx={{ p: 4, border: '1px solid #f0f0f0', borderRadius: 4, height: '100%' }}>
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 800 }}>Recent Transactions</Typography>
        <List disablePadding>
          {[
            { name: 'Office Chair', date: '2025-11-17', qty: -10, price: '$1.200', type: 'out' },
            { name: 'Desk Lamp', date: '2025-11-16', qty: 100, price: '$2.000', type: 'in' },
            { name: 'Wireless Mouse', date: '2025-11-15', qty: -25, price: '$625', type: 'out' },
          ].map((item, idx) => (
            <ListItem key={idx} sx={{ py: 1.5, borderBottom: '1px solid #f9f9f9', px: 0 }}>
              <ListItemAvatar>
                <Avatar sx={{ 
                  bgcolor: item.type === 'in' ? '#e8f5e9' : '#ffebee', 
                  color: item.type === 'in' ? '#2e7d32' : '#d32f2f',
                  width: 40, height: 40, borderRadius: 2
                }}>
                  {item.type === 'in' ? <TrendingUpIcon fontSize="small" /> : <TrendingDownIcon fontSize="small" />}
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
                primary={item.name} 
                secondary={item.date} 
                primaryTypographyProps={{ fontWeight: 700, fontSize: '0.9rem' }}
                secondaryTypographyProps={{ fontSize: '0.75rem' }}
              />
              <Box sx={{ textAlign: 'right' }}>
                <Typography variant="body2" sx={{ fontWeight: 800, color: item.type === 'in' ? '#2e7d32' : '#d32f2f' }}>
                  {item.qty > 0 ? `+${item.qty}` : item.qty}
                </Typography>
                <Typography variant="caption" color="text.secondary">{item.price}</Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Grid>

    <Grid item xs={12} md={5}>
      <Paper elevation={0} sx={{ p: 4, border: '1px solid #f0f0f0', borderRadius: 4, height: '100%' }}>
        <Typography variant="h6" sx={{ mb: 4, fontWeight: 800 }}>Inventory Overview</Typography>
        {[
          { label: 'Electronics', count: 3, value: 75, color: '#0061ff' },
          { label: 'Furniture', count: 2, value: 50, color: '#2e7d32' },
          { label: 'Consumables', count: 1, value: 25, color: '#ff9800' },
        ].map((cat, idx) => (
          <Box key={idx} sx={{ mb: 4 }}>
            <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>{cat.label}</Typography>
              <Typography variant="caption" color="text.secondary">{cat.count} products</Typography>
            </Stack>
            <LinearProgress 
              variant="determinate" 
              value={cat.value} 
              sx={{ 
                height: 8, borderRadius: 5, bgcolor: '#f5f5f5',
                '& .MuiLinearProgress-bar': { borderRadius: 5, bgcolor: cat.color } 
              }} 
            />
          </Box>
        ))}
      </Paper>
    </Grid>
  </Grid>
);

export default DashboardMain;
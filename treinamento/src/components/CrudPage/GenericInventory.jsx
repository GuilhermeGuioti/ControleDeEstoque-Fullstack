import React from 'react';
import { Box, Typography, Button, TextField, InputAdornment, Stack, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

const GenericInventory = ({ title, subtitle, buttonLabel, onAddClick, searchPlaceholder, onSearchChange, searchValue }) => {
  return(
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 800, color: '#001e3c' }}>{title}</Typography>
          <Typography variant="body2" sx={{ color: '#666' }}>{subtitle}</Typography>
        </Box>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          onClick={onAddClick}
          sx={{ bgcolor: '#0061ff', borderRadius: 2, px: 3, fontWeight: 700, textTransform: 'none' }}
        >
          {buttonLabel}
        </Button>
      </Stack>

      <Paper elevation={0} sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 3 }}>
        <TextField
          placeholder={searchPlaceholder}
          value={searchValue}
          size="small"
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon sx={{ color: '#999' }} /></InputAdornment>,
          }}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
          onChange={onSearchChange}
        />
      </Paper>
    </Box>
  )
};

export default GenericInventory;
import React, { useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Box, Typography, IconButton, TextField, Button, Stack, MenuItem
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const FieldLabel = ({ children }) => (
  <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, mb: 0.5, color: 'text.primary', display: 'block' }}>
    {children}
  </Typography>
);

const GenericModal = ({ open, handleClose, title, fields, initialData, onSave, onUpdate }) => {
  const [formData, setFormData] = useState(initialData || {});

  const handleChange = (id, value, type) => {
    const finalValue = type === 'number' && value !== '' ? Number(value) : value;
    setFormData(prev => ({ ...prev, [id]: finalValue }));
  };
  
  const isEditing = Boolean(initialData && (initialData.id || initialData._id));

  const handleSubmit = () => {
    if (isEditing) {
      console.log(formData)
      onUpdate(formData.id, formData)
    } else {
      onSave(formData);
    }
    handleClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      disableRestoreFocus
      PaperProps={{ 
        sx: { borderRadius: 3, padding: 1 } 
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.2rem', color: 'primary.superDark' }}>
          {title}
        </Typography>
        <IconButton onClick={handleClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 2, pb: 4 }}>
        <Stack spacing={2}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {fields.map((field) => (
              <Box 
                key={field.id} 
                sx={{ 
                  width: field.halfWidth ? { xs: '100%', sm: 'calc(50% - 8px)' } : '100%',
                }}
              >
                <FieldLabel>{field.label}</FieldLabel>
                <TextField
                  fullWidth
                  size="small"
                  select={field.type === 'select'}
                  type={field.type === 'number' ? 'decimal' : 'text'}
                  placeholder={field.placeholder}
                  multiline={field.multiline}
                  rows={field.rows || 1}
                  value={formData[field.id] || ''}
                  onChange={(e) => handleChange(field.id, e.target.value, field.type)}
                  sx={{ 
                    '& .MuiOutlinedInput-root': { 
                      borderRadius: '10px',
                      bgcolor: 'background.default'
                    } 
                  }}
                >
                  {field.type === 'select' && field.options?.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            ))}
          </Box>
        </Stack>
      </DialogContent>

      <DialogActions sx={{ p: 3, pt: 0, gap: 1.5 }}>
        <Button 
          fullWidth 
          variant="text" 
          onClick={handleClose}
          sx={{ 
            textTransform: 'none', 
            borderRadius: 2, 
            fontWeight: 700,
            bgcolor: '#c13a25ff',
            color: 'primary.contrastText', 
            py: 1,
            '&:hover': { bgcolor: '#ab2b17ff' }
          }}
        >
          Descartar
        </Button>
        <Button 
          fullWidth 
          variant="contained" 
          onClick={handleSubmit}
          disableElevation
          sx={{ 
            textTransform: 'none', 
            borderRadius: 2, 
            fontWeight: 700, 
            bgcolor: 'primary.main',
            color: '#fff', 
            py: 1,
            '&:hover': { bgcolor: 'primary.dark' }
          }}
        >
          {initialData ? "Salvar Alterações" : "Criar Registro"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GenericModal;
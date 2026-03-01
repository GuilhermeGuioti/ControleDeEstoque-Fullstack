import React from 'react';
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, 
  TableRow, Paper, IconButton, Stack, CircularProgress, Typography, TablePagination 
} from '@mui/material';
import EditIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutline';

const DataTable = ({ 
  columns = [], 
  data = [], 
  loading = false,
  onEdit, 
  onDelete,
  emptyMessage = "Nenhum registro encontrado."
}) => {

  return (
    <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #e0e0e0', borderRadius: 3, mt: 3, position: 'relative' }}>
      <Table>
        <TableHead sx={{ bgcolor: '#fcfcfc' }}>
          <TableRow>
            {columns.map((col) => (
              <TableCell 
                key={col.id} 
                align={col.align || 'left'}
                sx={{ color: '#888', fontWeight: 800, fontSize: '0.65rem', letterSpacing: '1px', textTransform: 'uppercase' }}
              >
                {col.label}
              </TableCell>
            ))}
            {(onEdit || onDelete) && (
              <TableCell sx={{ color: '#888', fontWeight: 800, fontSize: '0.65rem', textAlign: 'center' }}>AÇÕES</TableCell>
            )}
          </TableRow>
        </TableHead>
        
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={columns.length + 1} sx={{ py: 10, textAlign: 'center' }}>
                <CircularProgress size={24} sx={{ color: '#0061ff' }} />
              </TableCell>
            </TableRow>
          ) : data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length + 1} sx={{ py: 10, textAlign: 'center' }}>
                <Typography variant="body2" color="textSecondary">{emptyMessage}</Typography>
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, index) => (
              <TableRow key={row.id || index} sx={{ '&:hover': { bgcolor: '#f9f9f9' }, transition: '0.2s' }}>
                {columns.map((col) => (
                  <TableCell key={col.id} align={col.align || 'left'} sx={{ fontSize: '0.85rem', color: '#333' }}>
                    {col.render ? col.render(row[col.id], row) : row[col.id]}
                  </TableCell>
                ))}
                
                {(onEdit || onDelete) && (
                  <TableCell>
                    <Stack direction="row" spacing={1} justifyContent="center">
                      {onEdit && (
                        <IconButton size="small" sx={{ color: '#0061ff', '&:hover': { bgcolor: '#eef4ff' } }} onClick={() => onEdit(row)}>
                          <EditIcon fontSize="small" />
                        </IconButton>
                      )}
                      {onDelete && (
                        <IconButton size="small" sx={{ color: '#d32f2f', '&:hover': { bgcolor: '#fff5f5' } }} onClick={() => onDelete(row.id)}>
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      )}
                    </Stack>
                  </TableCell>
                )}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
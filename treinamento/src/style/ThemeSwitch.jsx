import React from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb': {
        backgroundColor: '#212121', // Cor da bolinha no modo Light (direita)
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#e0e0e0', // Fundo cinza claro
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#fff', // Cor da bolinha no modo Dark (esquerda)
    width: 32,
    height: 32,
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#212121', // Fundo preto
    borderRadius: 20,
    position: 'relative',
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    // Ícone do Sol (aparece quando o fundo está claro)
    '&:before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent('#212121')}" d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2l0,2c0,0.55,0.45,1,1,1s1-0.45,1-1l0-2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20l0,2c0,0.55,0.45,1,1,1s1-0.45,1-1l0-2c0-0.55-0.45-1-1-1S11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/></svg>')`,
      left: 10,
    },
    // Ícone da Lua (aparece quando o fundo está escuro)
    '&:after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent('#fff')}" d="M12.1,2.9c4.5,0.5,8.1,4.1,8.6,8.6c0.5,3.9-1.6,7.5-4.8,9.4c-0.4,0.2-0.8-0.1-0.8-0.6c0.1-0.5,0.2-1.1,0.2-1.6c0-4.4-3.6-8-8-8c-0.5,0-1.1,0.1-1.6,0.2c-0.5,0.1-0.8-0.3-0.6-0.8C7,6.5,10.6,4.4,14.5,4.9c0.3,0,0.6-0.1,0.6-0.4c0-0.3-0.1-0.6-0.4-0.6C13.8,3.7,13,3.3,12.1,2.9z"/></svg>')`,
      right: 10,
    },
  },
}));

export default function ThemeSwitch({ checked, onChange }) {
  return <StyledSwitch checked={checked} onChange={onChange} />;
}
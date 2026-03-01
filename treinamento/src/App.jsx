import React, { useState, useEffect } from 'react';
import { Container, Box, Chip } from '@mui/material';

import Header from "./components/Header";
import DashboardStats from "./components/DashboardStats";
import DashboardMain from './components/DashboardMain';
import GenericPageCrud from "./components/CrudPage/GenericCrudPage"
import useCrud  from './hooks/useCrud';

import serviceConfig from "./configs/serviceConfig"

function App() {
  const [currentTab, setCurrentTab] = useState(0);

  const services = useCrud('/servicos');

  useEffect(() => {
    if (currentTab === 1) services.fetchData();
  }, [currentTab]);

  return (
    <Box sx={{ bgcolor: '#fcfcfc', minHeight: '100vh' }}>
      <Header tabValue={currentTab} onTabChange={setCurrentTab} />
      
      <Container maxWidth={false} sx={{ mt: 4, pb: 4, px: { xs: 2, md: 5 } }}>
        
        {/* Aba 0: Dashboard */}
        {currentTab === 0 && (
          <Box>
            <DashboardStats />
            <DashboardMain />
          </Box>
        )}
        
        {/* Aba 4: Servicos genericos */}
        {currentTab === 1 && ( // Supondo que aba 1 seja Serviços
          <GenericPageCrud 
            title="Serviços"
            subtitle="Controla todos os serviços disponibiliados"
            buttonLabel="Adicionar Serviço"
            searchPlaceholder="Buscar serviço"
            columns={serviceConfig.columns}
            formFields={serviceConfig.fields}
            data={services.data}
            onSave={services.handleSave}
            onDelete={services.handleDelete}
            onUpdate={services.handleEdit}
          />
        )}
      </Container>
    </Box>
  );
}

export default App;
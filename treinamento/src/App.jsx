import React, { useState, useEffect, useMemo } from "react";
import { Container, Box, Typography, Paper } from "@mui/material";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import DashboardHome from "./components/DashboardHome";
import GenericPageCrud from "./components/CrudPage/GenericCrudPage";
import useCrud from "./hooks/useCrud";
import getAppTheme from "./style/theme";
import serviceConfig from "./configs/serviceConfig";

function PlaceholderPage({ title, description }) {
  return (
    <Paper
      elevation={0}
      sx={{
        mt: 3,
        p: 4,
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight={700}>
        {title}
      </Typography>

      <Typography
        variant="body1"
        sx={{ mt: 1.5, color: "text.secondary", maxWidth: 600, mx: "auto" }}
      >
        {description}
      </Typography>
    </Paper>
  );
}

function App() {
  const [currentTab, setCurrentTab] = useState(0);
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("themeMode") || "light";
  });

  const theme = useMemo(() => getAppTheme(mode), [mode]);
  const services = useCrud("/servicos");

  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", newMode);
      return newMode;
    });
  };

  useEffect(() => {
    if (currentTab === 3 && services.fetchData) {
      services.fetchData();
    }
  }, [currentTab]);

  const renderContent = () => {
    switch (currentTab) {
      case 0:
        return <DashboardHome />;

      case 1:
        return (
          <PlaceholderPage
            title="Vendas"
            description="Esta área será usada para registrar vendas, acompanhar pedidos e visualizar o histórico de movimentações."
          />
        );

      case 2:
        return (
          <PlaceholderPage
            title="Produtos"
            description="Aqui você poderá cadastrar, editar e acompanhar os produtos do estoque."
          />
        );

      case 3:
        return (
          <GenericPageCrud
            title="Serviços"
            subtitle="Gerencie os serviços cadastrados"
            buttonLabel="Novo serviço"
            searchPlaceholder="Buscar serviço..."
            columns={serviceConfig.columns}
            formFields={serviceConfig.fields}
            data={services.data || []}
            loading={services.loading}
            onSave={(formData, selectedItem) => {
              if (selectedItem && services.handleEdit) {
                services.handleEdit(selectedItem.id, formData);
              } else if (services.handleSave) {
                services.handleSave(formData);
              }
            }}
            onDelete={services.handleDelete}
            onUpdate={services.handleEdit}
          />
        );

      case 4:
        return (
          <PlaceholderPage
            title="Clientes"
            description="Nesta área você poderá cadastrar clientes, consultar dados e acompanhar relacionamentos comerciais."
          />
        );

      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header
        tabValue={currentTab}
        onTabChange={setCurrentTab}
        mode={mode}
        toggleTheme={toggleTheme}
      />

      <Container maxWidth="xl">
        <Box sx={{ py: 3 }}>{renderContent()}</Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
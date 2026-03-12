import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Stack,
} from "@mui/material";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";

const stats = [
  {
    title: "Produtos em estoque",
    value: "128",
    icon: <Inventory2OutlinedIcon fontSize="large" />,
  },
  {
    title: "Clientes cadastrados",
    value: "54",
    icon: <PeopleAltOutlinedIcon fontSize="large" />,
  },
  {
    title: "Serviços ativos",
    value: "16",
    icon: <BuildCircleOutlinedIcon fontSize="large" />,
  },
  {
    title: "Vendas do mês",
    value: "37",
    icon: <PointOfSaleOutlinedIcon fontSize="large" />,
  },
];

const DashboardCard = ({ title, value, icon }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        height: "100%",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {title}
          </Typography>

          <Typography variant="h4" sx={{ mt: 1, fontWeight: 700 }}>
            {value}
          </Typography>
        </Box>

        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: 3,
            bgcolor: "action.hover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </Box>
      </Stack>
    </Paper>
  );
};

const DashboardHome = () => {
  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight={700}>
          Dashboard
        </Typography>

        <Typography variant="body1" sx={{ mt: 1, color: "text.secondary" }}>
          Visão geral do sistema de controle de estoque.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {stats.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.title}>
            <DashboardCard
              title={item.title}
              value={item.value}
              icon={item.icon}
            />
          </Grid>
        ))}
      </Grid>

      <Paper
        elevation={0}
        sx={{
          mt: 3,
          p: 3,
          borderRadius: 4,
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h6" fontWeight={700}>
          Teste DashBoard
        </Typography>

        <Typography variant="body1" sx={{ mt: 1.5, color: "text.secondary" }}>
          Teste
        </Typography>
      </Paper>
    </Box>
  );
};

export default DashboardHome;
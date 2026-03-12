const serviceConfig = {
   columns: [
      { id: 'id', label: 'ID' },
      { id: 'nome_servico', label: 'SERVIÇO' },
      { id: 'preco', label: 'PREÇO' },
      { id: 'duracao', label: 'DURAÇÃO (MIN)' },
   ],
   fields: [
      { 
      id: 'nome_servico', 
      label: 'Nome do Serviço', 
      type: 'text', 
      placeholder: 'Ex: Corte Americano', 
      halfWidth: false 
      },
      { 
      id: 'preco', 
      label: 'Preço (R$)', 
      type: 'number', 
      placeholder: '0.00', 
      halfWidth: true 
      },
      { 
      id: 'duracao', 
      label: 'Duração (Minutos)', 
      type: 'number', 
      placeholder: 'Ex: 30', 
      halfWidth: true 
      }
   ]
};

export default serviceConfig;

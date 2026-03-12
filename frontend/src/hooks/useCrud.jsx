import { useState, useCallback } from 'react';
import api from '../services/api';

const useCrud = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get(endpoint);
      setData(response.data);
    } catch (error) {
      console.error(`Erro ao buscar ${endpoint}:`, error);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  // Salvar (POST)
  const handleSave = async (payload) => {
    try {
      await api.post(endpoint, payload);
      await fetchData(); 
    } catch (error) {
      console.error("Erro ao salvar:", error);
    }
  };

  // Salvar (POST)
  const handleEdit = async (id, payload) => {
    try {
      await api.put(`${endpoint}/${id}`, payload);
      await fetchData(); 
    } catch (error) {
      console.error("Erro ao salvar:", error);
    }
  };

  // Deletar (DELETE)
  const handleDelete = async (id) => {
    try {
      await api.delete(`${endpoint}/${id}`);
      await fetchData();
    } catch (error) {
      console.error("Erro ao deletar:", error);
    }
  };

  return { data, loading, fetchData, handleSave, handleDelete, handleEdit };
};

export default useCrud
import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import GenericInventory from "./GenericInventory";
import GenericTable from "./GenericTable";
import GenericModal from "./GenericModal";

const GenericPageCrud = ({ 
  title, 
  subtitle, 
  buttonLabel, 
  searchPlaceholder, 
  columns, 
  data, 
  formFields,
  onSave,
  onDelete,
  onUpdate 
}) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedItem, setSelectedItem] = useState(null);
   const [searchTerm, setSearchTerm] = useState('');

   const filteredData = data.filter((item) => {
      return Object.values(item).some((value) =>
         String(value).toLowerCase().includes(searchTerm.toLowerCase())
      );
   });

   const handleAdd = () => {
      setSelectedItem(null);
      setIsModalOpen(true);
   };

   const handleEdit = (item) => {
      setSelectedItem(item);
      setIsModalOpen(true);
   };

   const handleClose = () => {
      setIsModalOpen(false);
      setSelectedItem(null);
   };

   const handleSaveInternal = (formData) => {
      onSave(formData, selectedItem);
      handleClose();
   };

  return (
    <Container maxWidth="xl">
      <GenericInventory 
        title={title}
        subtitle={subtitle}
        buttonLabel={buttonLabel}
        searchPlaceholder={searchPlaceholder}
        onAddClick={handleAdd}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        searchValue={searchTerm}
      />
      
      <GenericTable 
        columns={columns} 
        data={filteredData}
        onEdit={handleEdit}
        onDelete={onDelete}
      />

      <GenericModal 
         key={selectedItem ? (selectedItem.id || selectedItem._id) : 'new-item'}
         open={isModalOpen}
         handleClose={handleClose}
         title={selectedItem ? `Edit ${title}` : `Create New ${title}`}
         fields={formFields}
         initialData={selectedItem}
         onSave={handleSaveInternal}
         onUpdate={onUpdate}
      />
    </Container>
  );
};

export default GenericPageCrud;
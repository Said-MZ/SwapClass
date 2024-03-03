"use client";

import { createContext, useContext, useState } from "react";

const deleteModalContext = createContext({});

const DeleteModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const showModal = () => {
    console.log("showModal");

    setIsModalOpen(true);
  };
  const hideModal = () => {
    setIsModalOpen(false);
  };
  return (
    <deleteModalContext.Provider value={{ isModalOpen, showModal, hideModal }}>
      {children}
    </deleteModalContext.Provider>
  );
};

const useDeleteModal = () => useContext(deleteModalContext);

export { useDeleteModal, DeleteModalProvider };

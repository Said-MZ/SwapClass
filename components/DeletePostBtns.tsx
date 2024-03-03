"use client";

import React from "react";
import Btn from "./Btn";
import { useDeleteModal } from "@/app/context/deleteModalContext";

const DeletePostBtns = () => {
  const { isModalOpen, showModal, hideModal }: any = useDeleteModal();

  return (
    <div className="flex gap-4 mt-8">
      <Btn text="Edit" isLink={false} dark={true} href={null} size="w-full" />
      <Btn
        text="Delete"
        isLink={false}
        dark={false}
        href={null}
        size="w-full"
        onClick={showModal}
      />
    </div>
  );
};

export default DeletePostBtns;

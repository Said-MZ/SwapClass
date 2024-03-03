"use client";

import React from "react";
import Btn from "./Btn";
import { useDeleteModal } from "@/app/context/deleteModalContext";

const DeletePostBtns = ({ id }: { id: string }) => {
  const { showModal }: any = useDeleteModal();

  return (
    <div className="flex gap-4 mt-8">
      <Btn
        text="Edit"
        isLink={true}
        dark={true}
        href={`/app/edit/${id}`}
        size="w-full"
      />
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

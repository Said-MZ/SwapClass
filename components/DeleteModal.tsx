"use client";

import React from "react";
import Btn from "./Btn";
import { useDeleteModal } from "@/app/context/deleteModalContext";
const DeleteModal = () => {
  const { isModalOpen, showModal, hideModal }: any = useDeleteModal();
  return (
    <div>
      {isModalOpen && (
        <div
          className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={hideModal}
        >
          <div className="bg-neutral-900 p-8 rounded-md">
            <h2 className="text-2xl font-bold text-center">
              Are you sure you want to delete this post?
            </h2>
            <div className="flex justify-around items-center mt-4 gap-4">
              <Btn
                text="Yes"
                isLink={false}
                dark={false}
                href={null}
                size="w-full"
              />
              <Btn
                text="No"
                isLink={false}
                dark={true}
                href={null}
                size="w-full"
                onClick={hideModal}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteModal;

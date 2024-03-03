"use client";

import React from "react";
import Btn from "./Btn";
import { useDeleteModal } from "@/app/context/deleteModalContext";
import { deletePost } from "@/lib";

const DeleteModal = ({ postId }: { postId: number }) => {
  const { isModalOpen, hideModal }: any = useDeleteModal();

  const handleDelete = async () => {
    await deletePost(postId);
    hideModal();
  };
  return (
    <div>
      {isModalOpen && (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-neutral-900 p-8 rounded-md">
            <h2 className="text-2xl font-bold text-center">
              Are you sure you want to delete this post?
            </h2>
            <div className="flex justify-around items-center mt-4 gap-4">
              <Btn
                text="Delete"
                isLink={false}
                dark={false}
                href={null}
                size="w-full"
                onClick={handleDelete}
              />
              <Btn
                text="Cancel"
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

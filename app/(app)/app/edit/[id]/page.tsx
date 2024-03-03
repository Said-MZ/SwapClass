import EditForm from "@/components/EditForm";
import { fetchPost } from "@/lib";
import React from "react";

const EditPage = async ({ params: { id } }: { params: { id: string } }) => {
  const post = await fetchPost(id);

  return (
    <section className="w-full max-w-[1200px]">
      <h2 className="text-xl lg:text-3xl font-bold !leading-tight mx-auto max-w-[920px] text-center mb-12">
        Post your exchange request
      </h2>
      {post && <EditForm postData={post[0]} />}
    </section>
  );
};

export default EditPage;

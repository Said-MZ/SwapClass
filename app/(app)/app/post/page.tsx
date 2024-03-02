import PostForm from "@/components/PostForm";
import React from "react";

const page = () => {
  return (
    <section>
      <h2 className="text-xl lg:text-3xl font-bold !leading-tight mx-auto max-w-[920px] text-center mb-12">
        Post your exchange request
      </h2>
      <PostForm />
    </section>
  );
};

export default page;

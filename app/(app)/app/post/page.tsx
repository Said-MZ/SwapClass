import PostForm from "@/components/PostForm";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.log(user, "error");
    return redirect("/");
  }
  return (
    <section className="w-full max-w-[1200px]">
      <h2 className="text-xl lg:text-3xl font-bold !leading-tight mx-auto max-w-[920px] text-center mb-12">
        Post your exchange request
      </h2>
      <PostForm />
    </section>
  );
};

export default page;

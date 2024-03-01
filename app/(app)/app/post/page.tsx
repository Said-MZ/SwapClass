import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

const PostPage = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.log(user, "error");
    return redirect("/");
  }
  return <div>PostPage</div>;
};

export default PostPage;

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function AppPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.log(user, "error");
    return redirect("/");
  }

  const fetchAllPosts = async () => {
    const { data, error } = await supabase.from("posts").select();
    console.log(data, error);
  };
  const insertPost = async (
    course_name: string,
    course_section: string,
    course_days: string,
    course_hours: string,
    exchange_for: string
  ) => {
    // select user id using email
    const { data: userId } = await supabase
      .from("users")
      .select("id")
      .eq("email", user.email);

    const { data, error } = await supabase
      .from("posts")
      .insert([
        {
          course_name,
          course_section,
          course_days,
          course_hours,
          exchange_for,
          user_id: userId ? userId[0].id : null,
        },
      ])
      .select();
    console.log(data, error);
  };

  return <div className="">app</div>;
}

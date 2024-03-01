import { createClient } from "@/utils/supabase/server";

export const fetchAllPosts = async () => {
  const supabase = await createClient();
  const { data } = await supabase.from("posts").select();
  return data;
};
export const insertPost = async (
  course_name: string,
  course_section: string,
  course_days: string,
  course_hours: string,
  exchange_for: string,
  user: { email: string }
) => {
  const supabase = await createClient();

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

export const getUserById = async (id: number) => {
  const supabase = await createClient();

  const { data, error } = await supabase.from("users").select().eq("id", id);
  if (error) console.log(error);
  if (data) {
    return data;
  }
};

export const fetchPost = async (postId: string) => {
  const supabase = await createClient();

  const { data } = await supabase.from("posts").select().eq("id", postId);
  return data;
};

"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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
  exchange_for: string
) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const userDetails: { id: number; name: string }[] | undefined =
    await getUserByEmail(user?.email);
  const userId = userDetails?.[0]?.id;
  if (!user) {
    return redirect("/login");
  }
  if (
    course_name !== "" &&
    course_section !== "" &&
    course_days !== "" &&
    course_hours !== "" &&
    exchange_for !== ""
  ) {
    const { data, error } = await supabase.from("posts").insert([
      {
        course_name,
        course_section,
        course_days,
        course_hours,
        exchange_for,
        user_id: userId,
      },
    ]);
    if (error) console.log(error);
    if (data) {
      return data;
    }
  }
};

export const editPost = async (
  postId: number,
  course_name: string,
  course_section: string,
  course_days: string,
  course_hours: string,
  exchange_for: string
) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("posts")
    .update({
      course_name,
      course_section,
      course_days,
      course_hours,
      exchange_for,
    })
    .eq("id", postId);
  if (error) console.log(error);
  if (data) {
    return data;
  }
};

export const getUserByEmail = async (email: string | undefined) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .select("id, name")
    .eq("email", email);
  if (error) console.log(error);
  if (data) {
    return data;
  }
};

export const getUserById = async (id: number | string) => {
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

export const deletePost = async (postId: number) => {
  const supabase = await createClient();

  // delete post (whole row) by id
  const { data, error } = await supabase
    .from("posts")
    .delete()
    .eq("id", postId);

  revalidatePath("/app");
  redirect("/app");
};

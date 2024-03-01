import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";

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
    const { data } = await supabase.from("posts").select();
    return data;
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

  const getUserById = async (id: number) => {
    const { data, error } = await supabase.from("users").select().eq("id", id);
    if (error) console.log(error);
    if (data) {
      return data;
    }
  };
  const posts = (await fetchAllPosts()) as any;

  return (
    <section className="w-full max-w-[1200px] px-8">
      <h1 className="text-xl lg:text-3xl font-bold !leading-tight mx-auto max-w-[920px] text-center mb-12">
        Explore students' posts
      </h1>
      <Suspense fallback={<Skeleton />}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts ? (
            posts.map(async (post: any) => {
              const user = await getUserById(post.user_id);

              return (
                <Link
                  href={`/app/${post.id}`}
                  key={post.id}
                  className="flex flex-col gap-2  backdrop-blur-[1px] p-4 border-2 rounded-md sm:hover:brightness-125 sm:hover:-translate-y-1 sm:hover:border-neutral-600 transition-all duration-200"
                >
                  <div>
                    <h2 className="capitalize text-lg font-bold">
                      {(user && user[0].name) || "Anonymous"}
                    </h2>
                    <p className="text-xs text-neutral-400">
                      {user && user[0].email}{" "}
                      <span className="font-extrabold text-neutral-300">
                        &nbsp;•&nbsp;
                      </span>{" "}
                      {post &&
                        new Date(post.created_at).toISOString().split("T")[0]}
                    </p>
                  </div>
                  <div className=" w-full h-[1px] bg-neutral-800 mb-2"></div>
                  <h3 className="capitalize text-xl font-bold">
                    {post.course_name}
                  </h3>
                  <ul>
                    <li>
                      <span className="font-semibold">Section:</span>{" "}
                      {post.course_section}
                    </li>
                    <li>
                      <span className="font-semibold">Days:</span>{" "}
                      {post.course_days}
                    </li>
                    <li>
                      <span className="font-semibold">Hours:</span>{" "}
                      {post.course_hours}
                    </li>
                  </ul>
                  {post.exchange_for && (
                    <p className="text-neutral-400 mt-4">
                      <span className="font-semibold text-neutral-100 block">
                        Looking to exchange for:{" "}
                      </span>
                      {post.exchange_for}
                    </p>
                  )}
                </Link>
              );
            })
          ) : (
            <p>No posts</p>
          )}
        </div>
      </Suspense>
    </section>
  );
}

const CardSkeleton = () => {
  return (
    <div className="flex flex-col gap-2  backdrop-blur-[1px] p-4 border-2 rounded-md">
      <div>
        <span className="animate-pulse bg-neutral-300 block h-4 w-20 rounded-md my-2"></span>

        <span className="animate-pulse bg-neutral-600 block h-4 w-64 rounded-md"></span>
      </div>
      <div className=" w-full h-[1px] bg-neutral-800 mb-2"></div>
      <h3 className="capitalize text-xl font-bold">
        <span className="animate-pulse bg-neutral-300 block h-4 w-20 rounded-md my-2"></span>
      </h3>
      <ul className="flex flex-col gap-4">
        <li className="flex gap-2">
          <span className="animate-pulse bg-neutral-300 block h-4 w-28 rounded-md"></span>
          <span className="animate-pulse bg-neutral-600 block h-4 w-full rounded-md"></span>
        </li>
        <li className="flex gap-2">
          <span className="animate-pulse bg-neutral-300 block h-4 w-28 rounded-md"></span>
          <span className="animate-pulse bg-neutral-600 block h-4 w-full rounded-md"></span>
        </li>
        <li className="flex gap-2">
          <span className="animate-pulse bg-neutral-300 block h-4 w-28 rounded-md"></span>
          <span className="animate-pulse bg-neutral-600 block h-4 w-full rounded-md"></span>
        </li>
      </ul>

      <span className="animate-pulse bg-neutral-300 block h-4 w-28 rounded-md mt-4"></span>
      <span className="animate-pulse bg-neutral-600 block h-4 w-full rounded-md"></span>
      <span className="animate-pulse bg-neutral-600 block h-4 w-full rounded-md"></span>
    </div>
  );
};

const Skeleton = () => {
  const arr = Array.from({ length: 8 }, (_, i) => i);
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {arr.map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
};

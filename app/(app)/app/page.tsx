import Btn from "@/components/Btn";
import { CardsSkeleton } from "@/components/skeletons/CardSkeleton";
import { fetchAllPosts, getUserById } from "@/lib";
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

  const posts = (await fetchAllPosts()) as any;

  return (
    <section className="w-full max-w-[1200px] px-8">
      <div className="w-full mx-auto text-center mb-12">
        <Btn
          text="Post your exchange request"
          href="/app/post"
          isLink={true}
          dark={false}
          size="w-full"
        />
      </div>

      <div className="flex justify-center items-center mb-10">
        <div className="w-full h-[1px] bg-neutral-600 mr-3"></div>
        OR
        <div className="w-full h-[1px] bg-neutral-600 ml-3"></div>
      </div>

      <h1 className="text-xl lg:text-3xl font-bold !leading-tight mx-auto max-w-[920px] text-center mb-12">
        Explore students' posts
      </h1>
      <Suspense fallback={<CardsSkeleton />}>
        <div
          className={`${posts && "grid sm:grid-cols-2 lg:grid-cols-3 gap-4"}`}
        >
          {posts ? (
            posts.map(async (post: any) => {
              const user = await getUserById(post.user_id);
              const date = new Date(post.created_at)
                .toISOString()
                .split("T")[0];
              const name = user ? user[0]?.name : "Anonymous";
              const email = user ? user[0].email : "";

              return (
                <Link
                  href={`/app/posts/${post.id}`}
                  key={post.id}
                  className="flex flex-col gap-2  backdrop-blur-[1px] p-4 border-2 rounded-md sm:hover:brightness-125 sm:hover:-translate-y-1 sm:hover:border-neutral-600 transition-all duration-200"
                >
                  <div>
                    <h2 className="capitalize text-lg font-bold">{name}</h2>
                    <p className="text-xs text-neutral-400">
                      {email}{" "}
                      <span className="font-extrabold text-neutral-300">
                        &nbsp;•&nbsp;
                      </span>{" "}
                      {date}
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
            <div>
              <h1 className="text-xl lg:text-3xl text-neutral-400 !leading-tight mx-auto max-w-[920px] text-center mb-12">
                No posts yet. Be the first one to post your exchange request!
              </h1>
            </div>
          )}
        </div>
      </Suspense>
    </section>
  );
}

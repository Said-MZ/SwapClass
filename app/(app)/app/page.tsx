import Btn from "@/components/Btn";
import Post from "@/components/Post";
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
          text="Post exchange request"
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
            posts.map((post: any) => {
              return (
                <Post post={post} key={post.id} userEmail={user.email || ""} />
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

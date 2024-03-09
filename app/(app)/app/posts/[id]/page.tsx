import Btn from "@/components/Btn";
import DeleteModal from "@/components/DeleteModal";
import DeletePostBtns from "@/components/DeletePostBtns";
import PostSkeleton from "@/components/skeletons/PostSkeleton";
import { fetchPost, getUserByEmail, getUserById } from "@/lib";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const SinglePostPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const supabase = await createClient();

  const {
    data: { user: u },
  } = await supabase.auth.getUser();

  if (!u) {
    console.log(u, "error");
    return redirect("/");
  }

  const postId = params.id;

  const post:
    | {
        id: number;
        created_at: string;
        course_name: string;
        course_section: string;
        course_days: string;
        course_hours: string;
        exchange_for: string;
        user_id: number;
      }[]
    | null = await fetchPost(postId);

  const postUser:
    | {
        id: number;
        name: string;
        email: string;
      }[]
    | undefined = await getUserById(post ? post[0]?.user_id : 0);

  const userViewingPage:
    | {
        id: number;
        name: string;
      }[]
    | undefined = await getUserByEmail(u.email);

  console.log(userViewingPage);

  const isPostOwner = postUser && postUser[0]?.id === userViewingPage?.[0]?.id;

  return (
    <section className="max-w-[768px] px-8">
      {post ? (
        <Suspense fallback={<PostSkeleton />}>
          <div>
            <h2 className="capitalize text-2xl sm:text-4xl font-bold text-center mb-6">
              Posted by: {(postUser && postUser[0].name) || "Anonymous"}
            </h2>
            <p className="text-xs lg:text-sm text-neutral-400 flex flex-col justify-around items-start mt-1">
              <span>
                <span className="font-semibold text-neutral-300">Email: </span>{" "}
                {postUser && postUser[0].email}{" "}
              </span>
              <span>
                <span className="font-semibold text-neutral-300">
                  Posted at:{" "}
                </span>{" "}
                {post[0] &&
                  new Date(post[0].created_at).toISOString().split("T")[0]}
              </span>
            </p>
          </div>
          <div className=" w-full h-[1px] bg-neutral-800 mb-4"></div>
          <h3 className="capitalize text-3xl font-bold">
            {post[0].course_name}
          </h3>
          <ul className=" text-lg sm:text-xl mt-2">
            <li>
              <span className="font-semibold">Section:</span>{" "}
              {post[0].course_section}
            </li>
            <li>
              <span className="font-semibold">Days:</span> {post[0].course_days}
            </li>
            <li>
              <span className="font-semibold">Hours:</span>{" "}
              {post[0].course_hours}
            </li>
          </ul>
          {post[0].exchange_for && (
            <p className="text-neutral-400 mt-4 text-md sm:text-lg">
              <span className="font-semibold text-neutral-100 block">
                Looking to exchange for:{" "}
              </span>
              {post[0].exchange_for}
            </p>
          )}
          {isPostOwner && <DeletePostBtns id={postId} />}

          <DeleteModal postId={post[0].id} />
          <div className="mt-6 w-full">
            <Btn
              isLink={true}
              text="Back to all posts"
              dark={true}
              href={"/app"}
              style="block mx-auto bg-transparent border-transparent"
            />
          </div>
        </Suspense>
      ) : (
        <h1 className="text-3xl sm:text-6xl font-bold text-center">
          No Post Found
        </h1>
      )}
    </section>
  );
};

export default SinglePostPage;

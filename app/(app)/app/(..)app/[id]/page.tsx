import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import React from "react";

const PhotoModal = async (props: any) => {
  const id = props.params.id;
  const supabase = createClient();
  const getUserById = async (id: number) => {
    const { data, error } = await supabase.from("users").select().eq("id", id);
    if (error) console.log(error);
    if (data) {
      return data;
    }
  };
  const fetchPost = async () => {
    const { data } = await supabase.from("posts").select().eq("id", id);
    return data;
  };
  const post = (await fetchPost()) as any;
  const user = (await getUserById(post[0].user_id)) as any;
  return (
    <div className="w-screen h-screen absolute top-0 left-0 ">
      <Link
        href="/app"
        className="absolute w-screen h-screen bg- opacity-50 backdrop-blur-sm z-10"
      ></Link>
      <section className="w-11/12 sm:w-3/4 md:w-2/4 h-3/4 backdrop-blur-md backdrop-brightness-125 border-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 p-8 rounded-md">
        <Link
          href="/app"
          className="absolute top-0 right-0  bg- opacity-50 backdrop-blur-sm bg-neutral-600 rounded-tr-md 
           p-1 hover:bg-red-700 transition-all duration-300 z-30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </Link>
        <div>
          <h2 className="capitalize text-xl md:text-2xl lg:text-4xl font-bold text-center">
            Posted by: {(user && user[0].name) || "Anonymous"}
          </h2>
          <p className="text-xs lg:text-sm flex-wrap text-neutral-400 flex justify-start gap-6 items-center my-4">
            <span>
              <span className="font-semibold text-neutral-300">Email: </span>{" "}
              {user && user[0].email}{" "}
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
        <h3 className="capitalize text-xl sm:text-2xl md:text-3xl font-bold">
          {post[0].course_name}
        </h3>
        <ul className="text-md sm:text-lg md:text-xl mt-2">
          <li>
            <span className="font-semibold">Section:</span>{" "}
            {post[0].course_section}
          </li>
          <li>
            <span className="font-semibold">Days:</span> {post[0].course_days}
          </li>
          <li>
            <span className="font-semibold">Hours:</span> {post[0].course_hours}
          </li>
        </ul>
        {post[0].exchange_for && (
          <p className="text-neutral-400 mt-4 text-lg">
            <span className="font-semibold text-neutral-100 block">
              Looking to exchange for:{" "}
            </span>
            {post[0].exchange_for}
          </p>
        )}
      </section>
    </div>
  );
};

export default PhotoModal;

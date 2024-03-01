import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

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
  const fetchPost = async () => {
    const { data } = await supabase.from("posts").select().eq("id", postId);
    return data;
  };
  const getUserById = async (id: number) => {
    const { data, error } = await supabase.from("users").select().eq("id", id);
    if (error) console.log(error);
    if (data) {
      return data;
    }
  };

  const post = (await fetchPost()) as any;
  const user = (await getUserById(post[0].user_id)) as any;
  console.log(post, user);

  return (
    <section>
      <div>
        <h2 className="capitalize text-2xl sm:text-4xl font-bold text-center">
          Posted by: {(user && user[0].name) || "Anonymous"}
        </h2>
        <p className="text-xs lg:text-sm text-neutral-400 flex flex-col justify-around items-start mt-1">
          <span>
            <span className="font-semibold text-neutral-300">Email: </span>{" "}
            {user && user[0].email}{" "}
          </span>
          <span>
            <span className="font-semibold text-neutral-300">Posted at: </span>{" "}
            {post[0] &&
              new Date(post[0].created_at).toISOString().split("T")[0]}
          </span>
        </p>
      </div>
      <div className=" w-full h-[1px] bg-neutral-800 mb-4"></div>
      <h3 className="capitalize text-3xl font-bold">{post[0].course_name}</h3>
      <ul className=" text-lg sm:text-xl mt-2">
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
        <p className="text-neutral-400 mt-4 text-md sm:text-lg">
          <span className="font-semibold text-neutral-100 block">
            Looking to exchange for:{" "}
          </span>
          {post[0].exchange_for}
        </p>
      )}
    </section>
  );
};

export default SinglePostPage;

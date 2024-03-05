import Link from "next/link";
import { getUserById } from "@/lib";

interface PostProps {
  post: any;
  userEmail: string;
}

const Post: React.FC<PostProps> = async ({ post, userEmail }) => {
  const user = await getUserById(post.user_id);

  const date = new Date(post.created_at).toISOString().split("T")[0];
  const name = user ? user[0]?.name : "Anonymous";
  const email = user ? user[0].email : "";
  const isUser = email === userEmail;
  return (
    <Link
      href={`/app/posts/${post.id}`}
      key={post.id}
      className="flex flex-col gap-2  backdrop-blur-[1px] p-4 border-2 rounded-md sm:hover:brightness-125 sm:hover:-translate-y-1 sm:hover:border-neutral-600 transition-all duration-200"
    >
      {isUser && (
        <div className="absolute top-1 right-1 bg-neutral-800 text-neutral-100 font-bold px-3 py-2 rounded-md text-xs">
          Click to Edit Post
        </div>
      )}
      <div>
        <h2 className="capitalize text-lg font-bold">{name}</h2>
        <p className="text-xs text-neutral-400">
          {email}{" "}
          <span className="font-extrabold text-neutral-300">&nbsp;•&nbsp;</span>{" "}
          {date}
        </p>
      </div>
      <div className=" w-full h-[1px] bg-neutral-800 mb-2"></div>
      <h3 className="capitalize text-xl font-bold">{post.course_name}</h3>
      <ul>
        <li>
          <span className="font-semibold">Section:</span> {post.course_section}
        </li>
        <li>
          <span className="font-semibold">Days:</span> {post.course_days}
        </li>
        <li>
          <span className="font-semibold">Hours:</span> {post.course_hours}
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
};

export default Post;

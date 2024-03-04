const PostSkeleton = () => {
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

export default PostSkeleton;

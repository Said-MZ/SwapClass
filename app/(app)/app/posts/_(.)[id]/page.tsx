//temporarily disabled due to a bug (delay in rendering the modal with no feedback to the user that the modal is being loaded)

// import DeleteModal from "@/components/DeleteModal";
// import DeletePostBtns from "@/components/DeletePostBtns";
// import { fetchPost, getUserByEmail, getUserById } from "@/lib";
// import { createClient } from "@/utils/supabase/server";
// import Link from "next/link";
// import { redirect } from "next/navigation";
// import React, { Suspense } from "react";

// const PhotoModal = async (props: any) => {
//   const id = props.params.id;
//   const supabase = createClient();
//   const {
//     data: { user: u },
//   } = await supabase.auth.getUser();
//   if (!u) {
//     return redirect("/");
//   }

//   const post = (await fetchPost(id)) as any;
//   const userId = post ? post[0].user_id : undefined;
//   const postUser = (await getUserById(userId)) as any;
//   const userViewingPage: any = await getUserByEmail(u.email);

//   const isPostOwner = postUser[0]?.id === userViewingPage?.[0]?.id;

//   return (
//     <div className="w-screen h-screen absolute top-0 left-0 grid place-items-center px-12">
//       <Suspense fallback={<ModalSkeleton />}>
//         <Link
//           href="/app"
//           className="absolute w-screen h-screen bg-neutral-950 opacity-75 z-10"
//         ></Link>
//         <section className="w-full sm:w-3/4  backdrop-blur-md backdrop-brightness-125 border-2  relative z-50 p-8 rounded-md">
//           {/* using suspense disables the intercepted modal for some reason so this will be commented unil i find a solution */}
//           <Link
//             href="/app"
//             className="absolute top-0 right-0  bg- opacity-50 backdrop-blur-sm bg-neutral-600 rounded-tr-md 
//            p-1 hover:bg-red-600 transition-all duration-300 z-30"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="h-8 w-8"
//             >
//               <line x1="18" y1="6" x2="6" y2="18"></line>
//               <line x1="6" y1="6" x2="18" y2="18"></line>
//             </svg>
//           </Link>
//           <div>
//             <div>
//               <h2 className="capitalize text-xl md:text-2xl lg:text-4xl font-bold text-center">
//                 Posted by: {(postUser && postUser[0].name) || "Anonymous"}
//               </h2>
//               <p className="text-xs lg:text-sm flex-wrap text-neutral-400 flex justify-start gap-6 items-center my-4">
//                 <span>
//                   <span className="font-semibold text-neutral-300">
//                     Email:{" "}
//                   </span>{" "}
//                   {postUser && postUser[0].email}{" "}
//                 </span>
//                 <span>
//                   <span className="font-semibold text-neutral-300">
//                     Posted at:{" "}
//                   </span>{" "}
//                   {post &&
//                     new Date(post[0].created_at).toISOString().split("T")[0]}
//                 </span>
//               </p>
//             </div>
//             <div className=" w-full h-[1px] bg-neutral-800 mb-4"></div>
//             <h3 className="capitalize text-xl sm:text-2xl md:text-3xl font-bold">
//               {post && post[0].course_name}
//             </h3>
//             <ul className="text-md sm:text-lg md:text-xl mt-2">
//               <li>
//                 <span className="font-semibold">Section:</span>{" "}
//                 {post && post[0].course_section}
//               </li>
//               <li>
//                 <span className="font-semibold">Days:</span>{" "}
//                 {post && post[0].course_days}
//               </li>
//               <li>
//                 <span className="font-semibold">Hours:</span>{" "}
//                 {post && post[0].course_hours}
//               </li>
//             </ul>
//             {post && post[0]?.exchange_for && (
//               <p className="text-neutral-400 mt-4 text-lg">
//                 <span className="font-semibold text-neutral-100 block">
//                   Looking to exchange for:{" "}
//                 </span>
//                 {post[0].exchange_for}
//               </p>
//             )}
//             {isPostOwner && <DeletePostBtns id={id} />}

//             <DeleteModal postId={post[0].id} />
//           </div>
//         </section>
//       </Suspense>
//     </div>
//   );
// };

// export default PhotoModal;

// const ModalSkeleton = () => {
//   return (
//     <div className="w-screen h-screen absolute top-0 left-0 ">
//       <Link
//         href="/app"
//         className="absolute w-screen h-screen bg- opacity-50 backdrop-blur-sm z-10"
//       ></Link>
//       <section className="w-11/12 sm:w-3/4 md:w-2/4 h-3/4 backdrop-blur-md backdrop-brightness-125 border-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 p-8 rounded-md">
//         <div>
//           <h2 className="capitalize text-xl md:text-2xl lg:text-4xl font-bold text-center">
//             <span className="animate-pulse bg-neutral-300 block h-4 w-20 rounded-md my-2"></span>
//           </h2>
//           <p className="text-xs lg:text-sm flex-wrap text-neutral-400 flex justify-start gap-6 items-center my-4">
//             <span>
//               <span className="font-semibold text-neutral-300">Email: </span>{" "}
//               <span className="animate-pulse bg-neutral-300 block h-4 w-20 rounded-md my-2"></span>
//             </span>
//             <span>
//               <span className="font-semibold text-neutral-300">
//                 Posted at:{" "}
//               </span>{" "}
//               <span className="animate-pulse bg-neutral-300 block h-4 w-20 rounded-md my-2"></span>
//             </span>
//           </p>
//         </div>
//         <div className=" w-full h-[1px] bg-neutral-800 mb-4"></div>
//         <h3 className="capitalize text-xl sm:text-2xl md:text-3xl font-bold">
//           <span className="animate-pulse bg-neutral-300 block h-4 w-20 rounded-md my-2"></span>
//         </h3>
//         <ul className="text-md sm:text-lg md:text-xl mt-2">
//           <li>
//             <span className="font-semibold">Section:</span>{" "}
//             <span className="animate-pulse bg-neutral-300 block h-4 w-20 rounded-md my-2"></span>
//           </li>
//           <li>
//             <span className="font-semibold">Days:</span>{" "}
//             <span className="animate-pulse bg-neutral-300 block h-4 w-20 rounded-md my-2"></span>
//           </li>
//           <li>
//             <span className="font-semibold">Hours:</span>{" "}
//             <span className="animate-pulse bg-neutral-300 block h-4 w-20 rounded-md my-2"></span>
//           </li>
//         </ul>
//         <p className="text-neutral-400 mt-4 text-lg">
//           <span className="font-semibold text-neutral-100 block">
//             Looking to exchange for:{" "}
//           </span>
//           <span className="animate-pulse bg-neutral-300 block h-4 w-20 rounded-md my-2"></span>
//         </p>
//       </section>
//     </div>
//   );
// };

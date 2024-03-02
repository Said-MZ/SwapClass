import { insertPost } from "@/lib";
import React from "react";
import Btn from "./Btn";
import { redirect } from "next/navigation";

const PostForm = () => {
  const post = async (formData: FormData) => {
    "use server";
    const course_name = (await formData.get("course_name")) as string;
    const course_section = (await formData.get("course_section")) as string;
    const course_days = (await formData.get("course_days")) as string;
    const course_hours = (await formData.get("course_hours")) as string;
    const exchange_for = (await formData.get("exchange_for")) as string;

    insertPost(
      course_name,
      course_section,
      course_days,
      course_hours,
      exchange_for
    );

    return redirect("/app");
  };
  return (
    <form
      action={post}
      className="w-full bg-transparent shadow-md rounded px-8 pt-6 pb-8 mb-4 grid sm:grid-cols-2 md:grid-cols-3 gap-x-8"
    >
      <div className="mb-4">
        <label
          htmlFor="course_name"
          className="block text-neutral-100 text-sm font-bold mb-2"
        >
          Course Name
        </label>
        <input
          type="text"
          name="course_name"
          id="course_name"
          className="bg-transparent backdrop-blur-sm focus:outline-4 shadow appearance-none border rounded w-full py-2 px-3 text-neutral-100 leading-tight focus:outline-neutral-600 focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="course_section"
          className="block text-neutral-100 text-sm font-bold mb-2"
        >
          Course Section
        </label>
        <input
          type="text"
          name="course_section"
          id="course_section"
          className="bg-transparent backdrop-blur-sm focus:outline-4 shadow appearance-none border rounded w-full py-2 px-3 text-neutral-100 leading-tight focus:outline-neutral-600 focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="course_days"
          className="block text-neutral-100 text-sm font-bold mb-2"
        >
          Course Days
        </label>
        <input
          type="text"
          name="course_days"
          id="course_days"
          className="bg-transparent backdrop-blur-sm focus:outline-4 shadow appearance-none border rounded w-full py-2 px-3 text-neutral-100 leading-tight focus:outline-neutral-600 focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="course_hours"
          className="block text-neutral-100 text-sm font-bold mb-2"
        >
          Course Hours
        </label>
        <input
          type="text"
          name="course_hours"
          id="course_hours"
          className="bg-transparent backdrop-blur-sm focus:outline-4 shadow appearance-none border rounded w-full py-2 px-3 text-neutral-100 leading-tight focus:outline-neutral-600 focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="exchange_for"
          className="block text-neutral-100 text-sm font-bold mb-2"
        >
          Exchange For
        </label>
        <textarea
          name="exchange_for"
          id="exchange_for"
          className="bg-transparent backdrop-blur-sm focus:outline-4 shadow appearance-none border rounded w-full py-2 px-3 text-neutral-100 leading-tight focus:outline-neutral-600 focus:shadow-outline resize-y"
        />
      </div>

      <Btn
        text="Submit"
        dark={false}
        isLink={false}
        href={null}
        size="w-full"
      />
    </form>
  );
};

export default PostForm;

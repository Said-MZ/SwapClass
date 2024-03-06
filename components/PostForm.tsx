import { insertPost } from "@/lib";
import React from "react";
import Btn from "./Btn";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import { SubmitButton } from "@/app/(auth)/submit-button";

const PostForm = () => {
  const post = async (formData: FormData) => {
    "use server";
    const course_name = (await formData.get("course_name")) as string;
    const course_section = (await formData.get("course_section")) as string;
    const course_days = (await formData.get("course_days")) as string;
    const course_hours = (await formData.get("course_hours")) as string;
    const exchange_for = (await formData.get("exchange_for")) as string;
    if (
      course_name.trim() === "" ||
      course_section.trim() === "" ||
      course_days.trim() === "" ||
      course_hours.trim() === ""
    ) {
      insertPost(
        course_name.trim(),
        course_section.trim(),
        course_days.trim(),
        course_hours.trim(),
        exchange_for.trim()
      );
    }

    return redirect("/app");
  };
  return (
    <form
      action={post}
      className="w-full bg-transparent shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4 w-full">
        <label
          htmlFor="course_name"
          className="block text-neutral-100 text-sm font-bold mb-2"
        >
          Course Name
        </label>
        <input
          required
          placeholder="Course Name"
          type="text"
          name="course_name"
          id="course_name"
          className="bg-transparent backdrop-blur-sm focus:outline-4 shadow appearance-none border rounded w-full py-2 px-3 text-neutral-100 leading-tight focus:outline-neutral-600 focus:shadow-outline"
        />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-x-4">
        <div className="mb-4 w-full">
          <label
            htmlFor="course_section"
            className="block text-neutral-100 text-sm font-bold mb-2"
          >
            Course Section
          </label>
          <input
            required
            placeholder="1"
            type="text"
            name="course_section"
            id="course_section"
            className="bg-transparent backdrop-blur-sm focus:outline-4 shadow appearance-none border rounded w-full py-2 px-3 text-neutral-100 leading-tight focus:outline-neutral-600 focus:shadow-outline"
          />
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="course_days"
            className="block text-neutral-100 text-sm font-bold mb-2"
          >
            Course Days
          </label>
          <input
            required
            placeholder="s-t-t"
            type="text"
            name="course_days"
            id="course_days"
            className="bg-transparent backdrop-blur-sm focus:outline-4 shadow appearance-none border rounded w-full py-2 px-3 text-neutral-100 leading-tight focus:outline-neutral-600 focus:shadow-outline"
          />
        </div>
        <div className="mb-4 w-full col-span-2 md:col-span-1">
          <label
            htmlFor="course_hours"
            className="block text-neutral-100 text-sm font-bold mb-2"
          >
            Course Hours
          </label>
          <input
            required
            placeholder="12:00 - 2:00"
            type="text"
            name="course_hours"
            id="course_hours"
            className="bg-transparent backdrop-blur-sm focus:outline-4 shadow appearance-none border rounded w-full py-2 px-3 text-neutral-100 leading-tight focus:outline-neutral-600 focus:shadow-outline"
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="exchange_for"
          className="block text-neutral-100 text-sm font-bold mb-2"
        >
          Exchange For
        </label>
        <textarea
          placeholder="I'm looking to exchange for..."
          rows={8}
          name="exchange_for"
          id="exchange_for"
          className="bg-transparent backdrop-blur-sm focus:outline-4 shadow appearance-none border rounded w-full py-2 px-3 text-neutral-100 leading-tight focus:outline-neutral-600 focus:shadow-outline resize-y"
        />
      </div>

      <SubmitButton
        formAction={post}
        className="bg-neutral-50 text-neutral-900 border-neutral-200 font-semibold px-5 py-3 rounded-md hover:brightness-75 transition-all duration-200 border-[1px] text-center text-nowrap w-full"
        pendingText="Posting..."
        toastText={"Posted!"}
      >
        Post
      </SubmitButton>
    </form>
  );
};

export default PostForm;

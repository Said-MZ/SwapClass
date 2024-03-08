import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "../submit-button";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect(
        "/login?message=Wrong email or password. Please try again."
      );
    }

    return redirect("/app");
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-neutral-50 bg-neutral-900 hover:bg-neutral-800 flex items-center group text-sm z-20"
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
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-neutral-50">
        <h1 className="text-3xl font-bold capitalize text-center mb-3">
          Log in
        </h1>
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <SubmitButton
          formAction={signIn}
          className="bg-green-700 rounded-md px-4 py-2 text-neutral-50 mb-2"
          pendingText="Signing In..."
          toastText={"Signed In"}
        >
          Sign In
        </SubmitButton>
        <p>
          New user?{" "}
          <Link href={"/signup"} className="underline">
            Sign Up
          </Link>
        </p>
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-neutral-50/10 text-neutral-50 text-center">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  );
}

import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "../submit-button";

export default function Signup({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const stdId = formData.get("stdId") as string;
    const name = formData.get("name") as string;

    const isIdValid = () => {
      if (!/^\d{8}$/.test(stdId)) {
        return false;
      }
      return true;
    };

    const isEmailValid = () => {
      const regex = new RegExp(`^.*${stdId}@std.psut.edu.jo$`);
      return regex.test(email);
    };

    if (!isEmailValid() || !isIdValid()) {
      return redirect(
        "/signup?message=Both email and ID should be real PSUT student credentials."
      );
    }

    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      console.log(error);
      return redirect("/signup?message=" + error.message);
    }

    await supabase
      .from("users")
      .insert([{ id: stdId, name, email }])
      .select();

    return redirect("/signup?message=Check email to continue sign in process");
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm z-20"
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
      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
        <h1 className="text-3xl font-bold capitalize text-center mb-3">
          Sign up
        </h1>
        <label className="text-md" htmlFor="stdId">
          Student ID
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="stdId"
          placeholder="20221234"
          required
        />
        <label className="text-md" htmlFor="name">
          Name
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="name"
          placeholder="John Doe"
          required
        />
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="sai20221234@std.psut.edu.jo"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          minLength={6}
          placeholder="••••••••"
          required
        />
        <SubmitButton
          formAction={signUp}
          pendingText="Signing Up..."
          className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2 font-semibold  hover:brightness-75 transition-all duration-200"
        >
          Sign Up
        </SubmitButton>
        <p>
          Already have an account?{" "}
          <Link href={"/login"} className="underline">
            Log In
          </Link>
        </p>
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  );
}

import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import Btn from "./Btn";
import { getUserByEmail } from "@/lib";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  const userName =
    ((await getUserByEmail(user ? user.email : undefined)) as
      | string
      | undefined) || undefined;
  const name =
    userName && Array.isArray(userName) ? userName[0]?.name : undefined;
  return user ? (
    <div className="flex items-center gap-4">
      <span className="hidden sm:block">Hey, {name}!</span>
      <form action={signOut}>
        <Btn text="Logout" dark={true} isLink={false} href={null} style="" />
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="bg-neutral-900 text-neutral-50  border-neutral-800 text-md font-semibold px-4 py-2 rounded-md hover:brightness-75 transition-all duration-200 border-[1px] "
    >
      Login
    </Link>
  );
}

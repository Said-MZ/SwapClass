import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import Btn from "./Btn";

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

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOut}>
        {/* <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button> */}
        <Btn text="Logout" dark={true} isLink={false} href={null} size="" />
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

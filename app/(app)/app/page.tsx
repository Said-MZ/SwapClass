import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function AppPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.log(user, "error");

    return redirect("/login");
  }

  return <div className="">app</div>;
}

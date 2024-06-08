import SignOutButton from "../_components/SignOutButton";
import { sendUserDetails } from "../_lib/actions";
import { auth } from "../_lib/auth";

export default async function Page() {
  const session = await auth();
  sendUserDetails();
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] bg-neutral-950 w-full">
      <h1 className="text-3xl font-semibold text-white">Welcome to EVault</h1>
    </div>
  );
}

import { submitLogout } from "../_lib/actions";

export default function SignOutButton() {
  return (
    <form action={submitLogout}>
      <button type="submit" className="text-white">
        Sign Out
      </button>
    </form>
  );
}

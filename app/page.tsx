import { Button } from "@/components/ui/button";
import Link from "next/link";

const LoggedOutPage = () => {
  return (
    <>
      <h1>Welcome!</h1>
      <p>The best dashboard to manage costumer support</p>
      <div className="flex items-center space-x-4">
        <Button className="rounded" variant={"default"} asChild>
          <Link href="/login">Login</Link>
        </Button>
        <small>Or</small>
        <Button className="rounded" variant={"outline"} asChild>
          <Link href="/sign-up">sign up</Link>
        </Button>
      </div>
    </>
  );
};

export default LoggedOutPage;

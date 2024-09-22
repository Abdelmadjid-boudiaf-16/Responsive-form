import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Button asChild variant={'link'}>
        <Link href="/">Return Home</Link>
      </Button>
    </>
  );
}

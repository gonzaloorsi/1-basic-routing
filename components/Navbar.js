"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <nav>
      <ul className="login-menu border bg-green-400"></ul>
      {pathName === "/login/loginadmin" ? (
        <li>
          <Link href={`/login/loginadmin`}>Login Admin</Link>
        </li>
      ) : (
        <li>
          <Link href={`/login/loginuser`}>Login User</Link>
        </li>
      )}
    </nav>
  );
}

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/kQ2LmMjQymR
 */
import Link from "next/link";

export function Card({ title, body }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-950">
      <div className="py-6 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            <div className="flex flex-col space-y-4">
              <Link
                className="font-semibold line-clamp-2 hover:underline shadcn-tint-inherit"
                href="#"
              >
                {title}
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400">{body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

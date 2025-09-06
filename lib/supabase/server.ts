import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = () => {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          // Correctly get a cookie from the request headers
          return cookies().get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            // Correctly set a cookie to the response headers
            cookies().set({ name, value, ...options });
          } catch (error) {
            // The `cookies().set()` method can only be called in a Server Component or Route Handler
            // This error is typically caught and handled by Next.js itself.
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            // Correctly remove a cookie from the response headers
            cookies().set({ name, value: "", ...options });
          } catch (error) {
            // The `cookies().set()` method can only be called in a Server Component or Route Handler
            // This error is typically caught and handled by Next.js itself.\
          }
        },
      },
    },
  );
};
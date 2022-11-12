import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "../components/Layout";
import { BiPaperPlane } from "react-icons/bi";

function Guestbook() {
  const { data: session } = useSession();
  return (
    <div className="max-w-5xl mx-auto lg:px-0 px-4 py-6 min-h-screen">
      <Layout>
        <div className="my-7">
          <h2 className="lg:text-3xl mb-2 text-gray-800 dark:text-gray-300 text-left text-2xl font-bold tracking-tight">
            Guestbook
          </h2>
          <p className="lg:text-lg text-gray-600 dark:text-gray-400 text-base font-normal tracking-tight">
            Leave a comment below. It could be anything – appreciation,
            information, wisdom, or even humor. Surprise me!
          </p>
        </div>
        <div className="lg:px-10 mx-auto">
          <div className="bg-blue-50 dark:bg-[#0d2a8a2e] border rounded-lg p-6 border-1 dark:border-gray-700 border-blue-400">
            <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
              Sign the guestbook
            </h1>
            <p className="mt-1 text-gray-800 dark:text-gray-200">
              Share a message for a future visitor
            </p>
            {session ? (
              <>
                <form className="relative my-4">
                  <input
                    aria-label="Your message"
                    placeholder="Your message..."
                    required
                    className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                  <button
                    className="flex items-center justify-center absolute right-1 top-1 px-4 pt-1 font-medium h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
                    type="submit"
                  >
                    Sign
                  </button>
                </form>
                <div className="flex items-center justify-center my-4 font-bold h-8 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28">
                  <button onClick={signOut}>Sign Out</button>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center my-4 font-bold h-8 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28">
                <button onClick={signIn}>Sign in</button>
              </div>
            )}
            <p className="text-sm text-gray-800 dark:text-gray-200">
              Your information will not be shared with anyone. It will only be
              used to display your name in message.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Guestbook;

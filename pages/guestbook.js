import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "../components/Layout";
import { BiPaperPlane } from "react-icons/bi";

function Guestbook() {
  const { data: session } = useSession();
  const signatures = [
    {
      name: "John Doe",
      text: "This is a test message",
      date: "2021-09-01",
    },
    {
      name: "Jane Doe",
      text: "This is another test message",
      date: "2021-09-02",
    },
    {
      name: "John Doe",
      text: "This is a test message",
      date: "2021-09-01",
    },
  ];
  console.log(session);
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
                    // value={signature}
                    className="pl-4 pr-32 py-2 mt-1
                    focus:outline-none focus:ring-1 dark:focus:ring-0 focus:ring-offset-2
                    focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                  <button
                    className="flex items-center 
                    hover:bg-blue-300 hover:dark:bg-gray-900 hover:text-white
                    justify-center absolute right-1 top-1 px-4 pt-1 font-medium h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
                    type="submit"
                  >
                    <BiPaperPlane className="mr-1" width={20} height={20} />
                  </button>
                </form>
                <div className="flex items-center  hover:scale-105 duration-150 transform justify-center mt-4 font-bold h-8 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28">
                  <button onClick={signOut}>Sign Out</button>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-center hover:scale-105 duration-150 transform my-4 font-bold h-8 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28">
                  <button onClick={signIn}>Sign in</button>
                </div>
                <p className="font-mono text-xs mb-3 text-gray-500">
                  *you must sign in to continue
                </p>
              </>
            )}
            <p className="text-sm mt-5 text-gray-400 dark:text-gray-600">
              Your information will not be shared with anyone. It will only be
              used to display your name in message.
            </p>
          </div>
        </div>
        <div className="lg:px-10 mx-auto mt-10">
          {signatures.map((signature, index) => (
            <div
              key={index}
              className="border-b-2 dark:border-[#323231] p-2 pl-0"
            >
              <p className="">{signature.text}</p>
              <p className=" text-gray-400 text-sm my-2">
                {signature.name} / {signature.date}
              </p>
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
}

export default Guestbook;

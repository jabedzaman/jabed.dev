import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useSession, signIn } from "next-auth/react";

function Guestbook() {
  const [signatures, setSignatures] = useState<Message[]>([]);
  const [signature, setSignature] = useState<string>("");
  const { data: session } = useSession();
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages: Message[] = [];
      querySnapshot.forEach((doc) => {
        messages.push({
          id: doc.id,
          ...doc.data(),
        } as Message);
      });
      setSignatures(messages);
    });
    return unsubscribe;
  }, []);
  const addMessage = async () => {
    const messageRef = collection(db, "messages");
    if (session) {
      setSignature("");
      try {
        await addDoc(messageRef, {
          name: session.user?.name,
          message: signature,
          timestamp: Timestamp.now(),
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <div>
        <h1 className="md:text-4xl  text-2xl font-semibold">Guestbook</h1>
      </div>
      <div>
        {session ? (
          <div className="my-5">
            <div className="flex flex-row space-x-2 mt-4 mb-1">
              <input
                className="border border-gray-200 dark:border-gray-700 rounded-md p-2 w-full focus:outline-none"
                type="text"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
                disabled={!session}
                placeholder="Leave a message"
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
                onClick={() => {
                  addMessage();
                }}
                disabled={!session || signature.length === 0}
              >
                Sign
              </button>
            </div>
            <p>
              Signed in as <strong>{session.user?.name}</strong>
            </p>
          </div>
        ) : (
          <div className="flex md:flex-row flex-col items-center justify-center md:space-x-1 space-x-0 md:space-y-0 space-y-2 my-5">
            <p className="font-semibold text-gray-500">
              You need to be signed in to sign the guestbook.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
              onClick={() => signIn("google")}
            >
              Sign in
            </button>
          </div>
        )}
      </div>
      <div>
        {signatures.length > 0 ? (
          signatures.map((signature) => (
            <div key={signature.id} className="py-2">
              <div className="flex flex-row space-x-2">
                <div className="flex flex-row space-x-1">
                  <p className="text-sm font-semibold">{signature.name}</p>
                  <p className="text-sm text-gray-500">:</p>
                  <p className="text-sm">{signature.message}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                {signature.timestamp.toDate().toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 flex justify-center my-10">
            No signatures yet. Be the first to sign!
          </p>
        )}
      </div>
    </div>
  );
}

export default Guestbook;

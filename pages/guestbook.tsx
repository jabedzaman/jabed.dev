import React, { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

type Message = {
  id: string;
  message: string;
  name: string;
  timestamp: Timestamp;
};

function Guestbook() {
  const [signatures, setSignatures] = useState<Message[]>([]);
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages: Message[] = [];
      querySnapshot.forEach((doc) => {
        messages.push({
          id: doc.id,
          message: doc.data().message,
          name: doc.data().name,
          timestamp: doc.data().timestamp,
        });
      });
      setSignatures(messages);
    });
    return unsubscribe;
  }, [db]);
  return (
    <div>
      {signatures.map((signature) => (
        <div key={signature.id} className="py-2">
          <div className="flex flex-row space-x-2">
            <div className="flex flex-col">
              <p className="text-sm font-semibold">{signature.name}</p>
              <p className="text-xs text-gray-500">
                {signature.timestamp.toDate().toLocaleString()}
              </p>
            </div>
          </div>
          <p className="text-sm">{signature.message}</p>
        </div>
      ))}
    </div>
  );
}

export default Guestbook;

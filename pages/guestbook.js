import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Messages from "../components/Messages";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { useSession, signIn } from "next-auth/react";
import Confetti from "react-confetti";
import useWindowDimensions from "../lib/useWindowDimensions";
import { AiOutlineLoading } from "react-icons/ai";

function guestbook() {
  const { height, width } = useWindowDimensions();
  const { data: session } = useSession();
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const addMessage = async (e) => {
    const messageRef = collection(db, "messages");
    try {
      await addDoc(messageRef, {
        name: session.user.name,
        message: message,
        timestamp: Timestamp.now(),
      }).then(
        setSuccess(true),
        setTimeout(() => {
          setSuccess(false);
        }, 7000),
        setMessage("")
      );
    } catch (error) {
      console.log(error);
      setSuccess(false);
    }
    e.preventDefault();
    console.log(message);
  };
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setMessages(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          message: doc.data().message,
          name: doc.data().name,
          timestamp: doc.data().timestamp,
        }))
      );
    });
    return unsubscribe;
  }, [db]);
  return (
    <section className="mx-auto my-3 max-w-3xl lg:px-0 px-5">
      <h1 className="text-3xl font-bold">Guestbook</h1>
      <p className="text-gray-500">
        Sign the guestbook and let me know what you think of my website!
      </p>
      {!session && (
        // <div className=" px-5 py-3 my-5 lg:flex-row flex-col flex items-center justify-center lg:space-x-3 space-x-0 space-y-2 lg:space-y-0">
        //   <p className="text-gray-500">
        //     You need to be signed in to sign the guestbook.
        //   </p>
        //   <Button
        //     variant="contained"
        //     color="priy"
        //     size="small"
        //     onClick={signIn}
        //   >
        //     Sign In
        //   </Button>
        // </div>
        <div className="border rounded p-6 my-4 w-full">
          <p className="my-1">
            Share a message for a future visitor of my site.
          </p>
          <Button
            onClick={signIn}
            variant="contained"
            color="primary"
            size="small"
            className="mt-2"
          >
            Login
          </Button>
        </div>
      )}
      {session && (
        <div className="flex flex-row  items-center justify-center  mt-5 space-x-3 p-3">
          <TextField
            label="Enter Message"
            variant="outlined"
            value={message}
            size="small"
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button disabled={!message} variant="contained" onClick={addMessage}>
            Sign
          </Button>
        </div>
      )}
      {messages.length === 0 && (
        <div className="flex flex-row  items-center justify-center  mt-10 space-x-3 p-3">
          <AiOutlineLoading className="animate-spin" />
        </div>
      )}
      {/* succes state */}
      {success && (
        <>
          <div className="flex flex-row  items-center justify-center  mt-5 space-x-3 p-3">
            <Alert severity="success">Message added successfully!</Alert>
          </div>
          <Confetti width={width} height={height} />
        </>
      )}
      <ul className="flex flex-col items-center justify-center my-10 space-y-5 p-3 lg:px-0">
        {messages.map(({ id, name, message, timestamp }) => (
          <Messages
            key={id}
            name={name}
            message={message}
            timestamp={new Date(timestamp?.toDate()).toUTCString()}
          />
        ))}
      </ul>
    </section>
  );
}

export default guestbook;

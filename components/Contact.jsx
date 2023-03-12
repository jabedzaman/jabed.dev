import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      emailjs
        .sendForm(
          "service_i4vwg5g",
          "template_fkqulia",
          e.target,
          "tDVU54AAJLxXHiuE4"
        )
        .then(
          (result) => {
            console.log(result.text);
            setTimeout(() => {
              setSuccess(false);
            }, 3000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    setSuccess(true);
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <section className="max-w-3xl mx-auto p-5 my-10 lg:p-0">
      <div>
        <h1 className="lg:text-5xl md:text-2xl text-lg font-bold">
          Get in touch
        </h1>
        <p className="text-gray-600 text-xs md:text-sm lg:text-lg">
          Feel free to contact me :)
        </p>
        <div className="flex flex-col space-y-4 mt-8">
          <TextField
            id="outlined-multiline-static"
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-multiline-static"
            label="Email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="text-gray-500"
          />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            value={message}
            rows={4}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            variant="contained"
            disabled={name === "" || email === "" || message === ""}
            onClick={handleSubmit}
            color="primary"
          >
            Let&apos;s talk
          </Button>
        </div>
        {success && (
          <div className="lg:max-w-sm max-w-xs  my-5">
            <Alert severity="success">Will Get back to you soon!</Alert>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;

import { useState } from "react";
import Head from "next/head";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");

    let data = {
      name,
      email,
      subject,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setMessage("");
        setEmail("");
        setBody("");
      }
    });
  };

  return (
    <div className="">
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>

      <main>
        <div className="bg-gradient-to-l from-blue-400 to-blue-200 h-[30rem] ">
          <div className="text-center pt-48">
            <h1 className="text-white font-semibold text-3xl">
              Get in touch with me
            </h1>
            <div className="flex space-x-5 text-white text-xl justify-center pt-3">
              <h2>Data Analytics</h2>
              <h2>Statistical Analysis</h2>
              <h2>Social Media Management</h2>
            </div>
          </div>
        </div>
        {!submitted ? (
          <form
            className="pt-20 pb-40 w-screen grid justify-center"
            name="contact-form"
            method="POST"
            action="contact/?success=true"
          >
            <div className="space-y-6">
              <div>
                <input
                  placeholder="Name"
                  className="border border-gray-300 rounded-md h-12 w-[20rem] md:w-[40rem] text-md px-2"
                  type="text"
                  id="name"
                  name="name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  placeholder="Your email address"
                  className="border border-gray-300 rounded-md  h-12  w-[20rem] md:w-[40rem] text-md px-2"
                  type="text"
                  id="email"
                  name="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  placeholder="Subject"
                  className="border border-gray-300 rounded-md h-12  w-[20rem] md:w-[40rem] text-md px-2"
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div>
                <input
                  placeholder="Country"
                  className="border border-gray-300 rounded-md h-12  w-[20rem] md:w-[40rem] text-md px-2"
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div>
                <input
                  placeholder="State"
                  className="border border-gray-300 rounded-md h-12  w-[20rem] md:w-[40rem] text-md px-2"
                  type="text"
                  list="listid"
                  id="subject"
                  name="subject"
                  required
                  onChange={(e) => setSubject(e.target.value)}
                />
                <datalist id="listid">
                  <option label="label1" value="value1" />
                  <option label="label2" value="value2" />
                </datalist>
              </div>

              <div>
                <textarea
                  placeholder="Message"
                  className="w-[20rem] md:w-[40rem]  h-24 px-3 py-2  border rounded-md"
                  type="text"
                  id="message"
                  name="message"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div></div>
            </div>
            <button
              className="w-40 h-12 bg-gray-900 text-white rounded-md font-semibold"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </form>
        ) : (
          <h1>Thanks for your submission!</h1>
        )}
      </main>
    </div>
  );
}

export default Contact;

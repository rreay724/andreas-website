import { Header, Footer } from "../components/index";

function contact() {
  return (
    <div className="">
      <header className="sticky top-0 z-50">
        <Header />
      </header>
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
        <form className="text-center py-40">
          <div className="space-y-4">
            <div>
              <input
                placeholder="Name"
                className="border border-gray-300 rounded-md h-12 w-[20rem] md:w-[40rem] text-md px-2"
                type="text"
              />
            </div>
            <div>
              <input
                placeholder="Your email address"
                className="border border-gray-300 rounded-md  h-12  w-[20rem] md:w-[40rem] text-md px-2"
                type="text"
              />
            </div>
            <div>
              <input
                placeholder="Reason for contacting"
                className="border border-gray-300 rounded-md  h-12 w-[20rem] md:w-[40rem] text-md px-2"
                type="text"
              />
            </div>
            <div>
              <input
                placeholder="Subject"
                className="border border-gray-300 rounded-md h-12  w-[20rem] md:w-[40rem] text-md px-2"
                type="text"
              />
            </div>
            <div>
              <input
                placeholder="Message"
                className="border border-gray-300 rounded-md  h-12 w-[20rem] md:w-[40rem] text-md px-2"
                type="text"
              />
            </div>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}

export default contact;

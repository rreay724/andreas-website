import { useRouter } from "next/dist/client/router";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";

function Footer() {
  const router = useRouter();
  const linkedInClick = () => {
    document.location.href =
      "https://www.linkedin.com/in/andrea-rodriguez-reay/";
  };
  return (
    <div className="h-[25rem] bg-[#04091e] md:flex md:flex-row-3 md:pt-20 pt-5 md:justify-center">
      <div className="md:w-72 pt-3 md:pt-0 px-3 md:px-0">
        <h2 className="font-semibold text-white text-lg">About This Page</h2>
        <p className="text-gray-500 pt-5">
          This website was coded by Bobby Reay as a Next JS application using
          Tailwind CSS styling.
        </p>
      </div>
      <div className="md:w-72 md:ml-20 pt-3 md:pt-0 px-3 md:px-0">
        <h2 className="font-semibold text-white text-lg">Contact Me</h2>
        <p className="text-gray-500 pt-5">
          I'm open to new opportunities, questions about my experience or any
          other inqueries. You can send me a message{" "}
          <a
            className="text-blue-500 cursor-pointer hover:text-blue-600"
            onClick={() => router.push("/contact")}
          >
            here
          </a>
          .
        </p>
      </div>
      <div className="md:w-72 md:ml-20 pt-3 md:pt-0 px-3 md:px-0">
        <h2 className="font-semibold text-white text-lg">Follow Me</h2>
        <p className="text-gray-500 pt-5">Connect with me.</p>
        <div className="text-white pt-5">
          <BsLinkedin
            className="cursor-pointer"
            onClick={linkedInClick}
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;

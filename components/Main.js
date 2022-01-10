function Profile() {
  return (
    <div>
      <div className="flex h-[35rem] bg-blue-50 justify-center">
        <div className="space-y-4 mr-20 items-center mt-36">
          <h2 className="text-2xl font-semibold">Andrea Rodriguez</h2>
          <p className="text-gray-500">
            Sample text to tell everyone how awesome you are.
          </p>
          <button className="border bg-blue-400 px-12 py-2 border-none text-white hover:shadow-xl transition transform duration-300 ease-in-out">
            MY PROJECTS
          </button>
        </div>
        <img
          src="/profile_pic.jpeg"
          className="w-[30rem] h-[30rem] shadow-lg"
          alt=""
        />
      </div>
      <div className="h-[35rem] bg-white border-t border-gray-300">
        <div className="ml-10 w-[80rem] mt-20">
          <h1 className="text-[35px] font-semibold">PERSONAL DETAILS</h1>
          <div className="flex space-x-5 h-48">
            <div className="border-l-2 border-blue-500" />
            <p className="items-center pt-5">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
          <button className="mt-5 border bg-blue-400 px-12 py-2 border-none text-white hover:shadow-xl transition transform duration-300 ease-in-out">
            ABOUT ME
          </button>
        </div>
      </div>
      <div className="h-[35rem] bg-white border-t border-gray-300 text-center">
        <h1>Areas of Interest</h1>
        <p>Take a look at my main areas of expertiece</p>
      </div>
    </div>
  );
}

export default Profile;

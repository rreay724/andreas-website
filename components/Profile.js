function Profile() {
  return (
    <div className="flex h-[35rem] bg-blue-50 justify-center">
      <div className="space-y-4 mr-20 items-center mt-36">
        <h2 className="text-xl font-semibold">Andrea Rodriguez</h2>
        <p className="text-gray-500">
          Experienced data analytics professional.
        </p>
        <button className="border bg-blue-400 px-10 py-2 border-none text-white hover:shadow-xl transition transform duration-300 ease-in-out">
          My Projects
        </button>
      </div>
      <img
        src="/profile_pic.jpeg"
        className="w-[30rem] h-[30rem] shadow-lg"
        alt=""
      />
    </div>
  );
}

export default Profile;

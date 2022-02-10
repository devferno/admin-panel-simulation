import { FaUserAlt } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="w-full flex justify-between px-9 py-3 items-center border-b-2 bg-white">
      <div className="brand font-extrabold text-2xl cursor-pointer text-blue-900">
        Bank
      </div>
      <div className="flex justify-between">
        <button className="bg-white border-red-600 border-2 text-black font-bold px-4 py-1 mx-3 rounded">
          deconnecter
        </button>
        <div className="avatar">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            className="rounded-full w-12 h-12 object-cover"
            alt="account"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;

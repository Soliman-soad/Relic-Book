import { ImBooks } from "react-icons/im";
import { HiUsers } from "react-icons/hi";
import { MdAddCard, MdAddShoppingCart } from "react-icons/md";

export const Statistics = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <p className="text-sm text-blue-500 mb-12 uppercase font-semibold text-center">Statistics</p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-300 sm:w-12 sm:h-12 text-2xl text-white">
              <ImBooks/>
            </div>
            <h6 className="text-4xl font-bold text-slate-800">
              819
            </h6>
            <p className="mb-2 font-bold text-md">Books</p>
            <p className="text-gray-700">
              Here you can find your different category's books with your choice.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-300 sm:w-12 sm:h-12 text-2xl text-white">
              <HiUsers/>
            </div>
            <h6 className="text-4xl font-bold text-slate-800 ">
              1.3K
            </h6>
            <p className="mb-2 font-bold text-md">Users</p>
            <p className="text-gray-700">
              We have so many seller and buyers so that you can buy or sell that easily.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-300 sm:w-12 sm:h-12 text-2xl text-white">
              <MdAddCard/>
            </div>
            <h6 className="text-4xl font-bold text-slate-800">91</h6>
            <p className="mb-2 font-bold text-md">Subscribers</p>
            <p className="text-gray-700">
              With subscription you can advertise your book on top page and many more facility.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-300 sm:w-12 sm:h-12 text-2xl text-white">
              <MdAddShoppingCart/>
            </div>
            <h6 className="text-4xl font-bold text-slate-800">52</h6>
            <p className="mb-2 font-bold text-md">Products</p>
            <p className="text-gray-700">
              We have enough resources for you and we verify that by our self.
            </p>
          </div>
        </div>
      </div>
    );
  };
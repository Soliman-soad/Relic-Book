import React from "react";
import { GiBuyCard} from "react-icons/gi";
import { RiUserVoiceFill } from "react-icons/ri";
import { Link } from "react-router-dom";


const Choice = () => {
  return (
    <div className="relative bg-sky-900 my-16">
      <div className="relative bg-sky-900 bg-opacity-75 text-white py-14">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Want to sell or buy ?</h1>
          <p className="md:w-1/2 mx-auto px-3 md:px-0 mt-4">
            You can buy or sell your book any time from anywhere. We have large
            group of community. Find Out More About New Books Published by the Royal Botanic Garden Edinburgh. Get Your Copy of the Latest Launch, The Yew Hedge by Martin Gardner. Find Out Whats On.
          </p>
        </div>
        <div className="relative md:-bottom-28">
        <div className=" md:w-3/4 md:grid grid-cols-2 mx-auto gap-5">
          <Link to='/dashboard'>
          <div className="relative rounded-lg ">
            <img src="https://img.freepik.com/free-photo/seller-man-mobile-phone-professional-consultant-tech-store-shop-works-cashier_627829-4991.jpg?w=740&t=st=1679360427~exp=1679361027~hmac=22a473402c249544fdc57c830667244e1007c1d51e958179cddfc9eee4024a94" 
            alt=""
            className="absolute inset-0 object-cover w-full h-full "
            />
            <div className="relative bg-teal-900 bg-opacity-75 text-white font-semibold px-14 py-10 hover:bg-opacity-100 group h-full duration-100 ease-in hover:scale-[1.06]">
                
                <div className="text-4xl mb-4 group-hover:animate-bounce"><RiUserVoiceFill/></div>
                <div>
                <h2 className="text-xl uppercase"> Sell now</h2>
                <p className="font-medium">It is easy to sell your book just click here.</p>
                </div>
            </div>
          </div>
          </Link>
          <Link to="/books">
          <div className="relative rounded-lg ">
            <img src="https://img.freepik.com/free-photo/smiling-male-consulting-client-online_1163-3987.jpg?size=626&ext=jpg&uid=R68670765&ga=GA1.1.31902201.1666701009&semt=sph"
             alt=""
             className="absolute inset-0 object-cover w-full h-full "
             />
            <div className="relative bg-purple-900 bg-opacity-75 text-white font-semibold px-14 py-10 h-full group hover:bg-opacity-100 duration-100 ease-in hover:scale-[1.06]">
                <div className="text-4xl mb-4 group-hover:animate-bounce"><GiBuyCard/></div>
                <div>
                <h2 className="text-xl uppercase"> Buy now</h2>
                <p className="font-medium">Click here to search book.</p>
                </div>
            </div>
          </div>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Choice;

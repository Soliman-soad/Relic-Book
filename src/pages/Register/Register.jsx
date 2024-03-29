import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ProfileContext } from "../../context/UserContext";

const Register = () => {
  const { register, changeProfile, popUpSignIn } = useContext(ProfileContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [errorMessage, setErrorMessage] = useState(null);
  const userData = (email,role) => {
    const currentUser ={
      email: email,
      role:role
    }
    fetch('https://relic-book-server-soliman-soad.vercel.app/user',{
				method:'POST',
				headers:{
					'content-type':'application/json'
				},
				body: JSON.stringify(currentUser)
			})
			.then(res=> res.json())
			.then(data => {
				console.log(data)
			})
  }
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const img = event.target.img.value;
    const role = event.target.role.value;
    console.log(role)
    register(email, password)
      .then((result) => {
        const user = result.user;
        update(name, img);
        userData(email,role)
        const currentUser = {
          user: user.email,
        };
        fetch("https://relic-book-server-soliman-soad.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
            navigate(from, { replace: true });
          });
        console.log(user)
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(error.message);
      });
  };
  const update = (name, img) => {
    changeProfile(name, img)
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const handleGoogleLogIn = () => {
    popUpSignIn()
      .then((result) => {
        const user = result.user;
        userData(user.email,"buyer")
        const currentUser = {
          user: user.email,
        };
        fetch("https://relic-book-server-soliman-soad.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
            navigate(from, { replace: true });
          });
        console.log(user)
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className='bg-slate-100 h-full py-10'>
      <div className=" mx-auto items-center rounded-md ">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto shadow-lg bg-white">
          <h1 className="text-2xl font-bold text-center text-gray-900">
            Register
          </h1>
          <form
            onSubmit={handleRegister}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <input
                type="text"
                name="name"
                id="username"
                placeholder="Username"
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 "
              />
            </div>
            <div className="space-y-1 text-sm">
              <input
                type="text"
                name="img"
                id="img"
                placeholder="Img url"
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 "
              />
            </div>
            <div className="space-y-1 text-sm">
              <select name='role' className="select w-full px-4 py-3 rounded-md dark:bg-gray-200 text-gray-900">
                <option value='buyer'>Buyer</option>
                <option value='seller'>Seller</option>
              </select>
            </div>
            <div className="space-y-1 text-sm">
              <input
                type="email"
                name="email"
                id="Email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 "
              />
            </div>
            <div className="space-y-1 text-sm">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-200 text-gray-900  "
              />
              <div className="flex justify-end text-xs text-gray-900">
                <p className="text-red-600">{errorMessage}</p>
              </div>
            </div>
            <button
              type="submit"
              className="block w-full p-3 text-center rounded-sm   bg-sky-600 btn border-none text-white font-bold"
            >
              Register
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm text-gray-900">
              Register with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleGoogleLogIn}
              aria-label="Log in with Google"
              className="p-3 rounded-md text-white bg-red-600 flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current mr-2"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              Sign up with Google
            </button>
          </div>
          <p className="text-xs text-center sm:px-6 text-gray-900">
            Already have an account?
            <Link to="/login" className="underline dark:text-blue-900">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

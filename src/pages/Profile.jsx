import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileContext } from '../context/UserContext';


const Profile = () => {
    const {user,changeProfile} = useContext(ProfileContext);
    const navigate = useNavigate()
    const handleChange =event=>{
        event.preventDefault();
        const name = event.target.name.value;
        const img = event.target.img.value;
        changeProfile(name,img)
        .then(()=>{
            console.log(user)
            navigate('/profile')
        })
        .catch(error => console.log(error))
    }
    console.log(user)
    return (
        <div>
            <div className="w-full h-screen p-8 flex flex-col md:flex-row  sm:space-x-6 ">
	<div className="w-5/12 ">
		<img src={user?.photoURL===null ? "https://img.freepik.com/free-vector/illustrated-man-with-social-media_53876-26710.jpg?w=740&t=st=1667967886~exp=1667968486~hmac=598801c588d43a5b616530d421dd2bb45698e44965f4c7f73e938082cd79efa8" :user?.photoURL } alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
	</div>
	<div className="flex flex-col space-y-4">
		<div>
			<h2 className="text-2xl font-semibold">{user?.displayName}</h2>
		</div>
		<div className="space-y-1">
			<span className="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
					<path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
				</svg>
				<span className="text-gray-700">{user?.email}</span>
			</span>
			
            <form onSubmit={handleChange} className='mx-auto'>
            <div className="space-y-2">
				<label htmlFor="name" className="block text-sm">Full Name</label>
				<input type="text" name="name" id="name" placeholder="Change name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-white dark:text-gray-100 focus:dark:border-violet-400" />
			</div>
			<div className="space-y-2">
				<label htmlFor="img" className="block text-sm">Image url</label>
				<input type="text" name="img" id="img" placeholder={user?.photoURL ===null ? 'default' : user?.photoURL} className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-white dark:text-gray-100 focus:dark:border-violet-400" />
			</div>
            <button type="submit" className="w-full px-8 mt-5 py-3 font-semibold rounded-md bg-blue-500 text-white">Update profile</button>
            </form>
		</div>
	</div>
			</div>
        </div>
    );
};

export default Profile;
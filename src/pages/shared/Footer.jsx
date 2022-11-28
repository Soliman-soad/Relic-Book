import React from 'react';


const Footer = () => {
    return (
        <div>
            <footer className="px-4 py-8 dark:bg-gray-800 dark:text-gray-400">
	<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
			<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
				<li>
					<p>All rights and condition preserved by Soliman</p>
				</li>
				
			</ul>
		</div>
		<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
			<li>
				<a href="https://github.com/Soliman-soad">Github</a>
			</li>
			<li>
				<a href="https://www.facebook.com/mdsolimanalam.soad.1/">Facebook</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/md-soliman-alam/">LinkedIn</a>
			</li>
		</ul>
	</div>
</footer>
        </div>
    );
};

export default Footer;
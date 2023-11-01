import React from 'react';
import myImg from '../images/hero.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
					<p>Hallo Guys Perkenalkan Nama saya Herdy</p>
					<p> saya adalah siswa dari Sekolah SMK PGRI 2 PONOROGO </p>
					<p>Umur Saya 17Th saya Kelas 11 Jurusan Rpl</p>
					ini merupakan Web Personal Portofolio Saya
					   dengan menggunakan Framework React+Vite
				</p>
				<a
					href="mailto:webcifar.com"
					className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>
					mr.herdi@gmail.com
				</a>
			</div>

			<img
				src={myImg}
				alt="Herdy"
				className="w-full md:w-6/12 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About;

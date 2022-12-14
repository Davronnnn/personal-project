import type { NextPage } from 'next';

import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { useState } from 'react';

import LoginImg from '../assets/images/login.webp';

interface IUser {
	_id: string;
	name: string;
	image: string;
	email: string;
	places: string[];
}

interface IUsers {
	users: IUser[];
}

const API_URL: string = 'https://shared-app-mern.herokuapp.com/api/users';

const Login = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const [userList, setUserList] = useState(props.users);
	console.log(props);
	if (!userList) return <h1>There is no any user...</h1>;

	// const addPost = async (e: React.FormEvent, formData: IUser) => {
	// 	e.preventDefault();
	// 	const post: IUser = {
	// 		userId: 1,
	// 		id: Math.random(),
	// 		title: formData.title,
	// 		body: formData.body,
	// 	};
	// 	setUserList([post, ...userList]);
	// };

	// const deletePost = async (id: string) => {
	// 	const posts: IUser[] = userList.filter(
	// 		(user: IUser) => user._id !== id
	// 	);
	// 	console.log(posts);
	// 	setUserList(posts);
	// };

	return (
		<main>
			<section className='h-full gradient-form bg-gray-200 md:h-screen'>
				<div className='container py-12 px-6 h-full'>
					<div className='flex justify-center items-center flex-wrap h-full g-6 text-gray-800'>
						<div className='xl:w-10/12'>
							<div className='block bg-white shadow-lg rounded-lg'>
								<div className='lg:flex lg:flex-wrap g-0'>
									<div className='lg:w-6/12 px-4 md:px-0'>
										<div className='md:p-12 md:mx-6'>
											<div className='text-center'>
												<Image
													className='mx-auto w-48'
													src={LoginImg}
													alt='logo'
												/>
												<h4 className='text-xl font-semibold mt-1 mb-12 pb-1'>
													We are The Lotus Team
												</h4>
											</div>
											<form>
												<p className='mb-4'>
													Please login to your account
												</p>
												<div className='mb-4'>
													<input
														type='text'
														className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
														id='exampleFormControlInput1'
														placeholder='Username'
													/>
												</div>
												<div className='mb-4'>
													<input
														type='password'
														className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
														id='exampleFormControlInput1'
														placeholder='Password'
													/>
												</div>
												<div className='text-center pt-1 mb-12 pb-1'>
													<button
														className='inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
														type='button'
														data-mdb-ripple='true'
														data-mdb-ripple-color='light'
														style={{
															background:
																'linear-gradient(to right,#ee7724,#d8363a,#dd3675,#b44593)',
														}}>
														Log in
													</button>
													<a
														className='text-gray-500'
														href='#!'>
														Forgot password?
													</a>
												</div>
												<div className='flex items-center justify-between pb-6'>
													<p className='mb-0 mr-2'>
														Do not have an account?
													</p>
													<button
														type='button'
														className='inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
														data-mdb-ripple='true'
														data-mdb-ripple-color='light'>
														Danger
													</button>
												</div>
											</form>
										</div>
									</div>
									<div
										className='lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none'
										style={{
											background: 'white',
											color: '#000',
										}}>
										<div className='text-dark px-4 py-6 md:p-12 md:mx-6'>
											<h4 className='text-xl font-semibold mb-6'>
												We are more than just a company
											</h4>
											{/* <p className='text-sm'>
												Lorem ipsum dolor sit amet,
												consectetur adipisicing elit,
												sed do eiusmod tempor incididunt
												ut labore et dolore magna
												aliqua. Ut enim ad minim veniam,
												quis nostrud exercitation
												ullamco laboris nisi ut aliquip
												ex ea commodo consequat.
											</p> */}
											{/* {userList.users.map((user) => {
												return (
													<div key={user._id}>
														<h4 className='text-xl font-semibold mb-6'>
															{user.name}
														</h4>
														<p className='text-sm'>
															{user.email}
														</p>
													</div>
												);
											})} */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export async function getStaticProps() {
	const res = await fetch(API_URL);
	const users: IUsers = await res.json();
	console.log(users);

	return {
		props: {
			users,
		},
	};
}
export default Login;

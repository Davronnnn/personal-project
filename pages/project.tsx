import { InferGetStaticPropsType } from 'next';
import { useState } from 'react';

interface IPost {
	userId: number;
	id: number;
	title: string;
	body: string;
}
const API_URL: string = 'https://jsonplaceholder.typicode.com/posts';

const Project = ({
	posts,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
	const [postList, setPostList] = useState(posts);

	if (!postList) return <h1>Loading...</h1>;

	const addPost = async (e: React.FormEvent, formData: IPost) => {
		e.preventDefault();
		const post: IPost = {
			userId: 1,
			id: Math.random(),
			title: formData.title,
			body: formData.body,
		};
		setPostList([post, ...postList]);
	};

	const deletePost = async (id: number) => {
		const posts: IPost[] = postList.filter((post: IPost) => post.id !== id);
		console.log(posts);
		setPostList(posts);
	};

	return (
		<main>
			<h1>My posts</h1>
			{postList.map((post: IPost) => (
				<div key={post.id}>
					<h2>{post.title}</h2>
					<p>{post.body}</p>
					<button onClick={() => deletePost(post.id)}>Delete</button>
				</div>
			))}
		</main>
	);
};

export async function getServerSideProps() {
	const res = await fetch(API_URL);
	const posts: IPost[] = await res.json();

	return {
		props: {
			posts,
		},
	};
}
export default Project;

import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";
import { useCallback, useEffect, useState } from "react";

const exampleCode = `
const useAsync = (asyncFunction, immediate = true) => {
	const [result, setResult] = useState({
		error: null,
		data: null,
		loading: false,
	});

	const executor = useCallback(async () => {
		setResult({ error: null, data: null, loading: true });
		try {
			const data = await asyncFunction();
			setResult({ error: null, data, loading: false });
		} catch (error) {
			setResult({ error, data: null, loading: false });
		}
	}, [asyncFunction]);

	useEffect(() => {
		if (immediate) {
			executor();
		}
	}, [immediate]);

	return result;
};

const fetchUsers = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	return res.json();
};

const UseAsyncHook = () => {
	const { data, error, loading } = useAsync(fetchUsers);

	return (
		<>
				{loading && <p className="text-white">Loading...</p>}
				{error && <p className="text-red-500">Error: {error.message}</p>}
				{data && (
					<ul className="text-white">
						{" "}
						{data.map((user) => (
							<li key={user.id}>{user.name}</li>
						))}{" "}
					</ul>
				)}
		</>
	);
};
export default UseAsyncHook;
`.trim();

const useAsync = (asyncFunction, immediate = true) => {
	const [result, setResult] = useState({
		error: null,
		data: null,
		loading: false,
	});

	const executor = useCallback(async () => {
		setResult({ error: null, data: null, loading: true });
		try {
			const data = await asyncFunction();
			setResult({ error: null, data, loading: false });
		} catch (error) {
			setResult({ error, data: null, loading: false });
		}
	}, [asyncFunction]);

	useEffect(() => {
		if (immediate) {
			executor();
		}
	}, [immediate]);

	return result;
};

const fetchUsers = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	return res.json();
};

const UseAsyncHook = () => {
	const { data = [], error, loading } = useAsync(fetchUsers);
	console.log(error);
	return (
		<>
			<LearningBox>
				{loading && <p className="text-white">Loading...</p>}
				{error && <p className="text-red-500">Error: {error.message}</p>}
				{data?.length > 0 && (
					<ul className="text-white">
						{data?.map((user) => (
							<li key={user.id}>{user.name}</li>
						))}{" "}
					</ul>
				)}
			</LearningBox>
			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default UseAsyncHook;

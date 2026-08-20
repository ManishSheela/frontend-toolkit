// InfiniteScroll.jsx
import React, { useState, useRef, useEffect, useCallback,lazy } from 'react';
import LearningBox from "@/src/components/organisms/LearningBox";
const CodeDisplay = lazy(
	() => import("@/src/components/molecules/CodeDisplay"),
);

import { extractSnippet } from "@/src/utils/extractCodeSnippet";
import pageSource from "./index.jsx?raw";


// #region implementation


const LIMIT = 20;

const useInfiniteScroll = (callback, threshold = 20) => {
	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	const handleScroll = useCallback(
		(e) => {
			const { scrollHeight, scrollTop, clientHeight } = e.target;

			const remaining = scrollHeight - (scrollTop + clientHeight);

			if (remaining <= threshold) {
				callbackRef.current();
			}
		},
		[threshold]
	);

	return handleScroll;
};

export default function InfiniteScroll() {
	const [products, setProducts] = useState([]);
	const [skip, setSkip] = useState(0);
	const [loading, setLoading] = useState(false);
	const [hasMore, setHasMore] = useState(true);

	const fetchProducts = useCallback(async () => {
		if (loading || !hasMore) return;

		setLoading(true);

		try {
			const res = await fetch(
				`https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
			);

			const data = await res.json();

			setProducts((prev) => [...prev, ...data.products]);

			const nextSkip = skip + LIMIT;

			setSkip(nextSkip);

			if (nextSkip >= data.total) {
				setHasMore(false);
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}, [skip, loading, hasMore]);

	useEffect(() => {
		fetchProducts();
	}, []);

	const handleScroll = useInfiniteScroll(fetchProducts);

	return (
		<>


			<LearningBox
				onScroll={handleScroll}
				className="gap-2 overflow-auto shadow-xs"
			>

				{products.map((product) => (
					<div
						key={product.id}
						style={{
							display: 'flex',
							gap: '12px',
							padding: '12px',
							marginBottom: '12px',
							border: '1px solid #eee',
							borderRadius: '8px',
						}}
					>
						<img
							src={product.thumbnail}
							alt={product.title}
							width={80}
							height={80}
						/>

						<div>
							<h3>{product.title}</h3>
							<p>${product.price}</p>
						</div>
					</div>
				))}

				{loading && <div style={{ textAlign: 'center' }}>Loading...</div>}

				{!hasMore && <div style={{ textAlign: 'center' }}>No more products</div>}

			</LearningBox>
			<CodeDisplay codeString={extractSnippet(pageSource)} />

		</>

	);
}



// #endregion implementation

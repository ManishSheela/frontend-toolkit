import { CommentsData } from "@/src/utils/nestedComments";
import { useState } from "react";

export const useComments = () => {
	const [comments, setComments] = useState(() => CommentsData);

	const addComment = (tree, commentId, text) => {
		if (commentId === null) {
			return [
				...tree,
				{
					id: Date.now() + Math.random(),
					text,
					replies: [],
				},
			];
		}

		return tree.map((comment) => {
			if (comment.id === commentId) {
				return {
					...comment,
					replies: [
						...comment.replies,
						{
							id: Date.now() + Math.random(),
							text,
							replies: [],
						},
					],
				};
			}
			return {
				...comment,
				replies: addComment(comment.replies, commentId, text),
			};
		});
	};

	const editComment = (tree, commentId, text) => {
		return tree.map((comment) => {
			if (comment.id === commentId) {
				return { ...comment, text };
			}
			return {
				...comment,
				replies: editComment(comment.replies, commentId, text),
			};
		});
	};

	const deleteComment = (tree, commentId) => {
		return tree
			.filter((comment) => comment.id !== commentId)
			.map((comment) => {
				return {
					...comment,
					replies: deleteComment(comment.replies, commentId),
				};
			});
	};

	const handleAddComments = (commentId, text) => {
		setComments((prev) => addComment(prev, commentId, text));
	};

	const handleEditComment = (commentId, text) => {
		setComments((prev) => editComment(prev, commentId, text));
	};

	const handleDeleteComment = (commentId) => {
		setComments((prev) => deleteComment(prev, commentId));
	};

	return {
		comments,
		handleAddComments,
		handleDeleteComment,
		handleEditComment,
	};
};

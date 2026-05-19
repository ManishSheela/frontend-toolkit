import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";
import { useComments } from "./useComments";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const CommentItem = ({
	comment,
	handleAddComments,
	handleEditComment,
	handleDeleteComment,
}) => {
	const [isReplying, setIsReplying] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [replyText, setReplyText] = useState("");
	const [editText, setEditText] = useState("");

	const onReply = () => {
		if (replyText.trim()) {
			handleAddComments(comment.id, replyText);
			setReplyText("");
			setIsReplying(false);
			setIsCollapsed(false);
		}
	};

	const onEdit = () => {
		if (editText.trim()) {
			handleEditComment(comment.id, editText);
			setIsEditing(false);
		}
	};

	return (
		<>
			<div className="flex flex-col justify-between align-start shadow-lg rounded-lg p-2 mb-2 bg-white">
				<p className="border-l-4 border-primary pl-2 text-start">
					{comment.text}
				</p>
				<div className="flex flex-row justify-end align-end gap-4 mt-3 border-t-2 border-primary">
					<p
						className="text-primary cursor-pointer"
						onClick={() => setIsReplying(true)}
					>
						Reply
					</p>
					<p
						className="text-primary cursor-pointer font-xs"
						onClick={() => {
							setEditText(comment.text);
							setIsEditing(true);
						}}
					>
						Edit
					</p>
					<p
						className="text-primary cursor-pointer"
						onClick={() => handleDeleteComment(comment.id)}
					>
						Delete
					</p>
				</div>
			</div>
			{isEditing && (
				<div className="flex flex-row gap-4 ml-8">
					<Textarea
						rows={1}
						value={editText}
						placeholder="Edit comment..."
						onChange={(e) => setEditText(e.target.value)}
						className="w-full p-2  resize-none"
					/>

					<div className="flex flex-row justify-end align-end gap-2 mt-2">
						<p className="text-primary cursor-pointer" onClick={onEdit}>
							Save
						</p>
						<p
							className="text-primary cursor-pointer"
							onClick={() => setIsEditing(false)}
						>
							Cancel
						</p>
					</div>
				</div>
			)}
			{isReplying && (
				<div className="flex flex-row gap-4 ml-8">
					<Textarea
						rows={1}
						value={replyText}
						placeholder="reply to comment..."
						onChange={(e) => setReplyText(e.target.value)}
						className="w-full p-2  resize-none"
					/>

					<div className="flex flex-row justify-end align-end gap-2 mt-2">
						<p className="text-primary cursor-pointer" onClick={onReply}>
							Reply
						</p>
						<p
							className="text-primary cursor-pointer"
							onClick={() => setIsReplying(false)}
						>
							Cancel
						</p>
					</div>
				</div>
			)}
			<div className="ml-8 border-l-2 border-slate-100 pl-2">
				{comment?.replies?.map((reply) => (
					<CommentItem
						key={reply.id}
						comment={reply}
						handleAddComments={handleAddComments}
						handleEditComment={handleEditComment}
						handleDeleteComment={handleDeleteComment}
					/>
				))}
			</div>
		</>
	);
};

const NestedComments = () => {
	const {
		comments,
		handleAddComments,
		handleEditComment,
		handleDeleteComment,
	} = useComments();
	const [newComment, setNewComment] = useState("");

	const handleSubmit = () => {
		if (newComment.trim()) {
			handleAddComments(null, newComment);
			setNewComment("");
		}
	};

	return (
		<>
			<LearningBox>
				<div className="relative h-full flex flex-col">
					<div className="flex-1 flex-col w-full overflow-y-scroll p-4 pb-32">
						{comments.map((comment) => (
							<CommentItem
								key={comment.id}
								comment={comment}
								handleAddComments={handleAddComments}
								handleEditComment={handleEditComment}
								handleDeleteComment={handleDeleteComment}
							/>
						))}
					</div>

					<div className="absolute bottom-0 left-0 w-full flex flex-row gap-4">
						<Textarea
							rows={2}
							value={newComment}
							placeholder="Add a comment..."
							onChange={(e) => setNewComment(e.target.value)}
							className="p-4  resize-none"
						/>

						<Button className="bg-primary text-white " onClick={handleSubmit}>
							Send
						</Button>
					</div>
				</div>
			</LearningBox>

			<CodeDisplay codeString={"Manish"} />
		</>
	);
};

export default NestedComments;

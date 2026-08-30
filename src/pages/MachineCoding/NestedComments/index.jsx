import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { extractSnippet } from "@/src/utils/extractCodeSnippet";
import pageSource from "./index.jsx?raw";
import { CommentsData } from "@/src/utils/nestedComments";
import { comment } from "postcss";

// #region implementation
function addCommentToTree(comments, commentId, text) {
  return comments.map((comment) => {
    if (comment.id === commentId) {
      return { ...comment, text };
    }
    return {
      ...comment,
      replies: addCommentToTree(comment.replies, commentId, text),
    };
  });
}

function deleteCommentToTree(comments, commentId) {
  return comments
    .filter((comment) => comment.id !== commentId)
    .map((comment) => ({
      ...comment,
      replies: deleteCommentToTree(comment.replies, commentId),
    }));
}
function editCommentToTree(comments, commentId, text) {
  return comments.map((comment) => {
    if (comment.id === commentId) {
      return { ...comment, text };
    }
    return {
      ...comment,
      replies: addCommentToTree(comment.replies, commentId, text),
    };
  });
}

const useComments = () => {
  const [comments, setComments] = useState(() => CommentsData);

  const addComment = (commentId, text) => {
    if (commentId) {
      setComments((prev) => [{ text, id: Date.now(), replies: [] }, ...prev]);
    } else {
      setComments((prevComments) =>
        addCommentToTree(prevComments, commentId, text),
      );
    }
  };

  const deleteComment = (commentId) => {
    setComments((prevComments) => deleteCommentToTree(prevComments, commentId));
  };

  const editComment = (commentId, text) => {
    setComments((prevComments) =>
      editCommentToTree(prevComments, commentId, text),
    );
  };

  return { comments, addComment, deleteComment, editComment };
};

const Comment = ({ comment, addComment, deleteComment, editComment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);

  const [showReply, setShowReply] = useState(false);
  const [replyText, setReplyText] = useState("");

  // Edit
  const handleEdit = () => {
    if (!editText.trim()) return;

    editComment(comment.id, editText);

    setIsEditing(false);
  };

  // Reply
  const handleReply = () => {
    if (!replyText.trim()) return;

    addComment(comment.id, replyText);

    setReplyText("");
    setShowReply(false);
  };

  return (
    <div className="border rounded-lg p-3 mb-3">
      {/* Comment */}

      {isEditing ? (
        <div className="flex gap-2">
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 border rounded px-2 py-1"
          />

          <Button onClick={handleEdit}>Save</Button>

          <Button
            onClick={() => {
              setEditText(comment.text);
              setIsEditing(false);
            }}
          >
            Cancel
          </Button>
        </div>
      ) : (
        <p className="align-left">{comment.text}</p>
      )}

      {/* Actions */}

      <div className="flex gap-2 mt-2">
        {!isEditing && <Button onClick={() => setIsEditing(true)}>Edit</Button>}

        <Button onClick={() => deleteComment(comment.id)}>Delete</Button>

        <Button onClick={() => setShowReply((prev) => !prev)}>Reply</Button>
      </div>

      {/* Reply input */}

      {showReply && (
        <div className="flex gap-2 mt-3">
          <input
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
            className="flex-1 border rounded px-2 py-1"
          />

          <Button onClick={handleReply}>Add</Button>
        </div>
      )}

      {/* Nested replies */}

      {comment.replies?.length > 0 && (
        <div className="ml-4 mt-3 border-l-2 pl-3">
          {comment.replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              addComment={addComment}
              deleteComment={deleteComment}
              editComment={editComment}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const NestedComments = () => {
  const [text, setText] = useState("");
  const { comments, addComment, deleteComment, editComment } = useComments();

  const handleAddComment = (comment) => {
    addComment(comment);
    setText("");
  };
  return (
    <>
      <LearningBox>
        <div className="relative h-full flex flex-col">
          <div className="flex-1 flex-col w-full overflow-y-scroll p-4 pb-32">
            {comments.map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
                addComment={addComment}
                deleteComment={deleteComment}
                editComment={editComment}
              />
            ))}
          </div>

          <div className="absolute bottom-0 left-0 w-full flex flex-row gap-4">
            <input
              className="border-none p-2 focus:outline-none "
              type="text"
              placeholder="Write a comment..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button
              className="bg-primary text-white "
              onClick={() => handleAddComment(text)}
            >
              Add Comment
            </Button>
          </div>
        </div>
      </LearningBox>

      <CodeDisplay codeString={extractSnippet(pageSource)} />
    </>
  );
};

export default NestedComments;
// #endregion implementation

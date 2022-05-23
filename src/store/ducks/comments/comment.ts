import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

import { Comment } from "../../../types";

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [] as Comment[],
  },
  reducers: {
    addComment(
      state,
      action: PayloadAction<{
        idCard: string;
        contentComment: string;
        author: string;
      }>
    ) {
      const { idCard, contentComment, author } = action.payload;
      const newComment: Comment = {
        id: uuid(),
        idCard,
        author,
        content: contentComment,
      };
      state.comments.push(newComment);
    },
    deleteComment(state, action: PayloadAction<{ idComment: string }>) {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload.idComment
      );
    },
    updateComment(
      state,
      action: PayloadAction<{ idComment: string; newContent: string }>
    ) {
      const targetComment = state.comments.find(
        (comment) => comment.id === action.payload.idComment
      );
      if (targetComment) {
        targetComment.content = action.payload.newContent;
      }
    },
  },
});

export const { actions, reducer } = commentSlice;

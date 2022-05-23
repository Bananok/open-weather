import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../..";

export const getAllComments = (state: RootState) => state.comment.comments;

export const selectByCardId = (idCard: string) =>
  createSelector(getAllComments, (comments) =>
    comments.filter((comment) => comment.idCard === idCard)
  );

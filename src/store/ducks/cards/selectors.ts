import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../..";

export const getAllCards = (state: RootState) => state.card.cards;

export const selectByColumnId = (idColumn: string) =>
  createSelector(getAllCards, (cards) =>
    cards.filter((card) => card.columnId === idColumn)
  );

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

import { Card } from "../../../types";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [] as Card[],
  },
  reducers: {
    addCard(
      state,
      action: PayloadAction<{
        columnId: string;
        nameCard: string;
        author: string;
      }>
    ) {
      const { columnId, nameCard, author } = action.payload;
      const newCard: Card = {
        name: nameCard,
        id: uuid(),
        columnId,
        author,
        description: "",
        comments: [],
      };
      state.cards.push(newCard);
    },
    deleteCard(state, action: PayloadAction<{ idCard: string }>) {
      state.cards = state.cards.filter(
        (card) => card.id !== action.payload.idCard
      );
    },
    updateDescriptionCard(
      state,
      action: PayloadAction<{
        idCard: string;
        newDescription: string;
      }>
    ) {
      const targetCard = state.cards.find(
        (card) => card.id === action.payload.idCard
      );
      if (targetCard) {
        targetCard.description = action.payload.newDescription;
      }
    },
    updateNameCard(
      state,
      action: PayloadAction<{
        idCard: string;
        newName: string;
      }>
    ) {
      const targetCard = state.cards.find(
        (card) => card.id === action.payload.idCard
      );
      if (targetCard) {
        targetCard.name = action.payload.newName;
      }
    },
  },
});

export const { actions, reducer } = cardSlice;

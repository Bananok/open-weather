import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

import { Column } from "../../../types";

const columnSlice = createSlice({
  name: "columns",
  initialState: {
    columns: [
      {
        id: uuid(),
        name: "TO DO",
        cards: [],
      },
      {
        id: uuid(),
        name: "In progress",
        cards: [],
      },
      {
        id: uuid(),
        name: "Testing",
        cards: [],
      },
      {
        id: uuid(),
        name: "Done",
        cards: [],
      },
    ] as Column[],
  },
  reducers: {
    updateColumn(
      state,
      action: PayloadAction<{ columnId: string; newName: string }>
    ) {
      const targetColumn = state.columns.find(
        (column) => column.id === action.payload.columnId
      );
      if (targetColumn) {
        targetColumn.name = action.payload.newName;
      }
    },
  },
});

export const { actions, reducer } = columnSlice;

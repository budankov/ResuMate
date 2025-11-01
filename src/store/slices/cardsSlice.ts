import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

type GenericCard = {
  id: string;
  data: Record<string, any>;
};

type CardsState = {
  records: Record<string, GenericCard[]>;
  editing?: { namespace?: string; card?: GenericCard | null };
};

const initialState: CardsState = {
  records: {},
  editing: undefined,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (
      state,
      action: PayloadAction<{ namespace: string; cards: GenericCard[] }>,
    ) => {
      state.records[action.payload.namespace] = action.payload.cards;
    },
    addCard: (
      state,
      action: PayloadAction<{
        namespace: string;
        card: Omit<GenericCard, 'id'>;
      }>,
    ) => {
      const { namespace, card } = action.payload;
      const newCard: GenericCard = { id: nanoid(), data: card.data };
      if (!state.records[namespace]) state.records[namespace] = [];
      state.records[namespace].push(newCard);
    },
    updateCard: (
      state,
      action: PayloadAction<{
        namespace: string;
        id: string;
        data: Record<string, any>;
      }>,
    ) => {
      const { namespace, id, data } = action.payload;
      const list = state.records[namespace] || [];
      state.records[namespace] = list.map(c =>
        c.id === id ? { ...c, data } : c,
      );
    },
    removeCard: (
      state,
      action: PayloadAction<{ namespace: string; id: string }>,
    ) => {
      const { namespace, id } = action.payload;
      state.records[namespace] = (state.records[namespace] || []).filter(
        c => c.id !== id,
      );
    },
    openEditor: (
      state,
      action: PayloadAction<{ namespace: string; card?: GenericCard | null }>,
    ) => {
      state.editing = {
        namespace: action.payload.namespace,
        card: action.payload.card ?? null,
      };
    },
    closeEditor: state => {
      state.editing = undefined;
    },
    // no extra helpers needed here for saved flags; saving handled by UI
  },
});

export const {
  setCards,
  addCard,
  updateCard,
  removeCard,
  openEditor,
  closeEditor,
} = cardsSlice.actions;

export default cardsSlice.reducer;

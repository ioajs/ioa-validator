import types from 'typea';

const { $, number } = types;

export default {
  query: {
    limit: number({
      default: 20,
      set(v) { return Number(v) },
    }),
    page: number({
      default: 20,
      set(v) { return Number(v) },
    }),
  }
};
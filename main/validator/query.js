import { number } from 'typea';

export default {
  query: {
    limit: number({ set(v) { return Number(v) } }),
    page: number({ set(v) { return Number(v) } })
  },
};

interface BaseBoard {
  name: string;
  description?: string;
}

interface BaseBoardApi extends BaseBoard {
  id: string;
  archived_at?: string | null;
  created_at?: string;
}

export type { BaseBoardApi };

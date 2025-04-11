interface BaseChannel {
  name: string;
  description?: string;
  private: boolean;
}

interface BaseChanelApi extends BaseChannel {
  id: string;
}

export type { BaseChanelApi };

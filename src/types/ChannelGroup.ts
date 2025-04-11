import { BaseChanelApi } from "./Channel.ts";

interface BaseChanelGroup {
  name: string;
  description?: string;
}

interface BaseChanelGroupApi extends BaseChanelGroup {
  id: string;
}

interface MenuChanelGroupApi extends BaseChanelGroupApi {
  channels: BaseChanelApi[];
}

export type { MenuChanelGroupApi };

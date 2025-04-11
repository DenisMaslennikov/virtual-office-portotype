import { BaseBoardApi } from "./Board.ts";
import { BaseChanelApi } from "./Channel.ts";
import { MenuChanelGroupApi } from "./ChannelGroup.ts";

interface BaseProject {
  name: string;
  description?: string;
  icon?: string;
  prefix?: string;
}

interface BaseProjectApi extends BaseProject {
  id: string;
}

interface MenuProjectApi extends BaseProjectApi {
  boards?: BaseBoardApi[];
  channels?: BaseChanelApi[];
  channels_groups?: MenuChanelGroupApi[];
}

export type { MenuProjectApi };

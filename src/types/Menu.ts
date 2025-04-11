import type { MenuProjectApi } from "./Project.ts";
import type { MenuChanelGroupApi } from "./ChannelGroup.ts";

interface MenuApi {
  projects?: MenuProjectApi[];
  channels_groups?: MenuChanelGroupApi[];
}

export type { MenuApi };

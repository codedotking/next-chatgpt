import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

import ExpandSvg from "@/assets/svg/expand.svg";
import EditSvg from "@/assets/svg/edit.svg";
import SideList from "./List";
import { ModeToggle } from "./ModeToggle";

export default function SideHeader() {
  return (
    <TooltipProvider delayDuration={400}>
      <div className="relative h-full w-full flex-1 items-start border-white/20">
        <h2
          style={{
            position: "absolute",
            border: "0px",
            width: "1px",
            height: "1px",
            padding: "0px",
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0px, 0px, 0px, 0px)",
            whiteSpace: "nowrap",
            overflowWrap: "normal",
          }}>
          历史聊天记录
        </h2>
        <nav
          className="flex h-full w-full flex-col px-3"
          aria-label="历史聊天记录">
          <div className="flex justify-between h-14 items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="flex">
                  <Button
                    size={"icon"}
                    variant={"ghost"}
                    className="hover:bg-slate-200/50">
                    <ExpandSvg className="text-slate-500" />
                  </Button>
                </span>
              </TooltipTrigger>
              <TooltipContent side="right">关闭边栏</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="flex">
                  <Button
                    size={"icon"}
                    variant={"ghost"}
                    className="hover:bg-slate-200/50">
                    <EditSvg className="text-slate-500" />
                  </Button>
                </span>
              </TooltipTrigger>
              <TooltipContent>新聊天</TooltipContent>
            </Tooltip>
          </div>
          <SideList />
          <div className=" hover:bg-slate-200">
            <ModeToggle />
          </div>
        </nav>
      </div>
    </TooltipProvider>
  );
}

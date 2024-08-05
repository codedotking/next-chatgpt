import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

import ExpandSvg from "@/assets/svg/expand.svg";
import EditSvg from "@/assets/svg/edit.svg";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="relative z-0 flex h-full w-full overflow-hidden">
      <div className="flex-shrink-0 overflow-x-hidden bg-primary-foreground w-[260px]">
        <div className="h-full w-[260px]">
          <div className="flex h-full min-h-0 flex-col">
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
                  <TooltipProvider delayDuration={400}>
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
                  </TooltipProvider>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex h-full max-w-full flex-1 flex-col overflow-hidden">
        <Main />
      </div>
    </div>
  );
}

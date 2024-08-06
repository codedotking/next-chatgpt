import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import OptionSvg from "@/assets/svg/option.svg";

const Item = ({ name }: { name: string }) => {
  return (
    <div className="group relative rounded-lg active:opacity-90 hover:bg-slate-200/50">
      <a className="flex items-center gap-2 p-2" href="">
        <div className="relative grow overflow-hidden whitespace-nowrap">
          {name}
          <div className="absolute bottom-0 top-0 to-transparent ltr:right-0 ltr:bg-gradient-to-l rtl:left-0 rtl:bg-gradient-to-r from-token-sidebar-surface-primary from-token-sidebar-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary w-8 from-0% can-hover:group-hover:w-10 can-hover:group-hover:from-60%"></div>
        </div>
      </a>
      <div className="absolute bottom-0 top-0 items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0 flex">
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="flex">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    size={"icon"}
                    variant={"ghost"}
                    className=" bg-transparent hover:bg-transparent">
                    <OptionSvg className="text-slate-500/50 hover:text-slate-500" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  Place content for the popover here.
                </PopoverContent>
              </Popover>
            </span>
          </TooltipTrigger>
          <TooltipContent side="top">选项</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};

export default function SideList() {
  return (
    <ScrollArea className="flex-col flex-1 transition-opacity duration-500 -mr-2 pr-2 overflow-y-auto">
      <div className="flex flex-col gap-2 pb-2 text-token-text-primary text-sm mt-5">
        <ol>
          {Array.from({ length: 50 }).map((_, index) => (
            <li
              key={index}
              className="relative"
              style={{ opacity: 1, height: "auto" }}>
              <Item name={`历史聊天记录 ${index}`} />
            </li>
          ))}
        </ol>
      </div>
    </ScrollArea>
  );
}

import SideHeader from "@/components/chat/side/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="relative z-0 flex h-full w-full overflow-hidden">
      <div className="flex-shrink-0 overflow-x-hidden bg-primary-foreground w-[260px]">
        <div className="h-full w-[260px]">
          <div className="flex h-full min-h-0 flex-col">
            <SideHeader />
          </div>
        </div>
      </div>
      <div className="relative flex h-full max-w-full flex-1 flex-col overflow-hidden">
        <Main />
      </div>
    </div>
  );
}

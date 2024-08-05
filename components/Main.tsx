import { Form } from "./ui/form";

export default function Main() {
  return (
    <div className="relative h-full w-full flex-1 overflow-auto transition-width">
      <div className="flex h-full flex-col focus-visible:outline-0">
        <div className="flex-1 overflow-hidden"></div>
        <div className="md:pt-0 dark:border-white/20 md:border-transparent md:dark:border-transparent w-full">
          <div className="text-base px-3  m-auto md:px-5 lg:px-1 xl:px-5">
            <div className="mx-auto flex flex-1 gap-4 text-base md:gap-5 lg:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]">

                <Form />
            </div>
          </div>
          <div className="relative px-2 py-2 text-center text-xs text-token-text-secondary md:px-[60px]">
            <span>AI 也可能会犯错。请核查重要信息。</span>
          </div>
        </div>
      </div>
    </div>
  );
}

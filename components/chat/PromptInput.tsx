"use client";
import * as React from "react";
import * as Form from "@radix-ui/react-form";
import UpArrowSvg from "@/assets/svg/up-arrow.svg";
import { Textarea } from "../ui/textarea";
import { fetchEventSource } from "@microsoft/fetch-event-source";
import { useImmer } from "use-immer";
import { Button } from "../ui/button";

export type Message = {
  content: string;
  role: string;
  answering: boolean;
};

const message = {
  content: `你好，请问有什么帮助么？`,
  role: "assistant",
  answering: false,
};

interface ChatProps {
  chatId: string;
}

const useChatRequest = () => {
  const [messageList, setMessageList] = useImmer<Message[]>([message]);
  const messages: { content: string; role: string }[] = [message,{
    content: `你好，请问有什么帮助么？`,
    role: "assistant",
    answering: false,
  }];
  
  const params = {
    messages,
    stream: true,
  };

  React.useEffect(() => {
    console.log("messageList", "chat");
  }, []);

  const doChat = async () => {
    await fetchEventSource("/api/chat/completions", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(params),
      onmessage: (msg) => {
        const { data = "" } = msg;
        const chunkJson = JSON.parse(data) as {
          result: string;
          is_end: boolean;
          id: number;
        };
        // setMessageList((draft) => {
        //   const message = draft[draft.length - 1].content;
        //   draft[draft.length - 1].content = message + chunkJson.result;
        // });
      },
      onclose: () => {
        // setMessageList((draft) => {
        //   draft[draft.length - 1].answering = false;
        // });
      },
      onerror: (e) => {
        console.error(e);
      },
    });
  };

  const t = () => {
    console.log("t");
  };

  return {
    doChat,
    t,
    messageList,
  };
};

export default function InputBox() {
  const [serverErrors, setServerErrors] = React.useState({
    email: false,
    password: false,
  });
  const { doChat, t, messageList } = useChatRequest();
  const handleCLick = () => {
    doChat();
    console.log(handleCLick);
  };

  React.useEffect(() => {
    console.log(doChat);
  }, [doChat]);

  return (
    <div className=" w-full">
      <div className="relative flex h-full max-w-full flex-1 flex-col">
        <div className="absolute bottom-full left-0 right-0 z-20"></div>
        <div className="flex w-full items-center">
          <div className="flex w-full flex-col gap-1.5 rounded-[26px] p-1.5 transition-colors bg-[#f4f4f4] dark:bg-token-main-surface-secondary">
            <div className="flex items-end gap-1.5 md:gap-2">
              <div className="flex min-w-0 flex-1 flex-col pl-4">
                <textarea
                  tabIndex={0}
                  style={{ overflowY: "hidden", height: "40px" }}
                  placeholder="给“ChatGPT”发送消息"
                  rows={1}
                  dir="auto"
                  className="m-0 resize-none border-0 bg-transparent px-0 text-token-text-primary focus:ring-0 focus-visible:ring-0 max-h-52"
                  required></textarea>
              </div>
              <Button
                size={"icon"}
                variant={"ghost"}
                onClick={() => {
                  handleCLick();
                }}
                className="mb-1 me-1 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:bg-[#D7D7D7] disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:bg-white dark:text-black dark:focus-visible:outline-white 
        disabled::text-secondary-foreground 
      dark:disabled:text-secondary-foreground">
                <UpArrowSvg />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

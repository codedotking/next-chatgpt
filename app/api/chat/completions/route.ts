import { models } from "@/models";
import { NextRequest } from "next/server";

const POST = async (req: NextRequest) => {
  const params = await req.json();
  return await models.ERNIESpeed128K.chat(params);
};

export { POST };

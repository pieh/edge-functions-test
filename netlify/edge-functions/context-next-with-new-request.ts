import { Config, Context } from "@netlify/edge-functions";

export default function (requestFromOutsideWorld: Request, context: Context) {
  console.log("new-request", requestFromOutsideWorld);
  const newRequest = new Request(
    requestFromOutsideWorld.url,
    requestFromOutsideWorld
  );
  newRequest.headers.set("x-debug-behavior", "passed new request in");
  return context.next(newRequest);
}

export const config: Config = {
  path: "/new-request/*",
};

import { Config, Context } from "@netlify/edge-functions";

export default function (requestFromOutsideWorld: Request, context: Context) {
  requestFromOutsideWorld.headers.set(
    "x-debug-behavior",
    "mutated request headers"
  );
  return context.next();
}

export const config: Config = {
  path: "/mutate-request/*",
};

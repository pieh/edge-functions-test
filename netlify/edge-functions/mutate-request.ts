import { Config, Context } from "@netlify/edge-functions";

export default function (requestFromOutsideWorld: Request, context: Context) {
  console.log("Mutate-request", requestFromOutsideWorld);
  requestFromOutsideWorld.headers.set(
    "x-debug-behavior",
    "mutated request headers before context.next()"
  );
  return context.next();
}

export const config: Config = {
  path: "/mutate-request/*",
};

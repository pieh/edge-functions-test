import { Config, Context } from "@netlify/edge-functions";

export default function (requestFromOutsideWorld: Request, context: Context) {
  console.log("no context.next()", requestFromOutsideWorld);
  requestFromOutsideWorld.headers.set(
    "x-debug-behavior",
    "mutated request headers without context.next()"
  );
}

export const config: Config = {
  path: "/no-context-next/*",
};

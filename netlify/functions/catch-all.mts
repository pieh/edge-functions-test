import { Config } from "@netlify/functions";

export default function (requestFromEdgeFunctions: Request) {
  return Response.json({
    url: requestFromEdgeFunctions.url,
    headers: Object.fromEntries(requestFromEdgeFunctions.headers.entries()),
  });
}

export const config: Config = {
  path: "/*",
};

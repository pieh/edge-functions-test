import { Config } from "@netlify/functions";

export default function (requestFromEdgeFunctions: Request) {
  console.log("Catch-all function", requestFromEdgeFunctions);
  return Response.json({
    url: requestFromEdgeFunctions.url,
    headerAddedByEdgeFunction:
      requestFromEdgeFunctions.headers.get("x-debug-behavior"),
  });
}

export const config: Config = {
  path: "/*",
};

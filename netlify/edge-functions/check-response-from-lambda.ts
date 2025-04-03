import { Config, Context } from "@netlify/edge-functions";

export default async function (
  requestFromOutsideWorld: Request,
  context: Context
) {
  console.log("Mutate-request", requestFromOutsideWorld);
  requestFromOutsideWorld.headers.set(
    "x-debug-behavior",
    "checking response from lambda"
  );
  const responseFromLambda = await context.next();
  const { somethingFromLambda } = await responseFromLambda.json();

  return Response.json({
    lambdaAnsweredWith: somethingFromLambda,
  });
}

export const config: Config = {
  path: "/check-lambda-response/*",
};

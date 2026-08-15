/**
 * Paddle environment resolution, shared by the browser bundle.
 *
 * Nothing here is a secret: the client-side token is designed to be public and
 * is the only credential Paddle.js needs. The server-side API key and the
 * webhook secret live in lib/delivery.js and pages/api/*, and must never be
 * imported from a component.
 *
 * The environment is never defaulted. Guessing it means guessing which Paddle
 * account a real customer is charged against, so an unset or unrecognised value
 * is a hard failure rather than a silent fallback to production.
 */

const VALID_ENVIRONMENTS = ["sandbox", "production"];

export function getPaddleEnvironment() {
  const environment = process.env.NEXT_PUBLIC_PADDLE_ENV;

  if (!environment) {
    throw new Error(
      "NEXT_PUBLIC_PADDLE_ENV is not set. Set it to 'sandbox' or 'production' — " +
        "it is deliberately not defaulted, so the app can never charge against the wrong Paddle account."
    );
  }

  if (!VALID_ENVIRONMENTS.includes(environment)) {
    throw new Error(
      `NEXT_PUBLIC_PADDLE_ENV is '${environment}', which is not a Paddle environment. ` +
        `Use one of: ${VALID_ENVIRONMENTS.join(", ")}.`
    );
  }

  return environment;
}

export function getPaddleClientToken() {
  const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;

  if (!token) {
    throw new Error(
      "NEXT_PUBLIC_PADDLE_CLIENT_TOKEN is not set. Create a client-side token in " +
        "Paddle > Developer tools > Authentication and add it to your environment."
    );
  }

  const environment = getPaddleEnvironment();
  const expectedPrefix = environment === "production" ? "live_" : "test_";

  // A token from the wrong environment fails deep inside Paddle.js with an
  // opaque error, so catch the mismatch here where the message can be useful.
  if (!token.startsWith(expectedPrefix)) {
    throw new Error(
      `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN does not match NEXT_PUBLIC_PADDLE_ENV='${environment}'. ` +
        `Expected a token starting with '${expectedPrefix}'.`
    );
  }

  return token;
}

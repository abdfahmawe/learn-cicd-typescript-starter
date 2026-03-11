import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns api key when header is valid", () => {
    const headers = { authorization: "ApiKey 123456789" };
    expect(getAPIKey(headers)).toBe("123456789");
  });
});

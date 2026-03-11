import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns api key when header is valid", () => {
    // الهيدر لازم يبدأ بكلمة ApiKey وبعدها مسافة
    const headers = {
      authorization: "ApiKey 123456789"
    };
    const result = getAPIKey(headers);
    expect(result).toBe("123456789");
  });

  test("throws error when no authorization header", () => {
    const headers = {};
    // تأكدنا أن الدالة ترفع خطأ عند فقدان الهيدر
    expect(() => getAPIKey(headers)).toThrow();
  });
});

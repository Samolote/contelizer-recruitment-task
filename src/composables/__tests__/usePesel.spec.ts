import { usePesel } from "@/composables/usePesel"; // Adjust the path if necessary
import { describe, it, expect } from "vitest";

describe("usePesel composable", () => {
  it("should validate a correct PESEL number", () => {
    const { isValid, peselInput, validatePesel } = usePesel();
    peselInput.value = "44051401359";

    validatePesel();
    expect(isValid.value).toBe(true);
  });

  it("should invalidate a PESEL with non-numeric characters", () => {
    const { isValid, peselInput, validatePesel } = usePesel();
    peselInput.value = "abcd1234567";

    validatePesel();
    expect(isValid.value).toBe(false);
  });

  it("should invalidate a PESEL with less than 11 digits", () => {
    const { isValid, peselInput, validatePesel } = usePesel();
    peselInput.value = "12345";

    validatePesel();
    expect(isValid.value).toBe(false);
  });

  it("should invalidate a PESEL with repetitive digits", () => {
    const { isValid, peselInput, validatePesel } = usePesel();
    peselInput.value = "11111111111";

    validatePesel();
    expect(isValid.value).toBe(false);
  });

  it("should invalidate a PESEL with an invalid date", () => {
    const { isValid, peselInput, validatePesel } = usePesel();
    peselInput.value = "99021312345";

    validatePesel();
    expect(isValid.value).toBe(false);
  });

  it("should invalidate a PESEL with an incorrect checksum", () => {
    const { isValid, peselInput, validatePesel } = usePesel();
    peselInput.value = "44051401358";

    validatePesel();
    expect(isValid.value).toBe(false);
  });
});

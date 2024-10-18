import { ref } from "vue";

export const usePesel = () => {
  const isValid = ref<boolean | null>(null);

  const peselInput = ref("");

  const validatePesel = () => {
    const pesel = peselInput.value;

    if (!/^\d{11}$/.test(pesel)) {
      isValid.value = false;
      return;
    }

    if (/^(\d)\1*$/.test(pesel)) {
      isValid.value = false;
      return;
    }

    const year = parseInt(pesel.substring(0, 2));
    const month = parseInt(pesel.substring(2, 4));
    const day = parseInt(pesel.substring(4, 6));

    let fullYear;
    if (month >= 1 && month <= 12) {
      fullYear = 1900 + year;
    } else if (month >= 21 && month <= 32) {
      fullYear = 2000 + year;
    } else if (month >= 41 && month <= 52) {
      fullYear = 2100 + year;
    } else if (month >= 61 && month <= 72) {
      fullYear = 2200 + year;
    } else if (month >= 81 && month <= 92) {
      fullYear = 1800 + year;
    } else {
      isValid.value = false;
      return;
    }

    const correctedMonth = month % 20;

    const isValidDate = (y: number, m: number, d: number) => {
      const date = new Date(y, m - 1, d);
      return (
        date.getFullYear() === y &&
        date.getMonth() === m - 1 &&
        date.getDate() === d
      );
    };

    if (!isValidDate(fullYear, correctedMonth, day)) {
      isValid.value = false;
      return;
    }

    const multipliers = [1, 3, 7, 9];

    let sum = 0;
    for (let i = 0; i < pesel.length - 1; i++) {
      sum += Number(pesel[i]) * multipliers[i % 4];
    }

    const modulo = sum % 10;
    const lastDigit = Number(pesel[10]);

    const validity =
      (modulo === 0 && lastDigit === 0) || lastDigit === 10 - modulo;

    isValid.value = validity;
  };

  return { isValid, peselInput, validatePesel };
};

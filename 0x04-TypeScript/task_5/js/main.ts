export interface MajorCredits {
  credits: number;
  _majorCreditsBrand: unknown;
}

export interface MinorCredits {
  credits: number;
  _minorCreditsBrand: unknown;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}

// Example
const minor1: MinorCredits = {
  credits: 42,
  _minorCreditsBrand: undefined
};
console.log(minor1); // test

const minor2: MinorCredits = {
  credits: 12,
  _minorCreditsBrand: undefined
}

const major1: MajorCredits = { credits: 13, _majorCreditsBrand: undefined };

console.log(sumMinorCredits(sumMinorCredits(minor1, minor1), minor2));
// Defines possible types for a public holiday
export enum HolidayType {
  Public = 'Public',
  Bank = 'Bank',
  School = 'School',
  Authorities = 'Authorities',
  Optional = 'Optional',
  Observance = 'Observance',
}

// Represents the information about a public holiday
export type PublicHoliday = {
  date: string; // The date of the holiday
  localName: string; // Local name of the holiday
  name: string; // English name of the holiday
  countryCode: string; // ISO 3166-1 alpha-2 country code
  fixed: boolean; // Whether the holiday is on the same date every year
  global: boolean; // Whether the holiday is observed in every county/state
  counties?: string[]; // Federal states (ISO-3166-2) where the holiday is observed, if not global
  launchYear?: number; // The launch year of the public holiday
  types: HolidayType[]; // Types of the public holiday
};

export type HolidayParamsType = {
  year: number;
  countryCode: string;
};

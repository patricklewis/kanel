// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { CountryId } from './Country';

/** Identifier type for city */
export type CityId = number & { __flavor?: 'CityId' };

/** Represents the table public.city */
export default interface City {
  city_id: CityId;

  city: string;

  country_id: CountryId;

  last_update: Date;
}

/** Represents the initializer for the table public.city */
export interface CityInitializer {
  /** Default value: nextval('city_city_id_seq'::regclass) */
  city_id?: CityId;

  city: string;

  country_id: CountryId;

  /** Default value: now() */
  last_update?: Date;
}

/** Represents the mutator for the table public.city */
export interface CityMutator {
  city_id?: CityId;

  city?: string;

  country_id?: CountryId;

  last_update?: Date;
}

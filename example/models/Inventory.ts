// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { FilmId } from './Film';

/** Identifier type for inventory */
export type InventoryId = number & { __flavor?: 'InventoryId' };

/** Represents the table public.inventory */
export default interface Inventory {
  inventory_id: InventoryId;

  film_id: FilmId;

  store_id: number;

  last_update: Date;
}

/** Represents the initializer for the table public.inventory */
export interface InventoryInitializer {
  /** Default value: nextval('inventory_inventory_id_seq'::regclass) */
  inventory_id?: InventoryId;

  film_id: FilmId;

  store_id: number;

  /** Default value: now() */
  last_update?: Date;
}

/** Represents the mutator for the table public.inventory */
export interface InventoryMutator {
  inventory_id?: InventoryId;

  film_id?: FilmId;

  store_id?: number;

  last_update?: Date;
}

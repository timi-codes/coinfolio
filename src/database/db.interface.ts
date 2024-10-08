import { Kysely, Generated } from 'kysely';
import { AssetType } from '../assets/entities/asset.entity';

export interface Asset {
  id: Generated<string>;
  name: string;
  symbol: string;
  contract_address: string;
  chain: number;
  type: AssetType;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface FungibleToken {
  id: Generated<string>;
  asset_id: string;
  user_id: string;
  quantity: bigint;
  price_at_creation: number;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface NonFungibleToken {
  id: Generated<string>;
  asset_id: string;
  user_id: string;
  token_id: string;
  price_at_creation: number;
  created_at: Generated<Date>;
  updated_at: Generated<Date>;
}

export interface AssetDailyPrice {
  id: Generated<string>;
  name: string;
  symbol: string;
  contract_address: string;
  chain: number;
  price: number;
  created_at: Generated<Date>;
}

export interface User {
  id: Generated<string>;
  privy_id: string;
  privy_wallet_address: string;
  created_at: Generated<Date>;
}

interface Tables {
  assets: Asset;
  fts: FungibleToken;
  nfts: NonFungibleToken;
  asset_daily_prices: AssetDailyPrice;
  users: User;
}

export class Database extends Kysely<Tables> {}

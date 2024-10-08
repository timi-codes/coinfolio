import {
	PostgresDialect,
	Kysely,
} from 'kysely'
import { defineConfig } from 'kysely-ctl';
import { Pool } from 'pg';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';

config();

const configService = new ConfigService();

export default defineConfig({
	kysely: new Kysely<unknown>({
		dialect: new PostgresDialect({
			pool: new Pool({
				host: configService.get('DB_HOST'),
				port: configService.get('DB_PORT'),
				database: configService.get('DB_NAME'),
				user: configService.get('DB_USER'),
				password: configService.get('DB_PASSWORD'),
			}),
		}),
	}),
	migrations: {
		migrationFolder: 'src/database/migrations',
	},
	seeds: {
		seedFolder: 'src/database/seeds',
	},
	plugins: [],
})

import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "@shared/schema";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.error("DATABASE_URL environment variable is not set; database endpoints will return 503");
}

export const db = databaseUrl
  ? drizzle(neon(databaseUrl), { schema })
  : null;

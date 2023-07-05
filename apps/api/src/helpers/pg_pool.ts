import pg from "pg";
import "dotenv/config";

const { Pool } = pg;

const isDev = process.env.NODE_ENV === "development" ? true : false;
const databaseUrl = isDev
  ? process.env.SHADOW_DATABASE_URL
  : process.env.DATABASE_URL + "?sslmode=require";

const pgPool = new Pool({
  connectionString: databaseUrl,
});

export default pgPool;

import "dotenv/config";
import pg from "pg";

const pgPool = new pg.Pool({
  connectionString: process.env.SHADOW_DATABASE_URL,
});

const seed = async () => {
  const client = await pgPool.connect();
  await client.query("DROP TABLE IF EXISTS signatures");
  await client.query(`
        CREATE TABLE signatures (
        id SERIAL PRIMARY KEY,
        signature TEXT NOT NULL,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);
  await client.query(`
        INSERT INTO signatures (signature, name, email)
        VALUES
        ('Hello, world!', 'John Doe', 'john@email.com')
    `);

  client.release();

  console.log("Database seeded");
};

seed()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .then(() => {
    pgPool.end();
  });

import pgPool from "~/helpers/pg_pool";
import { Signature } from "~/models/signatures";

export const guestbookService = {
  async getSignatures(): Promise<Signature[]> {
    const client = await pgPool.connect();
    const result = await client.query<Signature>(
      "SELECT * FROM signatures ORDER BY id DESC"
    );
    client.release();
    return result.rows;
  },

  async addSignature(signature: Signature): Promise<void> {
    const client = await pgPool.connect();
    await client.query(
      "INSERT INTO signatures (signature, name, email ) VALUES ($1, $2, $3 )",
      [signature.signature, signature.name, signature.email]
    );
    client.release();
  },
};

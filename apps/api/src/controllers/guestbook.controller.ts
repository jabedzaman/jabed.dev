import { guestbookService } from "~/services/guestbook.service";
import { signatureSchema } from "~/models/signatures";
import { Request, Response } from "express";

const guestbook = {
  async getSignatures(_: Request, res: Response) {
    const signatures = await guestbookService.getSignatures();
    res.json({
      total: signatures.length,
      signatures: signatures,
    });
  },

  async addSignature(req: Request, res: Response) {
    const signature = req.body;
    const { error } = signatureSchema.validate(signature);
    if (error) {
      return res.status(400).json({
        error: error.details[0].message,
      });
    }
    await guestbookService.addSignature(signature);
    res.status(201).json({
      message: "Signature added successfully",
    });
  },
};

export default guestbook;

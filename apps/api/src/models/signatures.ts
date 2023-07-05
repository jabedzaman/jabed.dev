import Joi, { ObjectSchema } from "joi";

export interface Signature {
  id: number;
  signature: string;
  name: string;
  email: string;
  timestamp: string;
}

export const signatureSchema: ObjectSchema<Signature> = Joi.object<Signature>({
  signature: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string().email().required(),
});

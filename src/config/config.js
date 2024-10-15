import "dotenv/config";

export const PORT = process.env.PORT || 5003;
export const SECRET_KEY = process.env.SECRET_KEY;
export const URI_MONGODB_ATLAS = process.env.URI_MONGODB_ATLAS;
export const URI_MONGODB_LOCAL = process.env.URI_MONGODB_LOCAL;
export const ENV = process.env.ENVIRONMENT;
export const CORSORIGIN = process.env.CORSORIGIN;

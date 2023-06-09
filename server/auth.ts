import * as dotenv from 'dotenv'
dotenv.config()

export const tmdbToken =
  process.env.TMDB_AUTH_TOKEN || 'No auth token loaded from .env file.'

export const openAiToken =
  process.env.OPENAI_AUTH_TOKEN || 'No auth token loaded from .env file.'

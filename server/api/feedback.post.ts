import { createFeedback } from "../lib/firestore"
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {
    const docs = await createFeedback("feedback" as string, body)
    return { result: docs }
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      statusMessage: error
    })
  }
})

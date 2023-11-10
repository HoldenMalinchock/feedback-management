import { createFeedback } from "../lib/firestore"
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {
    const docs = await createFeedback("feedback" as string, body)
    return { result: docs }
  } catch (error: any) {
    return { result: [], error: error.message }
  }
})

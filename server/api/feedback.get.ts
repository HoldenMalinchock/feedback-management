import { getFeedbackEntries } from "../lib/firestore"
export default defineEventHandler(async (event) => {
  const query = await getQuery(event)
  try {
    const docs = await getFeedbackEntries("feedback" as string, query.sentiment as string)
    return { result: docs }
  } catch (error: any) {
    return { result: [], error: error.message }
  }
})

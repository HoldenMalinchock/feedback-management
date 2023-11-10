import { getFeedbackEntries } from "../lib/firestore"
export default defineEventHandler(async (event) => {
  const query = await getQuery(event)
  try {
    const docs = await getFeedbackEntries("feedback" as string, query.sentiment as string)
    console.log(docs)
    return { result: docs }
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      statusMessage: error
    })
  }
})

// Putting methods for dealing with DB here
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  setDoc,
  collectionGroup,
  Timestamp
} from "firebase/firestore"
import { firestoreDb } from "./firebase"

export const getFeedbackEntries = async (col: string, sentimentFilter: string) => {
  // @ts-ignore
  const colRef = collection(firestoreDb, col)

  let q
  if (sentimentFilter) q = await query(colRef, where("sentiment", "==", sentimentFilter))
  else q = await query(colRef)
  const snapshot = await getDocs(q)

  const docs = Array.from(snapshot.docs).map((doc) => {
    return {
      ...doc.data(),
      id: doc.id
    }
  })

  return docs
}
export const createFeedback = async (col: string, document: Object) => {
  // @ts-ignore
  const colRef = collection(firestoreDb, col)

  const docRef = await addDoc(colRef, document)

  return docRef
}

// export const del = async (col, id) => {
//   const docRef = doc(firestoreDb, col, id)
//   return await deleteDoc(docRef)
// }

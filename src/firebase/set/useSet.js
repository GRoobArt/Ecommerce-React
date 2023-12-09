import { addDoc, collection } from 'firebase/firestore'

import db from '../db'

export const useSet = async (collect, data) => {
  const database = collection(db, collect)
  const doc = await addDoc(database, data)
  collection(db, collect, doc.id, 'name of new subcollection')

  return doc.id
}

export default useSet

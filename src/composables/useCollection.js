import { ref } from "vue"
import { firestore } from '../Firebase/config'
import { collection, addDoc } from 'firebase/firestore'

const useCollection = () => {
  const addDocument = async (newDocument) => {
    const error = ref(null)
    try {
      const collectionRef = collection(firestore, 'messages')
      await addDoc(collectionRef, newDocument)

      error.value = null
    } catch (err) {
      error.value = err.message
    }
    return { error }
  }

  return { addDocument }
}

export default useCollection
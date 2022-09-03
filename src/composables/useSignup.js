import { ref } from 'vue'
import { auth } from '../Firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export const signup = async (email, password, name) => {
  const error = ref(null)
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password)

    await updateProfile(response.user, {
      displayName: name
    })

    console.log(user)

  } catch (err) {
    error.value = err.message
  }


  return { error }
}
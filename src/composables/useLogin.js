import { signInWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'
import { auth } from '../Firebase/config'

const error = ref(null)

const login = async (email, password) => {


  try {
    const response = await signInWithEmailAndPassword(auth, email, password)

    error.value = null

    return response

  } catch (err) {
    error.value = err.message
  }
}

const useLogin = () => {
  return { error, login }
}

export default useLogin
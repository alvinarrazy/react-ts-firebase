import { addDoc, collection } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from '../../firebase';

const userService = {
    register
}

export default userService

async function register(email:string, password:string, username: string) {
    try {

        let newUser = await createUserWithEmailAndPassword(auth, email.trim(), password)

        let response = await addDoc(collection(db, "users", newUser.user.uid), {
            username: username
        })

        return { result: response }
    } catch (error: any) {
        let message = error
        if (error instanceof Error) message = error.message
        return { error: message }
    }
}
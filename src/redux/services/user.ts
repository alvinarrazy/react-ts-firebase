import { addDoc, collection } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from '../../firebase';

const userService = {
    register
}

export default userService

async function register(email:string, password:string, data: object) {
    try {

        // await createUserWithEmailAndPassword(auth, email.trim(), password)

        // let response = await addDoc(collection(db, "users"), {
        //     //...data
        // })

        // return { result: response }
    } catch (error) {
        // console.log('Error Line 26 userServices.js', error)
        // return { error: error.message }
    }
}
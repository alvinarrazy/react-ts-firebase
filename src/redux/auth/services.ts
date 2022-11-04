import { IUser, LoginBody, RegisterBody } from './interfaces';
import { IService } from '..';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth, db } from '../../firebase';

const userService = {
    register,
    login,
    logout
}

export default userService

async function register(data: RegisterBody): Promise<IService<void>> {
    try {
        const { email, password, username } = data
        let credential = await createUserWithEmailAndPassword(auth, email.trim(), password)

        await sendEmailVerification(credential.user)

        let response = await setDoc(doc(db, "users", credential.user.uid), {
            username: username
        })

        return { result: response }
    } catch (error: any) {
        let message = error
        if (error instanceof Error) message = error.message
        return { error: message }
    }
}


async function login(data: LoginBody): Promise<IService<IUser>> {
    try {
        const { email, password } = data
        let credential = await signInWithEmailAndPassword(auth, email, password)

        if (!credential?.user?.emailVerified) {
            await signOut(auth)
            let error = new Error("email has not been verified")
            throw error
        }

        let response = await getDoc(doc(db, "users", credential.user.uid))
        if (!response.exists()) {
            await signOut(auth)
            let error = new Error("user data does not exist")
            throw error
        }

        let userData = response.data()

        return {
            result: {
                uid: credential.user.uid,
                email: credential.user.email,
                username: userData.username
            } as IUser
        }
    } catch (error: any) {
        let message = error
        if (error instanceof Error) message = error.message
        return { error: message }
    }
}


async function logout(): Promise<IService<null>> {
    try {
        await signOut(auth)

        return {
            result: null
        }
    } catch (error: any) {
        let message = error
        if (error instanceof Error) message = error.message
        return { error: message }
    }
}
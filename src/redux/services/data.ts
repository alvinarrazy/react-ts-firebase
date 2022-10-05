import { setDoc, doc, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { DataInterface } from "../actions/dataActions"


const dataService = {
    addData,
    getData
}

export default dataService

async function addData(data: DataInterface) {
    try {
        await setDoc(doc(db, "data"), {
            name: data.name,
            description: data.desc
        })

        let { result, error } = await getData()
        if (error) throw error

        return { result }

    } catch (error: any) {
        let message = error
        if (error instanceof Error) message = error.message
        return { error: message }
    }
}

async function getData() {
    try {
        let response = await getDocs(collection(db, "data"))

        let dataArr: any[] = []
        for (let doc of response.docs) {
            dataArr.push(doc.data())
        }

        return { result: dataArr }

    } catch (error: any) {
        let message = error
        if (error instanceof Error) message = error.message
        return { error: message }
    }
}
import { ServiceResult } from './index';
import { IData } from '../../interfaces';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { NewDataBody } from "../actions/dataActions"


const dataService = {
    addData,
    getData
}

export default dataService

async function addData(data: NewDataBody): Promise<ServiceResult<IData[]>> {
    try {
        await addDoc(collection(db, "data"), {
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

async function getData(): Promise<ServiceResult<IData[]>> {
    try {
        let response = await getDocs(collection(db, "data"))

        let dataArr: IData[] = []
        for (let doc of response.docs) {
            dataArr.push(doc.data() as IData)
        }

        return { result: dataArr }

    } catch (error: any) {
        let message = error
        if (error instanceof Error) message = error.message
        return { error: message }
    }
}
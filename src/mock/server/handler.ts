import { rest } from 'msw'
import TaskStatus from '../../interfaces/TaskStatus'

const BE_URL = process.env.REACT_APP_BE_URL as string

export const fetchTasks_response = rest.get(`${BE_URL}/todos`, async (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json(
            [
                {
                    id: '1',
                    name: "zzz",
                    createdOn: Date.now(),
                    status: TaskStatus.INCOMPLETE
                },
                {
                    id: '2',
                    name: "kenapa",
                    createdOn: Date.now(),
                    status: TaskStatus.COMPLETE,
                    completedOn: Date.now()
                }
            ]
        )
    )
})

export const fetchTasks_empty_response = rest.get(`${BE_URL}/todos`, async (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json([])
    )
})

export const saveTask_post_response = rest.post(`${BE_URL}/todos`, async (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json([])
    )
})

const handlers = [
    fetchTasks_response,
    fetchTasks_empty_response,
    saveTask_post_response
]

export default handlers
import { Role } from "./Role"

export interface Member {
id: number
enrollment_Time: number
first_Name?: string
last_Name?: string
description?: string
photo_Url?: string
roles?: Role[]
}

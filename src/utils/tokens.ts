import { time } from 'console';
import jwt from 'jsonwebtoken'

export const createToken = (id: string, email: string, expires: string) => {
    const payload = {id, email};
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: expires,
    })
    return token
}
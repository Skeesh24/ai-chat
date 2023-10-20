import jwt from 'jsonwebtoken';
export const createToken = (id, email, expires) => {
    const payload = { id, email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: expires,
    });
    return token;
};
//# sourceMappingURL=tokens.js.map
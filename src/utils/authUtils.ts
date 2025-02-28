import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key';

interface TokenPayload {
    email: string;
}

export const generateToken = (payload: TokenPayload): string => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
};

export const verifyToken = (token: string): TokenPayload => {
    return jwt.verify(token, SECRET_KEY) as TokenPayload;
};
import { body, validationResult } from 'express-validator';
export const validate = async (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty())
                break;
        }
        const errors = validationResult(req);
        if (errors.isEmpty())
            return next();
        return res.status(400).json({ errors: errors.array() });
    };
};
export const loginValidator = [
    body('email').notEmpty().trim().isEmail().withMessage('email is required'),
    body('password')
        .notEmpty()
        .trim()
        .isLength({ min: 6 })
        .withMessage('password should be at least 6 characters'),
];
export const signupValidator = [
    body('name').notEmpty().withMessage('name is required'),
    ...loginValidator,
];
//# sourceMappingURL=validators.js.map
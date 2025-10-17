import Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$')).required().messages({
        'string.pattern.base': 'The string didnt match the named regular expression'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.min': 'The number is shorter than expected',
        'number.max': 'The number is longer than expected'
    }),
    year: Joi.number().min(1990).max(2025).required().messages({
        'number.min': 'The number is shorter than expected',
        'number.max': 'The number is longer than expected'
    })
})
const Joi = require("joi")
const startOfToday = new Date();
startOfToday.setHours(0, 0, 0, 0)

// booking path
module.exports.getBookingQuerySchema = Joi.object({
    search: Joi
        .string()
        .optional()
        .allow('')
        .messages({
            'string.base': 'Search term must be a string'
        }),
    limit: Joi
        .number()
        .integer()
        .min(1)
        .default(10)
        .messages({
            'number.base': 'Limit must be a number',
            'number.integer': 'Limit must be an integer',
            'number.min': 'Limit must be greater than or equal to 1',
        }),
    page: Joi
        .number()
        .integer()
        .min(1)
        .default(1)
        .messages({
            'number.base': 'Page must be a number',
            'number.integer': 'Page must be an integer',
            'number.min': 'Page must be greater than or equal to 1',
        }),
    orderBy: Joi
        .string()
        .valid('asc', 'desc')
        .default('asc')
        .messages({
            'any.only': 'Order by must be either "asc" or "desc"',
            'string.base': 'Order by must be a string'
        }),
    sortBy: Joi
        .string()
        .valid('id', 'checkinDate', 'checkoutDate', 'createdAt', 'status')
        .default('id')
        .messages({
            'any.only': 'Sort by must be one of "id", "checkinDate", "checkoutDate","createdAt" or "status"',
            'string.base': 'Sort by must be a string'
        }),
})
module.exports.createBookingSchema = Joi.object({
    userId: Joi
        .number()
        .integer()
        .optional()
        .messages({
            'number.base': "userId must be a number",
            'number.integer': "userId must be an integer",
            'any.required': 'userId amount is required'
        }),
    promotionId: Joi
        .number()
        .integer()
        .optional()
        .messages({
            'number.base': "promotionId must be a number",
            'number.integer': "promotionId must be an integer",
            'any.required': 'promotionId amount is required'
        }),
    totalPrice: Joi
        .number()
        .precision(2)
        .positive()
        .required()
        .messages({
            'number.base': 'Price must be a number',
            'number.positive': 'Price must be greater than zero',
            'any.required': 'Price is required'
        }),
    checkinDate: Joi
        .date()
        .iso()
        .min(startOfToday)
        .required()
        .messages({
            'date.base': 'Check-in date must be a valid date.',
            'date.min': 'Check-in date cannot be earlier than today.',
            'any.required': 'Check-in date is required.',
        }),
    checkoutDate: Joi
        .date()
        .iso()
        .min(Joi.ref('checkinDate'))
        .required()
        .messages({
            'date.base': 'Checkout date must be a valid date.',
            'date.min': 'Checkout date must be later than check-in date.',
            'any.required': 'Checkout date is required.',
        }),
    hotelId: Joi
        .number()
        .integer()
        .required()
        .messages({
            'number.base': "hotelId must be a number",
            'number.integer': "hotelId must be an integer",
            'any.required': 'hotelId is required'
        }),
    roomId: Joi
        .number()
        .integer()
        .required()
        .messages({
            'number.base': "Room id must be a number",
            'number.integer': "Room id must be an integer",
            'any.required': 'Room id is required'
        }),
    amount: Joi
        .number()
        .integer()
        .required()
        .messages({
            'number.base': "Amount must be a number",
            'number.integer': "Amount must be an integer",
            'any.required': 'Amount is required'
        }),
    firstName: Joi
        .string()
        .trim()
        .min(1)
        .max(50)
        .required()
        .messages({
            'string.empty': 'First name is required.',
            'string.min': 'First name must be at least 1 character.',
            'string.max': 'First name must be less than or equal to 50 characters.'
        }),
    lastName: Joi
        .string()
        .trim()
        .min(1)
        .max(50)
        .required()
        .messages({
            'string.empty': 'Last name is required.',
            'string.min': 'Last name must be at least 1 character.',
            'string.max': 'Last name must be less than or equal to 50 characters.'
        }),
    phone: Joi
        .string()
        .pattern(/^\d{10}$/)
        .required()
        .messages({
            'string.pattern.base': 'Phone number must be exactly 10 digits.'
        }),
    email: Joi
        .string()
        .email({ tlds: false })
        .required()
        .messages({
            "string.empty": "Email is required.",
            "string.base": "Email must be a string.",
            "string.email": "Email or Password incorrect."
        }),
})
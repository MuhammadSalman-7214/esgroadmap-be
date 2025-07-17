export const requiredString = (name, rule) => ({
    'string.base': `${name} should be a string`,
    'string.empty': `${name} should not be an empty string`,
    'any.required': `${name} is required`,
});
// export const requiredDate = (name) => ({
//   'date.base': `${name} in invalid`,
//   'any.required': `${name} is required`,
// });
// export const requiredNumber = (name) => ({
//   'number.base': `${name} should be a number`,
//   'any.required': `${name} is required`,
// });
// export const requiredArray = (name) => ({
//   'array.base': `${name} should be an array`,
//   'array.empty': `${name} cannot be empty`,
//   'any.required': `${name} is required`,
//   'array.min': `${name} array must contain at least 1 item`,
// });
// export const requiredBoolean = (name) => ({
//   'boolean.base': `${name} should be a boolean`,
//   'any.required': `${name} is required`,
// });

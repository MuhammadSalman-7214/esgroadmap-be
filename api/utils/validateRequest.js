const validateRequest = async (schema, requestBody) => {
    try {
        await schema.validateAsync(requestBody);
    }
    catch (err) {
        throw err;
    }
};
export default validateRequest;

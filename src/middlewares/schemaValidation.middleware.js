const schemaValidationMiddleware = (schema) => async (req, res, next) => {
  try {
    const validatedData = await schema.validate(req.body);
    req.body = validatedData;
    next();
  } catch (error) {
    return res.status(400).json({
      message: error.errors.join(", "),
    });
  }
};

export default schemaValidationMiddleware;

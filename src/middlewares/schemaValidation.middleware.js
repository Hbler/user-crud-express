const schemaValidationMiddleware = (schema) => async (rq, rs, next) => {
  try {
    const validatedData = await schema.validate(rq.body);
    rq.body = validatedData;
    next();
  } catch (error) {
    return rs.status(400).json({
      message: error.errors.join(", "),
    });
  }
};

export default schemaValidationMiddleware;

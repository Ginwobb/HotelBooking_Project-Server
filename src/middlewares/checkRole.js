const createError = require("../utility/createError");

exports.adminCheck = (req, res, next) => {
  try {
    const { role } = req.user;

    if (!role) {
      return createError(401, "Unauthorized");
    }

    if (role !== "ADMIN") {
      return createError(401, "Unauthorized");
    }
    next();
  } catch (error) {
    next(error);
  }
};

exports.partnerCheck = (req, res, next) => {
  try {
    const { role } = req.user;

    if (!role) {
      return createError(401, "Unauthorized");
    }

    if (role !== "PARTNER") {
      return createError(401, "Unauthorized");
    }
    next();
  } catch (error) {
    next(error);
  }
};

exports.userCheck = (req, res, next) => {
  try {
    const { role } = req.user;

    if (!role) {
      return createError(401, "Unauthorized");
    }

    if (role !== "USER") {
      return createError(401, "Unauthorized");
    }
    next();
  } catch (error) {
    next(error);
  }
};

exports.nonUserCheck = (req, res, next) => {
  try {
    const { role } = req.user;

    if (!role) {
      return createError(401, "Unauthorized");
    }
    if (role === "USER") {
      return createError(401, "Unauthorized");
    }
    next();
  } catch (error) {
    next(error);
  }
};

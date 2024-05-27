import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  // console.log(req.cookies);
  if (!token) {
    return res.send("No token is available!");
  }
  jwt.verify(
    req.cookies.access_token,
    process.env.JWT_SECRET_KEY,
    (err, user) => {
      if (err) {
        return res.send("Token not valid!");
      }
      req.user = user;
      // console.log("res.user\n", req.user);
      next();
    }
  );
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.send("u r not authorised!");
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.send("u r not authorised!");
    }
  });
};

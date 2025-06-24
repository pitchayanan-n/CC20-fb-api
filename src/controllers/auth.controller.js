export function register(req, res, next) {
  res.json({
    msg: "Register controller",
    body: req.body,
  });
}

export const login = (req, res, next) => {
  res.json({
    msg: "Login controller",
    body: req.body,
  });
};

export const getMe = (req, res, next) => {
  res.json({ msg: "Get me controller" });
};

// export function getMe(name) {
//   return function (req, res, next) {
//     res.json({
//       name: name,
//     })
//   }
// }
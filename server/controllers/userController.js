const getUser = (req, res) => {
  const user = req.session.user;
  res.json({ message: `Hello, ${user.firstName}` });
};

export default { getUser };

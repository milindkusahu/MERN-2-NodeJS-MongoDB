const usersData = require("../users.json");

const getUsers = (req, res) => {
  res.json(usersData);
};

const searchUsers = (req, res) => {
  const { gender, age } = req.query;
  // Validation
  // if (!gender && !age) {
  //   return res
  //     .status(422)
  //     .json({ message: "Missing parameters. Give me age/gender or both" });
  // }

  // if (age) {
  //   if (!Number(age))
  //     return res.status(422).json({ message: "Age should be a number." });
  //   if (Number(age) < 0 || Number(age) > 100)
  //     return res.status(422).json({ message: "Age should be between 0-100" });
  // }

  // if (gender && !["male", "female"].includes(gender.toLowerCase()))
  //   return res.status(422).json({ message: "Gender should be male/female" });

  // Logic
  if (gender && age) {
    res.json(
      usersData.data.filter(
        (c) => c.gender === gender.toLowerCase() && c.dob.age === Number(age)
      )
    );
  } else if (gender) {
    res.json(usersData.data.filter((c) => c.gender === gender.toLowerCase()));
  } else if (age) {
    res.json(usersData.data.filter((c) => c.dob.age === Number(age)));
  } else {
    res.sendStatus(404);
  }
};

const getUserByUUID = (req, res) => {
  const userUUID = req.params.uuid;
  const findUserUUID = usersData.data.find((c) => c.login.uuid === userUUID);

  if (findUserUUID) {
    res.json(findUserUUID);
  } else {
    res.sendStatus(404);
  }
};

module.exports = { getUsers, getUserByUUID, searchUsers };

import User from "../models/Users";
const operadores = [
  {
    fullName: "operador1",
    dni: 11111111,
    email: "ope1@ope.com",
    password: "Operator@N1",
    usertype: "operator",
  },
  {
    fullName: "operador2",
    dni: 222222222,
    email: "ope2@ope.com",
    password: "Operator@N2",
    usertype: "operator",
  },
  {
    fullName: "operador3",
    dni: 33333333,
    email: "ope3@ope.com",
    password: "Operator@N3",
    usertype: "operator",
  },
  {
    fullName: "operador4",
    dni: 444444444,
    email: "ope4@ope.com",
    password: "Operator@N4",
    usertype: "operator",
  },
];

export const seedOperator = async () => {
  try {
    await User.deleteMany();

    async function createOperator() {
      for (let i = 0; i < operadores.length; i++) {
        const operators = new User(operadores[i]);
        operators.save();
      }
    }

    createOperator();
    console.log("Operator seed successful!");
  } catch (e) {
    console.error(e);
  }
};

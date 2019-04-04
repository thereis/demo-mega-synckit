require("dotenv").config();

import { OracleConnection, getToken } from "./config";

const getDbConnection = OracleConnection.getDbConnection();

export { getDbConnection, getToken };

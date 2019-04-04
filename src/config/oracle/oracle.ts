import oracle, { IConnection } from "oracledb";

class Connect {
  getDbConnection = async () => {
    try {
      const connectString = process.env["CONNECT_STRING"];

      if (!connectString) {
        throw Error("There is no env variable CONNECT_STRING defined.");
      }

      const user: string = process.env["ORACLE_USER"] || "mega";
      const password: string = process.env["ORACLE_PASSWORD"] || "megamega";

      const dbFunction: () => Promise<IConnection> = async () => {
        const db = (await oracle.getConnection({
          user,
          password,
          connectString
        })) as IConnection;

        return db;
      };

      oracle.outFormat = oracle.OBJECT;

      return dbFunction;
    } catch (e) {
      console.log("Error while connecting to oracle: ", e.message);
      throw e;
    }
  };
}

export const OracleConnection = new Connect();

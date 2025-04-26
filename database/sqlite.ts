import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("twist.db");

export default db;

import { Model, DataTypes } from "sequelize";
import db from "../config/database.config";
import User from "./User";

const Hobi = db.define('hobbies', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Hobi;
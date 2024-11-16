import { DataTypes } from "sequelize";
import database from "./db.js";

export const Musica = database.define('Musica', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category:{
        type: DataTypes.STRING,
        allowNull: false
    },
    music:{
        type: DataTypes.TEXT,
        allowNull: true,        
    }

})


export const Playlist = database.define('Playlist', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

Playlist.belongsToMany(Musica, {through: "musicas"})



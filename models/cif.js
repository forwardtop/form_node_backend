const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CIF = sequelize.define('CIF', {
    clientAccount: { type: DataTypes.STRING, allowNull: false },
    approvedCredit: { type: DataTypes.STRING, allowNull: false },
    approvedBy: { type: DataTypes.STRING, allowNull: false },
    fullName: { type: DataTypes.STRING, allowNull: false },
    tradingAs: { type: DataTypes.STRING, allowNull: false },
    abn: { type: DataTypes.STRING, allowNull: false },
    acn: { type: DataTypes.STRING, allowNull: false },
    addressLine1: { type: DataTypes.STRING, allowNull: false },
    addressLine2: { type: DataTypes.STRING, allowNull: true },
    addressLine3: { type: DataTypes.STRING, allowNull: true },
    suburb: { type: DataTypes.STRING, allowNull: false },
    postcode: { type: DataTypes.STRING(10), allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    state: { type: DataTypes.STRING, allowNull: false },
    title: { type: DataTypes.STRING(50), allowNull: false },
    firstName: { type: DataTypes.STRING, allowNull: false },
    position: { type: DataTypes.STRING, allowNull: false },
    middleNames: { type: DataTypes.STRING, allowNull: true },
    surname: { type: DataTypes.STRING, allowNull: false },
    tel: { type: DataTypes.STRING(20), allowNull: false },
    fax: { type: DataTypes.STRING(20), allowNull: true },
    mobile: { type: DataTypes.STRING(20), allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, validate: { isEmail: true } },
    webUrl: { type: DataTypes.STRING, allowNull: true },
    bsb: { type: DataTypes.STRING(20), allowNull: false },
    bank: { type: DataTypes.STRING, allowNull: false },
    accountNumber: { type: DataTypes.STRING, allowNull: false },
    branch: { type: DataTypes.STRING, allowNull: false },
    accountName: { type: DataTypes.STRING, allowNull: false },
    idCheck: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    copyBills: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
}, {
    tableName: 'CIF',
    timestamps: true
});

module.exports = CIF;

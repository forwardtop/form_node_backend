module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('cif', {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            clientAccount: { type: Sequelize.STRING, allowNull: false },
            approvedCredit: { type: Sequelize.STRING, allowNull: false },
            approvedBy: { type: Sequelize.STRING, allowNull: false },
            fullName: { type: Sequelize.STRING, allowNull: false },
            tradingAs: { type: Sequelize.STRING, allowNull: false },
            abn: { type: Sequelize.STRING, allowNull: false },
            acn: { type: Sequelize.STRING, allowNull: false },
            addressLine1: { type: Sequelize.STRING, allowNull: false },
            addressLine2: { type: Sequelize.STRING, allowNull: true },
            addressLine3: { type: Sequelize.STRING, allowNull: true },
            suburb: { type: Sequelize.STRING, allowNull: false },
            postcode: { type: Sequelize.STRING(10), allowNull: false },
            city: { type: Sequelize.STRING, allowNull: false },
            state: { type: Sequelize.STRING, allowNull: false },
            title: { type: Sequelize.STRING(50), allowNull: false },
            firstName: { type: Sequelize.STRING, allowNull: false },
            position: { type: Sequelize.STRING, allowNull: false },
            middleNames: { type: Sequelize.STRING, allowNull: true },
            surname: { type: Sequelize.STRING, allowNull: false },
            tel: { type: Sequelize.STRING(20), allowNull: false },
            fax: { type: Sequelize.STRING(20), allowNull: true },
            mobile: { type: Sequelize.STRING(20), allowNull: false },
            email: { type: Sequelize.STRING, allowNull: false, validate: { isEmail: true } },
            webUrl: { type: Sequelize.STRING, allowNull: true },
            bsb: { type: Sequelize.STRING(20), allowNull: false },
            bank: { type: Sequelize.STRING, allowNull: false },
            accountNumber: { type: Sequelize.STRING, allowNull: false },
            branch: { type: Sequelize.STRING, allowNull: false },
            accountName: { type: Sequelize.STRING, allowNull: false },
            idCheck: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
            copyBills: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
            createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
            updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('cif');
    }
};

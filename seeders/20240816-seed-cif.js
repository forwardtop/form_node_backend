module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('cifs', [
            {
                clientAccount: '12345',
                approvedCredit: '5000',
                approvedBy: 'Manager',
                fullName: 'John Doe',
                tradingAs: 'Doe Trading',
                abn: '123456789',
                acn: '987654321',
                addressLine1: '123 Main St',
                addressLine2: '',
                addressLine3: '',
                suburb: 'Suburbia',
                postcode: '2000',
                city: 'Sydney',
                state: 'NSW',
                title: 'Mr',
                firstName: 'John',
                position: 'Director',
                middleNames: '',
                surname: 'Doe',
                tel: '123456789',
                fax: '',
                mobile: '987654321',
                email: 'john.doe@example.com',
                webUrl: 'http://example.com',
                bsb: '123456',
                bank: 'Example Bank',
                accountNumber: '12345678',
                branch: 'Main Branch',
                accountName: 'John Doe',
                idCheck: true,
                copyBills: false,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('cif', null, {});
    }
};

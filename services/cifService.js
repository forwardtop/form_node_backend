const CIF = require('../models/cif');
exports.createCIF = async (data) => {
    return await CIF.create(data);
};

exports.getAllCIF = async () => {
    return await CIF.findAll();
};

exports.getCIFById = async (id) => {
    return await CIF.findByPk(id);
};

exports.updateCIF = async (id, data) => {
    await CIF.update(data, { where: { id } });
    return await CIF.findByPk(id);
};

exports.deleteCIF = async (id) => {
    return await CIF.destroy({ where: { id } });
};

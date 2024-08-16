const CIFService = require('../services/cifService');

exports.createCIF = async (req, res, next) => {
    try {
        const cif = await CIFService.createCIF(req.body);
        res.status(201).json(cif);
    } catch (error) {
        next(error);
    }
};

exports.getAllCIF = async (req, res, next) => {
    try {
        const cif = await CIFService.getAllCIF();
        res.status(200).json(cif);
    } catch (error) {
        next(error);
    }
};

exports.getCIFById = async (req, res, next) => {
    try {
        const cif = await CIFService.getCIFById(req.params.id);
        if (!cif) {
            return res.status(404).json({ message: 'CIF not found' });
        }
        res.status(200).json(cif);
    } catch (error) {
        next(error);
    }
};

exports.updateCIF = async (req, res, next) => {
    try {
        const cif = await CIFService.updateCIF(req.params.id, req.body);
        if (!cif) {
            return res.status(404).json({ message: 'CIF not found' });
        }
        res.status(200).json(cif);
    } catch (error) {
        next(error);
    }
};

exports.deleteCIF = async (req, res, next) => {
    try {
        const result = await CIFService.deleteCIF(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'CIF not found' });
        }
        res.status(204).json();
    } catch (error) {
        next(error);
    }
};

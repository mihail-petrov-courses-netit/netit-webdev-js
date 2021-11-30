const qb            = require('../../@system/database/builder');
const workflowModel = require('../models/workspace.model');
const token         = require('../../@system/token');

/**
 * @author Mihail Petrov
 * @param {*} callback 
 */
exports.getAll = () => {

    return qb.select(workflowModel.table)
            .where(workflowModel.$ownerId, token.getUserId())
            .exec();
};

/**
 * @author Mihail Petrov
 * @param {*} id 
 * @param {*} callback 
 */
exports.get = (id) => {
    
    return qb.select(workflowModel.table)
        .where(workflowModel.$id, id)
        .andWhere(workflowModel.$ownerId, token.getUserId())
        .exec();
};

/**
 * @author Mihail Petrov
 * @param {*} object 
 * @param {*} callback 
 */
exports.create = async (object) => {

    const dbResult = await qb.insert(workflowModel.table, workflowModel.$$create(object))
                            .exec();

    return workflowModel.$$update(object, dbResult.insertId);
};

/**
 * @author Mihail Petrov
 * @param {*} id 
 * @param {*} object 
 */
exports.update = (id) => {

    return qb.update(workflowModel.table, workflowModel.$$create(object))
        .where(workflowModel.$id, id)
        .andWhere(workflowModel.$ownerId, token.getUserId())
        .exec();
};

/**
 * @author Mihail Petrov
 * @param {*} id 
 * @param {*} callback 
 */
exports.remove = (id) => {
    return qb.delete(workflowModel.table)
            .where(workflowModel.$id, id)
            .andWhere(workflowModel.$ownerId, token.getUserId())
            .exec();
};
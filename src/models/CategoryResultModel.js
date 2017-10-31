/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/* eslint-disable dot-notation */
/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 17.8
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient'
import CategoryModel from './CategoryModel'

/**
* The CategoryResultModel model module.
* @module models/CategoryResultModel
* @version 17.8
*/
export default class CategoryResultModel {
    /**
    * Constructs a new <code>CategoryResultModel</code>.
    * Result document containing an array of categories.
    * @alias module:models/CategoryResultModel
    * @class
    */
    constructor() {
        /**
        * The number of returned documents.
        * @member {Number} count
        */
        this.count = undefined

        /**
        * The array of category documents.
        * @member {Array.<module:models/CategoryModel>} data
        */
        this.data = undefined

        /**
        * The total number of documents.
        * @member {Number} total
        */
        this.total = undefined
    }

    /**
    * Constructs a <code>CategoryResultModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/CategoryResultModel} obj Optional instance to populate.
    * @return {module:models/CategoryResultModel} The populated <code>CategoryResultModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CategoryResultModel()

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number')
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [CategoryModel])
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number')
            }
        }

        return obj
    }
}

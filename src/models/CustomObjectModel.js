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

/**
* The CustomObjectModel model module.
* @module models/CustomObjectModel
* @version 17.8
*/
export default class CustomObjectModel {
    /**
    * Constructs a new <code>CustomObjectModel</code>.
    * Document representing a custom object that contains all defined custom attributes for its  object type.
    * @alias module:models/CustomObjectModel
    * @class
    */
    constructor() {
        /**
        * The name of the key property for the custom object.
        * @member {String} key_property
        */
        this.key_property = undefined

        /**
        * The id of the custom object when the type of the key is Integer.
        * @member {Number} key_value_integer
        */
        this.key_value_integer = undefined

        /**
        * The id of the custom object when the type of the key is String.
        * @member {String} key_value_string
        */
        this.key_value_string = undefined

        /**
        * The id of the object type.
        * @member {String} object_type
        */
        this.object_type = undefined
    }

    /**
    * Constructs a <code>CustomObjectModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/CustomObjectModel} obj Optional instance to populate.
    * @return {module:models/CustomObjectModel} The populated <code>CustomObjectModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomObjectModel()

            if (data.hasOwnProperty('key_property')) {
                obj['key_property'] = ApiClient.convertToType(data['key_property'], 'String')
            }
            if (data.hasOwnProperty('key_value_integer')) {
                obj['key_value_integer'] = ApiClient.convertToType(data['key_value_integer'], 'Number')
            }
            if (data.hasOwnProperty('key_value_string')) {
                obj['key_value_string'] = ApiClient.convertToType(data['key_value_string'], 'String')
            }
            if (data.hasOwnProperty('object_type')) {
                obj['object_type'] = ApiClient.convertToType(data['object_type'], 'String')
            }
        }

        return obj
    }
}

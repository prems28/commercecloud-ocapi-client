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
import ProductDetailsLinkModel from './ProductDetailsLinkModel'
import ProductListLinkModel from './ProductListLinkModel'

/**
* The ProductListItemReferenceModel model module.
* @module models/ProductListItemReferenceModel
* @version 17.8
*/
export default class ProductListItemReferenceModel {
    /**
    * Constructs a new <code>ProductListItemReferenceModel</code>.
    * @alias module:models/ProductListItemReferenceModel
    * @class
    * @param id {String} The id of the product list item.
    */
    constructor(id) {
        /**
        * The id of the product list item.
        * @member {String} id
        */
        this.id = id

        /**
        * @member {Number} priority
        */
        this.priority = undefined

        /**
        * @member {module:models/ProductDetailsLinkModel} product_details_link
        */
        this.product_details_link = undefined

        /**
        * The link of the product list, the item is assigned
        * @member {module:models/ProductListLinkModel} product_list
        */
        this.product_list = undefined

        /**
        * @member {Boolean} public
        */
        this.public = undefined

        /**
        * @member {Number} purchased_quantity
        */
        this.purchased_quantity = undefined

        /**
        * @member {Number} quantity
        */
        this.quantity = undefined

        /**
        * @member {module:models/ProductListItemReferenceModel.TypeEnum} type
        */
        this.type = undefined
    }

    /**
    * Constructs a <code>ProductListItemReferenceModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ProductListItemReferenceModel} obj Optional instance to populate.
    * @return {module:models/ProductListItemReferenceModel} The populated <code>ProductListItemReferenceModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductListItemReferenceModel()

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String')
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number')
            }
            if (data.hasOwnProperty('product_details_link')) {
                obj['product_details_link'] = ProductDetailsLinkModel.constructFromObject(data['product_details_link'])
            }
            if (data.hasOwnProperty('product_list')) {
                obj['product_list'] = ProductListLinkModel.constructFromObject(data['product_list'])
            }
            if (data.hasOwnProperty('public')) {
                obj['public'] = ApiClient.convertToType(data['public'], 'Boolean')
            }
            if (data.hasOwnProperty('purchased_quantity')) {
                obj['purchased_quantity'] = ApiClient.convertToType(data['purchased_quantity'], 'Number')
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number')
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String')
            }
        }

        return obj
    }
}

/**
* Allowed values for the <code>type</code> property.
* @enum {String}
* @readonly
*/
ProductListItemReferenceModel.TypeEnum = {

    /**
     * value: "product"
     * @const
     */
    product: 'product',

    /**
     * value: "gift_certificate"
     * @const
     */
    gift_certificate: 'gift_certificate'
}

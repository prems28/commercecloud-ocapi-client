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
import ImageModel from './ImageModel'
import VariationAttributeModel from './VariationAttributeModel'

/**
* The ImageGroupModel model module.
* @module models/ImageGroupModel
* @version 17.8
*/
export default class ImageGroupModel {
    /**
    * Constructs a new <code>ImageGroupModel</code>.
    * Document representing an image group containing a list of images for a particular view type and an optional variation value.
    * @alias module:models/ImageGroupModel
    * @class
    */
    constructor() {
        /**
        * The images of the image group.
        * @member {Array.<module:models/ImageModel>} images
        */
        this.images = undefined

        /**
        * Returns a list of variation attributes applying to this image group.
        * @member {Array.<module:models/VariationAttributeModel>} variation_attributes
        */
        this.variation_attributes = undefined

        /**
        * The image view type.
        * @member {String} view_type
        */
        this.view_type = undefined
    }

    /**
    * Constructs a <code>ImageGroupModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ImageGroupModel} obj Optional instance to populate.
    * @return {module:models/ImageGroupModel} The populated <code>ImageGroupModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImageGroupModel()

            if (data.hasOwnProperty('images')) {
                obj['images'] = ApiClient.convertToType(data['images'], [ImageModel])
            }
            if (data.hasOwnProperty('variation_attributes')) {
                obj['variation_attributes'] = ApiClient.convertToType(data['variation_attributes'], [VariationAttributeModel])
            }
            if (data.hasOwnProperty('view_type')) {
                obj['view_type'] = ApiClient.convertToType(data['view_type'], 'String')
            }
        }

        return obj
    }
}

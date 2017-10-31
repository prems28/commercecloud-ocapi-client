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
import LocaleModel from './LocaleModel'

/**
* The SiteModel model module.
* @module models/SiteModel
* @version 17.8
*/
export default class SiteModel {
    /**
    * Constructs a new <code>SiteModel</code>.
    * Document representing a site.
    * @alias module:models/SiteModel
    * @class
    */
    constructor() {
        /**
        * The list of allowed currencies.
        * @member {Array.<String>} allowed_currencies
        */
        this.allowed_currencies = undefined

        /**
        * A list of all allowed site locales.
        * @member {Array.<module:models/LocaleModel>} allowed_locales
        */
        this.allowed_locales = undefined

        /**
        * The currency mnemonic of the site.
        * @member {String} default_currency
        */
        this.default_currency = undefined

        /**
        * The default locale of the site.
        * @member {String} default_locale
        */
        this.default_locale = undefined

        /**
        * The HTTP DIS base URL.
        * @member {String} http_dis_base_url
        */
        this.http_dis_base_url = undefined

        /**
        * The configured HTTP host name. If no host name is configured the instance host name is returned.
        * @member {String} http_hostname
        */
        this.http_hostname = undefined

        /**
        * The HTTP URL to the library content location of the site.
        * @member {String} http_library_content_url
        */
        this.http_library_content_url = undefined

        /**
        * The HTTP URL to the site content location.
        * @member {String} http_site_content_url
        */
        this.http_site_content_url = undefined

        /**
        * The HTTPS DIS base URL.
        * @member {String} https_dis_base_url
        */
        this.https_dis_base_url = undefined

        /**
        * The configured HTTPS host name. If no host name is configured the instance host name is returned.
        * @member {String} https_hostname
        */
        this.https_hostname = undefined

        /**
        * The HTTPS URL to the library content location of the site.
        * @member {String} https_library_content_url
        */
        this.https_library_content_url = undefined

        /**
        * The HTTPS URL to the site content location.
        * @member {String} https_site_content_url
        */
        this.https_site_content_url = undefined

        /**
        * The id of the site.
        * @member {String} id
        */
        this.id = undefined

        /**
        * The descriptive name for the site.
        * @member {String} name
        */
        this.name = undefined

        /**
        * The site status online/offline.
        * @member {module:models/SiteModel.StatusEnum} status
        */
        this.status = undefined

        /**
        * The time zone of the site (for example, USA/Eastern).
        * @member {String} timezone
        */
        this.timezone = undefined

        /**
        * The time zone offset from UTC for the current time in milliseconds (for example, -14400000).
        * @member {Number} timezone_offset
        */
        this.timezone_offset = undefined
    }

    /**
    * Constructs a <code>SiteModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/SiteModel} obj Optional instance to populate.
    * @return {module:models/SiteModel} The populated <code>SiteModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SiteModel()

            if (data.hasOwnProperty('allowed_currencies')) {
                obj['allowed_currencies'] = ApiClient.convertToType(data['allowed_currencies'], ['String'])
            }
            if (data.hasOwnProperty('allowed_locales')) {
                obj['allowed_locales'] = ApiClient.convertToType(data['allowed_locales'], [LocaleModel])
            }
            if (data.hasOwnProperty('default_currency')) {
                obj['default_currency'] = ApiClient.convertToType(data['default_currency'], 'String')
            }
            if (data.hasOwnProperty('default_locale')) {
                obj['default_locale'] = ApiClient.convertToType(data['default_locale'], 'String')
            }
            if (data.hasOwnProperty('http_dis_base_url')) {
                obj['http_dis_base_url'] = ApiClient.convertToType(data['http_dis_base_url'], 'String')
            }
            if (data.hasOwnProperty('http_hostname')) {
                obj['http_hostname'] = ApiClient.convertToType(data['http_hostname'], 'String')
            }
            if (data.hasOwnProperty('http_library_content_url')) {
                obj['http_library_content_url'] = ApiClient.convertToType(data['http_library_content_url'], 'String')
            }
            if (data.hasOwnProperty('http_site_content_url')) {
                obj['http_site_content_url'] = ApiClient.convertToType(data['http_site_content_url'], 'String')
            }
            if (data.hasOwnProperty('https_dis_base_url')) {
                obj['https_dis_base_url'] = ApiClient.convertToType(data['https_dis_base_url'], 'String')
            }
            if (data.hasOwnProperty('https_hostname')) {
                obj['https_hostname'] = ApiClient.convertToType(data['https_hostname'], 'String')
            }
            if (data.hasOwnProperty('https_library_content_url')) {
                obj['https_library_content_url'] = ApiClient.convertToType(data['https_library_content_url'], 'String')
            }
            if (data.hasOwnProperty('https_site_content_url')) {
                obj['https_site_content_url'] = ApiClient.convertToType(data['https_site_content_url'], 'String')
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String')
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String')
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String')
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String')
            }
            if (data.hasOwnProperty('timezone_offset')) {
                obj['timezone_offset'] = ApiClient.convertToType(data['timezone_offset'], 'Number')
            }
        }

        return obj
    }
}

/**
* Allowed values for the <code>status</code> property.
* @enum {String}
* @readonly
*/
SiteModel.StatusEnum = {

    /**
     * value: "online"
     * @const
     */
    online: 'online',

    /**
     * value: "offline"
     * @const
     */
    offline: 'offline'
}

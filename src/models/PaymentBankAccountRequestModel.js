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
* The PaymentBankAccountRequestModel model module.
* @module models/PaymentBankAccountRequestModel
* @version 17.8
*/
export default class PaymentBankAccountRequestModel {
    /**
    * Constructs a new <code>PaymentBankAccountRequestModel</code>.
    * Document representing a payment bank account request.
    * @alias module:models/PaymentBankAccountRequestModel
    * @class
    */
    constructor() {
        /**
        * The drivers license.
        * @member {String} drivers_license
        */
        this.drivers_license = undefined

        /**
        * The driver license state code.
        * @member {String} drivers_license_state_code
        */
        this.drivers_license_state_code = undefined

        /**
        * The holder of the bank account.
        * @member {String} holder
        */
        this.holder = undefined

        /**
        * The payment bank account number.
        * @member {String} number
        */
        this.number = undefined
    }

    /**
    * Constructs a <code>PaymentBankAccountRequestModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/PaymentBankAccountRequestModel} obj Optional instance to populate.
    * @return {module:models/PaymentBankAccountRequestModel} The populated <code>PaymentBankAccountRequestModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentBankAccountRequestModel()

            if (data.hasOwnProperty('drivers_license')) {
                obj['drivers_license'] = ApiClient.convertToType(data['drivers_license'], 'String')
            }
            if (data.hasOwnProperty('drivers_license_state_code')) {
                obj['drivers_license_state_code'] = ApiClient.convertToType(data['drivers_license_state_code'], 'String')
            }
            if (data.hasOwnProperty('holder')) {
                obj['holder'] = ApiClient.convertToType(data['holder'], 'String')
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'String')
            }
        }

        return obj
    }
}

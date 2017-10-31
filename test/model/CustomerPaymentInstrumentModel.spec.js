/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

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

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
    // AMD.
        define(['expect.js', '../../src/index'], factory)
    } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
        factory(require('expect.js'), require('../../src/index'))
    } else {
    // Browser globals (root is window)
        factory(root.expect, root.ShopApi)
    }
}(this, (expect, ShopApi) => {
    'use strict'

    let instance

    beforeEach(() => {
        instance = new ShopApi.CustomerPaymentInstrumentModel()
    })

    const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('CustomerPaymentInstrumentModel', () => {
        it('should create an instance of CustomerPaymentInstrumentModel', () => {
      // uncomment below and update the code to test CustomerPaymentInstrumentModel
      // var instane = new ShopApi.CustomerPaymentInstrumentModel()
      // expect(instance).to.be.a(ShopApi.CustomerPaymentInstrumentModel);
        })

        it('should have the property bankRoutingNumber (base name: "bank_routing_number")', () => {
      // uncomment below and update the code to test the property bankRoutingNumber
      // var instane = new ShopApi.CustomerPaymentInstrumentModel()
      // expect(instance).to.be();
        })

        it('should have the property creationDate (base name: "creation_date")', () => {
      // uncomment below and update the code to test the property creationDate
      // var instane = new ShopApi.CustomerPaymentInstrumentModel()
      // expect(instance).to.be();
        })

        it('should have the property lastModified (base name: "last_modified")', () => {
      // uncomment below and update the code to test the property lastModified
      // var instane = new ShopApi.CustomerPaymentInstrumentModel()
      // expect(instance).to.be();
        })

        it('should have the property maskedGiftCertificateCode (base name: "masked_gift_certificate_code")', () => {
      // uncomment below and update the code to test the property maskedGiftCertificateCode
      // var instane = new ShopApi.CustomerPaymentInstrumentModel()
      // expect(instance).to.be();
        })

        it('should have the property paymentBankAccount (base name: "payment_bank_account")', () => {
      // uncomment below and update the code to test the property paymentBankAccount
      // var instane = new ShopApi.CustomerPaymentInstrumentModel()
      // expect(instance).to.be();
        })

        it('should have the property paymentCard (base name: "payment_card")', () => {
      // uncomment below and update the code to test the property paymentCard
      // var instane = new ShopApi.CustomerPaymentInstrumentModel()
      // expect(instance).to.be();
        })

        it('should have the property paymentInstrumentId (base name: "payment_instrument_id")', () => {
      // uncomment below and update the code to test the property paymentInstrumentId
      // var instane = new ShopApi.CustomerPaymentInstrumentModel()
      // expect(instance).to.be();
        })

        it('should have the property paymentMethodId (base name: "payment_method_id")', () => {
      // uncomment below and update the code to test the property paymentMethodId
      // var instane = new ShopApi.CustomerPaymentInstrumentModel()
      // expect(instance).to.be();
        })

    })

}))

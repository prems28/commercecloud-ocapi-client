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
        instance = new ShopApi.PaymentMethodModel()
    })

    const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('PaymentMethodModel', () => {
        it('should create an instance of PaymentMethodModel', () => {
      // uncomment below and update the code to test PaymentMethodModel
      // var instane = new ShopApi.PaymentMethodModel()
      // expect(instance).to.be.a(ShopApi.PaymentMethodModel);
        })

        it('should have the property cards (base name: "cards")', () => {
      // uncomment below and update the code to test the property cards
      // var instane = new ShopApi.PaymentMethodModel()
      // expect(instance).to.be();
        })

        it('should have the property description (base name: "description")', () => {
      // uncomment below and update the code to test the property description
      // var instane = new ShopApi.PaymentMethodModel()
      // expect(instance).to.be();
        })

        it('should have the property id (base name: "id")', () => {
      // uncomment below and update the code to test the property id
      // var instane = new ShopApi.PaymentMethodModel()
      // expect(instance).to.be();
        })

        it('should have the property image (base name: "image")', () => {
      // uncomment below and update the code to test the property image
      // var instane = new ShopApi.PaymentMethodModel()
      // expect(instance).to.be();
        })

        it('should have the property name (base name: "name")', () => {
      // uncomment below and update the code to test the property name
      // var instane = new ShopApi.PaymentMethodModel()
      // expect(instance).to.be();
        })

    })

}))

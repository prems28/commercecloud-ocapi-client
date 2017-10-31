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
        instance = new ShopApi.TermQueryModel()
    })

    const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('TermQueryModel', () => {
        it('should create an instance of TermQueryModel', () => {
      // uncomment below and update the code to test TermQueryModel
      // var instane = new ShopApi.TermQueryModel()
      // expect(instance).to.be.a(ShopApi.TermQueryModel);
        })

        it('should have the property fields (base name: "fields")', () => {
      // uncomment below and update the code to test the property fields
      // var instane = new ShopApi.TermQueryModel()
      // expect(instance).to.be();
        })

        it('should have the property operator (base name: "operator")', () => {
      // uncomment below and update the code to test the property operator
      // var instane = new ShopApi.TermQueryModel()
      // expect(instance).to.be();
        })

        it('should have the property values (base name: "values")', () => {
      // uncomment below and update the code to test the property values
      // var instane = new ShopApi.TermQueryModel()
      // expect(instance).to.be();
        })

    })

}))

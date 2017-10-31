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
        instance = new ShopApi.ProductSearchRefinementValueModel()
    })

    const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('ProductSearchRefinementValueModel', () => {
        it('should create an instance of ProductSearchRefinementValueModel', () => {
      // uncomment below and update the code to test ProductSearchRefinementValueModel
      // var instane = new ShopApi.ProductSearchRefinementValueModel()
      // expect(instance).to.be.a(ShopApi.ProductSearchRefinementValueModel);
        })

        it('should have the property description (base name: "description")', () => {
      // uncomment below and update the code to test the property description
      // var instane = new ShopApi.ProductSearchRefinementValueModel()
      // expect(instance).to.be();
        })

        it('should have the property hitCount (base name: "hit_count")', () => {
      // uncomment below and update the code to test the property hitCount
      // var instane = new ShopApi.ProductSearchRefinementValueModel()
      // expect(instance).to.be();
        })

        it('should have the property label (base name: "label")', () => {
      // uncomment below and update the code to test the property label
      // var instane = new ShopApi.ProductSearchRefinementValueModel()
      // expect(instance).to.be();
        })

        it('should have the property presentationId (base name: "presentation_id")', () => {
      // uncomment below and update the code to test the property presentationId
      // var instane = new ShopApi.ProductSearchRefinementValueModel()
      // expect(instance).to.be();
        })

        it('should have the property value (base name: "value")', () => {
      // uncomment below and update the code to test the property value
      // var instane = new ShopApi.ProductSearchRefinementValueModel()
      // expect(instance).to.be();
        })

        it('should have the property values (base name: "values")', () => {
      // uncomment below and update the code to test the property values
      // var instane = new ShopApi.ProductSearchRefinementValueModel()
      // expect(instance).to.be();
        })

    })

}))

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
        instance = new ShopApi.ContentModel()
    })

    const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('ContentModel', () => {
        it('should create an instance of ContentModel', () => {
      // uncomment below and update the code to test ContentModel
      // var instane = new ShopApi.ContentModel()
      // expect(instance).to.be.a(ShopApi.ContentModel);
        })

        it('should have the property cYear (base name: "c_Year")', () => {
      // uncomment below and update the code to test the property cYear
      // var instane = new ShopApi.ContentModel()
      // expect(instance).to.be();
        })

        it('should have the property cBody (base name: "c_body")', () => {
      // uncomment below and update the code to test the property cBody
      // var instane = new ShopApi.ContentModel()
      // expect(instance).to.be();
        })

        it('should have the property cCustomCSSFile (base name: "c_customCSSFile")', () => {
      // uncomment below and update the code to test the property cCustomCSSFile
      // var instane = new ShopApi.ContentModel()
      // expect(instance).to.be();
        })

        it('should have the property description (base name: "description")', () => {
      // uncomment below and update the code to test the property description
      // var instane = new ShopApi.ContentModel()
      // expect(instance).to.be();
        })

        it('should have the property id (base name: "id")', () => {
      // uncomment below and update the code to test the property id
      // var instane = new ShopApi.ContentModel()
      // expect(instance).to.be();
        })

        it('should have the property name (base name: "name")', () => {
      // uncomment below and update the code to test the property name
      // var instane = new ShopApi.ContentModel()
      // expect(instance).to.be();
        })

        it('should have the property pageDescription (base name: "page_description")', () => {
      // uncomment below and update the code to test the property pageDescription
      // var instane = new ShopApi.ContentModel()
      // expect(instance).to.be();
        })

        it('should have the property pageKeywords (base name: "page_keywords")', () => {
      // uncomment below and update the code to test the property pageKeywords
      // var instane = new ShopApi.ContentModel()
      // expect(instance).to.be();
        })

        it('should have the property pageTitle (base name: "page_title")', () => {
      // uncomment below and update the code to test the property pageTitle
      // var instane = new ShopApi.ContentModel()
      // expect(instance).to.be();
        })

    })

}))

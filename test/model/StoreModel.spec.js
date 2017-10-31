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
        instance = new ShopApi.StoreModel()
    })

    const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('StoreModel', () => {
        it('should create an instance of StoreModel', () => {
      // uncomment below and update the code to test StoreModel
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be.a(ShopApi.StoreModel);
        })

        it('should have the property address1 (base name: "address1")', () => {
      // uncomment below and update the code to test the property address1
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be();
        })

        it('should have the property address2 (base name: "address2")', () => {
      // uncomment below and update the code to test the property address2
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be();
        })

        it('should have the property cTestAttribute (base name: "c_TestAttribute")', () => {
      // uncomment below and update the code to test the property cTestAttribute
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be();
        })

        it('should have the property cCountryCodeValue (base name: "c_countryCodeValue")', () => {
      // uncomment below and update the code to test the property cCountryCodeValue
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be();
        })

        it('should have the property cInventoryListId (base name: "c_inventoryListId")', () => {
      // uncomment below and update the code to test the property cInventoryListId
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be();
        })

        it('should have the property city (base name: "city")', () => {
      // uncomment below and update the code to test the property city
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be();
        })

        it('should have the property countryCode (base name: "country_code")', () => {
      // uncomment below and update the code to test the property countryCode
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be();
        })

        it('should have the property distance (base name: "distance")', () => {
      // uncomment below and update the code to test the property distance
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be();
        })

        it('should have the property distanceUnit (base name: "distance_unit")', () => {
      // uncomment below and update the code to test the property distanceUnit
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be();
        })

        it('should have the property email (base name: "email")', () => {
      // uncomment below and update the code to test the property email
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be();
        })

        it('should have the property fax (base name: "fax")', () => {
      // uncomment below and update the code to test the property fax
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be();
        })

        it('should have the property id (base name: "id")', () => {
      // uncomment below and update the code to test the property id
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be();
        })

        it('should have the property image (base name: "image")', () => {
      // uncomment below and update the code to test the property image
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be();
        })

        it('should have the property inventoryId (base name: "inventory_id")', () => {
      // uncomment below and update the code to test the property inventoryId
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be();
        })

        it('should have the property latitude (base name: "latitude")', () => {
      // uncomment below and update the code to test the property latitude
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be();
        })

        it('should have the property longitude (base name: "longitude")', () => {
      // uncomment below and update the code to test the property longitude
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be();
        })

        it('should have the property name (base name: "name")', () => {
      // uncomment below and update the code to test the property name
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be();
        })

        it('should have the property phone (base name: "phone")', () => {
      // uncomment below and update the code to test the property phone
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be();
        })

        it('should have the property posEnabled (base name: "pos_enabled")', () => {
      // uncomment below and update the code to test the property posEnabled
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be();
        })

        it('should have the property postalCode (base name: "postal_code")', () => {
      // uncomment below and update the code to test the property postalCode
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be();
        })

        it('should have the property stateCode (base name: "state_code")', () => {
      // uncomment below and update the code to test the property stateCode
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be();
        })

        it('should have the property storeEvents (base name: "store_events")', () => {
      // uncomment below and update the code to test the property storeEvents
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be();
        })

        it('should have the property storeHours (base name: "store_hours")', () => {
      // uncomment below and update the code to test the property storeHours
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be();
        })

        it('should have the property storeLocatorEnabled (base name: "store_locator_enabled")', () => {
      // uncomment below and update the code to test the property storeLocatorEnabled
      // var instane = new ShopApi.StoreModel()
      // expect(instance).to.be();
        })

    })

}))

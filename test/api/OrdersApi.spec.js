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
import expect from 'expect.js'
import ShopApi from '../../src/index'

let instance

beforeEach(() => {
    instance = new ShopApi.OrdersApi()
})

const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
}

const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
}

describe('OrdersApi', () => {
    describe('deleteOrdersByIDNotesByID', () => {
        it('should call deleteOrdersByIDNotesByID successfully', () => {
            // uncomment below and update the code to test deleteOrdersByIDNotesByID
            // instance.deleteOrdersByIDNotesByID(function(error) {
            //  if (error) throw error;
            // expect().to.be()
            // })
            return Promise.resolve()
        })
    })

    describe('deleteOrdersByIDPaymentInstrumentsByID', () => {
        it('should call deleteOrdersByIDPaymentInstrumentsByID successfully', () => {
            // uncomment below and update the code to test deleteOrdersByIDPaymentInstrumentsByID
            // instance.deleteOrdersByIDPaymentInstrumentsByID(function(error) {
            //  if (error) throw error;
            // expect().to.be()
            // })
            return Promise.resolve()
        })
    })

    describe('getOrdersByID', () => {
        it('should call getOrdersByID successfully', () => {
            // uncomment below and update the code to test getOrdersByID
            // instance.getOrdersByID(function(error) {
            //  if (error) throw error;
            // expect().to.be()
            // })
            return Promise.resolve()
        })
    })

    describe('getOrdersByIDNotes', () => {
        it('should call getOrdersByIDNotes successfully', () => {
            // uncomment below and update the code to test getOrdersByIDNotes
            // instance.getOrdersByIDNotes(function(error) {
            //  if (error) throw error;
            // expect().to.be()
            // })
            return Promise.resolve()
        })
    })

    describe('getOrdersByIDPaymentMethods', () => {
        it('should call getOrdersByIDPaymentMethods successfully', () => {
            // uncomment below and update the code to test getOrdersByIDPaymentMethods
            // instance.getOrdersByIDPaymentMethods(function(error) {
            //  if (error) throw error;
            // expect().to.be()
            // })
            return Promise.resolve()
        })
    })

    describe('patchOrdersByID', () => {
        it('should call patchOrdersByID successfully', () => {
            // uncomment below and update the code to test patchOrdersByID
            // instance.patchOrdersByID(function(error) {
            //  if (error) throw error;
            // expect().to.be()
            // })
            return Promise.resolve()
        })
    })

    describe('patchOrdersByIDPaymentInstrumentsByID', () => {
        it('should call patchOrdersByIDPaymentInstrumentsByID successfully', () => {
            // uncomment below and update the code to test patchOrdersByIDPaymentInstrumentsByID
            // instance.patchOrdersByIDPaymentInstrumentsByID(function(error) {
            //  if (error) throw error;
            // expect().to.be()
            // })
            return Promise.resolve()
        })
    })

    describe('postOrders', () => {
        it('should call postOrders successfully', () => {
            // uncomment below and update the code to test postOrders
            // instance.postOrders(function(error) {
            //  if (error) throw error;
            // expect().to.be()
            // })
            return Promise.resolve()
        })
    })

    describe('postOrdersByIDNotes', () => {
        it('should call postOrdersByIDNotes successfully', () => {
            // uncomment below and update the code to test postOrdersByIDNotes
            // instance.postOrdersByIDNotes(function(error) {
            //  if (error) throw error;
            // expect().to.be()
            // })
            return Promise.resolve()
        })
    })

    describe('postOrdersByIDPaymentInstruments', () => {
        it('should call postOrdersByIDPaymentInstruments successfully', () => {
            // uncomment below and update the code to test postOrdersByIDPaymentInstruments
            // instance.postOrdersByIDPaymentInstruments(function(error) {
            //  if (error) throw error;
            // expect().to.be()
            // })
            return Promise.resolve()
        })
    })
})

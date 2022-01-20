/**
 * Hippo.Web
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ChannelsVm from '../model/ChannelsVm';
import CreateChannelCommand from '../model/CreateChannelCommand';

/**
* Channel service.
* @module api/ChannelApi
* @version 1.0
*/
export default class ChannelApi {

    /**
    * Constructs a new ChannelApi. 
    * @alias module:api/ChannelApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the apiChannelGet operation.
     * @callback module:api/ChannelApi~apiChannelGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ChannelsVm} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/ChannelApi~apiChannelGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ChannelsVm}
     */
    apiChannelGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ChannelsVm;
      return this.apiClient.callApi(
        '/api/channel', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiChannelIdDelete operation.
     * @callback module:api/ChannelApi~apiChannelIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:api/ChannelApi~apiChannelIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiChannelIdDelete(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiChannelIdDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/channel/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiChannelIdGet operation.
     * @callback module:api/ChannelApi~apiChannelIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:api/ChannelApi~apiChannelIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiChannelIdGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiChannelIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/channel/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiChannelPost operation.
     * @callback module:api/ChannelApi~apiChannelPostCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateChannelCommand} opts.createChannelCommand 
     * @param {module:api/ChannelApi~apiChannelPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    apiChannelPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['createChannelCommand'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/api/channel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}

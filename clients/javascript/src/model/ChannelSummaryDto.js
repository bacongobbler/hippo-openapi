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

import ApiClient from '../ApiClient';
import AppSummaryDto from './AppSummaryDto';

/**
 * The ChannelSummaryDto model module.
 * @module model/ChannelSummaryDto
 * @version 1.0
 */
class ChannelSummaryDto {
    /**
     * Constructs a new <code>ChannelSummaryDto</code>.
     * @alias module:model/ChannelSummaryDto
     * @param id {String} 
     * @param name {String} 
     * @param domain {String} 
     * @param appSummary {module:model/AppSummaryDto} 
     */
    constructor(id, name, domain, appSummary) { 
        
        ChannelSummaryDto.initialize(this, id, name, domain, appSummary);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, domain, appSummary) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['domain'] = domain;
        obj['appSummary'] = appSummary;
    }

    /**
     * Constructs a <code>ChannelSummaryDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelSummaryDto} obj Optional instance to populate.
     * @return {module:model/ChannelSummaryDto} The populated <code>ChannelSummaryDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelSummaryDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('appSummary')) {
                obj['appSummary'] = AppSummaryDto.constructFromObject(data['appSummary']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ChannelSummaryDto.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ChannelSummaryDto.prototype['name'] = undefined;

/**
 * @member {String} domain
 */
ChannelSummaryDto.prototype['domain'] = undefined;

/**
 * @member {module:model/AppSummaryDto} appSummary
 */
ChannelSummaryDto.prototype['appSummary'] = undefined;






export default ChannelSummaryDto;


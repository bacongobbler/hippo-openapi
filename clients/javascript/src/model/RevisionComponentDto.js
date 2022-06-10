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

/**
 * The RevisionComponentDto model module.
 * @module model/RevisionComponentDto
 * @version 1.0
 */
class RevisionComponentDto {
    /**
     * Constructs a new <code>RevisionComponentDto</code>.
     * @alias module:model/RevisionComponentDto
     * @param id {String} 
     * @param source {String} 
     * @param name {String} 
     */
    constructor(id, source, name) { 
        
        RevisionComponentDto.initialize(this, id, source, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, source, name) { 
        obj['id'] = id;
        obj['source'] = source;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>RevisionComponentDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RevisionComponentDto} obj Optional instance to populate.
     * @return {module:model/RevisionComponentDto} The populated <code>RevisionComponentDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RevisionComponentDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('route')) {
                obj['route'] = ApiClient.convertToType(data['route'], 'String');
            }
            if (data.hasOwnProperty('channel')) {
                obj['channel'] = ApiClient.convertToType(data['channel'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
RevisionComponentDto.prototype['id'] = undefined;

/**
 * @member {String} source
 */
RevisionComponentDto.prototype['source'] = undefined;

/**
 * @member {String} name
 */
RevisionComponentDto.prototype['name'] = undefined;

/**
 * @member {String} route
 */
RevisionComponentDto.prototype['route'] = undefined;

/**
 * @member {String} channel
 */
RevisionComponentDto.prototype['channel'] = undefined;

/**
 * @member {String} type
 */
RevisionComponentDto.prototype['type'] = undefined;






export default RevisionComponentDto;


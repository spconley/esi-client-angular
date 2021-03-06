/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.7.6
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/**
 * 200 ok object
 */
export interface GetUniverseGroupsGroupIdOk {
    /**
     * group_id integer
     */
    groupId: number;
    /**
     * name string
     */
    name: string;
    /**
     * published boolean
     */
    published: boolean;
    /**
     * category_id integer
     */
    categoryId: number;
    /**
     * types array
     */
    types: Array<number>;
}

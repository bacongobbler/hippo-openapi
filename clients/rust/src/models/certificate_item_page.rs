/*
 * Hippo.Web
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 * Generated by: https://openapi-generator.tech
 */




#[derive(Clone, Debug, PartialEq, Default, Serialize, Deserialize)]
pub struct CertificateItemPage {
    #[serde(rename = "items")]
    pub items: Vec<crate::models::CertificateItem>,
    #[serde(rename = "totalItems")]
    pub total_items: i32,
    #[serde(rename = "pageIndex")]
    pub page_index: i32,
    #[serde(rename = "pageSize")]
    pub page_size: i32,
    #[serde(rename = "isLastPage")]
    pub is_last_page: bool,
}

impl CertificateItemPage {
    pub fn new(items: Vec<crate::models::CertificateItem>, total_items: i32, page_index: i32, page_size: i32, is_last_page: bool) -> CertificateItemPage {
        CertificateItemPage {
            items,
            total_items,
            page_index,
            page_size,
            is_last_page,
        }
    }
}



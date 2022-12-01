export default awsmobile;
declare namespace awsmobile {
    export const aws_project_region: string;
    export const aws_appsync_graphqlEndpoint: string;
    export const aws_appsync_region: string;
    export const aws_appsync_authenticationType: string;
    export const aws_appsync_apiKey: string;
    export const aws_cloud_logic_custom: {
        name: string;
        endpoint: string;
        region: string;
    }[];
    export const aws_cognito_identity_pool_id: string;
    export const aws_cognito_region: string;
    export const aws_user_pools_id: string;
    export const aws_user_pools_web_client_id: string;
    export const oauth: {};
    export const aws_user_files_s3_bucket: string;
    export const aws_user_files_s3_bucket_region: string;
}

export declare type CreateCampaignInput = {
    id?: string | null;
};
export declare type ModelCampaignConditionInput = {
    and?: Array<ModelCampaignConditionInput | null> | null;
    or?: Array<ModelCampaignConditionInput | null> | null;
    not?: ModelCampaignConditionInput | null;
};
export declare type UpdateCampaignInput = {
    id: string;
};
export declare type DeleteCampaignInput = {
    id?: string | null;
};
export declare type CreateSenderInput = {
    id?: string | null;
};
export declare type ModelSenderConditionInput = {
    and?: Array<ModelSenderConditionInput | null> | null;
    or?: Array<ModelSenderConditionInput | null> | null;
    not?: ModelSenderConditionInput | null;
};
export declare type UpdateSenderInput = {
    id: string;
};
export declare type DeleteSenderInput = {
    id?: string | null;
};
export declare type CreateTopicInput = {
    id?: string | null;
    code?: string | null;
    name?: string | null;
    description?: string | null;
};
export declare type ModelTopicConditionInput = {
    code?: ModelStringInput | null;
    name?: ModelStringInput | null;
    description?: ModelStringInput | null;
    and?: Array<ModelTopicConditionInput | null> | null;
    or?: Array<ModelTopicConditionInput | null> | null;
    not?: ModelTopicConditionInput | null;
};
export declare type ModelStringInput = {
    ne?: string | null;
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    contains?: string | null;
    notContains?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
    size?: ModelSizeInput | null;
};
export declare enum ModelAttributeTypes {
    binary = "binary",
    binarySet = "binarySet",
    bool = "bool",
    list = "list",
    map = "map",
    number = "number",
    numberSet = "numberSet",
    string = "string",
    stringSet = "stringSet",
    _null = "_null"
}
export declare type ModelSizeInput = {
    ne?: number | null;
    eq?: number | null;
    le?: number | null;
    lt?: number | null;
    ge?: number | null;
    gt?: number | null;
    between?: Array<number | null> | null;
};
export declare type UpdateTopicInput = {
    id: string;
    code?: string | null;
    name?: string | null;
    description?: string | null;
};
export declare type DeleteTopicInput = {
    id?: string | null;
};
export declare type CreateBulletinInput = {
    id?: string | null;
    campaign_id: string;
    sender_email: string;
    created_at?: string | null;
    detail?: BulletinDetailInput | null;
    links?: Array<LinkInput | null> | null;
};
export declare type BulletinDetailInput = {
    subject?: string | null;
    to_text?: string | null;
    delivery_status_name?: string | null;
    addresses_count?: number | null;
    success_count?: number | null;
    failed_count?: number | null;
    percent_success?: number | null;
    immediate_email_recipients?: number | null;
    emails_delivered?: number | null;
    emails_failed?: number | null;
    percent_emails_delivered?: number | null;
    opens_count?: number | null;
    percent_opened?: number | null;
    nonunique_opens_count?: number | null;
    links_count?: number | null;
    click_rate?: number | null;
    clicks_count?: number | null;
    nonunique_clicks_count?: number | null;
    digest_email_recipients?: number | null;
    unique_click_count?: number | null;
    total_click_count?: number | null;
    unsubscribes?: number | null;
};
export declare type LinkInput = {
    id: string;
    link_url?: string | null;
    unique_click_count?: number | null;
    total_click_count?: number | null;
};
export declare type ModelBulletinConditionInput = {
    campaign_id?: ModelIDInput | null;
    sender_email?: ModelIDInput | null;
    created_at?: ModelStringInput | null;
    and?: Array<ModelBulletinConditionInput | null> | null;
    or?: Array<ModelBulletinConditionInput | null> | null;
    not?: ModelBulletinConditionInput | null;
};
export declare type ModelIDInput = {
    ne?: string | null;
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    contains?: string | null;
    notContains?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
    size?: ModelSizeInput | null;
};
export declare type UpdateBulletinInput = {
    id: string;
    campaign_id?: string | null;
    sender_email?: string | null;
    created_at?: string | null;
    detail?: BulletinDetailInput | null;
    links?: Array<LinkInput | null> | null;
};
export declare type DeleteBulletinInput = {
    id?: string | null;
};
export declare type CreateBulletinTopicInput = {
    id?: string | null;
    bulletin_id: string;
    topic_id: string;
    created_at?: string | null;
    to_date?: SubsReportInput | null;
    this_period?: SubsReportInput | null;
};
export declare type SubsReportInput = {
    total_subscriptions?: number | null;
    new_subscriptions?: number | null;
    deleted_subscriptions?: number | null;
    bulletins_sent?: number | null;
    allocated?: AllocationInput | null;
};
export declare type AllocationInput = {
    direct?: number | null;
    overlay?: number | null;
    signup?: number | null;
    upload?: number | null;
    other?: number | null;
    all_network?: number | null;
};
export declare type ModelBulletinTopicConditionInput = {
    bulletin_id?: ModelIDInput | null;
    topic_id?: ModelIDInput | null;
    created_at?: ModelStringInput | null;
    and?: Array<ModelBulletinTopicConditionInput | null> | null;
    or?: Array<ModelBulletinTopicConditionInput | null> | null;
    not?: ModelBulletinTopicConditionInput | null;
};
export declare type UpdateBulletinTopicInput = {
    id: string;
    bulletin_id?: string | null;
    topic_id?: string | null;
    created_at?: string | null;
    to_date?: SubsReportInput | null;
    this_period?: SubsReportInput | null;
};
export declare type DeleteBulletinTopicInput = {
    id?: string | null;
};
export declare type CreateSubsSummaryInput = {
    id?: string | null;
    direct_subscribers?: number | null;
    direct_subscriptions?: number | null;
    overlay_subscribers?: number | null;
    overlay_subscriptions?: number | null;
    signup_subscribers?: number | null;
    signup_subscriptions?: number | null;
    upload_subscribers?: number | null;
    upload_subscriptions?: number | null;
    other_subscribers?: number | null;
    other_subscriptions?: number | null;
    total_subscribers?: number | null;
    total_subscriptions?: number | null;
    deleted_subscribers?: number | null;
    deleted_subscriptions?: number | null;
    all_network_subscribers?: number | null;
    all_network_subscriptions?: number | null;
    net_subscribers?: number | null;
    net_subscriptions?: number | null;
};
export declare type ModelSubsSummaryConditionInput = {
    direct_subscribers?: ModelIntInput | null;
    direct_subscriptions?: ModelIntInput | null;
    overlay_subscribers?: ModelIntInput | null;
    overlay_subscriptions?: ModelIntInput | null;
    signup_subscribers?: ModelIntInput | null;
    signup_subscriptions?: ModelIntInput | null;
    upload_subscribers?: ModelIntInput | null;
    upload_subscriptions?: ModelIntInput | null;
    other_subscribers?: ModelIntInput | null;
    other_subscriptions?: ModelIntInput | null;
    total_subscribers?: ModelIntInput | null;
    total_subscriptions?: ModelIntInput | null;
    deleted_subscribers?: ModelIntInput | null;
    deleted_subscriptions?: ModelIntInput | null;
    all_network_subscribers?: ModelIntInput | null;
    all_network_subscriptions?: ModelIntInput | null;
    net_subscribers?: ModelIntInput | null;
    net_subscriptions?: ModelIntInput | null;
    and?: Array<ModelSubsSummaryConditionInput | null> | null;
    or?: Array<ModelSubsSummaryConditionInput | null> | null;
    not?: ModelSubsSummaryConditionInput | null;
};
export declare type ModelIntInput = {
    ne?: number | null;
    eq?: number | null;
    le?: number | null;
    lt?: number | null;
    ge?: number | null;
    gt?: number | null;
    between?: Array<number | null> | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
};
export declare type UpdateSubsSummaryInput = {
    id: string;
    direct_subscribers?: number | null;
    direct_subscriptions?: number | null;
    overlay_subscribers?: number | null;
    overlay_subscriptions?: number | null;
    signup_subscribers?: number | null;
    signup_subscriptions?: number | null;
    upload_subscribers?: number | null;
    upload_subscriptions?: number | null;
    other_subscribers?: number | null;
    other_subscriptions?: number | null;
    total_subscribers?: number | null;
    total_subscriptions?: number | null;
    deleted_subscribers?: number | null;
    deleted_subscriptions?: number | null;
    all_network_subscribers?: number | null;
    all_network_subscriptions?: number | null;
    net_subscribers?: number | null;
    net_subscriptions?: number | null;
};
export declare type DeleteSubsSummaryInput = {
    id?: string | null;
};
export declare type CreateAccumulatorInput = {
    id?: string | null;
    all_topics?: Array<string> | null;
    all_campaigns?: Array<string> | null;
    all_senders?: Array<string> | null;
};
export declare type ModelAccumulatorConditionInput = {
    all_topics?: ModelStringInput | null;
    all_campaigns?: ModelStringInput | null;
    all_senders?: ModelStringInput | null;
    and?: Array<ModelAccumulatorConditionInput | null> | null;
    or?: Array<ModelAccumulatorConditionInput | null> | null;
    not?: ModelAccumulatorConditionInput | null;
};
export declare type UpdateAccumulatorInput = {
    id: string;
    all_topics?: Array<string> | null;
    all_campaigns?: Array<string> | null;
    all_senders?: Array<string> | null;
};
export declare type DeleteAccumulatorInput = {
    id?: string | null;
};
export declare type CreateTopicFollowerInput = {
    id?: string | null;
    topic_id: string;
    follower_id: string;
};
export declare type ModelTopicFollowerConditionInput = {
    topic_id?: ModelIDInput | null;
    follower_id?: ModelIDInput | null;
    and?: Array<ModelTopicFollowerConditionInput | null> | null;
    or?: Array<ModelTopicFollowerConditionInput | null> | null;
    not?: ModelTopicFollowerConditionInput | null;
};
export declare type UpdateTopicFollowerInput = {
    id: string;
    topic_id?: string | null;
    follower_id?: string | null;
};
export declare type DeleteTopicFollowerInput = {
    id?: string | null;
};
export declare type CreateFollowerInput = {
    id?: string | null;
    destination?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    created_at?: string | null;
    source?: string | null;
};
export declare type ModelFollowerConditionInput = {
    destination?: ModelStringInput | null;
    latitude?: ModelFloatInput | null;
    longitude?: ModelFloatInput | null;
    created_at?: ModelStringInput | null;
    source?: ModelStringInput | null;
    and?: Array<ModelFollowerConditionInput | null> | null;
    or?: Array<ModelFollowerConditionInput | null> | null;
    not?: ModelFollowerConditionInput | null;
};
export declare type ModelFloatInput = {
    ne?: number | null;
    eq?: number | null;
    le?: number | null;
    lt?: number | null;
    ge?: number | null;
    gt?: number | null;
    between?: Array<number | null> | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
};
export declare type UpdateFollowerInput = {
    id: string;
    destination?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    created_at?: string | null;
    source?: string | null;
};
export declare type DeleteFollowerInput = {
    id?: string | null;
};
export declare type CreateSubInput = {
    id?: string | null;
    referrer_url?: string | null;
    created_at?: string | null;
    deleted_at?: string | null;
    source?: string | null;
    topic_id: string;
    follower_id: string;
};
export declare type ModelSubConditionInput = {
    referrer_url?: ModelStringInput | null;
    created_at?: ModelStringInput | null;
    deleted_at?: ModelStringInput | null;
    source?: ModelStringInput | null;
    topic_id?: ModelIDInput | null;
    follower_id?: ModelIDInput | null;
    and?: Array<ModelSubConditionInput | null> | null;
    or?: Array<ModelSubConditionInput | null> | null;
    not?: ModelSubConditionInput | null;
};
export declare type UpdateSubInput = {
    id: string;
    referrer_url?: string | null;
    created_at?: string | null;
    deleted_at?: string | null;
    source?: string | null;
    topic_id?: string | null;
    follower_id?: string | null;
};
export declare type DeleteSubInput = {
    id?: string | null;
};
export declare type ModelCampaignFilterInput = {
    id?: ModelIDInput | null;
    and?: Array<ModelCampaignFilterInput | null> | null;
    or?: Array<ModelCampaignFilterInput | null> | null;
    not?: ModelCampaignFilterInput | null;
};
export declare type ModelSenderFilterInput = {
    id?: ModelIDInput | null;
    and?: Array<ModelSenderFilterInput | null> | null;
    or?: Array<ModelSenderFilterInput | null> | null;
    not?: ModelSenderFilterInput | null;
};
export declare type ModelTopicFilterInput = {
    id?: ModelIDInput | null;
    code?: ModelStringInput | null;
    name?: ModelStringInput | null;
    description?: ModelStringInput | null;
    and?: Array<ModelTopicFilterInput | null> | null;
    or?: Array<ModelTopicFilterInput | null> | null;
    not?: ModelTopicFilterInput | null;
};
export declare type ModelBulletinFilterInput = {
    id?: ModelIDInput | null;
    campaign_id?: ModelIDInput | null;
    sender_email?: ModelIDInput | null;
    created_at?: ModelStringInput | null;
    and?: Array<ModelBulletinFilterInput | null> | null;
    or?: Array<ModelBulletinFilterInput | null> | null;
    not?: ModelBulletinFilterInput | null;
};
export declare type ModelSubsSummaryFilterInput = {
    id?: ModelIDInput | null;
    direct_subscribers?: ModelIntInput | null;
    direct_subscriptions?: ModelIntInput | null;
    overlay_subscribers?: ModelIntInput | null;
    overlay_subscriptions?: ModelIntInput | null;
    signup_subscribers?: ModelIntInput | null;
    signup_subscriptions?: ModelIntInput | null;
    upload_subscribers?: ModelIntInput | null;
    upload_subscriptions?: ModelIntInput | null;
    other_subscribers?: ModelIntInput | null;
    other_subscriptions?: ModelIntInput | null;
    total_subscribers?: ModelIntInput | null;
    total_subscriptions?: ModelIntInput | null;
    deleted_subscribers?: ModelIntInput | null;
    deleted_subscriptions?: ModelIntInput | null;
    all_network_subscribers?: ModelIntInput | null;
    all_network_subscriptions?: ModelIntInput | null;
    net_subscribers?: ModelIntInput | null;
    net_subscriptions?: ModelIntInput | null;
    and?: Array<ModelSubsSummaryFilterInput | null> | null;
    or?: Array<ModelSubsSummaryFilterInput | null> | null;
    not?: ModelSubsSummaryFilterInput | null;
};
export declare type ModelAccumulatorFilterInput = {
    id?: ModelIDInput | null;
    all_topics?: ModelStringInput | null;
    all_campaigns?: ModelStringInput | null;
    all_senders?: ModelStringInput | null;
    and?: Array<ModelAccumulatorFilterInput | null> | null;
    or?: Array<ModelAccumulatorFilterInput | null> | null;
    not?: ModelAccumulatorFilterInput | null;
};
export declare type ModelSubFilterInput = {
    id?: ModelIDInput | null;
    referrer_url?: ModelStringInput | null;
    created_at?: ModelStringInput | null;
    deleted_at?: ModelStringInput | null;
    source?: ModelStringInput | null;
    topic_id?: ModelIDInput | null;
    follower_id?: ModelIDInput | null;
    and?: Array<ModelSubFilterInput | null> | null;
    or?: Array<ModelSubFilterInput | null> | null;
    not?: ModelSubFilterInput | null;
};
export declare type ModelStringKeyConditionInput = {
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
};
export declare enum ModelSortDirection {
    ASC = "ASC",
    DESC = "DESC"
}
export declare type ModelIDKeyConditionInput = {
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
};
export declare type ModelTopicFollowerFilterInput = {
    id?: ModelIDInput | null;
    topic_id?: ModelIDInput | null;
    follower_id?: ModelIDInput | null;
    and?: Array<ModelTopicFollowerFilterInput | null> | null;
    or?: Array<ModelTopicFollowerFilterInput | null> | null;
    not?: ModelTopicFollowerFilterInput | null;
};
export declare type ModelFollowerFilterInput = {
    id?: ModelIDInput | null;
    destination?: ModelStringInput | null;
    latitude?: ModelFloatInput | null;
    longitude?: ModelFloatInput | null;
    created_at?: ModelStringInput | null;
    source?: ModelStringInput | null;
    and?: Array<ModelFollowerFilterInput | null> | null;
    or?: Array<ModelFollowerFilterInput | null> | null;
    not?: ModelFollowerFilterInput | null;
};
export declare type CreateCampaignMutationVariables = {
    input: CreateCampaignInput;
    condition?: ModelCampaignConditionInput | null;
};
export declare type CreateCampaignMutation = {
    createCampaign: {
        __typename: "Campaign";
        id: string;
        bulletins: {
            __typename: "ModelBulletinConnection";
            items: Array<{
                __typename: "Bulletin";
                id: string;
                campaign_id: string;
                sender_email: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type UpdateCampaignMutationVariables = {
    input: UpdateCampaignInput;
    condition?: ModelCampaignConditionInput | null;
};
export declare type UpdateCampaignMutation = {
    updateCampaign: {
        __typename: "Campaign";
        id: string;
        bulletins: {
            __typename: "ModelBulletinConnection";
            items: Array<{
                __typename: "Bulletin";
                id: string;
                campaign_id: string;
                sender_email: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type DeleteCampaignMutationVariables = {
    input: DeleteCampaignInput;
    condition?: ModelCampaignConditionInput | null;
};
export declare type DeleteCampaignMutation = {
    deleteCampaign: {
        __typename: "Campaign";
        id: string;
        bulletins: {
            __typename: "ModelBulletinConnection";
            items: Array<{
                __typename: "Bulletin";
                id: string;
                campaign_id: string;
                sender_email: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type CreateSenderMutationVariables = {
    input: CreateSenderInput;
    condition?: ModelSenderConditionInput | null;
};
export declare type CreateSenderMutation = {
    createSender: {
        __typename: "Sender";
        id: string;
        bulletins: {
            __typename: "ModelBulletinConnection";
            items: Array<{
                __typename: "Bulletin";
                id: string;
                campaign_id: string;
                sender_email: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type UpdateSenderMutationVariables = {
    input: UpdateSenderInput;
    condition?: ModelSenderConditionInput | null;
};
export declare type UpdateSenderMutation = {
    updateSender: {
        __typename: "Sender";
        id: string;
        bulletins: {
            __typename: "ModelBulletinConnection";
            items: Array<{
                __typename: "Bulletin";
                id: string;
                campaign_id: string;
                sender_email: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type DeleteSenderMutationVariables = {
    input: DeleteSenderInput;
    condition?: ModelSenderConditionInput | null;
};
export declare type DeleteSenderMutation = {
    deleteSender: {
        __typename: "Sender";
        id: string;
        bulletins: {
            __typename: "ModelBulletinConnection";
            items: Array<{
                __typename: "Bulletin";
                id: string;
                campaign_id: string;
                sender_email: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type CreateTopicMutationVariables = {
    input: CreateTopicInput;
    condition?: ModelTopicConditionInput | null;
};
export declare type CreateTopicMutation = {
    createTopic: {
        __typename: "Topic";
        id: string;
        code: string | null;
        name: string | null;
        description: string | null;
        bulletins: {
            __typename: "ModelBulletinTopicConnection";
            items: Array<{
                __typename: "BulletinTopic";
                id: string;
                bulletin_id: string;
                topic_id: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        followers: {
            __typename: "ModelTopicFollowerConnection";
            items: Array<{
                __typename: "TopicFollower";
                id: string;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        subscriptions: {
            __typename: "ModelSubConnection";
            items: Array<{
                __typename: "Sub";
                id: string;
                referrer_url: string | null;
                created_at: string | null;
                deleted_at: string | null;
                source: string | null;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type UpdateTopicMutationVariables = {
    input: UpdateTopicInput;
    condition?: ModelTopicConditionInput | null;
};
export declare type UpdateTopicMutation = {
    updateTopic: {
        __typename: "Topic";
        id: string;
        code: string | null;
        name: string | null;
        description: string | null;
        bulletins: {
            __typename: "ModelBulletinTopicConnection";
            items: Array<{
                __typename: "BulletinTopic";
                id: string;
                bulletin_id: string;
                topic_id: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        followers: {
            __typename: "ModelTopicFollowerConnection";
            items: Array<{
                __typename: "TopicFollower";
                id: string;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        subscriptions: {
            __typename: "ModelSubConnection";
            items: Array<{
                __typename: "Sub";
                id: string;
                referrer_url: string | null;
                created_at: string | null;
                deleted_at: string | null;
                source: string | null;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type DeleteTopicMutationVariables = {
    input: DeleteTopicInput;
    condition?: ModelTopicConditionInput | null;
};
export declare type DeleteTopicMutation = {
    deleteTopic: {
        __typename: "Topic";
        id: string;
        code: string | null;
        name: string | null;
        description: string | null;
        bulletins: {
            __typename: "ModelBulletinTopicConnection";
            items: Array<{
                __typename: "BulletinTopic";
                id: string;
                bulletin_id: string;
                topic_id: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        followers: {
            __typename: "ModelTopicFollowerConnection";
            items: Array<{
                __typename: "TopicFollower";
                id: string;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        subscriptions: {
            __typename: "ModelSubConnection";
            items: Array<{
                __typename: "Sub";
                id: string;
                referrer_url: string | null;
                created_at: string | null;
                deleted_at: string | null;
                source: string | null;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type CreateBulletinMutationVariables = {
    input: CreateBulletinInput;
    condition?: ModelBulletinConditionInput | null;
};
export declare type CreateBulletinMutation = {
    createBulletin: {
        __typename: "Bulletin";
        id: string;
        campaign_id: string;
        campaign: {
            __typename: "Campaign";
            id: string;
            bulletins: {
                __typename: "ModelBulletinConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        sender_email: string;
        sender: {
            __typename: "Sender";
            id: string;
            bulletins: {
                __typename: "ModelBulletinConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        created_at: string | null;
        detail: {
            __typename: "BulletinDetail";
            subject: string | null;
            to_text: string | null;
            delivery_status_name: string | null;
            addresses_count: number | null;
            success_count: number | null;
            failed_count: number | null;
            percent_success: number | null;
            immediate_email_recipients: number | null;
            emails_delivered: number | null;
            emails_failed: number | null;
            percent_emails_delivered: number | null;
            opens_count: number | null;
            percent_opened: number | null;
            nonunique_opens_count: number | null;
            links_count: number | null;
            click_rate: number | null;
            clicks_count: number | null;
            nonunique_clicks_count: number | null;
            digest_email_recipients: number | null;
            unique_click_count: number | null;
            total_click_count: number | null;
            unsubscribes: number | null;
        } | null;
        links: Array<{
            __typename: "Link";
            id: string;
            link_url: string | null;
            unique_click_count: number | null;
            total_click_count: number | null;
        } | null> | null;
        topics: {
            __typename: "ModelBulletinTopicConnection";
            items: Array<{
                __typename: "BulletinTopic";
                id: string;
                bulletin_id: string;
                topic_id: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type UpdateBulletinMutationVariables = {
    input: UpdateBulletinInput;
    condition?: ModelBulletinConditionInput | null;
};
export declare type UpdateBulletinMutation = {
    updateBulletin: {
        __typename: "Bulletin";
        id: string;
        campaign_id: string;
        campaign: {
            __typename: "Campaign";
            id: string;
            bulletins: {
                __typename: "ModelBulletinConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        sender_email: string;
        sender: {
            __typename: "Sender";
            id: string;
            bulletins: {
                __typename: "ModelBulletinConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        created_at: string | null;
        detail: {
            __typename: "BulletinDetail";
            subject: string | null;
            to_text: string | null;
            delivery_status_name: string | null;
            addresses_count: number | null;
            success_count: number | null;
            failed_count: number | null;
            percent_success: number | null;
            immediate_email_recipients: number | null;
            emails_delivered: number | null;
            emails_failed: number | null;
            percent_emails_delivered: number | null;
            opens_count: number | null;
            percent_opened: number | null;
            nonunique_opens_count: number | null;
            links_count: number | null;
            click_rate: number | null;
            clicks_count: number | null;
            nonunique_clicks_count: number | null;
            digest_email_recipients: number | null;
            unique_click_count: number | null;
            total_click_count: number | null;
            unsubscribes: number | null;
        } | null;
        links: Array<{
            __typename: "Link";
            id: string;
            link_url: string | null;
            unique_click_count: number | null;
            total_click_count: number | null;
        } | null> | null;
        topics: {
            __typename: "ModelBulletinTopicConnection";
            items: Array<{
                __typename: "BulletinTopic";
                id: string;
                bulletin_id: string;
                topic_id: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type DeleteBulletinMutationVariables = {
    input: DeleteBulletinInput;
    condition?: ModelBulletinConditionInput | null;
};
export declare type DeleteBulletinMutation = {
    deleteBulletin: {
        __typename: "Bulletin";
        id: string;
        campaign_id: string;
        campaign: {
            __typename: "Campaign";
            id: string;
            bulletins: {
                __typename: "ModelBulletinConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        sender_email: string;
        sender: {
            __typename: "Sender";
            id: string;
            bulletins: {
                __typename: "ModelBulletinConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        created_at: string | null;
        detail: {
            __typename: "BulletinDetail";
            subject: string | null;
            to_text: string | null;
            delivery_status_name: string | null;
            addresses_count: number | null;
            success_count: number | null;
            failed_count: number | null;
            percent_success: number | null;
            immediate_email_recipients: number | null;
            emails_delivered: number | null;
            emails_failed: number | null;
            percent_emails_delivered: number | null;
            opens_count: number | null;
            percent_opened: number | null;
            nonunique_opens_count: number | null;
            links_count: number | null;
            click_rate: number | null;
            clicks_count: number | null;
            nonunique_clicks_count: number | null;
            digest_email_recipients: number | null;
            unique_click_count: number | null;
            total_click_count: number | null;
            unsubscribes: number | null;
        } | null;
        links: Array<{
            __typename: "Link";
            id: string;
            link_url: string | null;
            unique_click_count: number | null;
            total_click_count: number | null;
        } | null> | null;
        topics: {
            __typename: "ModelBulletinTopicConnection";
            items: Array<{
                __typename: "BulletinTopic";
                id: string;
                bulletin_id: string;
                topic_id: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type CreateBulletinTopicMutationVariables = {
    input: CreateBulletinTopicInput;
    condition?: ModelBulletinTopicConditionInput | null;
};
export declare type CreateBulletinTopicMutation = {
    createBulletinTopic: {
        __typename: "BulletinTopic";
        id: string;
        bulletin_id: string;
        topic_id: string;
        created_at: string | null;
        to_date: {
            __typename: "SubsReport";
            total_subscriptions: number | null;
            new_subscriptions: number | null;
            deleted_subscriptions: number | null;
            bulletins_sent: number | null;
            allocated: {
                __typename: "Allocation";
                direct: number | null;
                overlay: number | null;
                signup: number | null;
                upload: number | null;
                other: number | null;
                all_network: number | null;
            } | null;
        } | null;
        this_period: {
            __typename: "SubsReport";
            total_subscriptions: number | null;
            new_subscriptions: number | null;
            deleted_subscriptions: number | null;
            bulletins_sent: number | null;
            allocated: {
                __typename: "Allocation";
                direct: number | null;
                overlay: number | null;
                signup: number | null;
                upload: number | null;
                other: number | null;
                all_network: number | null;
            } | null;
        } | null;
        bulletin: {
            __typename: "Bulletin";
            id: string;
            campaign_id: string;
            campaign: {
                __typename: "Campaign";
                id: string;
                createdAt: string;
                updatedAt: string;
            } | null;
            sender_email: string;
            sender: {
                __typename: "Sender";
                id: string;
                createdAt: string;
                updatedAt: string;
            } | null;
            created_at: string | null;
            detail: {
                __typename: "BulletinDetail";
                subject: string | null;
                to_text: string | null;
                delivery_status_name: string | null;
                addresses_count: number | null;
                success_count: number | null;
                failed_count: number | null;
                percent_success: number | null;
                immediate_email_recipients: number | null;
                emails_delivered: number | null;
                emails_failed: number | null;
                percent_emails_delivered: number | null;
                opens_count: number | null;
                percent_opened: number | null;
                nonunique_opens_count: number | null;
                links_count: number | null;
                click_rate: number | null;
                clicks_count: number | null;
                nonunique_clicks_count: number | null;
                digest_email_recipients: number | null;
                unique_click_count: number | null;
                total_click_count: number | null;
                unsubscribes: number | null;
            } | null;
            links: Array<{
                __typename: "Link";
                id: string;
                link_url: string | null;
                unique_click_count: number | null;
                total_click_count: number | null;
            } | null> | null;
            topics: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        topic: {
            __typename: "Topic";
            id: string;
            code: string | null;
            name: string | null;
            description: string | null;
            bulletins: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            followers: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type UpdateBulletinTopicMutationVariables = {
    input: UpdateBulletinTopicInput;
    condition?: ModelBulletinTopicConditionInput | null;
};
export declare type UpdateBulletinTopicMutation = {
    updateBulletinTopic: {
        __typename: "BulletinTopic";
        id: string;
        bulletin_id: string;
        topic_id: string;
        created_at: string | null;
        to_date: {
            __typename: "SubsReport";
            total_subscriptions: number | null;
            new_subscriptions: number | null;
            deleted_subscriptions: number | null;
            bulletins_sent: number | null;
            allocated: {
                __typename: "Allocation";
                direct: number | null;
                overlay: number | null;
                signup: number | null;
                upload: number | null;
                other: number | null;
                all_network: number | null;
            } | null;
        } | null;
        this_period: {
            __typename: "SubsReport";
            total_subscriptions: number | null;
            new_subscriptions: number | null;
            deleted_subscriptions: number | null;
            bulletins_sent: number | null;
            allocated: {
                __typename: "Allocation";
                direct: number | null;
                overlay: number | null;
                signup: number | null;
                upload: number | null;
                other: number | null;
                all_network: number | null;
            } | null;
        } | null;
        bulletin: {
            __typename: "Bulletin";
            id: string;
            campaign_id: string;
            campaign: {
                __typename: "Campaign";
                id: string;
                createdAt: string;
                updatedAt: string;
            } | null;
            sender_email: string;
            sender: {
                __typename: "Sender";
                id: string;
                createdAt: string;
                updatedAt: string;
            } | null;
            created_at: string | null;
            detail: {
                __typename: "BulletinDetail";
                subject: string | null;
                to_text: string | null;
                delivery_status_name: string | null;
                addresses_count: number | null;
                success_count: number | null;
                failed_count: number | null;
                percent_success: number | null;
                immediate_email_recipients: number | null;
                emails_delivered: number | null;
                emails_failed: number | null;
                percent_emails_delivered: number | null;
                opens_count: number | null;
                percent_opened: number | null;
                nonunique_opens_count: number | null;
                links_count: number | null;
                click_rate: number | null;
                clicks_count: number | null;
                nonunique_clicks_count: number | null;
                digest_email_recipients: number | null;
                unique_click_count: number | null;
                total_click_count: number | null;
                unsubscribes: number | null;
            } | null;
            links: Array<{
                __typename: "Link";
                id: string;
                link_url: string | null;
                unique_click_count: number | null;
                total_click_count: number | null;
            } | null> | null;
            topics: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        topic: {
            __typename: "Topic";
            id: string;
            code: string | null;
            name: string | null;
            description: string | null;
            bulletins: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            followers: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type DeleteBulletinTopicMutationVariables = {
    input: DeleteBulletinTopicInput;
    condition?: ModelBulletinTopicConditionInput | null;
};
export declare type DeleteBulletinTopicMutation = {
    deleteBulletinTopic: {
        __typename: "BulletinTopic";
        id: string;
        bulletin_id: string;
        topic_id: string;
        created_at: string | null;
        to_date: {
            __typename: "SubsReport";
            total_subscriptions: number | null;
            new_subscriptions: number | null;
            deleted_subscriptions: number | null;
            bulletins_sent: number | null;
            allocated: {
                __typename: "Allocation";
                direct: number | null;
                overlay: number | null;
                signup: number | null;
                upload: number | null;
                other: number | null;
                all_network: number | null;
            } | null;
        } | null;
        this_period: {
            __typename: "SubsReport";
            total_subscriptions: number | null;
            new_subscriptions: number | null;
            deleted_subscriptions: number | null;
            bulletins_sent: number | null;
            allocated: {
                __typename: "Allocation";
                direct: number | null;
                overlay: number | null;
                signup: number | null;
                upload: number | null;
                other: number | null;
                all_network: number | null;
            } | null;
        } | null;
        bulletin: {
            __typename: "Bulletin";
            id: string;
            campaign_id: string;
            campaign: {
                __typename: "Campaign";
                id: string;
                createdAt: string;
                updatedAt: string;
            } | null;
            sender_email: string;
            sender: {
                __typename: "Sender";
                id: string;
                createdAt: string;
                updatedAt: string;
            } | null;
            created_at: string | null;
            detail: {
                __typename: "BulletinDetail";
                subject: string | null;
                to_text: string | null;
                delivery_status_name: string | null;
                addresses_count: number | null;
                success_count: number | null;
                failed_count: number | null;
                percent_success: number | null;
                immediate_email_recipients: number | null;
                emails_delivered: number | null;
                emails_failed: number | null;
                percent_emails_delivered: number | null;
                opens_count: number | null;
                percent_opened: number | null;
                nonunique_opens_count: number | null;
                links_count: number | null;
                click_rate: number | null;
                clicks_count: number | null;
                nonunique_clicks_count: number | null;
                digest_email_recipients: number | null;
                unique_click_count: number | null;
                total_click_count: number | null;
                unsubscribes: number | null;
            } | null;
            links: Array<{
                __typename: "Link";
                id: string;
                link_url: string | null;
                unique_click_count: number | null;
                total_click_count: number | null;
            } | null> | null;
            topics: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        topic: {
            __typename: "Topic";
            id: string;
            code: string | null;
            name: string | null;
            description: string | null;
            bulletins: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            followers: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type CreateSubsSummaryMutationVariables = {
    input: CreateSubsSummaryInput;
    condition?: ModelSubsSummaryConditionInput | null;
};
export declare type CreateSubsSummaryMutation = {
    createSubsSummary: {
        __typename: "SubsSummary";
        id: string;
        direct_subscribers: number | null;
        direct_subscriptions: number | null;
        overlay_subscribers: number | null;
        overlay_subscriptions: number | null;
        signup_subscribers: number | null;
        signup_subscriptions: number | null;
        upload_subscribers: number | null;
        upload_subscriptions: number | null;
        other_subscribers: number | null;
        other_subscriptions: number | null;
        total_subscribers: number | null;
        total_subscriptions: number | null;
        deleted_subscribers: number | null;
        deleted_subscriptions: number | null;
        all_network_subscribers: number | null;
        all_network_subscriptions: number | null;
        net_subscribers: number | null;
        net_subscriptions: number | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type UpdateSubsSummaryMutationVariables = {
    input: UpdateSubsSummaryInput;
    condition?: ModelSubsSummaryConditionInput | null;
};
export declare type UpdateSubsSummaryMutation = {
    updateSubsSummary: {
        __typename: "SubsSummary";
        id: string;
        direct_subscribers: number | null;
        direct_subscriptions: number | null;
        overlay_subscribers: number | null;
        overlay_subscriptions: number | null;
        signup_subscribers: number | null;
        signup_subscriptions: number | null;
        upload_subscribers: number | null;
        upload_subscriptions: number | null;
        other_subscribers: number | null;
        other_subscriptions: number | null;
        total_subscribers: number | null;
        total_subscriptions: number | null;
        deleted_subscribers: number | null;
        deleted_subscriptions: number | null;
        all_network_subscribers: number | null;
        all_network_subscriptions: number | null;
        net_subscribers: number | null;
        net_subscriptions: number | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type DeleteSubsSummaryMutationVariables = {
    input: DeleteSubsSummaryInput;
    condition?: ModelSubsSummaryConditionInput | null;
};
export declare type DeleteSubsSummaryMutation = {
    deleteSubsSummary: {
        __typename: "SubsSummary";
        id: string;
        direct_subscribers: number | null;
        direct_subscriptions: number | null;
        overlay_subscribers: number | null;
        overlay_subscriptions: number | null;
        signup_subscribers: number | null;
        signup_subscriptions: number | null;
        upload_subscribers: number | null;
        upload_subscriptions: number | null;
        other_subscribers: number | null;
        other_subscriptions: number | null;
        total_subscribers: number | null;
        total_subscriptions: number | null;
        deleted_subscribers: number | null;
        deleted_subscriptions: number | null;
        all_network_subscribers: number | null;
        all_network_subscriptions: number | null;
        net_subscribers: number | null;
        net_subscriptions: number | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type CreateAccumulatorMutationVariables = {
    input: CreateAccumulatorInput;
    condition?: ModelAccumulatorConditionInput | null;
};
export declare type CreateAccumulatorMutation = {
    createAccumulator: {
        __typename: "Accumulator";
        id: string;
        all_topics: Array<string> | null;
        all_campaigns: Array<string> | null;
        all_senders: Array<string> | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type UpdateAccumulatorMutationVariables = {
    input: UpdateAccumulatorInput;
    condition?: ModelAccumulatorConditionInput | null;
};
export declare type UpdateAccumulatorMutation = {
    updateAccumulator: {
        __typename: "Accumulator";
        id: string;
        all_topics: Array<string> | null;
        all_campaigns: Array<string> | null;
        all_senders: Array<string> | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type DeleteAccumulatorMutationVariables = {
    input: DeleteAccumulatorInput;
    condition?: ModelAccumulatorConditionInput | null;
};
export declare type DeleteAccumulatorMutation = {
    deleteAccumulator: {
        __typename: "Accumulator";
        id: string;
        all_topics: Array<string> | null;
        all_campaigns: Array<string> | null;
        all_senders: Array<string> | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type CreateTopicFollowerMutationVariables = {
    input: CreateTopicFollowerInput;
    condition?: ModelTopicFollowerConditionInput | null;
};
export declare type CreateTopicFollowerMutation = {
    createTopicFollower: {
        __typename: "TopicFollower";
        id: string;
        topic_id: string;
        follower_id: string;
        topic: {
            __typename: "Topic";
            id: string;
            code: string | null;
            name: string | null;
            description: string | null;
            bulletins: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            followers: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        follower: {
            __typename: "Follower";
            id: string;
            latitude: number | null;
            longitude: number | null;
            created_at: string | null;
            source: string | null;
            topics: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            destination: string | null;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type UpdateTopicFollowerMutationVariables = {
    input: UpdateTopicFollowerInput;
    condition?: ModelTopicFollowerConditionInput | null;
};
export declare type UpdateTopicFollowerMutation = {
    updateTopicFollower: {
        __typename: "TopicFollower";
        id: string;
        topic_id: string;
        follower_id: string;
        topic: {
            __typename: "Topic";
            id: string;
            code: string | null;
            name: string | null;
            description: string | null;
            bulletins: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            followers: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        follower: {
            __typename: "Follower";
            id: string;
            latitude: number | null;
            longitude: number | null;
            created_at: string | null;
            source: string | null;
            topics: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            destination: string | null;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type DeleteTopicFollowerMutationVariables = {
    input: DeleteTopicFollowerInput;
    condition?: ModelTopicFollowerConditionInput | null;
};
export declare type DeleteTopicFollowerMutation = {
    deleteTopicFollower: {
        __typename: "TopicFollower";
        id: string;
        topic_id: string;
        follower_id: string;
        topic: {
            __typename: "Topic";
            id: string;
            code: string | null;
            name: string | null;
            description: string | null;
            bulletins: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            followers: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        follower: {
            __typename: "Follower";
            id: string;
            latitude: number | null;
            longitude: number | null;
            created_at: string | null;
            source: string | null;
            topics: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            destination: string | null;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type CreateFollowerMutationVariables = {
    input: CreateFollowerInput;
    condition?: ModelFollowerConditionInput | null;
};
export declare type CreateFollowerMutation = {
    createFollower: {
        __typename: "Follower";
        id: string;
        latitude: number | null;
        longitude: number | null;
        created_at: string | null;
        source: string | null;
        topics: {
            __typename: "ModelTopicFollowerConnection";
            items: Array<{
                __typename: "TopicFollower";
                id: string;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        subscriptions: {
            __typename: "ModelSubConnection";
            items: Array<{
                __typename: "Sub";
                id: string;
                referrer_url: string | null;
                created_at: string | null;
                deleted_at: string | null;
                source: string | null;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        destination: string | null;
    } | null;
};
export declare type UpdateFollowerMutationVariables = {
    input: UpdateFollowerInput;
    condition?: ModelFollowerConditionInput | null;
};
export declare type UpdateFollowerMutation = {
    updateFollower: {
        __typename: "Follower";
        id: string;
        latitude: number | null;
        longitude: number | null;
        created_at: string | null;
        source: string | null;
        topics: {
            __typename: "ModelTopicFollowerConnection";
            items: Array<{
                __typename: "TopicFollower";
                id: string;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        subscriptions: {
            __typename: "ModelSubConnection";
            items: Array<{
                __typename: "Sub";
                id: string;
                referrer_url: string | null;
                created_at: string | null;
                deleted_at: string | null;
                source: string | null;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        destination: string | null;
    } | null;
};
export declare type DeleteFollowerMutationVariables = {
    input: DeleteFollowerInput;
    condition?: ModelFollowerConditionInput | null;
};
export declare type DeleteFollowerMutation = {
    deleteFollower: {
        __typename: "Follower";
        id: string;
        latitude: number | null;
        longitude: number | null;
        created_at: string | null;
        source: string | null;
        topics: {
            __typename: "ModelTopicFollowerConnection";
            items: Array<{
                __typename: "TopicFollower";
                id: string;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        subscriptions: {
            __typename: "ModelSubConnection";
            items: Array<{
                __typename: "Sub";
                id: string;
                referrer_url: string | null;
                created_at: string | null;
                deleted_at: string | null;
                source: string | null;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        destination: string | null;
    } | null;
};
export declare type CreateSubMutationVariables = {
    input: CreateSubInput;
    condition?: ModelSubConditionInput | null;
};
export declare type CreateSubMutation = {
    createSub: {
        __typename: "Sub";
        id: string;
        referrer_url: string | null;
        created_at: string | null;
        deleted_at: string | null;
        source: string | null;
        topic_id: string;
        follower_id: string;
        topic: {
            __typename: "Topic";
            id: string;
            code: string | null;
            name: string | null;
            description: string | null;
            bulletins: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            followers: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        follower: {
            __typename: "Follower";
            id: string;
            latitude: number | null;
            longitude: number | null;
            created_at: string | null;
            source: string | null;
            topics: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            destination: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type UpdateSubMutationVariables = {
    input: UpdateSubInput;
    condition?: ModelSubConditionInput | null;
};
export declare type UpdateSubMutation = {
    updateSub: {
        __typename: "Sub";
        id: string;
        referrer_url: string | null;
        created_at: string | null;
        deleted_at: string | null;
        source: string | null;
        topic_id: string;
        follower_id: string;
        topic: {
            __typename: "Topic";
            id: string;
            code: string | null;
            name: string | null;
            description: string | null;
            bulletins: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            followers: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        follower: {
            __typename: "Follower";
            id: string;
            latitude: number | null;
            longitude: number | null;
            created_at: string | null;
            source: string | null;
            topics: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            destination: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type DeleteSubMutationVariables = {
    input: DeleteSubInput;
    condition?: ModelSubConditionInput | null;
};
export declare type DeleteSubMutation = {
    deleteSub: {
        __typename: "Sub";
        id: string;
        referrer_url: string | null;
        created_at: string | null;
        deleted_at: string | null;
        source: string | null;
        topic_id: string;
        follower_id: string;
        topic: {
            __typename: "Topic";
            id: string;
            code: string | null;
            name: string | null;
            description: string | null;
            bulletins: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            followers: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        follower: {
            __typename: "Follower";
            id: string;
            latitude: number | null;
            longitude: number | null;
            created_at: string | null;
            source: string | null;
            topics: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            destination: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type GetCampaignQueryVariables = {
    id: string;
};
export declare type GetCampaignQuery = {
    getCampaign: {
        __typename: "Campaign";
        id: string;
        bulletins: {
            __typename: "ModelBulletinConnection";
            items: Array<{
                __typename: "Bulletin";
                id: string;
                campaign_id: string;
                sender_email: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type ListCampaignsQueryVariables = {
    filter?: ModelCampaignFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type ListCampaignsQuery = {
    listCampaigns: {
        __typename: "ModelCampaignConnection";
        items: Array<{
            __typename: "Campaign";
            id: string;
            bulletins: {
                __typename: "ModelBulletinConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null> | null;
        nextToken: string | null;
    } | null;
};
export declare type GetSenderQueryVariables = {
    id: string;
};
export declare type GetSenderQuery = {
    getSender: {
        __typename: "Sender";
        id: string;
        bulletins: {
            __typename: "ModelBulletinConnection";
            items: Array<{
                __typename: "Bulletin";
                id: string;
                campaign_id: string;
                sender_email: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type ListSendersQueryVariables = {
    filter?: ModelSenderFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type ListSendersQuery = {
    listSenders: {
        __typename: "ModelSenderConnection";
        items: Array<{
            __typename: "Sender";
            id: string;
            bulletins: {
                __typename: "ModelBulletinConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null> | null;
        nextToken: string | null;
    } | null;
};
export declare type GetTopicQueryVariables = {
    id: string;
};
export declare type GetTopicQuery = {
    getTopic: {
        __typename: "Topic";
        id: string;
        code: string | null;
        name: string | null;
        description: string | null;
        bulletins: {
            __typename: "ModelBulletinTopicConnection";
            items: Array<{
                __typename: "BulletinTopic";
                id: string;
                bulletin_id: string;
                topic_id: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        followers: {
            __typename: "ModelTopicFollowerConnection";
            items: Array<{
                __typename: "TopicFollower";
                id: string;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        subscriptions: {
            __typename: "ModelSubConnection";
            items: Array<{
                __typename: "Sub";
                id: string;
                referrer_url: string | null;
                created_at: string | null;
                deleted_at: string | null;
                source: string | null;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type ListTopicsQueryVariables = {
    filter?: ModelTopicFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type ListTopicsQuery = {
    listTopics: {
        __typename: "ModelTopicConnection";
        items: Array<{
            __typename: "Topic";
            id: string;
            code: string | null;
            name: string | null;
            description: string | null;
            bulletins: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            followers: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null> | null;
        nextToken: string | null;
    } | null;
};
export declare type GetBulletinQueryVariables = {
    id: string;
};
export declare type GetBulletinQuery = {
    getBulletin: {
        __typename: "Bulletin";
        id: string;
        campaign_id: string;
        campaign: {
            __typename: "Campaign";
            id: string;
            bulletins: {
                __typename: "ModelBulletinConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        sender_email: string;
        sender: {
            __typename: "Sender";
            id: string;
            bulletins: {
                __typename: "ModelBulletinConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        created_at: string | null;
        detail: {
            __typename: "BulletinDetail";
            subject: string | null;
            to_text: string | null;
            delivery_status_name: string | null;
            addresses_count: number | null;
            success_count: number | null;
            failed_count: number | null;
            percent_success: number | null;
            immediate_email_recipients: number | null;
            emails_delivered: number | null;
            emails_failed: number | null;
            percent_emails_delivered: number | null;
            opens_count: number | null;
            percent_opened: number | null;
            nonunique_opens_count: number | null;
            links_count: number | null;
            click_rate: number | null;
            clicks_count: number | null;
            nonunique_clicks_count: number | null;
            digest_email_recipients: number | null;
            unique_click_count: number | null;
            total_click_count: number | null;
            unsubscribes: number | null;
        } | null;
        links: Array<{
            __typename: "Link";
            id: string;
            link_url: string | null;
            unique_click_count: number | null;
            total_click_count: number | null;
        } | null> | null;
        topics: {
            __typename: "ModelBulletinTopicConnection";
            items: Array<{
                __typename: "BulletinTopic";
                id: string;
                bulletin_id: string;
                topic_id: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type ListBulletinsQueryVariables = {
    filter?: ModelBulletinFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type ListBulletinsQuery = {
    listBulletins: {
        __typename: "ModelBulletinConnection";
        items: Array<{
            __typename: "Bulletin";
            id: string;
            campaign_id: string;
            campaign: {
                __typename: "Campaign";
                id: string;
                createdAt: string;
                updatedAt: string;
            } | null;
            sender_email: string;
            sender: {
                __typename: "Sender";
                id: string;
                createdAt: string;
                updatedAt: string;
            } | null;
            created_at: string | null;
            detail: {
                __typename: "BulletinDetail";
                subject: string | null;
                to_text: string | null;
                delivery_status_name: string | null;
                addresses_count: number | null;
                success_count: number | null;
                failed_count: number | null;
                percent_success: number | null;
                immediate_email_recipients: number | null;
                emails_delivered: number | null;
                emails_failed: number | null;
                percent_emails_delivered: number | null;
                opens_count: number | null;
                percent_opened: number | null;
                nonunique_opens_count: number | null;
                links_count: number | null;
                click_rate: number | null;
                clicks_count: number | null;
                nonunique_clicks_count: number | null;
                digest_email_recipients: number | null;
                unique_click_count: number | null;
                total_click_count: number | null;
                unsubscribes: number | null;
            } | null;
            links: Array<{
                __typename: "Link";
                id: string;
                link_url: string | null;
                unique_click_count: number | null;
                total_click_count: number | null;
            } | null> | null;
            topics: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null> | null;
        nextToken: string | null;
    } | null;
};
export declare type GetSubsSummaryQueryVariables = {
    id: string;
};
export declare type GetSubsSummaryQuery = {
    getSubsSummary: {
        __typename: "SubsSummary";
        id: string;
        direct_subscribers: number | null;
        direct_subscriptions: number | null;
        overlay_subscribers: number | null;
        overlay_subscriptions: number | null;
        signup_subscribers: number | null;
        signup_subscriptions: number | null;
        upload_subscribers: number | null;
        upload_subscriptions: number | null;
        other_subscribers: number | null;
        other_subscriptions: number | null;
        total_subscribers: number | null;
        total_subscriptions: number | null;
        deleted_subscribers: number | null;
        deleted_subscriptions: number | null;
        all_network_subscribers: number | null;
        all_network_subscriptions: number | null;
        net_subscribers: number | null;
        net_subscriptions: number | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type ListSubsSummarysQueryVariables = {
    filter?: ModelSubsSummaryFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type ListSubsSummarysQuery = {
    listSubsSummarys: {
        __typename: "ModelSubsSummaryConnection";
        items: Array<{
            __typename: "SubsSummary";
            id: string;
            direct_subscribers: number | null;
            direct_subscriptions: number | null;
            overlay_subscribers: number | null;
            overlay_subscriptions: number | null;
            signup_subscribers: number | null;
            signup_subscriptions: number | null;
            upload_subscribers: number | null;
            upload_subscriptions: number | null;
            other_subscribers: number | null;
            other_subscriptions: number | null;
            total_subscribers: number | null;
            total_subscriptions: number | null;
            deleted_subscribers: number | null;
            deleted_subscriptions: number | null;
            all_network_subscribers: number | null;
            all_network_subscriptions: number | null;
            net_subscribers: number | null;
            net_subscriptions: number | null;
            createdAt: string;
            updatedAt: string;
        } | null> | null;
        nextToken: string | null;
    } | null;
};
export declare type GetAccumulatorQueryVariables = {
    id: string;
};
export declare type GetAccumulatorQuery = {
    getAccumulator: {
        __typename: "Accumulator";
        id: string;
        all_topics: Array<string> | null;
        all_campaigns: Array<string> | null;
        all_senders: Array<string> | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type ListAccumulatorsQueryVariables = {
    filter?: ModelAccumulatorFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type ListAccumulatorsQuery = {
    listAccumulators: {
        __typename: "ModelAccumulatorConnection";
        items: Array<{
            __typename: "Accumulator";
            id: string;
            all_topics: Array<string> | null;
            all_campaigns: Array<string> | null;
            all_senders: Array<string> | null;
            createdAt: string;
            updatedAt: string;
        } | null> | null;
        nextToken: string | null;
    } | null;
};
export declare type GetSubQueryVariables = {
    id: string;
};
export declare type GetSubQuery = {
    getSub: {
        __typename: "Sub";
        id: string;
        referrer_url: string | null;
        created_at: string | null;
        deleted_at: string | null;
        source: string | null;
        topic_id: string;
        follower_id: string;
        topic: {
            __typename: "Topic";
            id: string;
            code: string | null;
            name: string | null;
            description: string | null;
            bulletins: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            followers: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        follower: {
            __typename: "Follower";
            id: string;
            latitude: number | null;
            longitude: number | null;
            created_at: string | null;
            source: string | null;
            topics: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            destination: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type ListSubsQueryVariables = {
    filter?: ModelSubFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type ListSubsQuery = {
    listSubs: {
        __typename: "ModelSubConnection";
        items: Array<{
            __typename: "Sub";
            id: string;
            referrer_url: string | null;
            created_at: string | null;
            deleted_at: string | null;
            source: string | null;
            topic_id: string;
            follower_id: string;
            topic: {
                __typename: "Topic";
                id: string;
                code: string | null;
                name: string | null;
                description: string | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            follower: {
                __typename: "Follower";
                id: string;
                latitude: number | null;
                longitude: number | null;
                created_at: string | null;
                source: string | null;
                createdAt: string;
                updatedAt: string;
                destination: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null> | null;
        nextToken: string | null;
    } | null;
};
export declare type BulletinsByCampaignQueryVariables = {
    campaign_id?: string | null;
    created_at?: ModelStringKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelBulletinFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type BulletinsByCampaignQuery = {
    bulletinsByCampaign: {
        __typename: "ModelBulletinConnection";
        items: Array<{
            __typename: "Bulletin";
            id: string;
            campaign_id: string;
            campaign: {
                __typename: "Campaign";
                id: string;
                createdAt: string;
                updatedAt: string;
            } | null;
            sender_email: string;
            sender: {
                __typename: "Sender";
                id: string;
                createdAt: string;
                updatedAt: string;
            } | null;
            created_at: string | null;
            detail: {
                __typename: "BulletinDetail";
                subject: string | null;
                to_text: string | null;
                delivery_status_name: string | null;
                addresses_count: number | null;
                success_count: number | null;
                failed_count: number | null;
                percent_success: number | null;
                immediate_email_recipients: number | null;
                emails_delivered: number | null;
                emails_failed: number | null;
                percent_emails_delivered: number | null;
                opens_count: number | null;
                percent_opened: number | null;
                nonunique_opens_count: number | null;
                links_count: number | null;
                click_rate: number | null;
                clicks_count: number | null;
                nonunique_clicks_count: number | null;
                digest_email_recipients: number | null;
                unique_click_count: number | null;
                total_click_count: number | null;
                unsubscribes: number | null;
            } | null;
            links: Array<{
                __typename: "Link";
                id: string;
                link_url: string | null;
                unique_click_count: number | null;
                total_click_count: number | null;
            } | null> | null;
            topics: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null> | null;
        nextToken: string | null;
    } | null;
};
export declare type BulletinsBySenderQueryVariables = {
    sender_email?: string | null;
    created_at?: ModelStringKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelBulletinFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type BulletinsBySenderQuery = {
    bulletinsBySender: {
        __typename: "ModelBulletinConnection";
        items: Array<{
            __typename: "Bulletin";
            id: string;
            campaign_id: string;
            campaign: {
                __typename: "Campaign";
                id: string;
                createdAt: string;
                updatedAt: string;
            } | null;
            sender_email: string;
            sender: {
                __typename: "Sender";
                id: string;
                createdAt: string;
                updatedAt: string;
            } | null;
            created_at: string | null;
            detail: {
                __typename: "BulletinDetail";
                subject: string | null;
                to_text: string | null;
                delivery_status_name: string | null;
                addresses_count: number | null;
                success_count: number | null;
                failed_count: number | null;
                percent_success: number | null;
                immediate_email_recipients: number | null;
                emails_delivered: number | null;
                emails_failed: number | null;
                percent_emails_delivered: number | null;
                opens_count: number | null;
                percent_opened: number | null;
                nonunique_opens_count: number | null;
                links_count: number | null;
                click_rate: number | null;
                clicks_count: number | null;
                nonunique_clicks_count: number | null;
                digest_email_recipients: number | null;
                unique_click_count: number | null;
                total_click_count: number | null;
                unsubscribes: number | null;
            } | null;
            links: Array<{
                __typename: "Link";
                id: string;
                link_url: string | null;
                unique_click_count: number | null;
                total_click_count: number | null;
            } | null> | null;
            topics: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null> | null;
        nextToken: string | null;
    } | null;
};
export declare type TopicsByFollowerQueryVariables = {
    follower_id?: string | null;
    topic_id?: ModelIDKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelTopicFollowerFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type TopicsByFollowerQuery = {
    topicsByFollower: {
        __typename: "ModelTopicFollowerConnection";
        items: Array<{
            __typename: "TopicFollower";
            id: string;
            topic_id: string;
            follower_id: string;
            topic: {
                __typename: "Topic";
                id: string;
                code: string | null;
                name: string | null;
                description: string | null;
                createdAt: string;
                updatedAt: string;
            };
            follower: {
                __typename: "Follower";
                id: string;
                latitude: number | null;
                longitude: number | null;
                created_at: string | null;
                source: string | null;
                createdAt: string;
                updatedAt: string;
                destination: string | null;
            };
            createdAt: string;
            updatedAt: string;
        } | null> | null;
        nextToken: string | null;
    } | null;
};
export declare type FollowersByTopicQueryVariables = {
    topic_id?: string | null;
    follower_id?: ModelIDKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelTopicFollowerFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type FollowersByTopicQuery = {
    followersByTopic: {
        __typename: "ModelTopicFollowerConnection";
        items: Array<{
            __typename: "TopicFollower";
            id: string;
            topic_id: string;
            follower_id: string;
            topic: {
                __typename: "Topic";
                id: string;
                code: string | null;
                name: string | null;
                description: string | null;
                createdAt: string;
                updatedAt: string;
            };
            follower: {
                __typename: "Follower";
                id: string;
                latitude: number | null;
                longitude: number | null;
                created_at: string | null;
                source: string | null;
                createdAt: string;
                updatedAt: string;
                destination: string | null;
            };
            createdAt: string;
            updatedAt: string;
        } | null> | null;
        nextToken: string | null;
    } | null;
};
export declare type SubsByTopicQueryVariables = {
    topic_id?: string | null;
    created_at?: ModelStringKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelSubFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type SubsByTopicQuery = {
    subsByTopic: {
        __typename: "ModelSubConnection";
        items: Array<{
            __typename: "Sub";
            id: string;
            referrer_url: string | null;
            created_at: string | null;
            deleted_at: string | null;
            source: string | null;
            topic_id: string;
            follower_id: string;
            topic: {
                __typename: "Topic";
                id: string;
                code: string | null;
                name: string | null;
                description: string | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            follower: {
                __typename: "Follower";
                id: string;
                latitude: number | null;
                longitude: number | null;
                created_at: string | null;
                source: string | null;
                createdAt: string;
                updatedAt: string;
                destination: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null> | null;
        nextToken: string | null;
    } | null;
};
export declare type SubsByFollowerQueryVariables = {
    follower_id?: string | null;
    created_at?: ModelStringKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelSubFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type SubsByFollowerQuery = {
    subsByFollower: {
        __typename: "ModelSubConnection";
        items: Array<{
            __typename: "Sub";
            id: string;
            referrer_url: string | null;
            created_at: string | null;
            deleted_at: string | null;
            source: string | null;
            topic_id: string;
            follower_id: string;
            topic: {
                __typename: "Topic";
                id: string;
                code: string | null;
                name: string | null;
                description: string | null;
                createdAt: string;
                updatedAt: string;
            } | null;
            follower: {
                __typename: "Follower";
                id: string;
                latitude: number | null;
                longitude: number | null;
                created_at: string | null;
                source: string | null;
                createdAt: string;
                updatedAt: string;
                destination: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null> | null;
        nextToken: string | null;
    } | null;
};
export declare type GetFollowerQueryVariables = {
    id: string;
};
export declare type GetFollowerQuery = {
    getFollower: {
        __typename: "Follower";
        id: string;
        latitude: number | null;
        longitude: number | null;
        created_at: string | null;
        source: string | null;
        topics: {
            __typename: "ModelTopicFollowerConnection";
            items: Array<{
                __typename: "TopicFollower";
                id: string;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        subscriptions: {
            __typename: "ModelSubConnection";
            items: Array<{
                __typename: "Sub";
                id: string;
                referrer_url: string | null;
                created_at: string | null;
                deleted_at: string | null;
                source: string | null;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        destination: string | null;
    } | null;
};
export declare type ListFollowersQueryVariables = {
    filter?: ModelFollowerFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type ListFollowersQuery = {
    listFollowers: {
        __typename: "ModelFollowerConnection";
        items: Array<{
            __typename: "Follower";
            id: string;
            latitude: number | null;
            longitude: number | null;
            created_at: string | null;
            source: string | null;
            topics: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            destination: string | null;
        } | null> | null;
        nextToken: string | null;
    } | null;
};
export declare type OnCreateCampaignSubscription = {
    onCreateCampaign: {
        __typename: "Campaign";
        id: string;
        bulletins: {
            __typename: "ModelBulletinConnection";
            items: Array<{
                __typename: "Bulletin";
                id: string;
                campaign_id: string;
                sender_email: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnUpdateCampaignSubscription = {
    onUpdateCampaign: {
        __typename: "Campaign";
        id: string;
        bulletins: {
            __typename: "ModelBulletinConnection";
            items: Array<{
                __typename: "Bulletin";
                id: string;
                campaign_id: string;
                sender_email: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnDeleteCampaignSubscription = {
    onDeleteCampaign: {
        __typename: "Campaign";
        id: string;
        bulletins: {
            __typename: "ModelBulletinConnection";
            items: Array<{
                __typename: "Bulletin";
                id: string;
                campaign_id: string;
                sender_email: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnCreateSenderSubscription = {
    onCreateSender: {
        __typename: "Sender";
        id: string;
        bulletins: {
            __typename: "ModelBulletinConnection";
            items: Array<{
                __typename: "Bulletin";
                id: string;
                campaign_id: string;
                sender_email: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnUpdateSenderSubscription = {
    onUpdateSender: {
        __typename: "Sender";
        id: string;
        bulletins: {
            __typename: "ModelBulletinConnection";
            items: Array<{
                __typename: "Bulletin";
                id: string;
                campaign_id: string;
                sender_email: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnDeleteSenderSubscription = {
    onDeleteSender: {
        __typename: "Sender";
        id: string;
        bulletins: {
            __typename: "ModelBulletinConnection";
            items: Array<{
                __typename: "Bulletin";
                id: string;
                campaign_id: string;
                sender_email: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnCreateTopicSubscription = {
    onCreateTopic: {
        __typename: "Topic";
        id: string;
        code: string | null;
        name: string | null;
        description: string | null;
        bulletins: {
            __typename: "ModelBulletinTopicConnection";
            items: Array<{
                __typename: "BulletinTopic";
                id: string;
                bulletin_id: string;
                topic_id: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        followers: {
            __typename: "ModelTopicFollowerConnection";
            items: Array<{
                __typename: "TopicFollower";
                id: string;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        subscriptions: {
            __typename: "ModelSubConnection";
            items: Array<{
                __typename: "Sub";
                id: string;
                referrer_url: string | null;
                created_at: string | null;
                deleted_at: string | null;
                source: string | null;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnUpdateTopicSubscription = {
    onUpdateTopic: {
        __typename: "Topic";
        id: string;
        code: string | null;
        name: string | null;
        description: string | null;
        bulletins: {
            __typename: "ModelBulletinTopicConnection";
            items: Array<{
                __typename: "BulletinTopic";
                id: string;
                bulletin_id: string;
                topic_id: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        followers: {
            __typename: "ModelTopicFollowerConnection";
            items: Array<{
                __typename: "TopicFollower";
                id: string;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        subscriptions: {
            __typename: "ModelSubConnection";
            items: Array<{
                __typename: "Sub";
                id: string;
                referrer_url: string | null;
                created_at: string | null;
                deleted_at: string | null;
                source: string | null;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnDeleteTopicSubscription = {
    onDeleteTopic: {
        __typename: "Topic";
        id: string;
        code: string | null;
        name: string | null;
        description: string | null;
        bulletins: {
            __typename: "ModelBulletinTopicConnection";
            items: Array<{
                __typename: "BulletinTopic";
                id: string;
                bulletin_id: string;
                topic_id: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        followers: {
            __typename: "ModelTopicFollowerConnection";
            items: Array<{
                __typename: "TopicFollower";
                id: string;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        subscriptions: {
            __typename: "ModelSubConnection";
            items: Array<{
                __typename: "Sub";
                id: string;
                referrer_url: string | null;
                created_at: string | null;
                deleted_at: string | null;
                source: string | null;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnCreateBulletinSubscription = {
    onCreateBulletin: {
        __typename: "Bulletin";
        id: string;
        campaign_id: string;
        campaign: {
            __typename: "Campaign";
            id: string;
            bulletins: {
                __typename: "ModelBulletinConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        sender_email: string;
        sender: {
            __typename: "Sender";
            id: string;
            bulletins: {
                __typename: "ModelBulletinConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        created_at: string | null;
        detail: {
            __typename: "BulletinDetail";
            subject: string | null;
            to_text: string | null;
            delivery_status_name: string | null;
            addresses_count: number | null;
            success_count: number | null;
            failed_count: number | null;
            percent_success: number | null;
            immediate_email_recipients: number | null;
            emails_delivered: number | null;
            emails_failed: number | null;
            percent_emails_delivered: number | null;
            opens_count: number | null;
            percent_opened: number | null;
            nonunique_opens_count: number | null;
            links_count: number | null;
            click_rate: number | null;
            clicks_count: number | null;
            nonunique_clicks_count: number | null;
            digest_email_recipients: number | null;
            unique_click_count: number | null;
            total_click_count: number | null;
            unsubscribes: number | null;
        } | null;
        links: Array<{
            __typename: "Link";
            id: string;
            link_url: string | null;
            unique_click_count: number | null;
            total_click_count: number | null;
        } | null> | null;
        topics: {
            __typename: "ModelBulletinTopicConnection";
            items: Array<{
                __typename: "BulletinTopic";
                id: string;
                bulletin_id: string;
                topic_id: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnUpdateBulletinSubscription = {
    onUpdateBulletin: {
        __typename: "Bulletin";
        id: string;
        campaign_id: string;
        campaign: {
            __typename: "Campaign";
            id: string;
            bulletins: {
                __typename: "ModelBulletinConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        sender_email: string;
        sender: {
            __typename: "Sender";
            id: string;
            bulletins: {
                __typename: "ModelBulletinConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        created_at: string | null;
        detail: {
            __typename: "BulletinDetail";
            subject: string | null;
            to_text: string | null;
            delivery_status_name: string | null;
            addresses_count: number | null;
            success_count: number | null;
            failed_count: number | null;
            percent_success: number | null;
            immediate_email_recipients: number | null;
            emails_delivered: number | null;
            emails_failed: number | null;
            percent_emails_delivered: number | null;
            opens_count: number | null;
            percent_opened: number | null;
            nonunique_opens_count: number | null;
            links_count: number | null;
            click_rate: number | null;
            clicks_count: number | null;
            nonunique_clicks_count: number | null;
            digest_email_recipients: number | null;
            unique_click_count: number | null;
            total_click_count: number | null;
            unsubscribes: number | null;
        } | null;
        links: Array<{
            __typename: "Link";
            id: string;
            link_url: string | null;
            unique_click_count: number | null;
            total_click_count: number | null;
        } | null> | null;
        topics: {
            __typename: "ModelBulletinTopicConnection";
            items: Array<{
                __typename: "BulletinTopic";
                id: string;
                bulletin_id: string;
                topic_id: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnDeleteBulletinSubscription = {
    onDeleteBulletin: {
        __typename: "Bulletin";
        id: string;
        campaign_id: string;
        campaign: {
            __typename: "Campaign";
            id: string;
            bulletins: {
                __typename: "ModelBulletinConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        sender_email: string;
        sender: {
            __typename: "Sender";
            id: string;
            bulletins: {
                __typename: "ModelBulletinConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        created_at: string | null;
        detail: {
            __typename: "BulletinDetail";
            subject: string | null;
            to_text: string | null;
            delivery_status_name: string | null;
            addresses_count: number | null;
            success_count: number | null;
            failed_count: number | null;
            percent_success: number | null;
            immediate_email_recipients: number | null;
            emails_delivered: number | null;
            emails_failed: number | null;
            percent_emails_delivered: number | null;
            opens_count: number | null;
            percent_opened: number | null;
            nonunique_opens_count: number | null;
            links_count: number | null;
            click_rate: number | null;
            clicks_count: number | null;
            nonunique_clicks_count: number | null;
            digest_email_recipients: number | null;
            unique_click_count: number | null;
            total_click_count: number | null;
            unsubscribes: number | null;
        } | null;
        links: Array<{
            __typename: "Link";
            id: string;
            link_url: string | null;
            unique_click_count: number | null;
            total_click_count: number | null;
        } | null> | null;
        topics: {
            __typename: "ModelBulletinTopicConnection";
            items: Array<{
                __typename: "BulletinTopic";
                id: string;
                bulletin_id: string;
                topic_id: string;
                created_at: string | null;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnCreateBulletinTopicSubscription = {
    onCreateBulletinTopic: {
        __typename: "BulletinTopic";
        id: string;
        bulletin_id: string;
        topic_id: string;
        created_at: string | null;
        to_date: {
            __typename: "SubsReport";
            total_subscriptions: number | null;
            new_subscriptions: number | null;
            deleted_subscriptions: number | null;
            bulletins_sent: number | null;
            allocated: {
                __typename: "Allocation";
                direct: number | null;
                overlay: number | null;
                signup: number | null;
                upload: number | null;
                other: number | null;
                all_network: number | null;
            } | null;
        } | null;
        this_period: {
            __typename: "SubsReport";
            total_subscriptions: number | null;
            new_subscriptions: number | null;
            deleted_subscriptions: number | null;
            bulletins_sent: number | null;
            allocated: {
                __typename: "Allocation";
                direct: number | null;
                overlay: number | null;
                signup: number | null;
                upload: number | null;
                other: number | null;
                all_network: number | null;
            } | null;
        } | null;
        bulletin: {
            __typename: "Bulletin";
            id: string;
            campaign_id: string;
            campaign: {
                __typename: "Campaign";
                id: string;
                createdAt: string;
                updatedAt: string;
            } | null;
            sender_email: string;
            sender: {
                __typename: "Sender";
                id: string;
                createdAt: string;
                updatedAt: string;
            } | null;
            created_at: string | null;
            detail: {
                __typename: "BulletinDetail";
                subject: string | null;
                to_text: string | null;
                delivery_status_name: string | null;
                addresses_count: number | null;
                success_count: number | null;
                failed_count: number | null;
                percent_success: number | null;
                immediate_email_recipients: number | null;
                emails_delivered: number | null;
                emails_failed: number | null;
                percent_emails_delivered: number | null;
                opens_count: number | null;
                percent_opened: number | null;
                nonunique_opens_count: number | null;
                links_count: number | null;
                click_rate: number | null;
                clicks_count: number | null;
                nonunique_clicks_count: number | null;
                digest_email_recipients: number | null;
                unique_click_count: number | null;
                total_click_count: number | null;
                unsubscribes: number | null;
            } | null;
            links: Array<{
                __typename: "Link";
                id: string;
                link_url: string | null;
                unique_click_count: number | null;
                total_click_count: number | null;
            } | null> | null;
            topics: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        topic: {
            __typename: "Topic";
            id: string;
            code: string | null;
            name: string | null;
            description: string | null;
            bulletins: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            followers: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnUpdateBulletinTopicSubscription = {
    onUpdateBulletinTopic: {
        __typename: "BulletinTopic";
        id: string;
        bulletin_id: string;
        topic_id: string;
        created_at: string | null;
        to_date: {
            __typename: "SubsReport";
            total_subscriptions: number | null;
            new_subscriptions: number | null;
            deleted_subscriptions: number | null;
            bulletins_sent: number | null;
            allocated: {
                __typename: "Allocation";
                direct: number | null;
                overlay: number | null;
                signup: number | null;
                upload: number | null;
                other: number | null;
                all_network: number | null;
            } | null;
        } | null;
        this_period: {
            __typename: "SubsReport";
            total_subscriptions: number | null;
            new_subscriptions: number | null;
            deleted_subscriptions: number | null;
            bulletins_sent: number | null;
            allocated: {
                __typename: "Allocation";
                direct: number | null;
                overlay: number | null;
                signup: number | null;
                upload: number | null;
                other: number | null;
                all_network: number | null;
            } | null;
        } | null;
        bulletin: {
            __typename: "Bulletin";
            id: string;
            campaign_id: string;
            campaign: {
                __typename: "Campaign";
                id: string;
                createdAt: string;
                updatedAt: string;
            } | null;
            sender_email: string;
            sender: {
                __typename: "Sender";
                id: string;
                createdAt: string;
                updatedAt: string;
            } | null;
            created_at: string | null;
            detail: {
                __typename: "BulletinDetail";
                subject: string | null;
                to_text: string | null;
                delivery_status_name: string | null;
                addresses_count: number | null;
                success_count: number | null;
                failed_count: number | null;
                percent_success: number | null;
                immediate_email_recipients: number | null;
                emails_delivered: number | null;
                emails_failed: number | null;
                percent_emails_delivered: number | null;
                opens_count: number | null;
                percent_opened: number | null;
                nonunique_opens_count: number | null;
                links_count: number | null;
                click_rate: number | null;
                clicks_count: number | null;
                nonunique_clicks_count: number | null;
                digest_email_recipients: number | null;
                unique_click_count: number | null;
                total_click_count: number | null;
                unsubscribes: number | null;
            } | null;
            links: Array<{
                __typename: "Link";
                id: string;
                link_url: string | null;
                unique_click_count: number | null;
                total_click_count: number | null;
            } | null> | null;
            topics: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        topic: {
            __typename: "Topic";
            id: string;
            code: string | null;
            name: string | null;
            description: string | null;
            bulletins: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            followers: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnDeleteBulletinTopicSubscription = {
    onDeleteBulletinTopic: {
        __typename: "BulletinTopic";
        id: string;
        bulletin_id: string;
        topic_id: string;
        created_at: string | null;
        to_date: {
            __typename: "SubsReport";
            total_subscriptions: number | null;
            new_subscriptions: number | null;
            deleted_subscriptions: number | null;
            bulletins_sent: number | null;
            allocated: {
                __typename: "Allocation";
                direct: number | null;
                overlay: number | null;
                signup: number | null;
                upload: number | null;
                other: number | null;
                all_network: number | null;
            } | null;
        } | null;
        this_period: {
            __typename: "SubsReport";
            total_subscriptions: number | null;
            new_subscriptions: number | null;
            deleted_subscriptions: number | null;
            bulletins_sent: number | null;
            allocated: {
                __typename: "Allocation";
                direct: number | null;
                overlay: number | null;
                signup: number | null;
                upload: number | null;
                other: number | null;
                all_network: number | null;
            } | null;
        } | null;
        bulletin: {
            __typename: "Bulletin";
            id: string;
            campaign_id: string;
            campaign: {
                __typename: "Campaign";
                id: string;
                createdAt: string;
                updatedAt: string;
            } | null;
            sender_email: string;
            sender: {
                __typename: "Sender";
                id: string;
                createdAt: string;
                updatedAt: string;
            } | null;
            created_at: string | null;
            detail: {
                __typename: "BulletinDetail";
                subject: string | null;
                to_text: string | null;
                delivery_status_name: string | null;
                addresses_count: number | null;
                success_count: number | null;
                failed_count: number | null;
                percent_success: number | null;
                immediate_email_recipients: number | null;
                emails_delivered: number | null;
                emails_failed: number | null;
                percent_emails_delivered: number | null;
                opens_count: number | null;
                percent_opened: number | null;
                nonunique_opens_count: number | null;
                links_count: number | null;
                click_rate: number | null;
                clicks_count: number | null;
                nonunique_clicks_count: number | null;
                digest_email_recipients: number | null;
                unique_click_count: number | null;
                total_click_count: number | null;
                unsubscribes: number | null;
            } | null;
            links: Array<{
                __typename: "Link";
                id: string;
                link_url: string | null;
                unique_click_count: number | null;
                total_click_count: number | null;
            } | null> | null;
            topics: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        topic: {
            __typename: "Topic";
            id: string;
            code: string | null;
            name: string | null;
            description: string | null;
            bulletins: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            followers: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnCreateSubsSummarySubscription = {
    onCreateSubsSummary: {
        __typename: "SubsSummary";
        id: string;
        direct_subscribers: number | null;
        direct_subscriptions: number | null;
        overlay_subscribers: number | null;
        overlay_subscriptions: number | null;
        signup_subscribers: number | null;
        signup_subscriptions: number | null;
        upload_subscribers: number | null;
        upload_subscriptions: number | null;
        other_subscribers: number | null;
        other_subscriptions: number | null;
        total_subscribers: number | null;
        total_subscriptions: number | null;
        deleted_subscribers: number | null;
        deleted_subscriptions: number | null;
        all_network_subscribers: number | null;
        all_network_subscriptions: number | null;
        net_subscribers: number | null;
        net_subscriptions: number | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnUpdateSubsSummarySubscription = {
    onUpdateSubsSummary: {
        __typename: "SubsSummary";
        id: string;
        direct_subscribers: number | null;
        direct_subscriptions: number | null;
        overlay_subscribers: number | null;
        overlay_subscriptions: number | null;
        signup_subscribers: number | null;
        signup_subscriptions: number | null;
        upload_subscribers: number | null;
        upload_subscriptions: number | null;
        other_subscribers: number | null;
        other_subscriptions: number | null;
        total_subscribers: number | null;
        total_subscriptions: number | null;
        deleted_subscribers: number | null;
        deleted_subscriptions: number | null;
        all_network_subscribers: number | null;
        all_network_subscriptions: number | null;
        net_subscribers: number | null;
        net_subscriptions: number | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnDeleteSubsSummarySubscription = {
    onDeleteSubsSummary: {
        __typename: "SubsSummary";
        id: string;
        direct_subscribers: number | null;
        direct_subscriptions: number | null;
        overlay_subscribers: number | null;
        overlay_subscriptions: number | null;
        signup_subscribers: number | null;
        signup_subscriptions: number | null;
        upload_subscribers: number | null;
        upload_subscriptions: number | null;
        other_subscribers: number | null;
        other_subscriptions: number | null;
        total_subscribers: number | null;
        total_subscriptions: number | null;
        deleted_subscribers: number | null;
        deleted_subscriptions: number | null;
        all_network_subscribers: number | null;
        all_network_subscriptions: number | null;
        net_subscribers: number | null;
        net_subscriptions: number | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnCreateAccumulatorSubscription = {
    onCreateAccumulator: {
        __typename: "Accumulator";
        id: string;
        all_topics: Array<string> | null;
        all_campaigns: Array<string> | null;
        all_senders: Array<string> | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnUpdateAccumulatorSubscription = {
    onUpdateAccumulator: {
        __typename: "Accumulator";
        id: string;
        all_topics: Array<string> | null;
        all_campaigns: Array<string> | null;
        all_senders: Array<string> | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnDeleteAccumulatorSubscription = {
    onDeleteAccumulator: {
        __typename: "Accumulator";
        id: string;
        all_topics: Array<string> | null;
        all_campaigns: Array<string> | null;
        all_senders: Array<string> | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnCreateTopicFollowerSubscription = {
    onCreateTopicFollower: {
        __typename: "TopicFollower";
        id: string;
        topic_id: string;
        follower_id: string;
        topic: {
            __typename: "Topic";
            id: string;
            code: string | null;
            name: string | null;
            description: string | null;
            bulletins: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            followers: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        follower: {
            __typename: "Follower";
            id: string;
            latitude: number | null;
            longitude: number | null;
            created_at: string | null;
            source: string | null;
            topics: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            destination: string | null;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnUpdateTopicFollowerSubscription = {
    onUpdateTopicFollower: {
        __typename: "TopicFollower";
        id: string;
        topic_id: string;
        follower_id: string;
        topic: {
            __typename: "Topic";
            id: string;
            code: string | null;
            name: string | null;
            description: string | null;
            bulletins: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            followers: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        follower: {
            __typename: "Follower";
            id: string;
            latitude: number | null;
            longitude: number | null;
            created_at: string | null;
            source: string | null;
            topics: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            destination: string | null;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnDeleteTopicFollowerSubscription = {
    onDeleteTopicFollower: {
        __typename: "TopicFollower";
        id: string;
        topic_id: string;
        follower_id: string;
        topic: {
            __typename: "Topic";
            id: string;
            code: string | null;
            name: string | null;
            description: string | null;
            bulletins: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            followers: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        follower: {
            __typename: "Follower";
            id: string;
            latitude: number | null;
            longitude: number | null;
            created_at: string | null;
            source: string | null;
            topics: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            destination: string | null;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnCreateFollowerSubscription = {
    onCreateFollower: {
        __typename: "Follower";
        id: string;
        latitude: number | null;
        longitude: number | null;
        created_at: string | null;
        source: string | null;
        topics: {
            __typename: "ModelTopicFollowerConnection";
            items: Array<{
                __typename: "TopicFollower";
                id: string;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        subscriptions: {
            __typename: "ModelSubConnection";
            items: Array<{
                __typename: "Sub";
                id: string;
                referrer_url: string | null;
                created_at: string | null;
                deleted_at: string | null;
                source: string | null;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        destination: string | null;
    } | null;
};
export declare type OnUpdateFollowerSubscription = {
    onUpdateFollower: {
        __typename: "Follower";
        id: string;
        latitude: number | null;
        longitude: number | null;
        created_at: string | null;
        source: string | null;
        topics: {
            __typename: "ModelTopicFollowerConnection";
            items: Array<{
                __typename: "TopicFollower";
                id: string;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        subscriptions: {
            __typename: "ModelSubConnection";
            items: Array<{
                __typename: "Sub";
                id: string;
                referrer_url: string | null;
                created_at: string | null;
                deleted_at: string | null;
                source: string | null;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        destination: string | null;
    } | null;
};
export declare type OnDeleteFollowerSubscription = {
    onDeleteFollower: {
        __typename: "Follower";
        id: string;
        latitude: number | null;
        longitude: number | null;
        created_at: string | null;
        source: string | null;
        topics: {
            __typename: "ModelTopicFollowerConnection";
            items: Array<{
                __typename: "TopicFollower";
                id: string;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        subscriptions: {
            __typename: "ModelSubConnection";
            items: Array<{
                __typename: "Sub";
                id: string;
                referrer_url: string | null;
                created_at: string | null;
                deleted_at: string | null;
                source: string | null;
                topic_id: string;
                follower_id: string;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        destination: string | null;
    } | null;
};
export declare type OnCreateSubSubscription = {
    onCreateSub: {
        __typename: "Sub";
        id: string;
        referrer_url: string | null;
        created_at: string | null;
        deleted_at: string | null;
        source: string | null;
        topic_id: string;
        follower_id: string;
        topic: {
            __typename: "Topic";
            id: string;
            code: string | null;
            name: string | null;
            description: string | null;
            bulletins: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            followers: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        follower: {
            __typename: "Follower";
            id: string;
            latitude: number | null;
            longitude: number | null;
            created_at: string | null;
            source: string | null;
            topics: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            destination: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnUpdateSubSubscription = {
    onUpdateSub: {
        __typename: "Sub";
        id: string;
        referrer_url: string | null;
        created_at: string | null;
        deleted_at: string | null;
        source: string | null;
        topic_id: string;
        follower_id: string;
        topic: {
            __typename: "Topic";
            id: string;
            code: string | null;
            name: string | null;
            description: string | null;
            bulletins: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            followers: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        follower: {
            __typename: "Follower";
            id: string;
            latitude: number | null;
            longitude: number | null;
            created_at: string | null;
            source: string | null;
            topics: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            destination: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};
export declare type OnDeleteSubSubscription = {
    onDeleteSub: {
        __typename: "Sub";
        id: string;
        referrer_url: string | null;
        created_at: string | null;
        deleted_at: string | null;
        source: string | null;
        topic_id: string;
        follower_id: string;
        topic: {
            __typename: "Topic";
            id: string;
            code: string | null;
            name: string | null;
            description: string | null;
            bulletins: {
                __typename: "ModelBulletinTopicConnection";
                nextToken: string | null;
            } | null;
            followers: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        } | null;
        follower: {
            __typename: "Follower";
            id: string;
            latitude: number | null;
            longitude: number | null;
            created_at: string | null;
            source: string | null;
            topics: {
                __typename: "ModelTopicFollowerConnection";
                nextToken: string | null;
            } | null;
            subscriptions: {
                __typename: "ModelSubConnection";
                nextToken: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            destination: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCampaignInput = {
  id?: string | null,
};

export type ModelCampaignConditionInput = {
  and?: Array< ModelCampaignConditionInput | null > | null,
  or?: Array< ModelCampaignConditionInput | null > | null,
  not?: ModelCampaignConditionInput | null,
};

export type UpdateCampaignInput = {
  id: string,
};

export type DeleteCampaignInput = {
  id?: string | null,
};

export type CreateSenderInput = {
  id?: string | null,
};

export type ModelSenderConditionInput = {
  and?: Array< ModelSenderConditionInput | null > | null,
  or?: Array< ModelSenderConditionInput | null > | null,
  not?: ModelSenderConditionInput | null,
};

export type UpdateSenderInput = {
  id: string,
};

export type DeleteSenderInput = {
  id?: string | null,
};

export type CreateTopicInput = {
  id?: string | null,
  code?: string | null,
  name?: string | null,
  description?: string | null,
};

export type ModelTopicConditionInput = {
  code?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTopicConditionInput | null > | null,
  or?: Array< ModelTopicConditionInput | null > | null,
  not?: ModelTopicConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateTopicInput = {
  id: string,
  code?: string | null,
  name?: string | null,
  description?: string | null,
};

export type DeleteTopicInput = {
  id?: string | null,
};

export type CreateBulletinInput = {
  id?: string | null,
  campaign_id: string,
  sender_email: string,
  created_at?: string | null,
  detail?: BulletinDetailInput | null,
  links?: Array< LinkInput | null > | null,
};

export type BulletinDetailInput = {
  subject?: string | null,
  to_text?: string | null,
  delivery_status_name?: string | null,
  addresses_count?: number | null,
  success_count?: number | null,
  failed_count?: number | null,
  percent_success?: number | null,
  immediate_email_recipients?: number | null,
  emails_delivered?: number | null,
  emails_failed?: number | null,
  percent_emails_delivered?: number | null,
  opens_count?: number | null,
  percent_opened?: number | null,
  nonunique_opens_count?: number | null,
  links_count?: number | null,
  click_rate?: number | null,
  clicks_count?: number | null,
  nonunique_clicks_count?: number | null,
  digest_email_recipients?: number | null,
  unique_click_count?: number | null,
  total_click_count?: number | null,
  unsubscribes?: number | null,
};

export type LinkInput = {
  id: string,
  link_url?: string | null,
  unique_click_count?: number | null,
  total_click_count?: number | null,
};

export type ModelBulletinConditionInput = {
  campaign_id?: ModelIDInput | null,
  sender_email?: ModelIDInput | null,
  created_at?: ModelStringInput | null,
  and?: Array< ModelBulletinConditionInput | null > | null,
  or?: Array< ModelBulletinConditionInput | null > | null,
  not?: ModelBulletinConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateBulletinInput = {
  id: string,
  campaign_id?: string | null,
  sender_email?: string | null,
  created_at?: string | null,
  detail?: BulletinDetailInput | null,
  links?: Array< LinkInput | null > | null,
};

export type DeleteBulletinInput = {
  id?: string | null,
};

export type CreateBulletinTopicInput = {
  id?: string | null,
  bulletin_id: string,
  topic_id: string,
  created_at?: string | null,
  to_date?: SubsReportInput | null,
  this_period?: SubsReportInput | null,
};

export type SubsReportInput = {
  total_subscriptions?: number | null,
  new_subscriptions?: number | null,
  deleted_subscriptions?: number | null,
  bulletins_sent?: number | null,
  allocated?: AllocationInput | null,
};

export type AllocationInput = {
  direct?: number | null,
  overlay?: number | null,
  signup?: number | null,
  upload?: number | null,
  other?: number | null,
  all_network?: number | null,
};

export type ModelBulletinTopicConditionInput = {
  bulletin_id?: ModelIDInput | null,
  topic_id?: ModelIDInput | null,
  created_at?: ModelStringInput | null,
  and?: Array< ModelBulletinTopicConditionInput | null > | null,
  or?: Array< ModelBulletinTopicConditionInput | null > | null,
  not?: ModelBulletinTopicConditionInput | null,
};

export type UpdateBulletinTopicInput = {
  id: string,
  bulletin_id?: string | null,
  topic_id?: string | null,
  created_at?: string | null,
  to_date?: SubsReportInput | null,
  this_period?: SubsReportInput | null,
};

export type DeleteBulletinTopicInput = {
  id?: string | null,
};

export type CreateSubsSummaryInput = {
  id?: string | null,
  direct_subscribers?: number | null,
  direct_subscriptions?: number | null,
  overlay_subscribers?: number | null,
  overlay_subscriptions?: number | null,
  signup_subscribers?: number | null,
  signup_subscriptions?: number | null,
  upload_subscribers?: number | null,
  upload_subscriptions?: number | null,
  other_subscribers?: number | null,
  other_subscriptions?: number | null,
  total_subscribers?: number | null,
  total_subscriptions?: number | null,
  deleted_subscribers?: number | null,
  deleted_subscriptions?: number | null,
  all_network_subscribers?: number | null,
  all_network_subscriptions?: number | null,
  net_subscribers?: number | null,
  net_subscriptions?: number | null,
};

export type ModelSubsSummaryConditionInput = {
  direct_subscribers?: ModelIntInput | null,
  direct_subscriptions?: ModelIntInput | null,
  overlay_subscribers?: ModelIntInput | null,
  overlay_subscriptions?: ModelIntInput | null,
  signup_subscribers?: ModelIntInput | null,
  signup_subscriptions?: ModelIntInput | null,
  upload_subscribers?: ModelIntInput | null,
  upload_subscriptions?: ModelIntInput | null,
  other_subscribers?: ModelIntInput | null,
  other_subscriptions?: ModelIntInput | null,
  total_subscribers?: ModelIntInput | null,
  total_subscriptions?: ModelIntInput | null,
  deleted_subscribers?: ModelIntInput | null,
  deleted_subscriptions?: ModelIntInput | null,
  all_network_subscribers?: ModelIntInput | null,
  all_network_subscriptions?: ModelIntInput | null,
  net_subscribers?: ModelIntInput | null,
  net_subscriptions?: ModelIntInput | null,
  and?: Array< ModelSubsSummaryConditionInput | null > | null,
  or?: Array< ModelSubsSummaryConditionInput | null > | null,
  not?: ModelSubsSummaryConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateSubsSummaryInput = {
  id: string,
  direct_subscribers?: number | null,
  direct_subscriptions?: number | null,
  overlay_subscribers?: number | null,
  overlay_subscriptions?: number | null,
  signup_subscribers?: number | null,
  signup_subscriptions?: number | null,
  upload_subscribers?: number | null,
  upload_subscriptions?: number | null,
  other_subscribers?: number | null,
  other_subscriptions?: number | null,
  total_subscribers?: number | null,
  total_subscriptions?: number | null,
  deleted_subscribers?: number | null,
  deleted_subscriptions?: number | null,
  all_network_subscribers?: number | null,
  all_network_subscriptions?: number | null,
  net_subscribers?: number | null,
  net_subscriptions?: number | null,
};

export type DeleteSubsSummaryInput = {
  id?: string | null,
};

export type CreateAccumulatorInput = {
  id?: string | null,
  all_topics?: Array< string > | null,
  all_campaigns?: Array< string > | null,
  all_senders?: Array< string > | null,
};

export type ModelAccumulatorConditionInput = {
  all_topics?: ModelStringInput | null,
  all_campaigns?: ModelStringInput | null,
  all_senders?: ModelStringInput | null,
  and?: Array< ModelAccumulatorConditionInput | null > | null,
  or?: Array< ModelAccumulatorConditionInput | null > | null,
  not?: ModelAccumulatorConditionInput | null,
};

export type UpdateAccumulatorInput = {
  id: string,
  all_topics?: Array< string > | null,
  all_campaigns?: Array< string > | null,
  all_senders?: Array< string > | null,
};

export type DeleteAccumulatorInput = {
  id?: string | null,
};

export type CreateTopicFollowerInput = {
  id?: string | null,
  topic_id: string,
  follower_id: string,
};

export type ModelTopicFollowerConditionInput = {
  topic_id?: ModelIDInput | null,
  follower_id?: ModelIDInput | null,
  and?: Array< ModelTopicFollowerConditionInput | null > | null,
  or?: Array< ModelTopicFollowerConditionInput | null > | null,
  not?: ModelTopicFollowerConditionInput | null,
};

export type UpdateTopicFollowerInput = {
  id: string,
  topic_id?: string | null,
  follower_id?: string | null,
};

export type DeleteTopicFollowerInput = {
  id?: string | null,
};

export type CreateFollowerInput = {
  id?: string | null,
  destination?: string | null,
  domain?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  created_at?: string | null,
  source?: string | null,
};

export type ModelFollowerConditionInput = {
  destination?: ModelStringInput | null,
  domain?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  created_at?: ModelStringInput | null,
  source?: ModelStringInput | null,
  and?: Array< ModelFollowerConditionInput | null > | null,
  or?: Array< ModelFollowerConditionInput | null > | null,
  not?: ModelFollowerConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateFollowerInput = {
  id: string,
  destination?: string | null,
  domain?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  created_at?: string | null,
  source?: string | null,
};

export type DeleteFollowerInput = {
  id?: string | null,
};

export type CreateSubInput = {
  id?: string | null,
  referrer_url?: string | null,
  created_at?: string | null,
  deleted_at?: string | null,
  source?: string | null,
  topic_id: string,
  follower_id: string,
};

export type ModelSubConditionInput = {
  referrer_url?: ModelStringInput | null,
  created_at?: ModelStringInput | null,
  deleted_at?: ModelStringInput | null,
  source?: ModelStringInput | null,
  topic_id?: ModelIDInput | null,
  follower_id?: ModelIDInput | null,
  and?: Array< ModelSubConditionInput | null > | null,
  or?: Array< ModelSubConditionInput | null > | null,
  not?: ModelSubConditionInput | null,
};

export type UpdateSubInput = {
  id: string,
  referrer_url?: string | null,
  created_at?: string | null,
  deleted_at?: string | null,
  source?: string | null,
  topic_id?: string | null,
  follower_id?: string | null,
};

export type DeleteSubInput = {
  id?: string | null,
};

export type ModelCampaignFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelCampaignFilterInput | null > | null,
  or?: Array< ModelCampaignFilterInput | null > | null,
  not?: ModelCampaignFilterInput | null,
};

export type ModelSenderFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelSenderFilterInput | null > | null,
  or?: Array< ModelSenderFilterInput | null > | null,
  not?: ModelSenderFilterInput | null,
};

export type ModelTopicFilterInput = {
  id?: ModelIDInput | null,
  code?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTopicFilterInput | null > | null,
  or?: Array< ModelTopicFilterInput | null > | null,
  not?: ModelTopicFilterInput | null,
};

export type ModelBulletinFilterInput = {
  id?: ModelIDInput | null,
  campaign_id?: ModelIDInput | null,
  sender_email?: ModelIDInput | null,
  created_at?: ModelStringInput | null,
  and?: Array< ModelBulletinFilterInput | null > | null,
  or?: Array< ModelBulletinFilterInput | null > | null,
  not?: ModelBulletinFilterInput | null,
};

export type ModelSubsSummaryFilterInput = {
  id?: ModelIDInput | null,
  direct_subscribers?: ModelIntInput | null,
  direct_subscriptions?: ModelIntInput | null,
  overlay_subscribers?: ModelIntInput | null,
  overlay_subscriptions?: ModelIntInput | null,
  signup_subscribers?: ModelIntInput | null,
  signup_subscriptions?: ModelIntInput | null,
  upload_subscribers?: ModelIntInput | null,
  upload_subscriptions?: ModelIntInput | null,
  other_subscribers?: ModelIntInput | null,
  other_subscriptions?: ModelIntInput | null,
  total_subscribers?: ModelIntInput | null,
  total_subscriptions?: ModelIntInput | null,
  deleted_subscribers?: ModelIntInput | null,
  deleted_subscriptions?: ModelIntInput | null,
  all_network_subscribers?: ModelIntInput | null,
  all_network_subscriptions?: ModelIntInput | null,
  net_subscribers?: ModelIntInput | null,
  net_subscriptions?: ModelIntInput | null,
  and?: Array< ModelSubsSummaryFilterInput | null > | null,
  or?: Array< ModelSubsSummaryFilterInput | null > | null,
  not?: ModelSubsSummaryFilterInput | null,
};

export type ModelAccumulatorFilterInput = {
  id?: ModelIDInput | null,
  all_topics?: ModelStringInput | null,
  all_campaigns?: ModelStringInput | null,
  all_senders?: ModelStringInput | null,
  and?: Array< ModelAccumulatorFilterInput | null > | null,
  or?: Array< ModelAccumulatorFilterInput | null > | null,
  not?: ModelAccumulatorFilterInput | null,
};

export type ModelSubFilterInput = {
  id?: ModelIDInput | null,
  referrer_url?: ModelStringInput | null,
  created_at?: ModelStringInput | null,
  deleted_at?: ModelStringInput | null,
  source?: ModelStringInput | null,
  topic_id?: ModelIDInput | null,
  follower_id?: ModelIDInput | null,
  and?: Array< ModelSubFilterInput | null > | null,
  or?: Array< ModelSubFilterInput | null > | null,
  not?: ModelSubFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelTopicFollowerFilterInput = {
  id?: ModelIDInput | null,
  topic_id?: ModelIDInput | null,
  follower_id?: ModelIDInput | null,
  and?: Array< ModelTopicFollowerFilterInput | null > | null,
  or?: Array< ModelTopicFollowerFilterInput | null > | null,
  not?: ModelTopicFollowerFilterInput | null,
};

export type ModelFollowerFilterInput = {
  id?: ModelIDInput | null,
  destination?: ModelStringInput | null,
  domain?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  created_at?: ModelStringInput | null,
  source?: ModelStringInput | null,
  and?: Array< ModelFollowerFilterInput | null > | null,
  or?: Array< ModelFollowerFilterInput | null > | null,
  not?: ModelFollowerFilterInput | null,
};

export type CreateCampaignMutationVariables = {
  input: CreateCampaignInput,
  condition?: ModelCampaignConditionInput | null,
};

export type CreateCampaignMutation = {
  createCampaign:  {
    __typename: "Campaign",
    id: string,
    bulletins:  {
      __typename: "ModelBulletinConnection",
      items:  Array< {
        __typename: "Bulletin",
        id: string,
        campaign_id: string,
        sender_email: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCampaignMutationVariables = {
  input: UpdateCampaignInput,
  condition?: ModelCampaignConditionInput | null,
};

export type UpdateCampaignMutation = {
  updateCampaign:  {
    __typename: "Campaign",
    id: string,
    bulletins:  {
      __typename: "ModelBulletinConnection",
      items:  Array< {
        __typename: "Bulletin",
        id: string,
        campaign_id: string,
        sender_email: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCampaignMutationVariables = {
  input: DeleteCampaignInput,
  condition?: ModelCampaignConditionInput | null,
};

export type DeleteCampaignMutation = {
  deleteCampaign:  {
    __typename: "Campaign",
    id: string,
    bulletins:  {
      __typename: "ModelBulletinConnection",
      items:  Array< {
        __typename: "Bulletin",
        id: string,
        campaign_id: string,
        sender_email: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSenderMutationVariables = {
  input: CreateSenderInput,
  condition?: ModelSenderConditionInput | null,
};

export type CreateSenderMutation = {
  createSender:  {
    __typename: "Sender",
    id: string,
    bulletins:  {
      __typename: "ModelBulletinConnection",
      items:  Array< {
        __typename: "Bulletin",
        id: string,
        campaign_id: string,
        sender_email: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSenderMutationVariables = {
  input: UpdateSenderInput,
  condition?: ModelSenderConditionInput | null,
};

export type UpdateSenderMutation = {
  updateSender:  {
    __typename: "Sender",
    id: string,
    bulletins:  {
      __typename: "ModelBulletinConnection",
      items:  Array< {
        __typename: "Bulletin",
        id: string,
        campaign_id: string,
        sender_email: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSenderMutationVariables = {
  input: DeleteSenderInput,
  condition?: ModelSenderConditionInput | null,
};

export type DeleteSenderMutation = {
  deleteSender:  {
    __typename: "Sender",
    id: string,
    bulletins:  {
      __typename: "ModelBulletinConnection",
      items:  Array< {
        __typename: "Bulletin",
        id: string,
        campaign_id: string,
        sender_email: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTopicMutationVariables = {
  input: CreateTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type CreateTopicMutation = {
  createTopic:  {
    __typename: "Topic",
    id: string,
    code: string | null,
    name: string | null,
    description: string | null,
    bulletins:  {
      __typename: "ModelBulletinTopicConnection",
      items:  Array< {
        __typename: "BulletinTopic",
        id: string,
        bulletin_id: string,
        topic_id: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    followers:  {
      __typename: "ModelTopicFollowerConnection",
      items:  Array< {
        __typename: "TopicFollower",
        id: string,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    subscriptions:  {
      __typename: "ModelSubConnection",
      items:  Array< {
        __typename: "Sub",
        id: string,
        referrer_url: string | null,
        created_at: string | null,
        deleted_at: string | null,
        source: string | null,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTopicMutationVariables = {
  input: UpdateTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type UpdateTopicMutation = {
  updateTopic:  {
    __typename: "Topic",
    id: string,
    code: string | null,
    name: string | null,
    description: string | null,
    bulletins:  {
      __typename: "ModelBulletinTopicConnection",
      items:  Array< {
        __typename: "BulletinTopic",
        id: string,
        bulletin_id: string,
        topic_id: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    followers:  {
      __typename: "ModelTopicFollowerConnection",
      items:  Array< {
        __typename: "TopicFollower",
        id: string,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    subscriptions:  {
      __typename: "ModelSubConnection",
      items:  Array< {
        __typename: "Sub",
        id: string,
        referrer_url: string | null,
        created_at: string | null,
        deleted_at: string | null,
        source: string | null,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTopicMutationVariables = {
  input: DeleteTopicInput,
  condition?: ModelTopicConditionInput | null,
};

export type DeleteTopicMutation = {
  deleteTopic:  {
    __typename: "Topic",
    id: string,
    code: string | null,
    name: string | null,
    description: string | null,
    bulletins:  {
      __typename: "ModelBulletinTopicConnection",
      items:  Array< {
        __typename: "BulletinTopic",
        id: string,
        bulletin_id: string,
        topic_id: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    followers:  {
      __typename: "ModelTopicFollowerConnection",
      items:  Array< {
        __typename: "TopicFollower",
        id: string,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    subscriptions:  {
      __typename: "ModelSubConnection",
      items:  Array< {
        __typename: "Sub",
        id: string,
        referrer_url: string | null,
        created_at: string | null,
        deleted_at: string | null,
        source: string | null,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBulletinMutationVariables = {
  input: CreateBulletinInput,
  condition?: ModelBulletinConditionInput | null,
};

export type CreateBulletinMutation = {
  createBulletin:  {
    __typename: "Bulletin",
    id: string,
    campaign_id: string,
    campaign:  {
      __typename: "Campaign",
      id: string,
      bulletins:  {
        __typename: "ModelBulletinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sender_email: string,
    sender:  {
      __typename: "Sender",
      id: string,
      bulletins:  {
        __typename: "ModelBulletinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    created_at: string | null,
    detail:  {
      __typename: "BulletinDetail",
      subject: string | null,
      to_text: string | null,
      delivery_status_name: string | null,
      addresses_count: number | null,
      success_count: number | null,
      failed_count: number | null,
      percent_success: number | null,
      immediate_email_recipients: number | null,
      emails_delivered: number | null,
      emails_failed: number | null,
      percent_emails_delivered: number | null,
      opens_count: number | null,
      percent_opened: number | null,
      nonunique_opens_count: number | null,
      links_count: number | null,
      click_rate: number | null,
      clicks_count: number | null,
      nonunique_clicks_count: number | null,
      digest_email_recipients: number | null,
      unique_click_count: number | null,
      total_click_count: number | null,
      unsubscribes: number | null,
    } | null,
    links:  Array< {
      __typename: "Link",
      id: string,
      link_url: string | null,
      unique_click_count: number | null,
      total_click_count: number | null,
    } | null > | null,
    topics:  {
      __typename: "ModelBulletinTopicConnection",
      items:  Array< {
        __typename: "BulletinTopic",
        id: string,
        bulletin_id: string,
        topic_id: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBulletinMutationVariables = {
  input: UpdateBulletinInput,
  condition?: ModelBulletinConditionInput | null,
};

export type UpdateBulletinMutation = {
  updateBulletin:  {
    __typename: "Bulletin",
    id: string,
    campaign_id: string,
    campaign:  {
      __typename: "Campaign",
      id: string,
      bulletins:  {
        __typename: "ModelBulletinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sender_email: string,
    sender:  {
      __typename: "Sender",
      id: string,
      bulletins:  {
        __typename: "ModelBulletinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    created_at: string | null,
    detail:  {
      __typename: "BulletinDetail",
      subject: string | null,
      to_text: string | null,
      delivery_status_name: string | null,
      addresses_count: number | null,
      success_count: number | null,
      failed_count: number | null,
      percent_success: number | null,
      immediate_email_recipients: number | null,
      emails_delivered: number | null,
      emails_failed: number | null,
      percent_emails_delivered: number | null,
      opens_count: number | null,
      percent_opened: number | null,
      nonunique_opens_count: number | null,
      links_count: number | null,
      click_rate: number | null,
      clicks_count: number | null,
      nonunique_clicks_count: number | null,
      digest_email_recipients: number | null,
      unique_click_count: number | null,
      total_click_count: number | null,
      unsubscribes: number | null,
    } | null,
    links:  Array< {
      __typename: "Link",
      id: string,
      link_url: string | null,
      unique_click_count: number | null,
      total_click_count: number | null,
    } | null > | null,
    topics:  {
      __typename: "ModelBulletinTopicConnection",
      items:  Array< {
        __typename: "BulletinTopic",
        id: string,
        bulletin_id: string,
        topic_id: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBulletinMutationVariables = {
  input: DeleteBulletinInput,
  condition?: ModelBulletinConditionInput | null,
};

export type DeleteBulletinMutation = {
  deleteBulletin:  {
    __typename: "Bulletin",
    id: string,
    campaign_id: string,
    campaign:  {
      __typename: "Campaign",
      id: string,
      bulletins:  {
        __typename: "ModelBulletinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sender_email: string,
    sender:  {
      __typename: "Sender",
      id: string,
      bulletins:  {
        __typename: "ModelBulletinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    created_at: string | null,
    detail:  {
      __typename: "BulletinDetail",
      subject: string | null,
      to_text: string | null,
      delivery_status_name: string | null,
      addresses_count: number | null,
      success_count: number | null,
      failed_count: number | null,
      percent_success: number | null,
      immediate_email_recipients: number | null,
      emails_delivered: number | null,
      emails_failed: number | null,
      percent_emails_delivered: number | null,
      opens_count: number | null,
      percent_opened: number | null,
      nonunique_opens_count: number | null,
      links_count: number | null,
      click_rate: number | null,
      clicks_count: number | null,
      nonunique_clicks_count: number | null,
      digest_email_recipients: number | null,
      unique_click_count: number | null,
      total_click_count: number | null,
      unsubscribes: number | null,
    } | null,
    links:  Array< {
      __typename: "Link",
      id: string,
      link_url: string | null,
      unique_click_count: number | null,
      total_click_count: number | null,
    } | null > | null,
    topics:  {
      __typename: "ModelBulletinTopicConnection",
      items:  Array< {
        __typename: "BulletinTopic",
        id: string,
        bulletin_id: string,
        topic_id: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBulletinTopicMutationVariables = {
  input: CreateBulletinTopicInput,
  condition?: ModelBulletinTopicConditionInput | null,
};

export type CreateBulletinTopicMutation = {
  createBulletinTopic:  {
    __typename: "BulletinTopic",
    id: string,
    bulletin_id: string,
    topic_id: string,
    created_at: string | null,
    to_date:  {
      __typename: "SubsReport",
      total_subscriptions: number | null,
      new_subscriptions: number | null,
      deleted_subscriptions: number | null,
      bulletins_sent: number | null,
      allocated:  {
        __typename: "Allocation",
        direct: number | null,
        overlay: number | null,
        signup: number | null,
        upload: number | null,
        other: number | null,
        all_network: number | null,
      } | null,
    } | null,
    this_period:  {
      __typename: "SubsReport",
      total_subscriptions: number | null,
      new_subscriptions: number | null,
      deleted_subscriptions: number | null,
      bulletins_sent: number | null,
      allocated:  {
        __typename: "Allocation",
        direct: number | null,
        overlay: number | null,
        signup: number | null,
        upload: number | null,
        other: number | null,
        all_network: number | null,
      } | null,
    } | null,
    bulletin:  {
      __typename: "Bulletin",
      id: string,
      campaign_id: string,
      campaign:  {
        __typename: "Campaign",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      sender_email: string,
      sender:  {
        __typename: "Sender",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      created_at: string | null,
      detail:  {
        __typename: "BulletinDetail",
        subject: string | null,
        to_text: string | null,
        delivery_status_name: string | null,
        addresses_count: number | null,
        success_count: number | null,
        failed_count: number | null,
        percent_success: number | null,
        immediate_email_recipients: number | null,
        emails_delivered: number | null,
        emails_failed: number | null,
        percent_emails_delivered: number | null,
        opens_count: number | null,
        percent_opened: number | null,
        nonunique_opens_count: number | null,
        links_count: number | null,
        click_rate: number | null,
        clicks_count: number | null,
        nonunique_clicks_count: number | null,
        digest_email_recipients: number | null,
        unique_click_count: number | null,
        total_click_count: number | null,
        unsubscribes: number | null,
      } | null,
      links:  Array< {
        __typename: "Link",
        id: string,
        link_url: string | null,
        unique_click_count: number | null,
        total_click_count: number | null,
      } | null > | null,
      topics:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    topic:  {
      __typename: "Topic",
      id: string,
      code: string | null,
      name: string | null,
      description: string | null,
      bulletins:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      followers:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBulletinTopicMutationVariables = {
  input: UpdateBulletinTopicInput,
  condition?: ModelBulletinTopicConditionInput | null,
};

export type UpdateBulletinTopicMutation = {
  updateBulletinTopic:  {
    __typename: "BulletinTopic",
    id: string,
    bulletin_id: string,
    topic_id: string,
    created_at: string | null,
    to_date:  {
      __typename: "SubsReport",
      total_subscriptions: number | null,
      new_subscriptions: number | null,
      deleted_subscriptions: number | null,
      bulletins_sent: number | null,
      allocated:  {
        __typename: "Allocation",
        direct: number | null,
        overlay: number | null,
        signup: number | null,
        upload: number | null,
        other: number | null,
        all_network: number | null,
      } | null,
    } | null,
    this_period:  {
      __typename: "SubsReport",
      total_subscriptions: number | null,
      new_subscriptions: number | null,
      deleted_subscriptions: number | null,
      bulletins_sent: number | null,
      allocated:  {
        __typename: "Allocation",
        direct: number | null,
        overlay: number | null,
        signup: number | null,
        upload: number | null,
        other: number | null,
        all_network: number | null,
      } | null,
    } | null,
    bulletin:  {
      __typename: "Bulletin",
      id: string,
      campaign_id: string,
      campaign:  {
        __typename: "Campaign",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      sender_email: string,
      sender:  {
        __typename: "Sender",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      created_at: string | null,
      detail:  {
        __typename: "BulletinDetail",
        subject: string | null,
        to_text: string | null,
        delivery_status_name: string | null,
        addresses_count: number | null,
        success_count: number | null,
        failed_count: number | null,
        percent_success: number | null,
        immediate_email_recipients: number | null,
        emails_delivered: number | null,
        emails_failed: number | null,
        percent_emails_delivered: number | null,
        opens_count: number | null,
        percent_opened: number | null,
        nonunique_opens_count: number | null,
        links_count: number | null,
        click_rate: number | null,
        clicks_count: number | null,
        nonunique_clicks_count: number | null,
        digest_email_recipients: number | null,
        unique_click_count: number | null,
        total_click_count: number | null,
        unsubscribes: number | null,
      } | null,
      links:  Array< {
        __typename: "Link",
        id: string,
        link_url: string | null,
        unique_click_count: number | null,
        total_click_count: number | null,
      } | null > | null,
      topics:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    topic:  {
      __typename: "Topic",
      id: string,
      code: string | null,
      name: string | null,
      description: string | null,
      bulletins:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      followers:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBulletinTopicMutationVariables = {
  input: DeleteBulletinTopicInput,
  condition?: ModelBulletinTopicConditionInput | null,
};

export type DeleteBulletinTopicMutation = {
  deleteBulletinTopic:  {
    __typename: "BulletinTopic",
    id: string,
    bulletin_id: string,
    topic_id: string,
    created_at: string | null,
    to_date:  {
      __typename: "SubsReport",
      total_subscriptions: number | null,
      new_subscriptions: number | null,
      deleted_subscriptions: number | null,
      bulletins_sent: number | null,
      allocated:  {
        __typename: "Allocation",
        direct: number | null,
        overlay: number | null,
        signup: number | null,
        upload: number | null,
        other: number | null,
        all_network: number | null,
      } | null,
    } | null,
    this_period:  {
      __typename: "SubsReport",
      total_subscriptions: number | null,
      new_subscriptions: number | null,
      deleted_subscriptions: number | null,
      bulletins_sent: number | null,
      allocated:  {
        __typename: "Allocation",
        direct: number | null,
        overlay: number | null,
        signup: number | null,
        upload: number | null,
        other: number | null,
        all_network: number | null,
      } | null,
    } | null,
    bulletin:  {
      __typename: "Bulletin",
      id: string,
      campaign_id: string,
      campaign:  {
        __typename: "Campaign",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      sender_email: string,
      sender:  {
        __typename: "Sender",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      created_at: string | null,
      detail:  {
        __typename: "BulletinDetail",
        subject: string | null,
        to_text: string | null,
        delivery_status_name: string | null,
        addresses_count: number | null,
        success_count: number | null,
        failed_count: number | null,
        percent_success: number | null,
        immediate_email_recipients: number | null,
        emails_delivered: number | null,
        emails_failed: number | null,
        percent_emails_delivered: number | null,
        opens_count: number | null,
        percent_opened: number | null,
        nonunique_opens_count: number | null,
        links_count: number | null,
        click_rate: number | null,
        clicks_count: number | null,
        nonunique_clicks_count: number | null,
        digest_email_recipients: number | null,
        unique_click_count: number | null,
        total_click_count: number | null,
        unsubscribes: number | null,
      } | null,
      links:  Array< {
        __typename: "Link",
        id: string,
        link_url: string | null,
        unique_click_count: number | null,
        total_click_count: number | null,
      } | null > | null,
      topics:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    topic:  {
      __typename: "Topic",
      id: string,
      code: string | null,
      name: string | null,
      description: string | null,
      bulletins:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      followers:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSubsSummaryMutationVariables = {
  input: CreateSubsSummaryInput,
  condition?: ModelSubsSummaryConditionInput | null,
};

export type CreateSubsSummaryMutation = {
  createSubsSummary:  {
    __typename: "SubsSummary",
    id: string,
    direct_subscribers: number | null,
    direct_subscriptions: number | null,
    overlay_subscribers: number | null,
    overlay_subscriptions: number | null,
    signup_subscribers: number | null,
    signup_subscriptions: number | null,
    upload_subscribers: number | null,
    upload_subscriptions: number | null,
    other_subscribers: number | null,
    other_subscriptions: number | null,
    total_subscribers: number | null,
    total_subscriptions: number | null,
    deleted_subscribers: number | null,
    deleted_subscriptions: number | null,
    all_network_subscribers: number | null,
    all_network_subscriptions: number | null,
    net_subscribers: number | null,
    net_subscriptions: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSubsSummaryMutationVariables = {
  input: UpdateSubsSummaryInput,
  condition?: ModelSubsSummaryConditionInput | null,
};

export type UpdateSubsSummaryMutation = {
  updateSubsSummary:  {
    __typename: "SubsSummary",
    id: string,
    direct_subscribers: number | null,
    direct_subscriptions: number | null,
    overlay_subscribers: number | null,
    overlay_subscriptions: number | null,
    signup_subscribers: number | null,
    signup_subscriptions: number | null,
    upload_subscribers: number | null,
    upload_subscriptions: number | null,
    other_subscribers: number | null,
    other_subscriptions: number | null,
    total_subscribers: number | null,
    total_subscriptions: number | null,
    deleted_subscribers: number | null,
    deleted_subscriptions: number | null,
    all_network_subscribers: number | null,
    all_network_subscriptions: number | null,
    net_subscribers: number | null,
    net_subscriptions: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSubsSummaryMutationVariables = {
  input: DeleteSubsSummaryInput,
  condition?: ModelSubsSummaryConditionInput | null,
};

export type DeleteSubsSummaryMutation = {
  deleteSubsSummary:  {
    __typename: "SubsSummary",
    id: string,
    direct_subscribers: number | null,
    direct_subscriptions: number | null,
    overlay_subscribers: number | null,
    overlay_subscriptions: number | null,
    signup_subscribers: number | null,
    signup_subscriptions: number | null,
    upload_subscribers: number | null,
    upload_subscriptions: number | null,
    other_subscribers: number | null,
    other_subscriptions: number | null,
    total_subscribers: number | null,
    total_subscriptions: number | null,
    deleted_subscribers: number | null,
    deleted_subscriptions: number | null,
    all_network_subscribers: number | null,
    all_network_subscriptions: number | null,
    net_subscribers: number | null,
    net_subscriptions: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAccumulatorMutationVariables = {
  input: CreateAccumulatorInput,
  condition?: ModelAccumulatorConditionInput | null,
};

export type CreateAccumulatorMutation = {
  createAccumulator:  {
    __typename: "Accumulator",
    id: string,
    all_topics: Array< string > | null,
    all_campaigns: Array< string > | null,
    all_senders: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAccumulatorMutationVariables = {
  input: UpdateAccumulatorInput,
  condition?: ModelAccumulatorConditionInput | null,
};

export type UpdateAccumulatorMutation = {
  updateAccumulator:  {
    __typename: "Accumulator",
    id: string,
    all_topics: Array< string > | null,
    all_campaigns: Array< string > | null,
    all_senders: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAccumulatorMutationVariables = {
  input: DeleteAccumulatorInput,
  condition?: ModelAccumulatorConditionInput | null,
};

export type DeleteAccumulatorMutation = {
  deleteAccumulator:  {
    __typename: "Accumulator",
    id: string,
    all_topics: Array< string > | null,
    all_campaigns: Array< string > | null,
    all_senders: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTopicFollowerMutationVariables = {
  input: CreateTopicFollowerInput,
  condition?: ModelTopicFollowerConditionInput | null,
};

export type CreateTopicFollowerMutation = {
  createTopicFollower:  {
    __typename: "TopicFollower",
    id: string,
    topic_id: string,
    follower_id: string,
    topic:  {
      __typename: "Topic",
      id: string,
      code: string | null,
      name: string | null,
      description: string | null,
      bulletins:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      followers:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    follower:  {
      __typename: "Follower",
      id: string,
      domain: string | null,
      latitude: number | null,
      longitude: number | null,
      created_at: string | null,
      source: string | null,
      topics:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      destination: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTopicFollowerMutationVariables = {
  input: UpdateTopicFollowerInput,
  condition?: ModelTopicFollowerConditionInput | null,
};

export type UpdateTopicFollowerMutation = {
  updateTopicFollower:  {
    __typename: "TopicFollower",
    id: string,
    topic_id: string,
    follower_id: string,
    topic:  {
      __typename: "Topic",
      id: string,
      code: string | null,
      name: string | null,
      description: string | null,
      bulletins:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      followers:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    follower:  {
      __typename: "Follower",
      id: string,
      domain: string | null,
      latitude: number | null,
      longitude: number | null,
      created_at: string | null,
      source: string | null,
      topics:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      destination: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTopicFollowerMutationVariables = {
  input: DeleteTopicFollowerInput,
  condition?: ModelTopicFollowerConditionInput | null,
};

export type DeleteTopicFollowerMutation = {
  deleteTopicFollower:  {
    __typename: "TopicFollower",
    id: string,
    topic_id: string,
    follower_id: string,
    topic:  {
      __typename: "Topic",
      id: string,
      code: string | null,
      name: string | null,
      description: string | null,
      bulletins:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      followers:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    follower:  {
      __typename: "Follower",
      id: string,
      domain: string | null,
      latitude: number | null,
      longitude: number | null,
      created_at: string | null,
      source: string | null,
      topics:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      destination: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFollowerMutationVariables = {
  input: CreateFollowerInput,
  condition?: ModelFollowerConditionInput | null,
};

export type CreateFollowerMutation = {
  createFollower:  {
    __typename: "Follower",
    id: string,
    domain: string | null,
    latitude: number | null,
    longitude: number | null,
    created_at: string | null,
    source: string | null,
    topics:  {
      __typename: "ModelTopicFollowerConnection",
      items:  Array< {
        __typename: "TopicFollower",
        id: string,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    subscriptions:  {
      __typename: "ModelSubConnection",
      items:  Array< {
        __typename: "Sub",
        id: string,
        referrer_url: string | null,
        created_at: string | null,
        deleted_at: string | null,
        source: string | null,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    destination: string | null,
  } | null,
};

export type UpdateFollowerMutationVariables = {
  input: UpdateFollowerInput,
  condition?: ModelFollowerConditionInput | null,
};

export type UpdateFollowerMutation = {
  updateFollower:  {
    __typename: "Follower",
    id: string,
    domain: string | null,
    latitude: number | null,
    longitude: number | null,
    created_at: string | null,
    source: string | null,
    topics:  {
      __typename: "ModelTopicFollowerConnection",
      items:  Array< {
        __typename: "TopicFollower",
        id: string,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    subscriptions:  {
      __typename: "ModelSubConnection",
      items:  Array< {
        __typename: "Sub",
        id: string,
        referrer_url: string | null,
        created_at: string | null,
        deleted_at: string | null,
        source: string | null,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    destination: string | null,
  } | null,
};

export type DeleteFollowerMutationVariables = {
  input: DeleteFollowerInput,
  condition?: ModelFollowerConditionInput | null,
};

export type DeleteFollowerMutation = {
  deleteFollower:  {
    __typename: "Follower",
    id: string,
    domain: string | null,
    latitude: number | null,
    longitude: number | null,
    created_at: string | null,
    source: string | null,
    topics:  {
      __typename: "ModelTopicFollowerConnection",
      items:  Array< {
        __typename: "TopicFollower",
        id: string,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    subscriptions:  {
      __typename: "ModelSubConnection",
      items:  Array< {
        __typename: "Sub",
        id: string,
        referrer_url: string | null,
        created_at: string | null,
        deleted_at: string | null,
        source: string | null,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    destination: string | null,
  } | null,
};

export type CreateSubMutationVariables = {
  input: CreateSubInput,
  condition?: ModelSubConditionInput | null,
};

export type CreateSubMutation = {
  createSub:  {
    __typename: "Sub",
    id: string,
    referrer_url: string | null,
    created_at: string | null,
    deleted_at: string | null,
    source: string | null,
    topic_id: string,
    follower_id: string,
    topic:  {
      __typename: "Topic",
      id: string,
      code: string | null,
      name: string | null,
      description: string | null,
      bulletins:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      followers:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    follower:  {
      __typename: "Follower",
      id: string,
      domain: string | null,
      latitude: number | null,
      longitude: number | null,
      created_at: string | null,
      source: string | null,
      topics:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      destination: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSubMutationVariables = {
  input: UpdateSubInput,
  condition?: ModelSubConditionInput | null,
};

export type UpdateSubMutation = {
  updateSub:  {
    __typename: "Sub",
    id: string,
    referrer_url: string | null,
    created_at: string | null,
    deleted_at: string | null,
    source: string | null,
    topic_id: string,
    follower_id: string,
    topic:  {
      __typename: "Topic",
      id: string,
      code: string | null,
      name: string | null,
      description: string | null,
      bulletins:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      followers:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    follower:  {
      __typename: "Follower",
      id: string,
      domain: string | null,
      latitude: number | null,
      longitude: number | null,
      created_at: string | null,
      source: string | null,
      topics:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      destination: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSubMutationVariables = {
  input: DeleteSubInput,
  condition?: ModelSubConditionInput | null,
};

export type DeleteSubMutation = {
  deleteSub:  {
    __typename: "Sub",
    id: string,
    referrer_url: string | null,
    created_at: string | null,
    deleted_at: string | null,
    source: string | null,
    topic_id: string,
    follower_id: string,
    topic:  {
      __typename: "Topic",
      id: string,
      code: string | null,
      name: string | null,
      description: string | null,
      bulletins:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      followers:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    follower:  {
      __typename: "Follower",
      id: string,
      domain: string | null,
      latitude: number | null,
      longitude: number | null,
      created_at: string | null,
      source: string | null,
      topics:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      destination: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCampaignQueryVariables = {
  id: string,
};

export type GetCampaignQuery = {
  getCampaign:  {
    __typename: "Campaign",
    id: string,
    bulletins:  {
      __typename: "ModelBulletinConnection",
      items:  Array< {
        __typename: "Bulletin",
        id: string,
        campaign_id: string,
        sender_email: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCampaignsQueryVariables = {
  filter?: ModelCampaignFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCampaignsQuery = {
  listCampaigns:  {
    __typename: "ModelCampaignConnection",
    items:  Array< {
      __typename: "Campaign",
      id: string,
      bulletins:  {
        __typename: "ModelBulletinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSenderQueryVariables = {
  id: string,
};

export type GetSenderQuery = {
  getSender:  {
    __typename: "Sender",
    id: string,
    bulletins:  {
      __typename: "ModelBulletinConnection",
      items:  Array< {
        __typename: "Bulletin",
        id: string,
        campaign_id: string,
        sender_email: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSendersQueryVariables = {
  filter?: ModelSenderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSendersQuery = {
  listSenders:  {
    __typename: "ModelSenderConnection",
    items:  Array< {
      __typename: "Sender",
      id: string,
      bulletins:  {
        __typename: "ModelBulletinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTopicQueryVariables = {
  id: string,
};

export type GetTopicQuery = {
  getTopic:  {
    __typename: "Topic",
    id: string,
    code: string | null,
    name: string | null,
    description: string | null,
    bulletins:  {
      __typename: "ModelBulletinTopicConnection",
      items:  Array< {
        __typename: "BulletinTopic",
        id: string,
        bulletin_id: string,
        topic_id: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    followers:  {
      __typename: "ModelTopicFollowerConnection",
      items:  Array< {
        __typename: "TopicFollower",
        id: string,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    subscriptions:  {
      __typename: "ModelSubConnection",
      items:  Array< {
        __typename: "Sub",
        id: string,
        referrer_url: string | null,
        created_at: string | null,
        deleted_at: string | null,
        source: string | null,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTopicsQueryVariables = {
  filter?: ModelTopicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTopicsQuery = {
  listTopics:  {
    __typename: "ModelTopicConnection",
    items:  Array< {
      __typename: "Topic",
      id: string,
      code: string | null,
      name: string | null,
      description: string | null,
      bulletins:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      followers:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetBulletinQueryVariables = {
  id: string,
};

export type GetBulletinQuery = {
  getBulletin:  {
    __typename: "Bulletin",
    id: string,
    campaign_id: string,
    campaign:  {
      __typename: "Campaign",
      id: string,
      bulletins:  {
        __typename: "ModelBulletinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sender_email: string,
    sender:  {
      __typename: "Sender",
      id: string,
      bulletins:  {
        __typename: "ModelBulletinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    created_at: string | null,
    detail:  {
      __typename: "BulletinDetail",
      subject: string | null,
      to_text: string | null,
      delivery_status_name: string | null,
      addresses_count: number | null,
      success_count: number | null,
      failed_count: number | null,
      percent_success: number | null,
      immediate_email_recipients: number | null,
      emails_delivered: number | null,
      emails_failed: number | null,
      percent_emails_delivered: number | null,
      opens_count: number | null,
      percent_opened: number | null,
      nonunique_opens_count: number | null,
      links_count: number | null,
      click_rate: number | null,
      clicks_count: number | null,
      nonunique_clicks_count: number | null,
      digest_email_recipients: number | null,
      unique_click_count: number | null,
      total_click_count: number | null,
      unsubscribes: number | null,
    } | null,
    links:  Array< {
      __typename: "Link",
      id: string,
      link_url: string | null,
      unique_click_count: number | null,
      total_click_count: number | null,
    } | null > | null,
    topics:  {
      __typename: "ModelBulletinTopicConnection",
      items:  Array< {
        __typename: "BulletinTopic",
        id: string,
        bulletin_id: string,
        topic_id: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBulletinsQueryVariables = {
  filter?: ModelBulletinFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBulletinsQuery = {
  listBulletins:  {
    __typename: "ModelBulletinConnection",
    items:  Array< {
      __typename: "Bulletin",
      id: string,
      campaign_id: string,
      campaign:  {
        __typename: "Campaign",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      sender_email: string,
      sender:  {
        __typename: "Sender",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      created_at: string | null,
      detail:  {
        __typename: "BulletinDetail",
        subject: string | null,
        to_text: string | null,
        delivery_status_name: string | null,
        addresses_count: number | null,
        success_count: number | null,
        failed_count: number | null,
        percent_success: number | null,
        immediate_email_recipients: number | null,
        emails_delivered: number | null,
        emails_failed: number | null,
        percent_emails_delivered: number | null,
        opens_count: number | null,
        percent_opened: number | null,
        nonunique_opens_count: number | null,
        links_count: number | null,
        click_rate: number | null,
        clicks_count: number | null,
        nonunique_clicks_count: number | null,
        digest_email_recipients: number | null,
        unique_click_count: number | null,
        total_click_count: number | null,
        unsubscribes: number | null,
      } | null,
      links:  Array< {
        __typename: "Link",
        id: string,
        link_url: string | null,
        unique_click_count: number | null,
        total_click_count: number | null,
      } | null > | null,
      topics:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSubsSummaryQueryVariables = {
  id: string,
};

export type GetSubsSummaryQuery = {
  getSubsSummary:  {
    __typename: "SubsSummary",
    id: string,
    direct_subscribers: number | null,
    direct_subscriptions: number | null,
    overlay_subscribers: number | null,
    overlay_subscriptions: number | null,
    signup_subscribers: number | null,
    signup_subscriptions: number | null,
    upload_subscribers: number | null,
    upload_subscriptions: number | null,
    other_subscribers: number | null,
    other_subscriptions: number | null,
    total_subscribers: number | null,
    total_subscriptions: number | null,
    deleted_subscribers: number | null,
    deleted_subscriptions: number | null,
    all_network_subscribers: number | null,
    all_network_subscriptions: number | null,
    net_subscribers: number | null,
    net_subscriptions: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSubsSummarysQueryVariables = {
  filter?: ModelSubsSummaryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubsSummarysQuery = {
  listSubsSummarys:  {
    __typename: "ModelSubsSummaryConnection",
    items:  Array< {
      __typename: "SubsSummary",
      id: string,
      direct_subscribers: number | null,
      direct_subscriptions: number | null,
      overlay_subscribers: number | null,
      overlay_subscriptions: number | null,
      signup_subscribers: number | null,
      signup_subscriptions: number | null,
      upload_subscribers: number | null,
      upload_subscriptions: number | null,
      other_subscribers: number | null,
      other_subscriptions: number | null,
      total_subscribers: number | null,
      total_subscriptions: number | null,
      deleted_subscribers: number | null,
      deleted_subscriptions: number | null,
      all_network_subscribers: number | null,
      all_network_subscriptions: number | null,
      net_subscribers: number | null,
      net_subscriptions: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetAccumulatorQueryVariables = {
  id: string,
};

export type GetAccumulatorQuery = {
  getAccumulator:  {
    __typename: "Accumulator",
    id: string,
    all_topics: Array< string > | null,
    all_campaigns: Array< string > | null,
    all_senders: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAccumulatorsQueryVariables = {
  filter?: ModelAccumulatorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAccumulatorsQuery = {
  listAccumulators:  {
    __typename: "ModelAccumulatorConnection",
    items:  Array< {
      __typename: "Accumulator",
      id: string,
      all_topics: Array< string > | null,
      all_campaigns: Array< string > | null,
      all_senders: Array< string > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSubQueryVariables = {
  id: string,
};

export type GetSubQuery = {
  getSub:  {
    __typename: "Sub",
    id: string,
    referrer_url: string | null,
    created_at: string | null,
    deleted_at: string | null,
    source: string | null,
    topic_id: string,
    follower_id: string,
    topic:  {
      __typename: "Topic",
      id: string,
      code: string | null,
      name: string | null,
      description: string | null,
      bulletins:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      followers:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    follower:  {
      __typename: "Follower",
      id: string,
      domain: string | null,
      latitude: number | null,
      longitude: number | null,
      created_at: string | null,
      source: string | null,
      topics:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      destination: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSubsQueryVariables = {
  filter?: ModelSubFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubsQuery = {
  listSubs:  {
    __typename: "ModelSubConnection",
    items:  Array< {
      __typename: "Sub",
      id: string,
      referrer_url: string | null,
      created_at: string | null,
      deleted_at: string | null,
      source: string | null,
      topic_id: string,
      follower_id: string,
      topic:  {
        __typename: "Topic",
        id: string,
        code: string | null,
        name: string | null,
        description: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      follower:  {
        __typename: "Follower",
        id: string,
        domain: string | null,
        latitude: number | null,
        longitude: number | null,
        created_at: string | null,
        source: string | null,
        createdAt: string,
        updatedAt: string,
        destination: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type BulletinsByCampaignQueryVariables = {
  campaign_id?: string | null,
  created_at?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBulletinFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BulletinsByCampaignQuery = {
  bulletinsByCampaign:  {
    __typename: "ModelBulletinConnection",
    items:  Array< {
      __typename: "Bulletin",
      id: string,
      campaign_id: string,
      campaign:  {
        __typename: "Campaign",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      sender_email: string,
      sender:  {
        __typename: "Sender",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      created_at: string | null,
      detail:  {
        __typename: "BulletinDetail",
        subject: string | null,
        to_text: string | null,
        delivery_status_name: string | null,
        addresses_count: number | null,
        success_count: number | null,
        failed_count: number | null,
        percent_success: number | null,
        immediate_email_recipients: number | null,
        emails_delivered: number | null,
        emails_failed: number | null,
        percent_emails_delivered: number | null,
        opens_count: number | null,
        percent_opened: number | null,
        nonunique_opens_count: number | null,
        links_count: number | null,
        click_rate: number | null,
        clicks_count: number | null,
        nonunique_clicks_count: number | null,
        digest_email_recipients: number | null,
        unique_click_count: number | null,
        total_click_count: number | null,
        unsubscribes: number | null,
      } | null,
      links:  Array< {
        __typename: "Link",
        id: string,
        link_url: string | null,
        unique_click_count: number | null,
        total_click_count: number | null,
      } | null > | null,
      topics:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type BulletinsBySenderQueryVariables = {
  sender_email?: string | null,
  created_at?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBulletinFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BulletinsBySenderQuery = {
  bulletinsBySender:  {
    __typename: "ModelBulletinConnection",
    items:  Array< {
      __typename: "Bulletin",
      id: string,
      campaign_id: string,
      campaign:  {
        __typename: "Campaign",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      sender_email: string,
      sender:  {
        __typename: "Sender",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      created_at: string | null,
      detail:  {
        __typename: "BulletinDetail",
        subject: string | null,
        to_text: string | null,
        delivery_status_name: string | null,
        addresses_count: number | null,
        success_count: number | null,
        failed_count: number | null,
        percent_success: number | null,
        immediate_email_recipients: number | null,
        emails_delivered: number | null,
        emails_failed: number | null,
        percent_emails_delivered: number | null,
        opens_count: number | null,
        percent_opened: number | null,
        nonunique_opens_count: number | null,
        links_count: number | null,
        click_rate: number | null,
        clicks_count: number | null,
        nonunique_clicks_count: number | null,
        digest_email_recipients: number | null,
        unique_click_count: number | null,
        total_click_count: number | null,
        unsubscribes: number | null,
      } | null,
      links:  Array< {
        __typename: "Link",
        id: string,
        link_url: string | null,
        unique_click_count: number | null,
        total_click_count: number | null,
      } | null > | null,
      topics:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type TopicsByFollowerQueryVariables = {
  follower_id?: string | null,
  topic_id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTopicFollowerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TopicsByFollowerQuery = {
  topicsByFollower:  {
    __typename: "ModelTopicFollowerConnection",
    items:  Array< {
      __typename: "TopicFollower",
      id: string,
      topic_id: string,
      follower_id: string,
      topic:  {
        __typename: "Topic",
        id: string,
        code: string | null,
        name: string | null,
        description: string | null,
        createdAt: string,
        updatedAt: string,
      },
      follower:  {
        __typename: "Follower",
        id: string,
        domain: string | null,
        latitude: number | null,
        longitude: number | null,
        created_at: string | null,
        source: string | null,
        createdAt: string,
        updatedAt: string,
        destination: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type FollowersByTopicQueryVariables = {
  topic_id?: string | null,
  follower_id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTopicFollowerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FollowersByTopicQuery = {
  followersByTopic:  {
    __typename: "ModelTopicFollowerConnection",
    items:  Array< {
      __typename: "TopicFollower",
      id: string,
      topic_id: string,
      follower_id: string,
      topic:  {
        __typename: "Topic",
        id: string,
        code: string | null,
        name: string | null,
        description: string | null,
        createdAt: string,
        updatedAt: string,
      },
      follower:  {
        __typename: "Follower",
        id: string,
        domain: string | null,
        latitude: number | null,
        longitude: number | null,
        created_at: string | null,
        source: string | null,
        createdAt: string,
        updatedAt: string,
        destination: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SubsByTopicQueryVariables = {
  topic_id?: string | null,
  created_at?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSubFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubsByTopicQuery = {
  subsByTopic:  {
    __typename: "ModelSubConnection",
    items:  Array< {
      __typename: "Sub",
      id: string,
      referrer_url: string | null,
      created_at: string | null,
      deleted_at: string | null,
      source: string | null,
      topic_id: string,
      follower_id: string,
      topic:  {
        __typename: "Topic",
        id: string,
        code: string | null,
        name: string | null,
        description: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      follower:  {
        __typename: "Follower",
        id: string,
        domain: string | null,
        latitude: number | null,
        longitude: number | null,
        created_at: string | null,
        source: string | null,
        createdAt: string,
        updatedAt: string,
        destination: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SubsByFollowerQueryVariables = {
  follower_id?: string | null,
  created_at?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSubFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubsByFollowerQuery = {
  subsByFollower:  {
    __typename: "ModelSubConnection",
    items:  Array< {
      __typename: "Sub",
      id: string,
      referrer_url: string | null,
      created_at: string | null,
      deleted_at: string | null,
      source: string | null,
      topic_id: string,
      follower_id: string,
      topic:  {
        __typename: "Topic",
        id: string,
        code: string | null,
        name: string | null,
        description: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      follower:  {
        __typename: "Follower",
        id: string,
        domain: string | null,
        latitude: number | null,
        longitude: number | null,
        created_at: string | null,
        source: string | null,
        createdAt: string,
        updatedAt: string,
        destination: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFollowerQueryVariables = {
  id: string,
};

export type GetFollowerQuery = {
  getFollower:  {
    __typename: "Follower",
    id: string,
    domain: string | null,
    latitude: number | null,
    longitude: number | null,
    created_at: string | null,
    source: string | null,
    topics:  {
      __typename: "ModelTopicFollowerConnection",
      items:  Array< {
        __typename: "TopicFollower",
        id: string,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    subscriptions:  {
      __typename: "ModelSubConnection",
      items:  Array< {
        __typename: "Sub",
        id: string,
        referrer_url: string | null,
        created_at: string | null,
        deleted_at: string | null,
        source: string | null,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    destination: string | null,
  } | null,
};

export type ListFollowersQueryVariables = {
  filter?: ModelFollowerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFollowersQuery = {
  listFollowers:  {
    __typename: "ModelFollowerConnection",
    items:  Array< {
      __typename: "Follower",
      id: string,
      domain: string | null,
      latitude: number | null,
      longitude: number | null,
      created_at: string | null,
      source: string | null,
      topics:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      destination: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateCampaignSubscription = {
  onCreateCampaign:  {
    __typename: "Campaign",
    id: string,
    bulletins:  {
      __typename: "ModelBulletinConnection",
      items:  Array< {
        __typename: "Bulletin",
        id: string,
        campaign_id: string,
        sender_email: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCampaignSubscription = {
  onUpdateCampaign:  {
    __typename: "Campaign",
    id: string,
    bulletins:  {
      __typename: "ModelBulletinConnection",
      items:  Array< {
        __typename: "Bulletin",
        id: string,
        campaign_id: string,
        sender_email: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCampaignSubscription = {
  onDeleteCampaign:  {
    __typename: "Campaign",
    id: string,
    bulletins:  {
      __typename: "ModelBulletinConnection",
      items:  Array< {
        __typename: "Bulletin",
        id: string,
        campaign_id: string,
        sender_email: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSenderSubscription = {
  onCreateSender:  {
    __typename: "Sender",
    id: string,
    bulletins:  {
      __typename: "ModelBulletinConnection",
      items:  Array< {
        __typename: "Bulletin",
        id: string,
        campaign_id: string,
        sender_email: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSenderSubscription = {
  onUpdateSender:  {
    __typename: "Sender",
    id: string,
    bulletins:  {
      __typename: "ModelBulletinConnection",
      items:  Array< {
        __typename: "Bulletin",
        id: string,
        campaign_id: string,
        sender_email: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSenderSubscription = {
  onDeleteSender:  {
    __typename: "Sender",
    id: string,
    bulletins:  {
      __typename: "ModelBulletinConnection",
      items:  Array< {
        __typename: "Bulletin",
        id: string,
        campaign_id: string,
        sender_email: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTopicSubscription = {
  onCreateTopic:  {
    __typename: "Topic",
    id: string,
    code: string | null,
    name: string | null,
    description: string | null,
    bulletins:  {
      __typename: "ModelBulletinTopicConnection",
      items:  Array< {
        __typename: "BulletinTopic",
        id: string,
        bulletin_id: string,
        topic_id: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    followers:  {
      __typename: "ModelTopicFollowerConnection",
      items:  Array< {
        __typename: "TopicFollower",
        id: string,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    subscriptions:  {
      __typename: "ModelSubConnection",
      items:  Array< {
        __typename: "Sub",
        id: string,
        referrer_url: string | null,
        created_at: string | null,
        deleted_at: string | null,
        source: string | null,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTopicSubscription = {
  onUpdateTopic:  {
    __typename: "Topic",
    id: string,
    code: string | null,
    name: string | null,
    description: string | null,
    bulletins:  {
      __typename: "ModelBulletinTopicConnection",
      items:  Array< {
        __typename: "BulletinTopic",
        id: string,
        bulletin_id: string,
        topic_id: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    followers:  {
      __typename: "ModelTopicFollowerConnection",
      items:  Array< {
        __typename: "TopicFollower",
        id: string,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    subscriptions:  {
      __typename: "ModelSubConnection",
      items:  Array< {
        __typename: "Sub",
        id: string,
        referrer_url: string | null,
        created_at: string | null,
        deleted_at: string | null,
        source: string | null,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTopicSubscription = {
  onDeleteTopic:  {
    __typename: "Topic",
    id: string,
    code: string | null,
    name: string | null,
    description: string | null,
    bulletins:  {
      __typename: "ModelBulletinTopicConnection",
      items:  Array< {
        __typename: "BulletinTopic",
        id: string,
        bulletin_id: string,
        topic_id: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    followers:  {
      __typename: "ModelTopicFollowerConnection",
      items:  Array< {
        __typename: "TopicFollower",
        id: string,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    subscriptions:  {
      __typename: "ModelSubConnection",
      items:  Array< {
        __typename: "Sub",
        id: string,
        referrer_url: string | null,
        created_at: string | null,
        deleted_at: string | null,
        source: string | null,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBulletinSubscription = {
  onCreateBulletin:  {
    __typename: "Bulletin",
    id: string,
    campaign_id: string,
    campaign:  {
      __typename: "Campaign",
      id: string,
      bulletins:  {
        __typename: "ModelBulletinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sender_email: string,
    sender:  {
      __typename: "Sender",
      id: string,
      bulletins:  {
        __typename: "ModelBulletinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    created_at: string | null,
    detail:  {
      __typename: "BulletinDetail",
      subject: string | null,
      to_text: string | null,
      delivery_status_name: string | null,
      addresses_count: number | null,
      success_count: number | null,
      failed_count: number | null,
      percent_success: number | null,
      immediate_email_recipients: number | null,
      emails_delivered: number | null,
      emails_failed: number | null,
      percent_emails_delivered: number | null,
      opens_count: number | null,
      percent_opened: number | null,
      nonunique_opens_count: number | null,
      links_count: number | null,
      click_rate: number | null,
      clicks_count: number | null,
      nonunique_clicks_count: number | null,
      digest_email_recipients: number | null,
      unique_click_count: number | null,
      total_click_count: number | null,
      unsubscribes: number | null,
    } | null,
    links:  Array< {
      __typename: "Link",
      id: string,
      link_url: string | null,
      unique_click_count: number | null,
      total_click_count: number | null,
    } | null > | null,
    topics:  {
      __typename: "ModelBulletinTopicConnection",
      items:  Array< {
        __typename: "BulletinTopic",
        id: string,
        bulletin_id: string,
        topic_id: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBulletinSubscription = {
  onUpdateBulletin:  {
    __typename: "Bulletin",
    id: string,
    campaign_id: string,
    campaign:  {
      __typename: "Campaign",
      id: string,
      bulletins:  {
        __typename: "ModelBulletinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sender_email: string,
    sender:  {
      __typename: "Sender",
      id: string,
      bulletins:  {
        __typename: "ModelBulletinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    created_at: string | null,
    detail:  {
      __typename: "BulletinDetail",
      subject: string | null,
      to_text: string | null,
      delivery_status_name: string | null,
      addresses_count: number | null,
      success_count: number | null,
      failed_count: number | null,
      percent_success: number | null,
      immediate_email_recipients: number | null,
      emails_delivered: number | null,
      emails_failed: number | null,
      percent_emails_delivered: number | null,
      opens_count: number | null,
      percent_opened: number | null,
      nonunique_opens_count: number | null,
      links_count: number | null,
      click_rate: number | null,
      clicks_count: number | null,
      nonunique_clicks_count: number | null,
      digest_email_recipients: number | null,
      unique_click_count: number | null,
      total_click_count: number | null,
      unsubscribes: number | null,
    } | null,
    links:  Array< {
      __typename: "Link",
      id: string,
      link_url: string | null,
      unique_click_count: number | null,
      total_click_count: number | null,
    } | null > | null,
    topics:  {
      __typename: "ModelBulletinTopicConnection",
      items:  Array< {
        __typename: "BulletinTopic",
        id: string,
        bulletin_id: string,
        topic_id: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBulletinSubscription = {
  onDeleteBulletin:  {
    __typename: "Bulletin",
    id: string,
    campaign_id: string,
    campaign:  {
      __typename: "Campaign",
      id: string,
      bulletins:  {
        __typename: "ModelBulletinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    sender_email: string,
    sender:  {
      __typename: "Sender",
      id: string,
      bulletins:  {
        __typename: "ModelBulletinConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    created_at: string | null,
    detail:  {
      __typename: "BulletinDetail",
      subject: string | null,
      to_text: string | null,
      delivery_status_name: string | null,
      addresses_count: number | null,
      success_count: number | null,
      failed_count: number | null,
      percent_success: number | null,
      immediate_email_recipients: number | null,
      emails_delivered: number | null,
      emails_failed: number | null,
      percent_emails_delivered: number | null,
      opens_count: number | null,
      percent_opened: number | null,
      nonunique_opens_count: number | null,
      links_count: number | null,
      click_rate: number | null,
      clicks_count: number | null,
      nonunique_clicks_count: number | null,
      digest_email_recipients: number | null,
      unique_click_count: number | null,
      total_click_count: number | null,
      unsubscribes: number | null,
    } | null,
    links:  Array< {
      __typename: "Link",
      id: string,
      link_url: string | null,
      unique_click_count: number | null,
      total_click_count: number | null,
    } | null > | null,
    topics:  {
      __typename: "ModelBulletinTopicConnection",
      items:  Array< {
        __typename: "BulletinTopic",
        id: string,
        bulletin_id: string,
        topic_id: string,
        created_at: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBulletinTopicSubscription = {
  onCreateBulletinTopic:  {
    __typename: "BulletinTopic",
    id: string,
    bulletin_id: string,
    topic_id: string,
    created_at: string | null,
    to_date:  {
      __typename: "SubsReport",
      total_subscriptions: number | null,
      new_subscriptions: number | null,
      deleted_subscriptions: number | null,
      bulletins_sent: number | null,
      allocated:  {
        __typename: "Allocation",
        direct: number | null,
        overlay: number | null,
        signup: number | null,
        upload: number | null,
        other: number | null,
        all_network: number | null,
      } | null,
    } | null,
    this_period:  {
      __typename: "SubsReport",
      total_subscriptions: number | null,
      new_subscriptions: number | null,
      deleted_subscriptions: number | null,
      bulletins_sent: number | null,
      allocated:  {
        __typename: "Allocation",
        direct: number | null,
        overlay: number | null,
        signup: number | null,
        upload: number | null,
        other: number | null,
        all_network: number | null,
      } | null,
    } | null,
    bulletin:  {
      __typename: "Bulletin",
      id: string,
      campaign_id: string,
      campaign:  {
        __typename: "Campaign",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      sender_email: string,
      sender:  {
        __typename: "Sender",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      created_at: string | null,
      detail:  {
        __typename: "BulletinDetail",
        subject: string | null,
        to_text: string | null,
        delivery_status_name: string | null,
        addresses_count: number | null,
        success_count: number | null,
        failed_count: number | null,
        percent_success: number | null,
        immediate_email_recipients: number | null,
        emails_delivered: number | null,
        emails_failed: number | null,
        percent_emails_delivered: number | null,
        opens_count: number | null,
        percent_opened: number | null,
        nonunique_opens_count: number | null,
        links_count: number | null,
        click_rate: number | null,
        clicks_count: number | null,
        nonunique_clicks_count: number | null,
        digest_email_recipients: number | null,
        unique_click_count: number | null,
        total_click_count: number | null,
        unsubscribes: number | null,
      } | null,
      links:  Array< {
        __typename: "Link",
        id: string,
        link_url: string | null,
        unique_click_count: number | null,
        total_click_count: number | null,
      } | null > | null,
      topics:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    topic:  {
      __typename: "Topic",
      id: string,
      code: string | null,
      name: string | null,
      description: string | null,
      bulletins:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      followers:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBulletinTopicSubscription = {
  onUpdateBulletinTopic:  {
    __typename: "BulletinTopic",
    id: string,
    bulletin_id: string,
    topic_id: string,
    created_at: string | null,
    to_date:  {
      __typename: "SubsReport",
      total_subscriptions: number | null,
      new_subscriptions: number | null,
      deleted_subscriptions: number | null,
      bulletins_sent: number | null,
      allocated:  {
        __typename: "Allocation",
        direct: number | null,
        overlay: number | null,
        signup: number | null,
        upload: number | null,
        other: number | null,
        all_network: number | null,
      } | null,
    } | null,
    this_period:  {
      __typename: "SubsReport",
      total_subscriptions: number | null,
      new_subscriptions: number | null,
      deleted_subscriptions: number | null,
      bulletins_sent: number | null,
      allocated:  {
        __typename: "Allocation",
        direct: number | null,
        overlay: number | null,
        signup: number | null,
        upload: number | null,
        other: number | null,
        all_network: number | null,
      } | null,
    } | null,
    bulletin:  {
      __typename: "Bulletin",
      id: string,
      campaign_id: string,
      campaign:  {
        __typename: "Campaign",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      sender_email: string,
      sender:  {
        __typename: "Sender",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      created_at: string | null,
      detail:  {
        __typename: "BulletinDetail",
        subject: string | null,
        to_text: string | null,
        delivery_status_name: string | null,
        addresses_count: number | null,
        success_count: number | null,
        failed_count: number | null,
        percent_success: number | null,
        immediate_email_recipients: number | null,
        emails_delivered: number | null,
        emails_failed: number | null,
        percent_emails_delivered: number | null,
        opens_count: number | null,
        percent_opened: number | null,
        nonunique_opens_count: number | null,
        links_count: number | null,
        click_rate: number | null,
        clicks_count: number | null,
        nonunique_clicks_count: number | null,
        digest_email_recipients: number | null,
        unique_click_count: number | null,
        total_click_count: number | null,
        unsubscribes: number | null,
      } | null,
      links:  Array< {
        __typename: "Link",
        id: string,
        link_url: string | null,
        unique_click_count: number | null,
        total_click_count: number | null,
      } | null > | null,
      topics:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    topic:  {
      __typename: "Topic",
      id: string,
      code: string | null,
      name: string | null,
      description: string | null,
      bulletins:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      followers:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBulletinTopicSubscription = {
  onDeleteBulletinTopic:  {
    __typename: "BulletinTopic",
    id: string,
    bulletin_id: string,
    topic_id: string,
    created_at: string | null,
    to_date:  {
      __typename: "SubsReport",
      total_subscriptions: number | null,
      new_subscriptions: number | null,
      deleted_subscriptions: number | null,
      bulletins_sent: number | null,
      allocated:  {
        __typename: "Allocation",
        direct: number | null,
        overlay: number | null,
        signup: number | null,
        upload: number | null,
        other: number | null,
        all_network: number | null,
      } | null,
    } | null,
    this_period:  {
      __typename: "SubsReport",
      total_subscriptions: number | null,
      new_subscriptions: number | null,
      deleted_subscriptions: number | null,
      bulletins_sent: number | null,
      allocated:  {
        __typename: "Allocation",
        direct: number | null,
        overlay: number | null,
        signup: number | null,
        upload: number | null,
        other: number | null,
        all_network: number | null,
      } | null,
    } | null,
    bulletin:  {
      __typename: "Bulletin",
      id: string,
      campaign_id: string,
      campaign:  {
        __typename: "Campaign",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      sender_email: string,
      sender:  {
        __typename: "Sender",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      created_at: string | null,
      detail:  {
        __typename: "BulletinDetail",
        subject: string | null,
        to_text: string | null,
        delivery_status_name: string | null,
        addresses_count: number | null,
        success_count: number | null,
        failed_count: number | null,
        percent_success: number | null,
        immediate_email_recipients: number | null,
        emails_delivered: number | null,
        emails_failed: number | null,
        percent_emails_delivered: number | null,
        opens_count: number | null,
        percent_opened: number | null,
        nonunique_opens_count: number | null,
        links_count: number | null,
        click_rate: number | null,
        clicks_count: number | null,
        nonunique_clicks_count: number | null,
        digest_email_recipients: number | null,
        unique_click_count: number | null,
        total_click_count: number | null,
        unsubscribes: number | null,
      } | null,
      links:  Array< {
        __typename: "Link",
        id: string,
        link_url: string | null,
        unique_click_count: number | null,
        total_click_count: number | null,
      } | null > | null,
      topics:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    topic:  {
      __typename: "Topic",
      id: string,
      code: string | null,
      name: string | null,
      description: string | null,
      bulletins:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      followers:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSubsSummarySubscription = {
  onCreateSubsSummary:  {
    __typename: "SubsSummary",
    id: string,
    direct_subscribers: number | null,
    direct_subscriptions: number | null,
    overlay_subscribers: number | null,
    overlay_subscriptions: number | null,
    signup_subscribers: number | null,
    signup_subscriptions: number | null,
    upload_subscribers: number | null,
    upload_subscriptions: number | null,
    other_subscribers: number | null,
    other_subscriptions: number | null,
    total_subscribers: number | null,
    total_subscriptions: number | null,
    deleted_subscribers: number | null,
    deleted_subscriptions: number | null,
    all_network_subscribers: number | null,
    all_network_subscriptions: number | null,
    net_subscribers: number | null,
    net_subscriptions: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSubsSummarySubscription = {
  onUpdateSubsSummary:  {
    __typename: "SubsSummary",
    id: string,
    direct_subscribers: number | null,
    direct_subscriptions: number | null,
    overlay_subscribers: number | null,
    overlay_subscriptions: number | null,
    signup_subscribers: number | null,
    signup_subscriptions: number | null,
    upload_subscribers: number | null,
    upload_subscriptions: number | null,
    other_subscribers: number | null,
    other_subscriptions: number | null,
    total_subscribers: number | null,
    total_subscriptions: number | null,
    deleted_subscribers: number | null,
    deleted_subscriptions: number | null,
    all_network_subscribers: number | null,
    all_network_subscriptions: number | null,
    net_subscribers: number | null,
    net_subscriptions: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSubsSummarySubscription = {
  onDeleteSubsSummary:  {
    __typename: "SubsSummary",
    id: string,
    direct_subscribers: number | null,
    direct_subscriptions: number | null,
    overlay_subscribers: number | null,
    overlay_subscriptions: number | null,
    signup_subscribers: number | null,
    signup_subscriptions: number | null,
    upload_subscribers: number | null,
    upload_subscriptions: number | null,
    other_subscribers: number | null,
    other_subscriptions: number | null,
    total_subscribers: number | null,
    total_subscriptions: number | null,
    deleted_subscribers: number | null,
    deleted_subscriptions: number | null,
    all_network_subscribers: number | null,
    all_network_subscriptions: number | null,
    net_subscribers: number | null,
    net_subscriptions: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAccumulatorSubscription = {
  onCreateAccumulator:  {
    __typename: "Accumulator",
    id: string,
    all_topics: Array< string > | null,
    all_campaigns: Array< string > | null,
    all_senders: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAccumulatorSubscription = {
  onUpdateAccumulator:  {
    __typename: "Accumulator",
    id: string,
    all_topics: Array< string > | null,
    all_campaigns: Array< string > | null,
    all_senders: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAccumulatorSubscription = {
  onDeleteAccumulator:  {
    __typename: "Accumulator",
    id: string,
    all_topics: Array< string > | null,
    all_campaigns: Array< string > | null,
    all_senders: Array< string > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTopicFollowerSubscription = {
  onCreateTopicFollower:  {
    __typename: "TopicFollower",
    id: string,
    topic_id: string,
    follower_id: string,
    topic:  {
      __typename: "Topic",
      id: string,
      code: string | null,
      name: string | null,
      description: string | null,
      bulletins:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      followers:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    follower:  {
      __typename: "Follower",
      id: string,
      domain: string | null,
      latitude: number | null,
      longitude: number | null,
      created_at: string | null,
      source: string | null,
      topics:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      destination: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTopicFollowerSubscription = {
  onUpdateTopicFollower:  {
    __typename: "TopicFollower",
    id: string,
    topic_id: string,
    follower_id: string,
    topic:  {
      __typename: "Topic",
      id: string,
      code: string | null,
      name: string | null,
      description: string | null,
      bulletins:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      followers:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    follower:  {
      __typename: "Follower",
      id: string,
      domain: string | null,
      latitude: number | null,
      longitude: number | null,
      created_at: string | null,
      source: string | null,
      topics:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      destination: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTopicFollowerSubscription = {
  onDeleteTopicFollower:  {
    __typename: "TopicFollower",
    id: string,
    topic_id: string,
    follower_id: string,
    topic:  {
      __typename: "Topic",
      id: string,
      code: string | null,
      name: string | null,
      description: string | null,
      bulletins:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      followers:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    follower:  {
      __typename: "Follower",
      id: string,
      domain: string | null,
      latitude: number | null,
      longitude: number | null,
      created_at: string | null,
      source: string | null,
      topics:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      destination: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFollowerSubscription = {
  onCreateFollower:  {
    __typename: "Follower",
    id: string,
    domain: string | null,
    latitude: number | null,
    longitude: number | null,
    created_at: string | null,
    source: string | null,
    topics:  {
      __typename: "ModelTopicFollowerConnection",
      items:  Array< {
        __typename: "TopicFollower",
        id: string,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    subscriptions:  {
      __typename: "ModelSubConnection",
      items:  Array< {
        __typename: "Sub",
        id: string,
        referrer_url: string | null,
        created_at: string | null,
        deleted_at: string | null,
        source: string | null,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    destination: string | null,
  } | null,
};

export type OnUpdateFollowerSubscription = {
  onUpdateFollower:  {
    __typename: "Follower",
    id: string,
    domain: string | null,
    latitude: number | null,
    longitude: number | null,
    created_at: string | null,
    source: string | null,
    topics:  {
      __typename: "ModelTopicFollowerConnection",
      items:  Array< {
        __typename: "TopicFollower",
        id: string,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    subscriptions:  {
      __typename: "ModelSubConnection",
      items:  Array< {
        __typename: "Sub",
        id: string,
        referrer_url: string | null,
        created_at: string | null,
        deleted_at: string | null,
        source: string | null,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    destination: string | null,
  } | null,
};

export type OnDeleteFollowerSubscription = {
  onDeleteFollower:  {
    __typename: "Follower",
    id: string,
    domain: string | null,
    latitude: number | null,
    longitude: number | null,
    created_at: string | null,
    source: string | null,
    topics:  {
      __typename: "ModelTopicFollowerConnection",
      items:  Array< {
        __typename: "TopicFollower",
        id: string,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    subscriptions:  {
      __typename: "ModelSubConnection",
      items:  Array< {
        __typename: "Sub",
        id: string,
        referrer_url: string | null,
        created_at: string | null,
        deleted_at: string | null,
        source: string | null,
        topic_id: string,
        follower_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    destination: string | null,
  } | null,
};

export type OnCreateSubSubscription = {
  onCreateSub:  {
    __typename: "Sub",
    id: string,
    referrer_url: string | null,
    created_at: string | null,
    deleted_at: string | null,
    source: string | null,
    topic_id: string,
    follower_id: string,
    topic:  {
      __typename: "Topic",
      id: string,
      code: string | null,
      name: string | null,
      description: string | null,
      bulletins:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      followers:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    follower:  {
      __typename: "Follower",
      id: string,
      domain: string | null,
      latitude: number | null,
      longitude: number | null,
      created_at: string | null,
      source: string | null,
      topics:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      destination: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSubSubscription = {
  onUpdateSub:  {
    __typename: "Sub",
    id: string,
    referrer_url: string | null,
    created_at: string | null,
    deleted_at: string | null,
    source: string | null,
    topic_id: string,
    follower_id: string,
    topic:  {
      __typename: "Topic",
      id: string,
      code: string | null,
      name: string | null,
      description: string | null,
      bulletins:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      followers:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    follower:  {
      __typename: "Follower",
      id: string,
      domain: string | null,
      latitude: number | null,
      longitude: number | null,
      created_at: string | null,
      source: string | null,
      topics:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      destination: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSubSubscription = {
  onDeleteSub:  {
    __typename: "Sub",
    id: string,
    referrer_url: string | null,
    created_at: string | null,
    deleted_at: string | null,
    source: string | null,
    topic_id: string,
    follower_id: string,
    topic:  {
      __typename: "Topic",
      id: string,
      code: string | null,
      name: string | null,
      description: string | null,
      bulletins:  {
        __typename: "ModelBulletinTopicConnection",
        nextToken: string | null,
      } | null,
      followers:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    follower:  {
      __typename: "Follower",
      id: string,
      domain: string | null,
      latitude: number | null,
      longitude: number | null,
      created_at: string | null,
      source: string | null,
      topics:  {
        __typename: "ModelTopicFollowerConnection",
        nextToken: string | null,
      } | null,
      subscriptions:  {
        __typename: "ModelSubConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      destination: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

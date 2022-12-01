/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCampaign = /* GraphQL */ `
  mutation CreateCampaign(
    $input: CreateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    createCampaign(input: $input, condition: $condition) {
      id
      bulletins {
        items {
          id
          campaign_id
          sender_email
          created_at
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCampaign = /* GraphQL */ `
  mutation UpdateCampaign(
    $input: UpdateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    updateCampaign(input: $input, condition: $condition) {
      id
      bulletins {
        items {
          id
          campaign_id
          sender_email
          created_at
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCampaign = /* GraphQL */ `
  mutation DeleteCampaign(
    $input: DeleteCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    deleteCampaign(input: $input, condition: $condition) {
      id
      bulletins {
        items {
          id
          campaign_id
          sender_email
          created_at
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSender = /* GraphQL */ `
  mutation CreateSender(
    $input: CreateSenderInput!
    $condition: ModelSenderConditionInput
  ) {
    createSender(input: $input, condition: $condition) {
      id
      bulletins {
        items {
          id
          campaign_id
          sender_email
          created_at
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSender = /* GraphQL */ `
  mutation UpdateSender(
    $input: UpdateSenderInput!
    $condition: ModelSenderConditionInput
  ) {
    updateSender(input: $input, condition: $condition) {
      id
      bulletins {
        items {
          id
          campaign_id
          sender_email
          created_at
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSender = /* GraphQL */ `
  mutation DeleteSender(
    $input: DeleteSenderInput!
    $condition: ModelSenderConditionInput
  ) {
    deleteSender(input: $input, condition: $condition) {
      id
      bulletins {
        items {
          id
          campaign_id
          sender_email
          created_at
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTopic = /* GraphQL */ `
  mutation CreateTopic(
    $input: CreateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    createTopic(input: $input, condition: $condition) {
      id
      code
      name
      description
      bulletins {
        items {
          id
          bulletin_id
          topic_id
          created_at
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          topic_id
          follower_id
          createdAt
          updatedAt
        }
        nextToken
      }
      subscriptions {
        items {
          id
          referrer_url
          created_at
          deleted_at
          source
          topic_id
          follower_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
      id
      code
      name
      description
      bulletins {
        items {
          id
          bulletin_id
          topic_id
          created_at
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          topic_id
          follower_id
          createdAt
          updatedAt
        }
        nextToken
      }
      subscriptions {
        items {
          id
          referrer_url
          created_at
          deleted_at
          source
          topic_id
          follower_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
      id
      code
      name
      description
      bulletins {
        items {
          id
          bulletin_id
          topic_id
          created_at
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          topic_id
          follower_id
          createdAt
          updatedAt
        }
        nextToken
      }
      subscriptions {
        items {
          id
          referrer_url
          created_at
          deleted_at
          source
          topic_id
          follower_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createBulletin = /* GraphQL */ `
  mutation CreateBulletin(
    $input: CreateBulletinInput!
    $condition: ModelBulletinConditionInput
  ) {
    createBulletin(input: $input, condition: $condition) {
      id
      campaign_id
      campaign {
        id
        bulletins {
          nextToken
        }
        createdAt
        updatedAt
      }
      sender_email
      sender {
        id
        bulletins {
          nextToken
        }
        createdAt
        updatedAt
      }
      created_at
      detail {
        subject
        to_text
        delivery_status_name
        addresses_count
        success_count
        failed_count
        percent_success
        immediate_email_recipients
        emails_delivered
        emails_failed
        percent_emails_delivered
        opens_count
        percent_opened
        nonunique_opens_count
        links_count
        click_rate
        clicks_count
        nonunique_clicks_count
        digest_email_recipients
        unique_click_count
        total_click_count
        unsubscribes
      }
      links {
        id
        link_url
        unique_click_count
        total_click_count
      }
      topics {
        items {
          id
          bulletin_id
          topic_id
          created_at
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateBulletin = /* GraphQL */ `
  mutation UpdateBulletin(
    $input: UpdateBulletinInput!
    $condition: ModelBulletinConditionInput
  ) {
    updateBulletin(input: $input, condition: $condition) {
      id
      campaign_id
      campaign {
        id
        bulletins {
          nextToken
        }
        createdAt
        updatedAt
      }
      sender_email
      sender {
        id
        bulletins {
          nextToken
        }
        createdAt
        updatedAt
      }
      created_at
      detail {
        subject
        to_text
        delivery_status_name
        addresses_count
        success_count
        failed_count
        percent_success
        immediate_email_recipients
        emails_delivered
        emails_failed
        percent_emails_delivered
        opens_count
        percent_opened
        nonunique_opens_count
        links_count
        click_rate
        clicks_count
        nonunique_clicks_count
        digest_email_recipients
        unique_click_count
        total_click_count
        unsubscribes
      }
      links {
        id
        link_url
        unique_click_count
        total_click_count
      }
      topics {
        items {
          id
          bulletin_id
          topic_id
          created_at
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteBulletin = /* GraphQL */ `
  mutation DeleteBulletin(
    $input: DeleteBulletinInput!
    $condition: ModelBulletinConditionInput
  ) {
    deleteBulletin(input: $input, condition: $condition) {
      id
      campaign_id
      campaign {
        id
        bulletins {
          nextToken
        }
        createdAt
        updatedAt
      }
      sender_email
      sender {
        id
        bulletins {
          nextToken
        }
        createdAt
        updatedAt
      }
      created_at
      detail {
        subject
        to_text
        delivery_status_name
        addresses_count
        success_count
        failed_count
        percent_success
        immediate_email_recipients
        emails_delivered
        emails_failed
        percent_emails_delivered
        opens_count
        percent_opened
        nonunique_opens_count
        links_count
        click_rate
        clicks_count
        nonunique_clicks_count
        digest_email_recipients
        unique_click_count
        total_click_count
        unsubscribes
      }
      links {
        id
        link_url
        unique_click_count
        total_click_count
      }
      topics {
        items {
          id
          bulletin_id
          topic_id
          created_at
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createBulletinTopic = /* GraphQL */ `
  mutation CreateBulletinTopic(
    $input: CreateBulletinTopicInput!
    $condition: ModelBulletinTopicConditionInput
  ) {
    createBulletinTopic(input: $input, condition: $condition) {
      id
      bulletin_id
      topic_id
      created_at
      to_date {
        total_subscriptions
        new_subscriptions
        deleted_subscriptions
        bulletins_sent
        allocated {
          direct
          overlay
          signup
          upload
          other
          all_network
        }
      }
      this_period {
        total_subscriptions
        new_subscriptions
        deleted_subscriptions
        bulletins_sent
        allocated {
          direct
          overlay
          signup
          upload
          other
          all_network
        }
      }
      bulletin {
        id
        campaign_id
        campaign {
          id
          createdAt
          updatedAt
        }
        sender_email
        sender {
          id
          createdAt
          updatedAt
        }
        created_at
        detail {
          subject
          to_text
          delivery_status_name
          addresses_count
          success_count
          failed_count
          percent_success
          immediate_email_recipients
          emails_delivered
          emails_failed
          percent_emails_delivered
          opens_count
          percent_opened
          nonunique_opens_count
          links_count
          click_rate
          clicks_count
          nonunique_clicks_count
          digest_email_recipients
          unique_click_count
          total_click_count
          unsubscribes
        }
        links {
          id
          link_url
          unique_click_count
          total_click_count
        }
        topics {
          nextToken
        }
        createdAt
        updatedAt
      }
      topic {
        id
        code
        name
        description
        bulletins {
          nextToken
        }
        followers {
          nextToken
        }
        subscriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateBulletinTopic = /* GraphQL */ `
  mutation UpdateBulletinTopic(
    $input: UpdateBulletinTopicInput!
    $condition: ModelBulletinTopicConditionInput
  ) {
    updateBulletinTopic(input: $input, condition: $condition) {
      id
      bulletin_id
      topic_id
      created_at
      to_date {
        total_subscriptions
        new_subscriptions
        deleted_subscriptions
        bulletins_sent
        allocated {
          direct
          overlay
          signup
          upload
          other
          all_network
        }
      }
      this_period {
        total_subscriptions
        new_subscriptions
        deleted_subscriptions
        bulletins_sent
        allocated {
          direct
          overlay
          signup
          upload
          other
          all_network
        }
      }
      bulletin {
        id
        campaign_id
        campaign {
          id
          createdAt
          updatedAt
        }
        sender_email
        sender {
          id
          createdAt
          updatedAt
        }
        created_at
        detail {
          subject
          to_text
          delivery_status_name
          addresses_count
          success_count
          failed_count
          percent_success
          immediate_email_recipients
          emails_delivered
          emails_failed
          percent_emails_delivered
          opens_count
          percent_opened
          nonunique_opens_count
          links_count
          click_rate
          clicks_count
          nonunique_clicks_count
          digest_email_recipients
          unique_click_count
          total_click_count
          unsubscribes
        }
        links {
          id
          link_url
          unique_click_count
          total_click_count
        }
        topics {
          nextToken
        }
        createdAt
        updatedAt
      }
      topic {
        id
        code
        name
        description
        bulletins {
          nextToken
        }
        followers {
          nextToken
        }
        subscriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteBulletinTopic = /* GraphQL */ `
  mutation DeleteBulletinTopic(
    $input: DeleteBulletinTopicInput!
    $condition: ModelBulletinTopicConditionInput
  ) {
    deleteBulletinTopic(input: $input, condition: $condition) {
      id
      bulletin_id
      topic_id
      created_at
      to_date {
        total_subscriptions
        new_subscriptions
        deleted_subscriptions
        bulletins_sent
        allocated {
          direct
          overlay
          signup
          upload
          other
          all_network
        }
      }
      this_period {
        total_subscriptions
        new_subscriptions
        deleted_subscriptions
        bulletins_sent
        allocated {
          direct
          overlay
          signup
          upload
          other
          all_network
        }
      }
      bulletin {
        id
        campaign_id
        campaign {
          id
          createdAt
          updatedAt
        }
        sender_email
        sender {
          id
          createdAt
          updatedAt
        }
        created_at
        detail {
          subject
          to_text
          delivery_status_name
          addresses_count
          success_count
          failed_count
          percent_success
          immediate_email_recipients
          emails_delivered
          emails_failed
          percent_emails_delivered
          opens_count
          percent_opened
          nonunique_opens_count
          links_count
          click_rate
          clicks_count
          nonunique_clicks_count
          digest_email_recipients
          unique_click_count
          total_click_count
          unsubscribes
        }
        links {
          id
          link_url
          unique_click_count
          total_click_count
        }
        topics {
          nextToken
        }
        createdAt
        updatedAt
      }
      topic {
        id
        code
        name
        description
        bulletins {
          nextToken
        }
        followers {
          nextToken
        }
        subscriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSubsSummary = /* GraphQL */ `
  mutation CreateSubsSummary(
    $input: CreateSubsSummaryInput!
    $condition: ModelSubsSummaryConditionInput
  ) {
    createSubsSummary(input: $input, condition: $condition) {
      id
      direct_subscribers
      direct_subscriptions
      overlay_subscribers
      overlay_subscriptions
      signup_subscribers
      signup_subscriptions
      upload_subscribers
      upload_subscriptions
      other_subscribers
      other_subscriptions
      total_subscribers
      total_subscriptions
      deleted_subscribers
      deleted_subscriptions
      all_network_subscribers
      all_network_subscriptions
      net_subscribers
      net_subscriptions
      createdAt
      updatedAt
    }
  }
`;
export const updateSubsSummary = /* GraphQL */ `
  mutation UpdateSubsSummary(
    $input: UpdateSubsSummaryInput!
    $condition: ModelSubsSummaryConditionInput
  ) {
    updateSubsSummary(input: $input, condition: $condition) {
      id
      direct_subscribers
      direct_subscriptions
      overlay_subscribers
      overlay_subscriptions
      signup_subscribers
      signup_subscriptions
      upload_subscribers
      upload_subscriptions
      other_subscribers
      other_subscriptions
      total_subscribers
      total_subscriptions
      deleted_subscribers
      deleted_subscriptions
      all_network_subscribers
      all_network_subscriptions
      net_subscribers
      net_subscriptions
      createdAt
      updatedAt
    }
  }
`;
export const deleteSubsSummary = /* GraphQL */ `
  mutation DeleteSubsSummary(
    $input: DeleteSubsSummaryInput!
    $condition: ModelSubsSummaryConditionInput
  ) {
    deleteSubsSummary(input: $input, condition: $condition) {
      id
      direct_subscribers
      direct_subscriptions
      overlay_subscribers
      overlay_subscriptions
      signup_subscribers
      signup_subscriptions
      upload_subscribers
      upload_subscriptions
      other_subscribers
      other_subscriptions
      total_subscribers
      total_subscriptions
      deleted_subscribers
      deleted_subscriptions
      all_network_subscribers
      all_network_subscriptions
      net_subscribers
      net_subscriptions
      createdAt
      updatedAt
    }
  }
`;
export const createAccumulator = /* GraphQL */ `
  mutation CreateAccumulator(
    $input: CreateAccumulatorInput!
    $condition: ModelAccumulatorConditionInput
  ) {
    createAccumulator(input: $input, condition: $condition) {
      id
      all_topics
      all_campaigns
      all_senders
      createdAt
      updatedAt
    }
  }
`;
export const updateAccumulator = /* GraphQL */ `
  mutation UpdateAccumulator(
    $input: UpdateAccumulatorInput!
    $condition: ModelAccumulatorConditionInput
  ) {
    updateAccumulator(input: $input, condition: $condition) {
      id
      all_topics
      all_campaigns
      all_senders
      createdAt
      updatedAt
    }
  }
`;
export const deleteAccumulator = /* GraphQL */ `
  mutation DeleteAccumulator(
    $input: DeleteAccumulatorInput!
    $condition: ModelAccumulatorConditionInput
  ) {
    deleteAccumulator(input: $input, condition: $condition) {
      id
      all_topics
      all_campaigns
      all_senders
      createdAt
      updatedAt
    }
  }
`;
export const createTopicFollower = /* GraphQL */ `
  mutation CreateTopicFollower(
    $input: CreateTopicFollowerInput!
    $condition: ModelTopicFollowerConditionInput
  ) {
    createTopicFollower(input: $input, condition: $condition) {
      id
      topic_id
      follower_id
      topic {
        id
        code
        name
        description
        bulletins {
          nextToken
        }
        followers {
          nextToken
        }
        subscriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      follower {
        id
        domain
        latitude
        longitude
        created_at
        source
        topics {
          nextToken
        }
        subscriptions {
          nextToken
        }
        createdAt
        updatedAt
        destination
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTopicFollower = /* GraphQL */ `
  mutation UpdateTopicFollower(
    $input: UpdateTopicFollowerInput!
    $condition: ModelTopicFollowerConditionInput
  ) {
    updateTopicFollower(input: $input, condition: $condition) {
      id
      topic_id
      follower_id
      topic {
        id
        code
        name
        description
        bulletins {
          nextToken
        }
        followers {
          nextToken
        }
        subscriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      follower {
        id
        domain
        latitude
        longitude
        created_at
        source
        topics {
          nextToken
        }
        subscriptions {
          nextToken
        }
        createdAt
        updatedAt
        destination
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTopicFollower = /* GraphQL */ `
  mutation DeleteTopicFollower(
    $input: DeleteTopicFollowerInput!
    $condition: ModelTopicFollowerConditionInput
  ) {
    deleteTopicFollower(input: $input, condition: $condition) {
      id
      topic_id
      follower_id
      topic {
        id
        code
        name
        description
        bulletins {
          nextToken
        }
        followers {
          nextToken
        }
        subscriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      follower {
        id
        domain
        latitude
        longitude
        created_at
        source
        topics {
          nextToken
        }
        subscriptions {
          nextToken
        }
        createdAt
        updatedAt
        destination
      }
      createdAt
      updatedAt
    }
  }
`;
export const createFollower = /* GraphQL */ `
  mutation CreateFollower(
    $input: CreateFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    createFollower(input: $input, condition: $condition) {
      id
      domain
      latitude
      longitude
      created_at
      source
      topics {
        items {
          id
          topic_id
          follower_id
          createdAt
          updatedAt
        }
        nextToken
      }
      subscriptions {
        items {
          id
          referrer_url
          created_at
          deleted_at
          source
          topic_id
          follower_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      destination
    }
  }
`;
export const updateFollower = /* GraphQL */ `
  mutation UpdateFollower(
    $input: UpdateFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    updateFollower(input: $input, condition: $condition) {
      id
      domain
      latitude
      longitude
      created_at
      source
      topics {
        items {
          id
          topic_id
          follower_id
          createdAt
          updatedAt
        }
        nextToken
      }
      subscriptions {
        items {
          id
          referrer_url
          created_at
          deleted_at
          source
          topic_id
          follower_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      destination
    }
  }
`;
export const deleteFollower = /* GraphQL */ `
  mutation DeleteFollower(
    $input: DeleteFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    deleteFollower(input: $input, condition: $condition) {
      id
      domain
      latitude
      longitude
      created_at
      source
      topics {
        items {
          id
          topic_id
          follower_id
          createdAt
          updatedAt
        }
        nextToken
      }
      subscriptions {
        items {
          id
          referrer_url
          created_at
          deleted_at
          source
          topic_id
          follower_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      destination
    }
  }
`;
export const createSub = /* GraphQL */ `
  mutation CreateSub(
    $input: CreateSubInput!
    $condition: ModelSubConditionInput
  ) {
    createSub(input: $input, condition: $condition) {
      id
      referrer_url
      created_at
      deleted_at
      source
      topic_id
      follower_id
      topic {
        id
        code
        name
        description
        bulletins {
          nextToken
        }
        followers {
          nextToken
        }
        subscriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      follower {
        id
        domain
        latitude
        longitude
        created_at
        source
        topics {
          nextToken
        }
        subscriptions {
          nextToken
        }
        createdAt
        updatedAt
        destination
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSub = /* GraphQL */ `
  mutation UpdateSub(
    $input: UpdateSubInput!
    $condition: ModelSubConditionInput
  ) {
    updateSub(input: $input, condition: $condition) {
      id
      referrer_url
      created_at
      deleted_at
      source
      topic_id
      follower_id
      topic {
        id
        code
        name
        description
        bulletins {
          nextToken
        }
        followers {
          nextToken
        }
        subscriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      follower {
        id
        domain
        latitude
        longitude
        created_at
        source
        topics {
          nextToken
        }
        subscriptions {
          nextToken
        }
        createdAt
        updatedAt
        destination
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSub = /* GraphQL */ `
  mutation DeleteSub(
    $input: DeleteSubInput!
    $condition: ModelSubConditionInput
  ) {
    deleteSub(input: $input, condition: $condition) {
      id
      referrer_url
      created_at
      deleted_at
      source
      topic_id
      follower_id
      topic {
        id
        code
        name
        description
        bulletins {
          nextToken
        }
        followers {
          nextToken
        }
        subscriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      follower {
        id
        domain
        latitude
        longitude
        created_at
        source
        topics {
          nextToken
        }
        subscriptions {
          nextToken
        }
        createdAt
        updatedAt
        destination
      }
      createdAt
      updatedAt
    }
  }
`;

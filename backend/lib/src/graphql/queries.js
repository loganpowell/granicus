export const getCampaign = `
  query GetCampaign($id: ID!) {
    getCampaign(id: $id) {
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
export const listCampaigns = `
  query ListCampaigns(
    $filter: ModelCampaignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCampaigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bulletins {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSender = `
  query GetSender($id: ID!) {
    getSender(id: $id) {
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
export const listSenders = `
  query ListSenders(
    $filter: ModelSenderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSenders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bulletins {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTopic = `
  query GetTopic($id: ID!) {
    getTopic(id: $id) {
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
export const listTopics = `
  query ListTopics(
    $filter: ModelTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getBulletin = `
  query GetBulletin($id: ID!) {
    getBulletin(id: $id) {
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
export const listBulletins = `
  query ListBulletins(
    $filter: ModelBulletinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBulletins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSubsSummary = `
  query GetSubsSummary($id: ID!) {
    getSubsSummary(id: $id) {
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
export const listSubsSummarys = `
  query ListSubsSummarys(
    $filter: ModelSubsSummaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubsSummarys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAccumulator = `
  query GetAccumulator($id: ID!) {
    getAccumulator(id: $id) {
      id
      all_topics
      all_campaigns
      all_senders
      createdAt
      updatedAt
    }
  }
`;
export const listAccumulators = `
  query ListAccumulators(
    $filter: ModelAccumulatorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccumulators(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        all_topics
        all_campaigns
        all_senders
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSub = `
  query GetSub($id: ID!) {
    getSub(id: $id) {
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
export const listSubs = `
  query ListSubs(
    $filter: ModelSubFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        follower {
          id
          latitude
          longitude
          created_at
          source
          createdAt
          updatedAt
          destination
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const bulletinsByCampaign = `
  query BulletinsByCampaign(
    $campaign_id: ID
    $created_at: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBulletinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bulletinsByCampaign(
      campaign_id: $campaign_id
      created_at: $created_at
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const bulletinsBySender = `
  query BulletinsBySender(
    $sender_email: ID
    $created_at: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBulletinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bulletinsBySender(
      sender_email: $sender_email
      created_at: $created_at
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const topicsByFollower = `
  query TopicsByFollower(
    $follower_id: ID
    $topic_id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTopicFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    topicsByFollower(
      follower_id: $follower_id
      topic_id: $topic_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        topic_id
        follower_id
        topic {
          id
          code
          name
          description
          createdAt
          updatedAt
        }
        follower {
          id
          latitude
          longitude
          created_at
          source
          createdAt
          updatedAt
          destination
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const followersByTopic = `
  query FollowersByTopic(
    $topic_id: ID
    $follower_id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTopicFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    followersByTopic(
      topic_id: $topic_id
      follower_id: $follower_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        topic_id
        follower_id
        topic {
          id
          code
          name
          description
          createdAt
          updatedAt
        }
        follower {
          id
          latitude
          longitude
          created_at
          source
          createdAt
          updatedAt
          destination
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const subsByTopic = `
  query SubsByTopic(
    $topic_id: ID
    $created_at: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSubFilterInput
    $limit: Int
    $nextToken: String
  ) {
    subsByTopic(
      topic_id: $topic_id
      created_at: $created_at
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
        }
        follower {
          id
          latitude
          longitude
          created_at
          source
          createdAt
          updatedAt
          destination
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const subsByFollower = `
  query SubsByFollower(
    $follower_id: ID
    $created_at: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSubFilterInput
    $limit: Int
    $nextToken: String
  ) {
    subsByFollower(
      follower_id: $follower_id
      created_at: $created_at
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
        }
        follower {
          id
          latitude
          longitude
          created_at
          source
          createdAt
          updatedAt
          destination
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFollower = `
  query GetFollower($id: ID!) {
    getFollower(id: $id) {
      id
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
export const listFollowers = `
  query ListFollowers(
    $filter: ModelFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
      nextToken
    }
  }
`;

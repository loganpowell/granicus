/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCampaign = /* GraphQL */ `
  subscription OnCreateCampaign {
    onCreateCampaign {
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
export const onUpdateCampaign = /* GraphQL */ `
  subscription OnUpdateCampaign {
    onUpdateCampaign {
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
export const onDeleteCampaign = /* GraphQL */ `
  subscription OnDeleteCampaign {
    onDeleteCampaign {
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
export const onCreateSender = /* GraphQL */ `
  subscription OnCreateSender {
    onCreateSender {
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
export const onUpdateSender = /* GraphQL */ `
  subscription OnUpdateSender {
    onUpdateSender {
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
export const onDeleteSender = /* GraphQL */ `
  subscription OnDeleteSender {
    onDeleteSender {
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
export const onCreateTopic = /* GraphQL */ `
  subscription OnCreateTopic {
    onCreateTopic {
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
export const onUpdateTopic = /* GraphQL */ `
  subscription OnUpdateTopic {
    onUpdateTopic {
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
export const onDeleteTopic = /* GraphQL */ `
  subscription OnDeleteTopic {
    onDeleteTopic {
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
export const onCreateBulletin = /* GraphQL */ `
  subscription OnCreateBulletin {
    onCreateBulletin {
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
export const onUpdateBulletin = /* GraphQL */ `
  subscription OnUpdateBulletin {
    onUpdateBulletin {
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
export const onDeleteBulletin = /* GraphQL */ `
  subscription OnDeleteBulletin {
    onDeleteBulletin {
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
export const onCreateBulletinTopic = /* GraphQL */ `
  subscription OnCreateBulletinTopic {
    onCreateBulletinTopic {
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
export const onUpdateBulletinTopic = /* GraphQL */ `
  subscription OnUpdateBulletinTopic {
    onUpdateBulletinTopic {
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
export const onDeleteBulletinTopic = /* GraphQL */ `
  subscription OnDeleteBulletinTopic {
    onDeleteBulletinTopic {
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
export const onCreateSubsSummary = /* GraphQL */ `
  subscription OnCreateSubsSummary {
    onCreateSubsSummary {
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
export const onUpdateSubsSummary = /* GraphQL */ `
  subscription OnUpdateSubsSummary {
    onUpdateSubsSummary {
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
export const onDeleteSubsSummary = /* GraphQL */ `
  subscription OnDeleteSubsSummary {
    onDeleteSubsSummary {
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
export const onCreateAccumulator = /* GraphQL */ `
  subscription OnCreateAccumulator {
    onCreateAccumulator {
      id
      all_topics
      all_campaigns
      all_senders
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAccumulator = /* GraphQL */ `
  subscription OnUpdateAccumulator {
    onUpdateAccumulator {
      id
      all_topics
      all_campaigns
      all_senders
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAccumulator = /* GraphQL */ `
  subscription OnDeleteAccumulator {
    onDeleteAccumulator {
      id
      all_topics
      all_campaigns
      all_senders
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTopicFollower = /* GraphQL */ `
  subscription OnCreateTopicFollower {
    onCreateTopicFollower {
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
export const onUpdateTopicFollower = /* GraphQL */ `
  subscription OnUpdateTopicFollower {
    onUpdateTopicFollower {
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
export const onDeleteTopicFollower = /* GraphQL */ `
  subscription OnDeleteTopicFollower {
    onDeleteTopicFollower {
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
export const onCreateFollower = /* GraphQL */ `
  subscription OnCreateFollower {
    onCreateFollower {
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
export const onUpdateFollower = /* GraphQL */ `
  subscription OnUpdateFollower {
    onUpdateFollower {
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
export const onDeleteFollower = /* GraphQL */ `
  subscription OnDeleteFollower {
    onDeleteFollower {
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
export const onCreateSub = /* GraphQL */ `
  subscription OnCreateSub {
    onCreateSub {
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
export const onUpdateSub = /* GraphQL */ `
  subscription OnUpdateSub {
    onUpdateSub {
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
export const onDeleteSub = /* GraphQL */ `
  subscription OnDeleteSub {
    onDeleteSub {
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

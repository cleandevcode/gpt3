import React from "react";
import {
  AD_CREATIVES_PATH,
  AI_ANALYTICS_PREFIX_PATH,
  APP_PREFIX_PATH,
  COMMUNICATION_PREFIX_PATH,
  CONTENT_ORGANIZER_PREFIX_PATH,
  KNOWLEDGE_BASE_PREFIX_PATH,
  LEAD_GENERATION_PATH,
  NEWSLETTER_RELEASE_PREFIX_PATH,
  PROJECT_MANAGE_PPREFIX_PATH,
  ROYALTY_PROGRAM_PREFIX_PATH,
  SOCIAL_MEDIA_MANAGER_PREFIX_PATH,
  SUPPORT_RESOURCES_PREFIX_PATH,
  TEAM_PREFIX_PATH,
} from "constants/route.constant";
import { ADMIN, STANDARD, PREMIUM, USER } from "constants/roles.constant";

const appsRoute = [
  {
    key: "services.socialMedia",
    path: `/services/:categoryIdx`,
    component: React.lazy(() => import("views/project/ProjectList")),
    authority: [STANDARD, PREMIUM],
    // test remove
  },
  {
    path: `/services/:catId/:id`,
    component: React.lazy(() => import("views/knowledge-base/EditArticle")),
    authority: [STANDARD, PREMIUM],
  },
  {
    path: `/dashboard/map_of_users`,
    component: React.lazy(() => import("views/dashboard/map_of_users")),
    authority: [USER, STANDARD, PREMIUM],
  },
  {
    path: `/dashboard/user_statistics`,
    component: React.lazy(() => import("views/dashboard/user_statistics")),
    authority: [USER, STANDARD, PREMIUM],
  },
  {
    path: `/dashboard/reminders`,
    component: React.lazy(() => import("views/dashboard/reminders")),
    authority: [USER, STANDARD, PREMIUM],
  },
  {
    path: `/coming_soon`,
    component: React.lazy(() => import("views/coming_soon")),
    authority: [USER, STANDARD, PREMIUM],
  },
  {
    key: "appsCrm.dashboard",
    path: `${APP_PREFIX_PATH}/crm/dashboard`,
    component: React.lazy(() => import("views/crm/CrmDashboard")),
    authority: [STANDARD, PREMIUM],
  },
  {
    key: "apps.welcome",
    path: `${APP_PREFIX_PATH}/welcome-page`,
    component: React.lazy(() => import("views/pages/Welcome")),
    authority: [USER, STANDARD, PREMIUM],
  },
  ////////////////////////////////////////////////////

  {
    key: "appsProject.projectList",
    path: `${APP_PREFIX_PATH}/project/project-list`,
    component: React.lazy(() => import("views/project/ProjectList")),
    authority: [ADMIN, USER],
  },

  {
    key: "appsProject.scrumBoard",
    path: `${APP_PREFIX_PATH}/project/scrum-board`,
    component: React.lazy(() => import("views/project/ScrumBoard")),
    authority: [ADMIN, USER],
    meta: {
      pageContainerType: "gutterless",
    },
  },
  {
    key: "appsProject.issue",
    path: `${APP_PREFIX_PATH}/project/issue`,
    component: React.lazy(() => import("views/project/Issue")),
    authority: [ADMIN, USER],
  },

  {
    key: "appsCrm.calendar",
    path: `${APP_PREFIX_PATH}/crm/calendar`,
    component: React.lazy(() => import("views/crm/Calendar")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsCrm.customers",
    path: `${APP_PREFIX_PATH}/crm/customers`,
    component: React.lazy(() => import("views/crm/Customers")),
    authority: [ADMIN, USER],
    meta: {
      header: "Customers",
    },
  },
  {
    key: "appsCrm.customerDetails",
    path: `${APP_PREFIX_PATH}/crm/customer-details`,
    component: React.lazy(() => import("views/crm/CustomerDetail")),
    authority: [ADMIN, USER],
    meta: {
      header: "Customer Details",
      headerContainer: true,
    },
  },
  {
    key: "appsCrm.mail",
    path: `${APP_PREFIX_PATH}/crm/mail`,
    component: React.lazy(() => import("views/crm/Mail")),
    authority: [ADMIN, USER],
    meta: {
      pageContainerType: "gutterless",
      footer: false,
    },
  },
  {
    key: "appsCrm.mail",
    path: `${APP_PREFIX_PATH}/crm/mail/:category`,
    component: React.lazy(() => import("views/crm/Mail")),
    authority: [ADMIN, USER],
    meta: {
      pageContainerType: "gutterless",
      footer: false,
    },
  },

  {
    key: "appsSales.dashboard",
    path: `${APP_PREFIX_PATH}/sales/dashboard`,
    component: React.lazy(() => import("views/sales/SalesDashboard")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsSales.productList",
    path: `${APP_PREFIX_PATH}/sales/product-list`,
    component: React.lazy(() => import("views/sales/ProductList")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsSales.productEdit",
    path: `${APP_PREFIX_PATH}/sales/product-edit/:productId`,
    component: React.lazy(() => import("views/sales/ProductEdit")),
    authority: [ADMIN, USER],
    meta: {
      header: "Edit Product",
    },
  },
  {
    key: "appsSales.productNew",
    path: `${APP_PREFIX_PATH}/sales/product-new`,
    component: React.lazy(() => import("views/sales/ProductNew")),
    authority: [ADMIN, USER],
    meta: {
      header: "Add New Product",
    },
  },
  {
    key: "appsSales.orderList",
    path: `${APP_PREFIX_PATH}/sales/order-list`,
    component: React.lazy(() => import("views/sales/OrderList")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsSales.orderDetails",
    path: `${APP_PREFIX_PATH}/sales/order-details/:orderId`,
    component: React.lazy(() => import("views/sales/OrderDetails")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsCrypto.dashboard",
    path: `${APP_PREFIX_PATH}/crypto/dashboard`,
    component: React.lazy(() => import("views/crypto/CryptoDashboard")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsCrypto.portfolio",
    path: `${APP_PREFIX_PATH}/crypto/portfolio`,
    component: React.lazy(() => import("views/crypto/Portfolio")),
    authority: [ADMIN, USER],
    meta: {
      header: "Portfolio",
    },
  },
  {
    key: "appsCrypto.market",
    path: `${APP_PREFIX_PATH}/crypto/market`,
    component: React.lazy(() => import("views/crypto/Market")),
    authority: [ADMIN, USER],
    meta: {
      header: "Market",
    },
  },
  {
    key: "appsCrypto.wallets",
    path: `${APP_PREFIX_PATH}/crypto/wallets`,
    component: React.lazy(() => import("views/crypto/Wallets")),
    authority: [ADMIN, USER],
    meta: {
      header: "Wallets",
    },
  },
  {
    key: "appsknowledgeBase.helpCenter",
    path: `${APP_PREFIX_PATH}/knowledge-base/help-center`,
    component: React.lazy(() => import("views/knowledge-base/HelpCenter")),
    authority: [ADMIN, USER],
    meta: {
      pageContainerType: "gutterless",
    },
  },
  {
    key: "appsknowledgeBase.article",
    path: `${APP_PREFIX_PATH}/knowledge-base/article`,
    component: React.lazy(() => import("views/knowledge-base/Article")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsknowledgeBase.manageArticles",
    path: `${APP_PREFIX_PATH}/knowledge-base/manage-articles`,
    component: React.lazy(() => import("views/knowledge-base/ManageArticles")),
    authority: [ADMIN, USER],
    meta: {
      header: "Manage Articles",
      extraHeader: React.lazy(() =>
        import("views/knowledge-base/ManageArticles/components/PanelHeader")
      ),
      headerContainer: true,
    },
  },
  {
    key: "appsknowledgeBase.editArticle",
    path: `${APP_PREFIX_PATH}/knowledge-base/edit-article`,
    component: React.lazy(() => import("views/knowledge-base/EditArticle")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsAccount.settings",
    path: `${APP_PREFIX_PATH}/account/settings/:tab`,
    component: React.lazy(() => import("views/account/Settings")),
    authority: [ADMIN, USER],
    meta: {
      header: "Settings",
      headerContainer: true,
    },
  },
  {
    key: "appsAccount.invoice",
    path: `${APP_PREFIX_PATH}/account/invoice/:id`,
    component: React.lazy(() => import("views/account/Invoice")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsAccount.activityLog",
    path: `${APP_PREFIX_PATH}/account/activity-log`,
    component: React.lazy(() => import("views/account/ActivityLog")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsAccount.kycForm",
    path: `${APP_PREFIX_PATH}/account/kyc-form`,
    component: React.lazy(() => import("views/account/KycForm")),
    authority: [ADMIN, USER],
  },
  // Project Management
  {
    key: "project",
    path: `${PROJECT_MANAGE_PPREFIX_PATH}`,
    component: React.lazy(() => import("views/project_management/index")),
    authority: [ADMIN, USER],
  },
  {
    key: "project.current",
    path: `${PROJECT_MANAGE_PPREFIX_PATH}/current_projects`,
    component: React.lazy(() =>
      import("views/project_management/current_projects")
    ),
    authority: [ADMIN, USER],
  },
  {
    key: "project.past",
    path: `${PROJECT_MANAGE_PPREFIX_PATH}/past_projects`,
    component: React.lazy(() =>
      import("views/project_management/past_projects")
    ),
    authority: [ADMIN, USER],
  },
  {
    key: "project.past",
    path: `${PROJECT_MANAGE_PPREFIX_PATH}/past_projects`,
    component: React.lazy(() =>
      import("views/project_management/past_projects")
    ),
    authority: [ADMIN, USER],
  },
  {
    key: "project.favorites",
    path: `${PROJECT_MANAGE_PPREFIX_PATH}/favorites`,
    component: React.lazy(() => import("views/project_management/favorites")),
    authority: [ADMIN, USER],
  },
  {
    key: "project.top.searched.questions",
    path: `${PROJECT_MANAGE_PPREFIX_PATH}/top_searched_questions`,
    component: React.lazy(() =>
      import("views/project_management/top_searched_questions")
    ),
    authority: [ADMIN, USER],
  },
  {
    key: "project.top.searched.topics",
    path: `${PROJECT_MANAGE_PPREFIX_PATH}/top_searched_topics`,
    component: React.lazy(() =>
      import("views/project_management/top_searched_topics")
    ),
    authority: [ADMIN, USER],
  },
  {
    key: "project.top.searched.services",
    path: `${PROJECT_MANAGE_PPREFIX_PATH}/top_searched_services`,
    component: React.lazy(() =>
      import("views/project_management/top_searched_services")
    ),
    authority: [ADMIN, USER],
  },
  {
    key: "project.top.searched.words",
    path: `${PROJECT_MANAGE_PPREFIX_PATH}/top_searched_words`,
    component: React.lazy(() =>
      import("views/project_management/top_searched_words")
    ),
    authority: [ADMIN, USER],
  },
  {
    key: "project.top.used.tools",
    path: `${PROJECT_MANAGE_PPREFIX_PATH}/top_used_tools`,
    component: React.lazy(() =>
      import("views/project_management/top_used_tools")
    ),
    authority: [ADMIN, USER],
  },

  // Content Organizer
  {
    key: "content",
    path: `${CONTENT_ORGANIZER_PREFIX_PATH}`,
    component: React.lazy(() => import("views/content/index")),
    authority: [ADMIN, USER],
  },
  {
    key: "content.videos",
    path: `${CONTENT_ORGANIZER_PREFIX_PATH}/videos`,
    component: React.lazy(() => import("views/content/videos")),
    authority: [ADMIN, USER],
  },
  {
    key: "content.photos",
    path: `${CONTENT_ORGANIZER_PREFIX_PATH}/photos`,
    component: React.lazy(() => import("views/content/photos")),
    authority: [ADMIN, USER],
  },
  {
    key: "content.documents",
    path: `${CONTENT_ORGANIZER_PREFIX_PATH}/documents`,
    component: React.lazy(() => import("views/content/documents")),
    authority: [ADMIN, USER],
  },

  // Communication
  {
    key: "communication",
    path: `${COMMUNICATION_PREFIX_PATH}`,
    component: React.lazy(() => import("views/communication")),
    authority: [ADMIN, USER],
  },
  {
    key: "communication.instagram",
    path: `${COMMUNICATION_PREFIX_PATH}/instagram`,
    component: React.lazy(() => import("views/communication/instagram")),
    authority: [ADMIN, USER],
  },
  {
    key: "communication.tikTok",
    path: `${COMMUNICATION_PREFIX_PATH}/tikTok`,
    component: React.lazy(() => import("views/communication/tikTok")),
    authority: [ADMIN, USER],
  },
  {
    key: "communication.facebook",
    path: `${COMMUNICATION_PREFIX_PATH}/facebook`,
    component: React.lazy(() => import("views/communication/facebook")),
    authority: [ADMIN, USER],
  },
  {
    key: "communication.twitter",
    path: `${COMMUNICATION_PREFIX_PATH}/twitter`,
    component: React.lazy(() => import("views/communication/twitter")),
    authority: [ADMIN, USER],
  },
  {
    key: "communication.linkedin",
    path: `${COMMUNICATION_PREFIX_PATH}/linkedin`,
    component: React.lazy(() => import("views/communication/linkedIn")),
    authority: [ADMIN, USER],
  },
  {
    key: "communication.youtube",
    path: `${COMMUNICATION_PREFIX_PATH}/youtube`,
    component: React.lazy(() => import("views/communication/youtube")),
    authority: [ADMIN, USER],
  },

  // Social Media Manager
  {
    key: "socialMedia",
    path: `${SOCIAL_MEDIA_MANAGER_PREFIX_PATH}`,
    component: React.lazy(() => import("views/socialMedia/index")),
    authority: [ADMIN, USER],
  },
  {
    key: "socialMedia.instagram",
    path: `${SOCIAL_MEDIA_MANAGER_PREFIX_PATH}/instagram`,
    component: React.lazy(() => import("views/socialMedia/instagram")),
    authority: [ADMIN, USER],
  },
  {
    key: "socialMedia.tikTok",
    path: `${SOCIAL_MEDIA_MANAGER_PREFIX_PATH}/tikTok`,
    component: React.lazy(() => import("views/socialMedia/tikTok")),
    authority: [ADMIN, USER],
  },
  {
    key: "socialMedia.facebook",
    path: `${SOCIAL_MEDIA_MANAGER_PREFIX_PATH}/facebook`,
    component: React.lazy(() => import("views/socialMedia/facebook")),
    authority: [ADMIN, USER],
  },
  {
    key: "socialMedia.twitter",
    path: `${SOCIAL_MEDIA_MANAGER_PREFIX_PATH}/twitter`,
    component: React.lazy(() => import("views/socialMedia/twitter")),
    authority: [ADMIN, USER],
  },
  {
    key: "socialMedia.linkedin",
    path: `${SOCIAL_MEDIA_MANAGER_PREFIX_PATH}/linkedin`,
    component: React.lazy(() => import("views/socialMedia/linkedIn")),
    authority: [ADMIN, USER],
  },
  {
    key: "socialMedia.youtube",
    path: `${SOCIAL_MEDIA_MANAGER_PREFIX_PATH}/youtube`,
    component: React.lazy(() => import("views/socialMedia/youtube")),
    authority: [ADMIN, USER],
  },

  // AI Analytics
  {
    key: "analytics",
    path: `${AI_ANALYTICS_PREFIX_PATH}`,
    component: React.lazy(() => import("views/ai-analytics/index")),
    authority: [ADMIN, USER],
  },
  {
    key: "analytics.allReports",
    path: `${AI_ANALYTICS_PREFIX_PATH}/allReports`,
    component: React.lazy(() => import("views/ai-analytics/allReports")),
    authority: [ADMIN, USER],
  },
  {
    key: "analytics.pastReports",
    path: `${AI_ANALYTICS_PREFIX_PATH}/pastReports`,
    component: React.lazy(() => import("views/ai-analytics/pastReports")),
    authority: [ADMIN, USER],
  },
  {
    key: "analytics.industry",
    path: `${AI_ANALYTICS_PREFIX_PATH}/industry`,
    component: React.lazy(() =>
      import("views/ai-analytics/industryBenchmarking")
    ),
    authority: [ADMIN, USER],
  },
  {
    key: "analytics.statistics",
    path: `${AI_ANALYTICS_PREFIX_PATH}/statistics`,
    component: React.lazy(() => import("views/ai-analytics/postStatistics")),
    authority: [ADMIN, USER],
  },

  // Knowledge Base
  {
    key: "analytics",
    path: `${KNOWLEDGE_BASE_PREFIX_PATH}`,
    component: React.lazy(() => import("views/knowledgeBase/index")),
    authority: [ADMIN, USER],
  },
  {
    key: "analytics.articles",
    path: `${KNOWLEDGE_BASE_PREFIX_PATH}/articles`,
    component: React.lazy(() => import("views/knowledgeBase/articles")),
    authority: [ADMIN, USER],
  },
  {
    key: "analytics.upcomingServices",
    path: `${KNOWLEDGE_BASE_PREFIX_PATH}/upcomingServices`,
    component: React.lazy(() => import("views/knowledgeBase/upcoming")),
    authority: [ADMIN, USER],
  },
  {
    key: "analytics.roadmap",
    path: `${KNOWLEDGE_BASE_PREFIX_PATH}/roadmap`,
    component: React.lazy(() => import("views/knowledgeBase/roadmap")),
    authority: [ADMIN, USER],
  },
  {
    key: "analytics.inspiration",
    path: `${KNOWLEDGE_BASE_PREFIX_PATH}/inspiration`,
    component: React.lazy(() => import("views/knowledgeBase/inspiration")),
    authority: [ADMIN, USER],
  },
  {
    key: "analytics.community",
    path: `${KNOWLEDGE_BASE_PREFIX_PATH}/community`,
    component: React.lazy(() => import("views/knowledgeBase/community")),
    authority: [ADMIN, USER],
  },
  {
    key: "analytics.resources",
    path: `${KNOWLEDGE_BASE_PREFIX_PATH}/resources`,
    component: React.lazy(() => import("views/knowledgeBase/resource")),
    authority: [ADMIN, USER],
  },

  // Newsletter Release
  {
    key: "newsletter",
    path: `${NEWSLETTER_RELEASE_PREFIX_PATH}`,
    component: React.lazy(() => import("views/newsletter/index")),
    authority: [ADMIN, USER],
  },
  {
    key: "newsletter.campaign",
    path: `${NEWSLETTER_RELEASE_PREFIX_PATH}/campaign`,
    component: React.lazy(() => import("views/newsletter/campaign")),
    authority: [ADMIN, USER],
  },
  {
    key: "newsletter.audiences",
    path: `${NEWSLETTER_RELEASE_PREFIX_PATH}/audiences`,
    component: React.lazy(() => import("views/newsletter/audiences")),
    authority: [ADMIN, USER],
  },

  // Royalty Program
  {
    key: "royaltyProgram",
    path: `${ROYALTY_PROGRAM_PREFIX_PATH}`,
    component: React.lazy(() => import("views/royalty/index")),
    authority: [ADMIN, USER],
  },
  {
    key: "royaltyProgram.referral",
    path: `${ROYALTY_PROGRAM_PREFIX_PATH}/referral`,
    component: React.lazy(() => import("views/royalty/referral")),
    authority: [ADMIN, USER],
  },
  {
    key: "royaltyProgram.trackActivity",
    path: `${ROYALTY_PROGRAM_PREFIX_PATH}/trackActivity`,
    component: React.lazy(() => import("views/royalty/trackActivity")),
    authority: [ADMIN, USER],
  },
  {
    key: "royaltyProgram.rewards",
    path: `${ROYALTY_PROGRAM_PREFIX_PATH}/rewards`,
    component: React.lazy(() => import("views/royalty/referral")),
    authority: [ADMIN, USER],
  },
  {
    key: "royaltyProgram.abr",
    path: `${ROYALTY_PROGRAM_PREFIX_PATH}/abr`,
    component: React.lazy(() => import("views/royalty/abr")),
    authority: [ADMIN, USER],
  },
  {
    key: "royaltyProgram.badge",
    path: `${ROYALTY_PROGRAM_PREFIX_PATH}/badge`,
    component: React.lazy(() => import("views/royalty/badge")),
    authority: [ADMIN, USER],
  },
  {
    key: "royaltyProgram.lcr",
    path: `${ROYALTY_PROGRAM_PREFIX_PATH}/lcr`,
    component: React.lazy(() => import("views/royalty/lcr")),
    authority: [ADMIN, USER],
  },

  // Team
  {
    key: "team",
    path: `${TEAM_PREFIX_PATH}`,
    component: React.lazy(() => import("views/team/index")),
    authority: [ADMIN, USER],
  },
  {
    key: "team.upgradePackages",
    path: `${TEAM_PREFIX_PATH}/upgradePackages`,
    component: React.lazy(() => import("views/team/packages")),
    authority: [ADMIN, USER],
  },

  // Support & Resources
  {
    key: "support",
    path: `${SUPPORT_RESOURCES_PREFIX_PATH}`,
    component: React.lazy(() => import("views/support-resources/index")),
    authority: [ADMIN, USER],
  },
  {
    key: "support.blogs",
    path: `${SUPPORT_RESOURCES_PREFIX_PATH}/blogs`,
    component: React.lazy(() => import("views/support-resources/blogs")),
    authority: [ADMIN, USER],
  },
  {
    key: "support.blogDetail",
    path: `${SUPPORT_RESOURCES_PREFIX_PATH}/blogs/:id`,
    component: React.lazy(() => import("views/support-resources/blog_details")),
    authority: [ADMIN, USER],
  },
  {
    key: "support.videos_how_to",
    path: `${SUPPORT_RESOURCES_PREFIX_PATH}/how-to-videos`,
    component: React.lazy(() => import("views/support-resources/video_guides")),
    authority: [ADMIN, USER],
  },
  {
    key: "support.videos_education",
    path: `${SUPPORT_RESOURCES_PREFIX_PATH}/education-videos`,
    component: React.lazy(() => import("views/support-resources/video_guides")),
    authority: [ADMIN, USER],
  },
  {
    key: "support.faq",
    path: `${SUPPORT_RESOURCES_PREFIX_PATH}/faq`,
    component: React.lazy(() => import("views/support-resources/faq")),
    authority: [ADMIN, USER],
  },
  {
    key: "support.contact",
    path: `${SUPPORT_RESOURCES_PREFIX_PATH}/contact`,
    component: React.lazy(() => import("views/support-resources/contact")),
    authority: [ADMIN, USER],
  },

  // Lead generation
  {
    key: "lead_generation",
    path: `${LEAD_GENERATION_PATH}`,
    component: React.lazy(() => import("views/lead-generation")),
    authority: [ADMIN, USER],
  },

  // Ad Creatives
  {
    key: "ad_creative",
    path: `${AD_CREATIVES_PATH}`,
    component: React.lazy(() => import("views/ad-creatives")),
    authority: [ADMIN, USER],
  },
];

export default appsRoute;

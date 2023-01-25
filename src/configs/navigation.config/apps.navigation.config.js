import {
  NAV_ITEM_TYPE_TITLE,
  NAV_ITEM_TYPE_COLLAPSE,
} from "constants/navigation.constant";
import { PREMIUM, USER, STANDARD } from "constants/roles.constant";
import {
  PROJECT_MANAGE_PPREFIX_PATH,
  CONTENT_ORGANIZER_PREFIX_PATH,
  COMMUNICATION_PREFIX_PATH,
  SOCIAL_MEDIA_MANAGER_PREFIX_PATH,
  AI_ANALYTICS_PREFIX_PATH,
  KNOWLEDGE_BASE_PREFIX_PATH,
  NEWSLETTER_RELEASE_PREFIX_PATH,
  ROYALTY_PROGRAM_PREFIX_PATH,
  TEAM_PREFIX_PATH,
  SUPPORT_RESOURCES_PREFIX_PATH,
  LEAD_GENERATION_PATH,
  AD_CREATIVES_PATH,
} from "constants/route.constant";

const appsNavigationConfig = [
  {
    key: "menu",
    path: "",
    title: "menu",
    translateKey: "nav.menu",
    icon: "apps",
    type: NAV_ITEM_TYPE_TITLE,
    authority: [STANDARD, PREMIUM, USER],
    subMenu: [
      {
        key: "account",
        path: "/app/crm/dashboard",
        title: "MY ACCOUNT",
        translateKey: "nav.account.root",
        icon: "account",
        type: NAV_ITEM_TYPE_TITLE,
        authority: [STANDARD, PREMIUM, USER],
        subMenu: [
          {
            key: "account.profile",
            path: `/app/account/settings/profile`,
            title: "Create Profile",
            translateKey: "nav.account.profile",
            icon: "account",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
          },
          // {
          //   key: "account.profile.settings",
          //   path: `/app/account/settings/profile`,
          //   title: "Settings",
          //   translateKey: "nav.account.profile.settings",
          //   icon: "account",
          //   type: NAV_ITEM_TYPE_COLLAPSE,
          //   authority: [BASIC, PREMIUM, USER],
          //   subMenu: [],
          // },
        ],
      },
      {
        key: "dashboard",
        path: "/app/crm/dashboard",
        title: "DASHBOARD",
        translateKey: "nav.dashboard.root",
        icon: "dashboard",
        type: NAV_ITEM_TYPE_TITLE,
        authority: [STANDARD, PREMIUM, USER],
        subMenu: [
          {
            key: "dashboard.users",
            path: `/dashboard/map_of_users`,
            title: "Map Of Users",
            translateKey: "nav.dashboard.map_of_users",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
          },
          {
            key: "dashboard.statistic",
            path: `/dashboard/user_statistics`,
            title: "User Statistics",
            translateKey: "nav.dashboard.user_statistics",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
          },
          {
            key: "dashboard.reminders",
            path: `/dashboard/reminders`,
            title: "Reminders/To-Do List",
            translateKey: "nav.dashboard.reminder",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM],
            subMenu: [],
          },
        ],
      },
      {
        key: "services",
        path: "",
        title: "SERVICES",
        translateKey: "nav.services.root",
        icon: "apps",
        type: NAV_ITEM_TYPE_TITLE,
        authority: [STANDARD, PREMIUM, USER],
        subMenu: [
          {
            key: "services.socialMedia",
            path: `/services/social-media`,
            title: "Social Media Tools",
            translateKey: "nav.services.social_media",
            icon: "project",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
          },
          {
            key: "services.marketing",
            path: "/services/marketing-tools",
            title: "Marketing Tools",
            translateKey: "nav.services.marketing",
            icon: "sales",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
          },
          {
            key: "services.business",
            path: "/services/business",
            title: "Business Tools",
            translateKey: "nav.services.business",
            icon: "crm",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [PREMIUM],
            subMenu: [],
          },
          {
            key: "services.writingTools",
            path: "/services/writing-tools",
            title: "Writing Tools",
            translateKey: "nav.services.writing",
            icon: "guide",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [PREMIUM],
            subMenu: [],
          },
          {
            key: "services.miscellaneous",
            path: `/services/miscellaneous`,
            title: "Miscellaneous",
            translateKey: "nav.services.miscellaneous",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [PREMIUM],
            subMenu: [
              // {
              // 	key: 'miscellaneous.dashboard',
              // 	path: `services/miscellaneous`,
              // 	title: 'All Miscellaneous Services',
              // 	translateKey: 'nav.miscellaneous.all',
              // 	icon: '',
              // 	type: NAV_ITEM_TYPE_ITEM,
              // 	authority: [BASIC,PREMIUM],
              // 	subMenu: []
              // },
              // {
              // 	key: 'miscellaneous.Latter',
              // 	path: `services/miscellaneous/cover-latter`,
              // 	title: 'Cover Latter',
              // 	translateKey: 'nav.miscellaneous.Cover',
              // 	icon: '',
              // 	type: NAV_ITEM_TYPE_ITEM,
              // 	authority: [BASIC,PREMIUM],
              // 	subMenu: []
              // },
              // {
              // 	key: 'miscellaneous.fictional',
              // 	path: `services/miscellaneous/fictional-story`,
              // 	title: 'Fictional Story Ideas',
              // 	translateKey: 'nav.miscellaneous.fictional',
              // 	icon: '',
              // 	type: NAV_ITEM_TYPE_ITEM,
              // 	authority: [BASIC,PREMIUM],
              // 	subMenu: []
              // },
              // {
              // 	key: 'miscellaneous.recipe',
              // 	path: `services/miscellaneous/food-recipe`,
              // 	title: 'Food Recipes',
              // 	translateKey: 'nav.miscellaneous.recipe',
              // 	icon: '',
              // 	type: NAV_ITEM_TYPE_ITEM,
              // 	authority: [BASIC,PREMIUM],
              // 	subMenu: []
              // },
              // {
              // 	key: 'miscellaneous.quora',
              // 	path: `services/miscellaneous/quora-answers`,
              // 	title: 'Quora Answers',
              // 	translateKey: 'nav.miscellaneous.quora',
              // 	icon: '',
              // 	type: NAV_ITEM_TYPE_ITEM,
              // 	authority: [BASIC,PREMIUM],
              // 	subMenu: []
              // },
              // {
              // 	key: 'miscellaneous.greetings',
              // 	path: `services/miscellaneous/greetings`,
              // 	title: 'Greetings',
              // 	translateKey: 'nav.miscellaneous.greetings',
              // 	icon: '',
              // 	type: NAV_ITEM_TYPE_ITEM,
              // 	authority: [BASIC,PREMIUM],
              // 	subMenu: []
              // },
              // {
              // 	key: 'miscellaneous.song',
              // 	path: `services/miscellaneous/song-lyrics`,
              // 	title: 'Song Lyrics',
              // 	translateKey: 'nav.miscellaneous.song',
              // 	icon: '',
              // 	type: NAV_ITEM_TYPE_ITEM,
              // 	authority: [BASIC,PREMIUM],
              // 	subMenu: []
              // },
              // {
              // 	key: 'miscellaneous.Job',
              // 	path: `services/miscellaneous/job-description`,
              // 	title: 'Job Descriptions',
              // 	translateKey: 'nav.miscellaneous.Job',
              // 	icon: '',
              // 	type: NAV_ITEM_TYPE_ITEM,
              // 	authority: [BASIC,PREMIUM],
              // 	subMenu: []
              // },
              // {
              // 	key: 'miscellaneous.pdDes',
              // 	path: `services/miscellaneous/pd-reviews`,
              // 	title: 'Product Reviews',
              // 	translateKey: 'nav.miscellaneous.pdDes',
              // 	icon: '',
              // 	type: NAV_ITEM_TYPE_ITEM,
              // 	authority: [BASIC,PREMIUM],
              // 	subMenu: []
              // },
              // {
              // 	key: 'miscellaneous.linkedinbio',
              // 	path: `services/miscellaneous/linkedin-bio`,
              // 	title: 'Personal Linkedin Bio',
              // 	translateKey: 'nav.miscellaneous.linkedinbio',
              // 	icon: '',
              // 	type: NAV_ITEM_TYPE_ITEM,
              // 	authority: [BASIC,PREMIUM],
              // 	subMenu: []
              // }
            ],
          },
          {
            key: "services.allServices",
            path: "/services/all-services",
            title: "All Our Services",
            translateKey: "nav.services.all",
            icon: "dashboard",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [PREMIUM],
            subMenu: [],
          },
          //   {
          //     key: "apps.crypto",
          //     path: "",
          //     title: "demo",
          //     translateKey: "nav.Descriptions.crypto",
          //     icon: "crypto",
          //     type: NAV_ITEM_TYPE_COLLAPSE,
          //     authority: [BASIC,PREMIUM],
          //     subMenu: [
          //       // 	{
          //       // 		key: 'appsCrypto.dashboard',
          //       // 		path: `${APP_PREFIX_PATH}/crypto/dashboard`,
          //       // 		title: 'Dashboard',
          //       // 		translateKey: 'nav.appsCrypto.dashboard',
          //       // 		icon: '',
          //       // 		type: NAV_ITEM_TYPE_ITEM,
          //       // 		authority: [BASIC,PREMIUM],
          //       // 		subMenu: []
          //       // 	},
          //       // 	{
          //       // 		key: 'appsCrypto.portfolio',
          //       // 		path: `${APP_PREFIX_PATH}/crypto/portfolio`,
          //       // 		title: 'Portfolio',
          //       // 		translateKey: 'nav.appsCrypto.portfolio',
          //       // 		icon: '',
          //       // 		type: NAV_ITEM_TYPE_ITEM,
          //       // 		authority: [BASIC,PREMIUM],
          //       // 		subMenu: []
          //       // 	},
          //       // 	{
          //       // 		key: 'appsCrypto.market',
          //       // 		path: `${APP_PREFIX_PATH}/crypto/market`,
          //       // 		title: 'Market',
          //       // 		translateKey: 'nav.appsCrypto.market',
          //       // 		icon: '',
          //       // 		type: NAV_ITEM_TYPE_ITEM,
          //       // 		authority: [BASIC,PREMIUM],
          //       // 		subMenu: []
          //       // 	},
          //       // 	{
          //       // 		key: 'appsCrypto.wallets',
          //       // 		path: `${APP_PREFIX_PATH}/crypto/wallets`,
          //       // 		title: 'Wallets',
          //       // 		translateKey: 'nav.appsCrypto.wallets',
          //       // 		icon: '',
          //       // 		type: NAV_ITEM_TYPE_ITEM,
          //       // 		authority: [BASIC,PREMIUM],
          //       // 		subMenu: []
          //       // 	},
          //     ],
          //   },
          //   {
          //     key: "apps.knowledgeBase",
          //     path: "",
          //     title: "demo",
          //     translateKey: "nav.Ideas.knowledgeBase",
          //     icon: "knowledgeBase",
          //     type: NAV_ITEM_TYPE_COLLAPSE,
          //     authority: [BASIC,PREMIUM],
          //     subMenu: [
          //       // 	{
          //       // 		key: 'appsknowledgeBase.helpCenter',
          //       // 		path: `${APP_PREFIX_PATH}/knowledge-base/help-center`,
          //       // 		title: 'Help Center',
          //       // 		translateKey: 'nav.appsknowledgeBase.helpCenter',
          //       // 		icon: '',
          //       // 		type: NAV_ITEM_TYPE_ITEM,
          //       // 		authority: [BASIC,PREMIUM],
          //       // 		subMenu: []
          //       // 	},
          //       // 	{
          //       // 		key: 'appsknowledgeBase.article',
          //       // 		path: `${APP_PREFIX_PATH}/knowledge-base/article?id=rZjCbSyae5`,
          //       // 		title: 'Article',
          //       // 		translateKey: 'nav.appsknowledgeBase.article',
          //       // 		icon: '',
          //       // 		type: NAV_ITEM_TYPE_ITEM,
          //       // 		authority: [BASIC,PREMIUM],
          //       // 		subMenu: []
          //       // 	},
          //       // 	{
          //       // 		key: 'appsknowledgeBase.manageArticles',
          //       // 		path: `${APP_PREFIX_PATH}/knowledge-base/manage-articles`,
          //       // 		title: 'Manage Articles',
          //       // 		translateKey: 'nav.appsknowledgeBase.manageArticles',
          //       // 		icon: '',
          //       // 		type: NAV_ITEM_TYPE_ITEM,
          //       // 		authority: [BASIC,PREMIUM],
          //       // 		subMenu: []
          //       // 	},
          //       // 	{
          //       // 		key: 'appsknowledgeBase.editArticle',
          //       // 		path: `${APP_PREFIX_PATH}/knowledge-base/edit-article?id=rZjCbSyae5&categoryLabel=Survey&categoryValue=survey`,
          //       // 		title: 'Edit Article',
          //       // 		translateKey: 'nav.appsknowledgeBase.editArticle',
          //       // 		icon: '',
          //       // 		type: NAV_ITEM_TYPE_ITEM,
          //       // 		authority: [BASIC,PREMIUM],
          //       // 		subMenu: []
          //       // 	},
          //     ],
          //   },
          //   {
          //     key: "apps.account",
          //     path: "",
          //     title: "demo",
          //     translateKey: "nav.Titles.account",
          //     icon: "account",
          //     type: NAV_ITEM_TYPE_COLLAPSE,
          //     authority: [BASIC,PREMIUM],
          //     subMenu: [
          //       // 	{
          //       // 		key: 'appsAccount.settings',
          //       // 		path: `${APP_PREFIX_PATH}/account/settings/profile`,
          //       // 		title: 'Settings',
          //       // 		translateKey: 'nav.appsAccount.settings',
          //       // 		icon: '',
          //       // 		type: NAV_ITEM_TYPE_ITEM,
          //       // 		authority: [BASIC,PREMIUM],
          //       // 		subMenu: []
          //       // 	},
          //       // 	{
          //       // 		key: 'appsAccount.invoice',
          //       // 		path: `${APP_PREFIX_PATH}/account/invoice/36223`,
          //       // 		title: 'Invoice',
          //       // 		translateKey: 'nav.appsAccount.invoice',
          //       // 		icon: '',
          //       // 		type: NAV_ITEM_TYPE_ITEM,
          //       // 		authority: [BASIC,PREMIUM],
          //       // 		subMenu: []
          //       // 	},
          //       // 	{
          //       // 		key: 'appsAccount.activityLog',
          //       // 		path: `${APP_PREFIX_PATH}/account/activity-log`,
          //       // 		title: 'Activity Log',
          //       // 		translateKey: 'nav.appsAccount.activityLog',
          //       // 		icon: '',
          //       // 		type: NAV_ITEM_TYPE_ITEM,
          //       // 		authority: [BASIC,PREMIUM],
          //       // 		subMenu: []
          //       // 	},
          //       // 	{
          //       // 		key: 'appsAccount.kycForm',
          //       // 		path: `${APP_PREFIX_PATH}/account/kyc-form`,
          //       // 		title: 'KYC Form',
          //       // 		translateKey: 'nav.appsAccount.kycForm',
          //       // 		icon: '',
          //       // 		type: NAV_ITEM_TYPE_ITEM,
          //       // 		authority: [BASIC,PREMIUM],
          //       // 		subMenu: []
          //       // 	},
          //     ],
          //   },
        ],
      },
      {
        key: "project",
        path: `${PROJECT_MANAGE_PPREFIX_PATH}`,
        title: "PROJECT MANAGEMENT",
        translateKey: "nav.project.root",
        icon: "project",
        type: NAV_ITEM_TYPE_TITLE,
        authority: [STANDARD, PREMIUM, USER],
        subMenu: [
          {
            key: "project.current",
            path: `${PROJECT_MANAGE_PPREFIX_PATH}/current_projects`,
            title: "Current Projects",
            translateKey: "nav.project.current",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "project.past",
            path: `${PROJECT_MANAGE_PPREFIX_PATH}/past_projects`,
            title: "Past Projects",
            translateKey: "nav.project.past",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "project.favorites",
            path: `${PROJECT_MANAGE_PPREFIX_PATH}/favorites`,
            title: "Favorites",
            translateKey: "nav.project.favorites",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "project.top.searched.questions",
            path: `${PROJECT_MANAGE_PPREFIX_PATH}/top_searched_questions`,
            title: "Top Searched Questions",
            translateKey: "nav.project.top_searched_questions",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "project.top.searched.topics",
            path: `${PROJECT_MANAGE_PPREFIX_PATH}/top_searched_topics`,
            title: "Top Searched Topics",
            translateKey: "nav.project.top_searched_topics",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "project.top.searched.services",
            path: `${PROJECT_MANAGE_PPREFIX_PATH}/top_searched_services`,
            title: "Top Searched Services",
            translateKey: "nav.project.top_searched_services",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "project.top.searched.words",
            path: `${PROJECT_MANAGE_PPREFIX_PATH}/top_searched_words`,
            title: "Top Searched Words",
            translateKey: "nav.project.top_searched_words",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "project.top.used.tools",
            path: `${PROJECT_MANAGE_PPREFIX_PATH}/top_used_tools`,
            title: "Top Used Tools",
            translateKey: "nav.project.top_used_tools",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
        ],
      },
      {
        key: "content",
        path: `${CONTENT_ORGANIZER_PREFIX_PATH}`,
        title: "CONTENT ORGANIZER",
        translateKey: "nav.content.root",
        icon: "dataDisplay",
        type: NAV_ITEM_TYPE_TITLE,
        authority: [STANDARD, PREMIUM, USER],
        subMenu: [
          {
            key: "content.videos",
            path: `${CONTENT_ORGANIZER_PREFIX_PATH}/videos`,
            title: "Videos",
            translateKey: "nav.content.videos",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "content.photos",
            path: `${CONTENT_ORGANIZER_PREFIX_PATH}/photos`,
            title: "Photos",
            translateKey: "nav.content.photos",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "content.documents",
            path: `${CONTENT_ORGANIZER_PREFIX_PATH}/documents`,
            title: "Documents",
            translateKey: "nav.content.documents",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
        ],
      },
      {
        key: "communication",
        path: `${COMMUNICATION_PREFIX_PATH}`,
        title: "COMMUNICATION",
        translateKey: "nav.communication",
        icon: "communication",
        type: NAV_ITEM_TYPE_TITLE,
        authority: [STANDARD, PREMIUM, USER],
        subMenu: [
          {
            key: "communication.instagram",
            path: `${COMMUNICATION_PREFIX_PATH}/instagram`,
            title: "Instagram",
            translateKey: "nav.dashboard.communication",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "communication.tikTok",
            path: `${COMMUNICATION_PREFIX_PATH}/tikTok`,
            title: "Tik-Tok",
            translateKey: "nav.dashboard.communication",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "communication.facebook",
            path: `${COMMUNICATION_PREFIX_PATH}/facebook`,
            title: "Facebook",
            translateKey: "nav.dashboard.communication",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "communication.twitter",
            path: `${COMMUNICATION_PREFIX_PATH}/twitter`,
            title: "Twitter",
            translateKey: "nav.dashboard.communication",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "communication.linkedin",
            path: `${COMMUNICATION_PREFIX_PATH}/linkedin`,
            title: "LinkedIn",
            translateKey: "nav.dashboard.communication",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "communication.youtube",
            path: `${COMMUNICATION_PREFIX_PATH}/youtube`,
            title: "Youtube",
            translateKey: "nav.dashboard.communication",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
        ],
      },
      {
        key: "socialMedia",
        path: `${SOCIAL_MEDIA_MANAGER_PREFIX_PATH}`,
        title: "SOCIAL MEDIA MANAGER",
        translateKey: "nav.social_media_manager",
        icon: "socialMedia",
        type: NAV_ITEM_TYPE_TITLE,
        authority: [STANDARD, PREMIUM, USER],
        subMenu: [
          {
            key: "socialMedia.instagram",
            path: `${SOCIAL_MEDIA_MANAGER_PREFIX_PATH}/instagram`,
            title: "Instagram",
            translateKey: "nav.dashboard.socialMedia",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "socialMedia.tikTok",
            path: `${SOCIAL_MEDIA_MANAGER_PREFIX_PATH}/tikTok`,
            title: "Tik-Tok",
            translateKey: "nav.dashboard.socialMedia",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "socialMedia.facebook",
            path: `${SOCIAL_MEDIA_MANAGER_PREFIX_PATH}/facebook`,
            title: "Facebook",
            translateKey: "nav.dashboard.socialMedia",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "socialMedia.twitter",
            path: `${SOCIAL_MEDIA_MANAGER_PREFIX_PATH}/twitter`,
            title: "Twitter",
            translateKey: "nav.dashboard.socialMedia",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "socialMedia.linkedin",
            path: `${SOCIAL_MEDIA_MANAGER_PREFIX_PATH}/linkedin`,
            title: "LinkedIn",
            translateKey: "nav.dashboard.socialMedia",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "socialMedia.youtube",
            path: `${SOCIAL_MEDIA_MANAGER_PREFIX_PATH}/youtube`,
            title: "Youtube",
            translateKey: "nav.dashboard.socialMedia",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
        ],
      },
      {
        key: "lead_generation",
        path: `${LEAD_GENERATION_PATH}`,
        title: "LEAD GENERATION",
        translateKey: "nav.lead_generation.root",
        icon: "welcome",
        type: NAV_ITEM_TYPE_TITLE,
        authority: [STANDARD, PREMIUM, USER],
        subMenu: [
          {
            key: "lead_generation.real_estate",
            path: `${LEAD_GENERATION_PATH}/real_estate`,
            title: "Real Estate",
            translateKey: "nav.lead_generation.real_estate",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "lead_generation.interior_design",
            path: `${LEAD_GENERATION_PATH}/interior_design`,
            title: "Interior Design",
            translateKey: "nav.lead_generation.interior_design",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "lead_generation.developer",
            path: `${LEAD_GENERATION_PATH}/developer`,
            title: "Developer",
            translateKey: "nav.lead_generation.developer",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
        ],
      },
      {
        key: "ad_creatives",
        path: `${AD_CREATIVES_PATH}`,
        title: "LEAD GENERATION",
        translateKey: "nav.ad_creatives.root",
        icon: "sharedComponentDoc",
        type: NAV_ITEM_TYPE_TITLE,
        authority: [STANDARD, PREMIUM, USER],
        subMenu: [
          {
            key: "ad_creatives.video",
            path: `${AD_CREATIVES_PATH}/video`,
            title: "Video Ads",
            translateKey: "nav.ad_creatives.video",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "ad_creatives.picture",
            path: `${AD_CREATIVES_PATH}/picture`,
            title: "Picture Ads",
            translateKey: "nav.ad_creatives.picture",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
        ],
      },
      {
        key: "analytics",
        path: `${AI_ANALYTICS_PREFIX_PATH}`,
        title: "AI ANALYTICS",
        translateKey: "nav.ai_analytics.root",
        icon: "graph",
        type: NAV_ITEM_TYPE_TITLE,
        authority: [STANDARD, PREMIUM, USER],
        subMenu: [
          {
            key: "analytics.allReports",
            path: `${AI_ANALYTICS_PREFIX_PATH}/allReports`,
            title: "All Reports",
            translateKey: "nav.ai_analytics.allReports",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "analytics.pastReports",
            path: `${AI_ANALYTICS_PREFIX_PATH}/pastReports`,
            title: "Past Reports",
            translateKey: "nav.ai_analytics.pastReports",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "analytics.industry",
            path: `${AI_ANALYTICS_PREFIX_PATH}/industry`,
            title: "Industry Benchmarking",
            translateKey: "nav.ai_analytics.industry",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "analytics.statistics",
            path: `${AI_ANALYTICS_PREFIX_PATH}/statistics`,
            title: "Post Statistics",
            translateKey: "nav.ai_analytics.statistics",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
        ],
      },
      {
        key: "knowledgeBase",
        path: `${KNOWLEDGE_BASE_PREFIX_PATH}`,
        title: "KNOWLEDGE BASE",
        translateKey: "nav.knowledgeBase.root",
        icon: "knowledgeBase",
        type: NAV_ITEM_TYPE_TITLE,
        authority: [STANDARD, PREMIUM, USER],
        subMenu: [
          {
            key: "knowledgeBase.articles",
            path: `${KNOWLEDGE_BASE_PREFIX_PATH}/articles`,
            title: "Articles",
            translateKey: "nav.knowledgeBase.articles",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "knowledgeBase.upcomingServices",
            path: `${KNOWLEDGE_BASE_PREFIX_PATH}/upcomingServices`,
            title: "Upcoming Services",
            translateKey: "nav.knowledgeBase.services",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "knowledgeBase.roadmap",
            path: `${KNOWLEDGE_BASE_PREFIX_PATH}/roadmap`,
            title: "Roadmap",
            translateKey: "nav.knowledgeBase.roadmap",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "knowledgeBase.inspiration",
            path: `${KNOWLEDGE_BASE_PREFIX_PATH}/inspiration`,
            title: "Inspiration",
            translateKey: "nav.knowledgeBase.inspiration",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "knowledgeBase.community",
            path: `${KNOWLEDGE_BASE_PREFIX_PATH}/community`,
            title: "Community",
            translateKey: "nav.knowledgeBase.community",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "knowledgeBase.resources",
            path: `${KNOWLEDGE_BASE_PREFIX_PATH}/resources`,
            title: "Resources",
            translateKey: "nav.knowledgeBase.resources",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
        ],
      },
      {
        key: "newsletter",
        path: `${NEWSLETTER_RELEASE_PREFIX_PATH}`,
        title: "NEWSLETTER RELEASE",
        translateKey: "nav.newsletter.root",
        icon: "envelopeOpen",
        type: NAV_ITEM_TYPE_TITLE,
        authority: [STANDARD, PREMIUM, USER],
        subMenu: [
          {
            key: "newsletter.campaign",
            path: `${NEWSLETTER_RELEASE_PREFIX_PATH}/campaign`,
            title: "Campaign",
            translateKey: "nav.newsletter.campaign",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "newsletter.audiences",
            path: `${NEWSLETTER_RELEASE_PREFIX_PATH}/audiences`,
            title: "Audiences",
            translateKey: "nav.newsletter.audiences",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
        ],
      },
      {
        key: "royaltyProgram",
        path: `${ROYALTY_PROGRAM_PREFIX_PATH}`,
        title: "ROYALTY PROGRAM",
        translateKey: "nav.royaltyProgram.root",
        icon: "gift",
        type: NAV_ITEM_TYPE_TITLE,
        authority: [STANDARD, PREMIUM, USER],
        subMenu: [
          {
            key: "royaltyProgram.referral",
            path: `${ROYALTY_PROGRAM_PREFIX_PATH}/referral`,
            title: "Referral Link",
            translateKey: "nav.royaltyProgram.referral",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "royaltyProgram.trackActivity",
            path: `${ROYALTY_PROGRAM_PREFIX_PATH}/trackActivity`,
            title: "Track User Activity",
            translateKey: "nav.royaltyProgram.track",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "royaltyProgram.rewards",
            path: `${ROYALTY_PROGRAM_PREFIX_PATH}/rewards`,
            title: "Rewards & Milestones",
            translateKey: "nav.royaltyProgram.rewards",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "royaltyProgram.abr",
            path: `${ROYALTY_PROGRAM_PREFIX_PATH}/abr`,
            title: "Action Based Rewards",
            translateKey: "nav.royaltyProgram.abr",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "royaltyProgram.badge",
            path: `${ROYALTY_PROGRAM_PREFIX_PATH}/badge`,
            title: "Badge Level",
            translateKey: "nav.royaltyProgram.badge",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "royaltyProgram.lcr",
            path: `${ROYALTY_PROGRAM_PREFIX_PATH}/lcr`,
            title: "Loyalty Customer Rating",
            translateKey: "nav.royaltyProgram.lcr",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
        ],
      },
      {
        key: "team",
        path: `${TEAM_PREFIX_PATH}`,
        title: "TEAM",
        translateKey: "nav.team.root",
        icon: "crm",
        type: NAV_ITEM_TYPE_TITLE,
        authority: [STANDARD, PREMIUM, USER],
        subMenu: [
          {
            key: "team.upgradePackages",
            path: `${TEAM_PREFIX_PATH}/upgradePackages`,
            title: "Upgrade Packages",
            translateKey: "nav.team.upgradePackages",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
        ],
      },
      {
        key: "support",
        path: `${SUPPORT_RESOURCES_PREFIX_PATH}`,
        title: "SUPPORT & RESOURCES",
        translateKey: "nav.support.root",
        icon: "support",
        type: NAV_ITEM_TYPE_TITLE,
        authority: [STANDARD, PREMIUM, USER],
        subMenu: [
          {
            key: "support.blogs",
            path: `${SUPPORT_RESOURCES_PREFIX_PATH}/blogs`,
            title: "Blogs",
            translateKey: "nav.support.blogs",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: false,
          },
          {
            key: "support.videoGuides",
            path: `${SUPPORT_RESOURCES_PREFIX_PATH}/videoGuides`,
            title: "Video Guides",
            translateKey: "nav.support.videoGuides",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: false,
          },
          {
            key: "support.faq",
            path: `${SUPPORT_RESOURCES_PREFIX_PATH}/faq`,
            title: "FAQ",
            translateKey: "nav.support.faq",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
          {
            key: "support.contact",
            path: `${SUPPORT_RESOURCES_PREFIX_PATH}/contact`,
            title: "Contact Us",
            translateKey: "nav.support.contactUs",
            icon: "apps",
            type: NAV_ITEM_TYPE_COLLAPSE,
            authority: [STANDARD, PREMIUM, USER],
            subMenu: [],
            disabled: true,
          },
        ],
      },
    ],
  },
];

export default appsNavigationConfig;

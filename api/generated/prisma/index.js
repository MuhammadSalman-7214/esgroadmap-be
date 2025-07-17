
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UniqueFactorsTableScalarFieldEnum = {
  KPI_Report_Date: 'KPI_Report_Date',
  Company__NON_NULL_Total_: 'Company__NON_NULL_Total_',
  Company__NON_NULL_Unique_: 'Company__NON_NULL_Unique_',
  Member_of_the_S_P500__YES_Total_: 'Member_of_the_S_P500__YES_Total_',
  Member_of_the_Russell_1000_Index__YES_Total_: 'Member_of_the_Russell_1000_Index__YES_Total_',
  Ticker_s___NON_NULL_Total_: 'Ticker_s___NON_NULL_Total_',
  Ticker_s___NON_NULL_Unique_: 'Ticker_s___NON_NULL_Unique_',
  Country__NON_NULL_Total_: 'Country__NON_NULL_Total_',
  Country__NON_NULL_Unique_: 'Country__NON_NULL_Unique_',
  sector_code__1__NAICS___NON_NULL_Unique_: 'sector_code__1__NAICS___NON_NULL_Unique_',
  sector_code__2__NAICS___NON_NULL_Unique_: 'sector_code__2__NAICS___NON_NULL_Unique_',
  sector_code__3__NAICS___NON_NULL_Unique_: 'sector_code__3__NAICS___NON_NULL_Unique_',
  sector_code__4__NAICS___NON_NULL_Unique_: 'sector_code__4__NAICS___NON_NULL_Unique_',
  sector_code__5__NAICS___NON_NULL_Unique_: 'sector_code__5__NAICS___NON_NULL_Unique_',
  sector_codes_all__NAICS___NON_NULL_Unique_: 'sector_codes_all__NAICS___NON_NULL_Unique_',
  ArticleTargetYear__NON_NULL_Unique_: 'ArticleTargetYear__NON_NULL_Unique_',
  Source_Date__NON_NULL_Unique_: 'Source_Date__NON_NULL_Unique_',
  PressReleaseYear__NON_NULL_Unique_: 'PressReleaseYear__NON_NULL_Unique_',
  Target_sentence__NON_NULL_Total_: 'Target_sentence__NON_NULL_Total_',
  Target_sentence__NON_NULL_Unique_: 'Target_sentence__NON_NULL_Unique_',
  Targetyear_s___NON_NULL_Unique_: 'Targetyear_s___NON_NULL_Unique_',
  sentence_carbon__1_Total_: 'sentence_carbon__1_Total_',
  sentence_gender__1_Total_: 'sentence_gender__1_Total_',
  sentence_renewables__1_Total_: 'sentence_renewables__1_Total_',
  sentence_suppliers__1_Total_: 'sentence_suppliers__1_Total_',
  sentence_water__1_Total_: 'sentence_water__1_Total_',
  sentence_waste__1_Total_: 'sentence_waste__1_Total_',
  sentence_other__1_Total_: 'sentence_other__1_Total_',
  id: 'id'
};

exports.Prisma.CompanyUniverseScalarFieldEnum = {
  Company: 'Company',
  x: 'x',
  Member_of_the_S_P500: 'Member_of_the_S_P500',
  Member_of_the_Russell_1000_Index: 'Member_of_the_Russell_1000_Index',
  source: 'source',
  Scraping_code_set_up__: 'Scraping_code_set_up__',
  Ticker_s_: 'Ticker_s_',
  PR_Agency: 'PR_Agency',
  Example_2020_company_PR_agency_press_release_URL: 'Example_2020_company_PR_agency_press_release_URL',
  Domain: 'Domain',
  Company_global_main_press___news_release_site_URL: 'Company_global_main_press___news_release_site_URL',
  Subscribed_to_press_releases_esgroadmap_gmail_com__: 'Subscribed_to_press_releases_esgroadmap_gmail_com__',
  Subscribed_to_press_releases_jameskijani_gmail_com__: 'Subscribed_to_press_releases_jameskijani_gmail_com__',
  Plain_text_press_release_subscription_possible___yes_no_: 'Plain_text_press_release_subscription_possible___yes_no_',
  Company_annual_reports_page_URL: 'Company_annual_reports_page_URL',
  Company_annual_report_2020_URL_of_pdf_document__including_10_k_: 'Company_annual_report_2020_URL_of_pdf_document__including_10_k_',
  Company_sustainability___ESG_reports_page_URL: 'Company_sustainability___ESG_reports_page_URL',
  Company_Sustainability___ESG_report_2020_URL_of_pdf_document: 'Company_Sustainability___ESG_report_2020_URL_of_pdf_document',
  Country: 'Country',
  sector_code__1__NAICS_: 'sector_code__1__NAICS_',
  sector_name__1__NAICS_: 'sector_name__1__NAICS_',
  sector_code__2__NAICS_: 'sector_code__2__NAICS_',
  sector_name__2__NAICS_: 'sector_name__2__NAICS_',
  sector_code__3__NAICS_: 'sector_code__3__NAICS_',
  sector_name__3__NAICS_: 'sector_name__3__NAICS_',
  sector_code__4__NAICS_: 'sector_code__4__NAICS_',
  sector_name__4__NAICS_: 'sector_name__4__NAICS_',
  sector_code__5__NAICS_: 'sector_code__5__NAICS_',
  sector_name__5__NAICS_: 'sector_name__5__NAICS_',
  WORKED_BY_: 'WORKED_BY_',
  COMMENTS___NOTES: 'COMMENTS___NOTES',
  Carbon_sentence_available__: 'Carbon_sentence_available__'
};

exports.Prisma.CompanyDataScalarFieldEnum = {
  company: 'company',
  Member_of_the_S_P500: 'Member_of_the_S_P500',
  Member_of_the_Russell_1000_Index: 'Member_of_the_Russell_1000_Index',
  Ticker_s_: 'Ticker_s_',
  PR_Agency: 'PR_Agency',
  Example_2020_company_PR_agency_press_release_URL: 'Example_2020_company_PR_agency_press_release_URL',
  Company_Global___Main_Website_URL: 'Company_Global___Main_Website_URL',
  Company_global_main_press___news_release_site_URL: 'Company_global_main_press___news_release_site_URL',
  Company_annual_reports_page_URL: 'Company_annual_reports_page_URL',
  Company_annual___financial_report_2020_URL_of_pdf_document: 'Company_annual___financial_report_2020_URL_of_pdf_document',
  Company_sustainability___ESG_reports_page_URL: 'Company_sustainability___ESG_reports_page_URL',
  Company_Sustainability___ESG_report_2020_URL_of_pdf_document: 'Company_Sustainability___ESG_report_2020_URL_of_pdf_document',
  Country: 'Country',
  sector_code__1__NAICS_: 'sector_code__1__NAICS_',
  sector_name__1__NAICS_: 'sector_name__1__NAICS_',
  sector_code__2__NAICS_: 'sector_code__2__NAICS_',
  sector_name__2__NAICS_: 'sector_name__2__NAICS_',
  sector_code__3__NAICS_: 'sector_code__3__NAICS_',
  sector_name__3__NAICS_: 'sector_name__3__NAICS_',
  sector_code__4__NAICS_: 'sector_code__4__NAICS_',
  sector_name__4__NAICS_: 'sector_name__4__NAICS_',
  sector_code__5__NAICS_: 'sector_code__5__NAICS_',
  sector_name__5__NAICS_: 'sector_name__5__NAICS_',
  sector_codes_all__NAICS_: 'sector_codes_all__NAICS_',
  sector_name_all__NAICS_: 'sector_name_all__NAICS_',
  id: 'id'
};

exports.Prisma.CompanyData2ScalarFieldEnum = {
  company: 'company',
  Member_of_the_S_P500: 'Member_of_the_S_P500',
  Member_of_the_Russell_1000_Index: 'Member_of_the_Russell_1000_Index',
  Ticker_s_: 'Ticker_s_',
  PR_Agency: 'PR_Agency',
  Example_2020_company_PR_agency_press_release_URL: 'Example_2020_company_PR_agency_press_release_URL',
  Company_Global___Main_Website_URL: 'Company_Global___Main_Website_URL',
  Company_global_main_press___news_release_site_URL: 'Company_global_main_press___news_release_site_URL',
  Company_annual_reports_page_URL: 'Company_annual_reports_page_URL',
  Company_annual___financial_report_2020_URL_of_pdf_document: 'Company_annual___financial_report_2020_URL_of_pdf_document',
  Company_sustainability___ESG_reports_page_URL: 'Company_sustainability___ESG_reports_page_URL',
  Company_Sustainability___ESG_report_2020_URL_of_pdf_document: 'Company_Sustainability___ESG_report_2020_URL_of_pdf_document',
  Country: 'Country',
  sector_code__1__NAICS_: 'sector_code__1__NAICS_',
  sector_name__1__NAICS_: 'sector_name__1__NAICS_',
  sector_code__2__NAICS_: 'sector_code__2__NAICS_',
  sector_name__2__NAICS_: 'sector_name__2__NAICS_',
  sector_code__3__NAICS_: 'sector_code__3__NAICS_',
  sector_name__3__NAICS_: 'sector_name__3__NAICS_',
  sector_code__4__NAICS_: 'sector_code__4__NAICS_',
  sector_name__4__NAICS_: 'sector_name__4__NAICS_',
  sector_code__5__NAICS_: 'sector_code__5__NAICS_',
  sector_name__5__NAICS_: 'sector_name__5__NAICS_',
  sector_codes_all__NAICS_: 'sector_codes_all__NAICS_',
  sector_name_all__NAICS_: 'sector_name_all__NAICS_',
  NAICS__1_GIG: 'NAICS__1_GIG',
  NAICS__1_GIG_name: 'NAICS__1_GIG_name',
  id: 'id'
};

exports.Prisma.PercentageTableScalarFieldEnum = {
  KPI_Report_Date: 'KPI_Report_Date',
  Company: 'Company',
  Member_of_the_S_P500: 'Member_of_the_S_P500',
  Member_of_the_Russell_1000_Index: 'Member_of_the_Russell_1000_Index',
  Ticker_s_: 'Ticker_s_',
  PR_Agency: 'PR_Agency',
  Example_2020_company_PR_agency_press_release_URL: 'Example_2020_company_PR_agency_press_release_URL',
  Company_Global___Main_Website_URL: 'Company_Global___Main_Website_URL',
  Company_global_main_press___news_release_site_URL: 'Company_global_main_press___news_release_site_URL',
  Company_annual_reports_page_URL: 'Company_annual_reports_page_URL',
  Company_annual___financial_report_2020_URL_of_pdf_document: 'Company_annual___financial_report_2020_URL_of_pdf_document',
  Company_sustainability___ESG_reports_page_URL: 'Company_sustainability___ESG_reports_page_URL',
  Company_Sustainability___ESG_report_2020_URL_of_pdf_document: 'Company_Sustainability___ESG_report_2020_URL_of_pdf_document',
  Country: 'Country',
  sector_code__1__NAICS_: 'sector_code__1__NAICS_',
  sector_name__1__NAICS_: 'sector_name__1__NAICS_',
  sector_code__2__NAICS_: 'sector_code__2__NAICS_',
  sector_name__2__NAICS_: 'sector_name__2__NAICS_',
  sector_code__3__NAICS_: 'sector_code__3__NAICS_',
  sector_name__3__NAICS_: 'sector_name__3__NAICS_',
  sector_code__4__NAICS_: 'sector_code__4__NAICS_',
  sector_name__4__NAICS_: 'sector_name__4__NAICS_',
  sector_code__5__NAICS_: 'sector_code__5__NAICS_',
  sector_name__5__NAICS_: 'sector_name__5__NAICS_',
  sector_codes_all__NAICS_: 'sector_codes_all__NAICS_',
  sector_name_all__NAICS_: 'sector_name_all__NAICS_',
  climateaction100: 'climateaction100',
  emails: 'emails',
  full_text: 'full_text',
  Source_link: 'Source_link',
  pr_site: 'pr_site',
  release_date: 'release_date',
  source: 'source',
  ticker: 'ticker',
  title: 'title',
  ArticleTargetYear: 'ArticleTargetYear',
  PressReleaseFullCleanstep1: 'PressReleaseFullCleanstep1',
  PressReleaseFullClean: 'PressReleaseFullClean',
  Source_Date: 'Source_Date',
  Annual_Report_Date: 'Annual_Report_Date',
  PressReleaseYear: 'PressReleaseYear',
  PressReleaseMonth: 'PressReleaseMonth',
  Target_sentence: 'Target_sentence',
  SentenceTargetYear: 'SentenceTargetYear',
  Targetyear_s_: 'Targetyear_s_',
  sentence_carbon: 'sentence_carbon',
  sentence_gender: 'sentence_gender',
  sentence_renewables: 'sentence_renewables',
  sentence_suppliers: 'sentence_suppliers',
  sentence_water: 'sentence_water',
  sentence_waste: 'sentence_waste',
  sentence_other: 'sentence_other',
  id: 'id'
};

exports.Prisma.RoadmapCarbonScalarFieldEnum = {
  Company: 'Company',
  Ticker_s_: 'Ticker_s_',
  PR_Agency: 'PR_Agency',
  Company_Main_Website_URL: 'Company_Main_Website_URL',
  Company_Source_site_URL: 'Company_Source_site_URL',
  Country: 'Country',
  sector_code__1__NAICS_: 'sector_code__1__NAICS_',
  sector_name__1__NAICS_: 'sector_name__1__NAICS_',
  sector_code__2__NAICS_: 'sector_code__2__NAICS_',
  sector_name__2__NAICS_: 'sector_name__2__NAICS_',
  sector_code__3__NAICS_: 'sector_code__3__NAICS_',
  sector_name__3__NAICS_: 'sector_name__3__NAICS_',
  sector_code__4__NAICS_: 'sector_code__4__NAICS_',
  sector_name__4__NAICS_: 'sector_name__4__NAICS_',
  sector_code__5__NAICS_: 'sector_code__5__NAICS_',
  sector_name__5__NAICS_: 'sector_name__5__NAICS_',
  S_P500member: 'S_P500member',
  Russell_1000_member: 'Russell_1000_member',
  Source_link_1: 'Source_link_1',
  Source_date_1: 'Source_date_1',
  Source_sentence_1: 'Source_sentence_1',
  Targetyear_s__1: 'Targetyear_s__1',
  Source_link_2: 'Source_link_2',
  Source_date_2: 'Source_date_2',
  Source_sentence_2: 'Source_sentence_2',
  Targetyear_s__2: 'Targetyear_s__2',
  Source_link_3: 'Source_link_3',
  Source_date_3: 'Source_date_3',
  Source_sentence_3: 'Source_sentence_3',
  Targetyear_s__3: 'Targetyear_s__3',
  Source_link_4: 'Source_link_4',
  Source_date_4: 'Source_date_4',
  Source_sentence_4: 'Source_sentence_4',
  Targetyear_s__4: 'Targetyear_s__4',
  Source_link_5: 'Source_link_5',
  Source_date_5: 'Source_date_5',
  Source_sentence_5: 'Source_sentence_5',
  Targetyear_s__5: 'Targetyear_s__5',
  Source_link_6: 'Source_link_6',
  Source_date_6: 'Source_date_6',
  Source_sentence_6: 'Source_sentence_6',
  Targetyear_s__6: 'Targetyear_s__6',
  id: 'id'
};

exports.Prisma.SentenceAllScalarFieldEnum = {
  release_date: 'release_date',
  Targetyear_s_: 'Targetyear_s_',
  pr_site: 'pr_site',
  ArticleTargetYear: 'ArticleTargetYear',
  sentence_carbon: 'sentence_carbon',
  full_text: 'full_text',
  PressReleaseMonth: 'PressReleaseMonth',
  PressReleaseFullClean: 'PressReleaseFullClean',
  sentence_renewables: 'sentence_renewables',
  sentence_suppliers: 'sentence_suppliers',
  sentence_gender: 'sentence_gender',
  Company: 'Company',
  Annual_Report_Date: 'Annual_Report_Date',
  title: 'title',
  emails: 'emails',
  sentence_other: 'sentence_other',
  Source_link: 'Source_link',
  Source_Date: 'Source_Date',
  PressReleaseFullCleanstep1: 'PressReleaseFullCleanstep1',
  sentence_waste: 'sentence_waste',
  source: 'source',
  sentence_water: 'sentence_water',
  PressReleaseYear: 'PressReleaseYear',
  ticker: 'ticker',
  SentenceTargetYear: 'SentenceTargetYear',
  Target_sentence: 'Target_sentence',
  upload_date: 'upload_date',
  id: 'id',
  PageURL: 'PageURL',
  DocURL: 'DocURL',
  DocTitle: 'DocTitle',
  DocName: 'DocName',
  Target_Sentence_Page: 'Target_Sentence_Page'
};

exports.Prisma.TargetSentenceScalarFieldEnum = {
  Company: 'Company',
  companylist: 'companylist',
  Ticker_s_: 'Ticker_s_',
  PR_Agency: 'PR_Agency',
  Example_2020_company_PR_agency_press_release_URL: 'Example_2020_company_PR_agency_press_release_URL',
  Company_Main_Website_URL: 'Company_Main_Website_URL',
  Company_press_release_site_URL: 'Company_press_release_site_URL',
  Country: 'Country',
  sector_code__1__NAICS_: 'sector_code__1__NAICS_',
  sector_name__1__NAICS_: 'sector_name__1__NAICS_',
  sector_code__2__NAICS_: 'sector_code__2__NAICS_',
  sector_name__2__NAICS_: 'sector_name__2__NAICS_',
  sector_code__3__NAICS_: 'sector_code__3__NAICS_',
  sector_name__3__NAICS_: 'sector_name__3__NAICS_',
  sector_code__4__NAICS_: 'sector_code__4__NAICS_',
  sector_name__4__NAICS_: 'sector_name__4__NAICS_',
  sector_code__5__NAICS_: 'sector_code__5__NAICS_',
  sector_name__5__NAICS_: 'sector_name__5__NAICS_',
  S_P500member: 'S_P500member',
  Russell_1000_member: 'Russell_1000_member',
  emails: 'emails',
  full_text: 'full_text',
  Source_link: 'Source_link',
  pr_site: 'pr_site',
  release_date: 'release_date',
  source: 'source',
  ticker: 'ticker',
  title: 'title',
  ArticleTargetYear: 'ArticleTargetYear',
  PressReleaseFullCleanstep1: 'PressReleaseFullCleanstep1',
  PressReleaseFullClean: 'PressReleaseFullClean',
  Source_date: 'Source_date',
  PressReleaseYear: 'PressReleaseYear',
  PressReleaseMonth: 'PressReleaseMonth',
  Target_sentence: 'Target_sentence',
  SentenceTargetYear: 'SentenceTargetYear',
  Targetyear_s_: 'Targetyear_s_',
  sentence_carbon: 'sentence_carbon',
  sentence_gender: 'sentence_gender',
  sentence_renewables: 'sentence_renewables',
  sentence_suppliers: 'sentence_suppliers',
  sentence_water: 'sentence_water',
  Primarysource: 'Primarysource',
  id: 'id'
};

exports.Prisma.TestableScalarFieldEnum = {
  firstname: 'firstname',
  surname: 'surname',
  city: 'city',
  country: 'country',
  id: 'id'
};

exports.Prisma.Wp_actionscheduler_actionsScalarFieldEnum = {
  action_id: 'action_id',
  hook: 'hook',
  status: 'status',
  scheduled_date_gmt: 'scheduled_date_gmt',
  scheduled_date_local: 'scheduled_date_local',
  args: 'args',
  schedule: 'schedule',
  group_id: 'group_id',
  attempts: 'attempts',
  last_attempt_gmt: 'last_attempt_gmt',
  last_attempt_local: 'last_attempt_local',
  claim_id: 'claim_id',
  extended_args: 'extended_args'
};

exports.Prisma.Wp_actionscheduler_claimsScalarFieldEnum = {
  claim_id: 'claim_id',
  date_created_gmt: 'date_created_gmt'
};

exports.Prisma.Wp_actionscheduler_groupsScalarFieldEnum = {
  group_id: 'group_id',
  slug: 'slug'
};

exports.Prisma.Wp_actionscheduler_logsScalarFieldEnum = {
  log_id: 'log_id',
  action_id: 'action_id',
  message: 'message',
  log_date_gmt: 'log_date_gmt',
  log_date_local: 'log_date_local'
};

exports.Prisma.Wp_aioseo_notificationsScalarFieldEnum = {
  id: 'id',
  slug: 'slug',
  title: 'title',
  content: 'content',
  type: 'type',
  level: 'level',
  notification_id: 'notification_id',
  notification_name: 'notification_name',
  start: 'start',
  end: 'end',
  button1_label: 'button1_label',
  button1_action: 'button1_action',
  button2_label: 'button2_label',
  button2_action: 'button2_action',
  dismissed: 'dismissed',
  created: 'created',
  updated: 'updated'
};

exports.Prisma.Wp_aioseo_postsScalarFieldEnum = {
  id: 'id',
  post_id: 'post_id',
  title: 'title',
  description: 'description',
  keywords: 'keywords',
  keyphrases: 'keyphrases',
  page_analysis: 'page_analysis',
  canonical_url: 'canonical_url',
  og_title: 'og_title',
  og_description: 'og_description',
  og_object_type: 'og_object_type',
  og_image_type: 'og_image_type',
  og_image_custom_url: 'og_image_custom_url',
  og_image_custom_fields: 'og_image_custom_fields',
  og_custom_image_width: 'og_custom_image_width',
  og_custom_image_height: 'og_custom_image_height',
  og_video: 'og_video',
  og_custom_url: 'og_custom_url',
  og_article_section: 'og_article_section',
  og_article_tags: 'og_article_tags',
  twitter_use_og: 'twitter_use_og',
  twitter_card: 'twitter_card',
  twitter_image_type: 'twitter_image_type',
  twitter_image_custom_url: 'twitter_image_custom_url',
  twitter_image_custom_fields: 'twitter_image_custom_fields',
  twitter_title: 'twitter_title',
  twitter_description: 'twitter_description',
  seo_score: 'seo_score',
  schema_type: 'schema_type',
  schema_type_options: 'schema_type_options',
  pillar_content: 'pillar_content',
  robots_default: 'robots_default',
  robots_noindex: 'robots_noindex',
  robots_noarchive: 'robots_noarchive',
  robots_nosnippet: 'robots_nosnippet',
  robots_nofollow: 'robots_nofollow',
  robots_noimageindex: 'robots_noimageindex',
  robots_noodp: 'robots_noodp',
  robots_notranslate: 'robots_notranslate',
  robots_max_snippet: 'robots_max_snippet',
  robots_max_videopreview: 'robots_max_videopreview',
  robots_max_imagepreview: 'robots_max_imagepreview',
  tabs: 'tabs',
  images: 'images',
  image_scan_date: 'image_scan_date',
  priority: 'priority',
  frequency: 'frequency',
  videos: 'videos',
  video_thumbnail: 'video_thumbnail',
  video_scan_date: 'video_scan_date',
  local_seo: 'local_seo',
  created: 'created',
  updated: 'updated'
};

exports.Prisma.Wp_commentmetaScalarFieldEnum = {
  meta_id: 'meta_id',
  comment_id: 'comment_id',
  meta_key: 'meta_key',
  meta_value: 'meta_value'
};

exports.Prisma.Wp_commentsScalarFieldEnum = {
  comment_ID: 'comment_ID',
  comment_post_ID: 'comment_post_ID',
  comment_author: 'comment_author',
  comment_author_email: 'comment_author_email',
  comment_author_url: 'comment_author_url',
  comment_author_IP: 'comment_author_IP',
  comment_date: 'comment_date',
  comment_date_gmt: 'comment_date_gmt',
  comment_content: 'comment_content',
  comment_karma: 'comment_karma',
  comment_approved: 'comment_approved',
  comment_agent: 'comment_agent',
  comment_type: 'comment_type',
  comment_parent: 'comment_parent',
  user_id: 'user_id'
};

exports.Prisma.Wp_linksScalarFieldEnum = {
  link_id: 'link_id',
  link_url: 'link_url',
  link_name: 'link_name',
  link_image: 'link_image',
  link_target: 'link_target',
  link_description: 'link_description',
  link_visible: 'link_visible',
  link_owner: 'link_owner',
  link_rating: 'link_rating',
  link_updated: 'link_updated',
  link_rel: 'link_rel',
  link_notes: 'link_notes',
  link_rss: 'link_rss'
};

exports.Prisma.Wp_nextend2_image_storageScalarFieldEnum = {
  id: 'id',
  hash: 'hash',
  image: 'image',
  value: 'value'
};

exports.Prisma.Wp_nextend2_section_storageScalarFieldEnum = {
  id: 'id',
  application: 'application',
  section: 'section',
  referencekey: 'referencekey',
  value: 'value',
  system: 'system',
  editable: 'editable'
};

exports.Prisma.Wp_nextend2_smartslider3_generatorsScalarFieldEnum = {
  id: 'id',
  group: 'group',
  type: 'type',
  params: 'params'
};

exports.Prisma.Wp_nextend2_smartslider3_slidersScalarFieldEnum = {
  id: 'id',
  alias: 'alias',
  title: 'title',
  type: 'type',
  params: 'params',
  status: 'status',
  time: 'time',
  thumbnail: 'thumbnail',
  ordering: 'ordering'
};

exports.Prisma.Wp_nextend2_smartslider3_sliders_xrefScalarFieldEnum = {
  group_id: 'group_id',
  slider_id: 'slider_id',
  ordering: 'ordering'
};

exports.Prisma.Wp_nextend2_smartslider3_slidesScalarFieldEnum = {
  id: 'id',
  title: 'title',
  slider: 'slider',
  publish_up: 'publish_up',
  publish_down: 'publish_down',
  published: 'published',
  first: 'first',
  slide: 'slide',
  description: 'description',
  thumbnail: 'thumbnail',
  params: 'params',
  ordering: 'ordering',
  generator_id: 'generator_id'
};

exports.Prisma.Wp_optionsScalarFieldEnum = {
  option_id: 'option_id',
  option_name: 'option_name',
  option_value: 'option_value',
  autoload: 'autoload'
};

exports.Prisma.Wp_postmetaScalarFieldEnum = {
  meta_id: 'meta_id',
  post_id: 'post_id',
  meta_key: 'meta_key',
  meta_value: 'meta_value'
};

exports.Prisma.Wp_postsScalarFieldEnum = {
  ID: 'ID',
  post_author: 'post_author',
  post_date: 'post_date',
  post_date_gmt: 'post_date_gmt',
  post_content: 'post_content',
  post_title: 'post_title',
  post_excerpt: 'post_excerpt',
  post_status: 'post_status',
  comment_status: 'comment_status',
  ping_status: 'ping_status',
  post_password: 'post_password',
  post_name: 'post_name',
  to_ping: 'to_ping',
  pinged: 'pinged',
  post_modified: 'post_modified',
  post_modified_gmt: 'post_modified_gmt',
  post_content_filtered: 'post_content_filtered',
  post_parent: 'post_parent',
  guid: 'guid',
  menu_order: 'menu_order',
  post_type: 'post_type',
  post_mime_type: 'post_mime_type',
  comment_count: 'comment_count'
};

exports.Prisma.Wp_term_relationshipsScalarFieldEnum = {
  object_id: 'object_id',
  term_taxonomy_id: 'term_taxonomy_id',
  term_order: 'term_order'
};

exports.Prisma.Wp_term_taxonomyScalarFieldEnum = {
  term_taxonomy_id: 'term_taxonomy_id',
  term_id: 'term_id',
  taxonomy: 'taxonomy',
  description: 'description',
  parent: 'parent',
  count: 'count'
};

exports.Prisma.Wp_termmetaScalarFieldEnum = {
  meta_id: 'meta_id',
  term_id: 'term_id',
  meta_key: 'meta_key',
  meta_value: 'meta_value'
};

exports.Prisma.Wp_termsScalarFieldEnum = {
  term_id: 'term_id',
  name: 'name',
  slug: 'slug',
  term_group: 'term_group'
};

exports.Prisma.Wp_um_metadataScalarFieldEnum = {
  umeta_id: 'umeta_id',
  user_id: 'user_id',
  um_key: 'um_key',
  um_value: 'um_value'
};

exports.Prisma.Wp_user_registration_sessionsScalarFieldEnum = {
  session_id: 'session_id',
  session_key: 'session_key',
  session_value: 'session_value',
  session_expiry: 'session_expiry'
};

exports.Prisma.Wp_usermetaScalarFieldEnum = {
  umeta_id: 'umeta_id',
  user_id: 'user_id',
  meta_key: 'meta_key',
  meta_value: 'meta_value'
};

exports.Prisma.Wp_usersScalarFieldEnum = {
  ID: 'ID',
  user_login: 'user_login',
  user_pass: 'user_pass',
  user_nicename: 'user_nicename',
  user_email: 'user_email',
  user_url: 'user_url',
  user_registered: 'user_registered',
  user_activation_key: 'user_activation_key',
  user_status: 'user_status',
  display_name: 'display_name'
};

exports.Prisma.Wp_wpdatachartsScalarFieldEnum = {
  id: 'id',
  wpdatatable_id: 'wpdatatable_id',
  title: 'title',
  engine: 'engine',
  type: 'type',
  json_render_data: 'json_render_data'
};

exports.Prisma.Wp_wpdatatablesScalarFieldEnum = {
  id: 'id',
  title: 'title',
  show_title: 'show_title',
  table_type: 'table_type',
  content: 'content',
  filtering: 'filtering',
  filtering_form: 'filtering_form',
  sorting: 'sorting',
  tools: 'tools',
  server_side: 'server_side',
  editable: 'editable',
  inline_editing: 'inline_editing',
  popover_tools: 'popover_tools',
  editor_roles: 'editor_roles',
  mysql_table_name: 'mysql_table_name',
  edit_only_own_rows: 'edit_only_own_rows',
  userid_column_id: 'userid_column_id',
  display_length: 'display_length',
  auto_refresh: 'auto_refresh',
  fixed_columns: 'fixed_columns',
  fixed_layout: 'fixed_layout',
  responsive: 'responsive',
  scrollable: 'scrollable',
  word_wrap: 'word_wrap',
  hide_before_load: 'hide_before_load',
  var1: 'var1',
  var2: 'var2',
  var3: 'var3',
  tabletools_config: 'tabletools_config',
  advanced_settings: 'advanced_settings',
  connection: 'connection'
};

exports.Prisma.Wp_wpdatatables_columnsScalarFieldEnum = {
  id: 'id',
  table_id: 'table_id',
  orig_header: 'orig_header',
  display_header: 'display_header',
  filter_type: 'filter_type',
  column_type: 'column_type',
  input_type: 'input_type',
  input_mandatory: 'input_mandatory',
  id_column: 'id_column',
  group_column: 'group_column',
  sort_column: 'sort_column',
  hide_on_phones: 'hide_on_phones',
  hide_on_tablets: 'hide_on_tablets',
  visible: 'visible',
  sum_column: 'sum_column',
  skip_thousands_separator: 'skip_thousands_separator',
  width: 'width',
  possible_values: 'possible_values',
  default_value: 'default_value',
  css_class: 'css_class',
  text_before: 'text_before',
  text_after: 'text_after',
  formatting_rules: 'formatting_rules',
  calc_formula: 'calc_formula',
  color: 'color',
  advanced_settings: 'advanced_settings',
  pos: 'pos'
};

exports.Prisma.Wp_wpdatatables_rowsScalarFieldEnum = {
  id: 'id',
  table_id: 'table_id',
  data: 'data'
};

exports.Prisma.Wp_wpforms_tasks_metaScalarFieldEnum = {
  id: 'id',
  action: 'action',
  data: 'data',
  date: 'date'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  username: 'username',
  email: 'email',
  password: 'password',
  isActive: 'isActive',
  profileImage: 'profileImage',
  plan: 'plan',
  role: 'role',
  stripeId: 'stripeId',
  customerId: 'customerId',
  planId: 'planId',
  planName: 'planName',
  subscriptionId: 'subscriptionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  emailUpdate: 'emailUpdate',
  isPaid: 'isPaid'
};

exports.Prisma.TicketScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  title: 'title',
  description: 'description',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.TicketDocumentScalarFieldEnum = {
  id: 'id',
  url: 'url',
  name: 'name',
  size: 'size',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  ticketId: 'ticketId'
};

exports.Prisma.TicketCommentScalarFieldEnum = {
  id: 'id',
  text: 'text',
  ticketId: 'ticketId',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.UserSubscriptionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  subscriptionId: 'subscriptionId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.PortfolioScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  name: 'name',
  filters: 'filters',
  tableName: 'tableName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.SentenceallviewScalarFieldEnum = {
  id: 'id',
  release_date: 'release_date',
  pr_site: 'pr_site',
  Targetyear_s: 'Targetyear_s',
  ArticleTargetYear: 'ArticleTargetYear',
  sentence_carbon: 'sentence_carbon',
  full_text: 'full_text',
  PressReleaseMonth: 'PressReleaseMonth',
  PressReleaseFullClean: 'PressReleaseFullClean',
  sentence_renewables: 'sentence_renewables',
  sentence_suppliers: 'sentence_suppliers',
  sentence_gender: 'sentence_gender',
  Company: 'Company',
  Annual_Report_Date: 'Annual_Report_Date',
  title: 'title',
  emails: 'emails',
  sentence_other: 'sentence_other',
  Source_link: 'Source_link',
  Source_Date: 'Source_Date',
  PressReleaseFullCleanstep1: 'PressReleaseFullCleanstep1',
  sentence_waste: 'sentence_waste',
  source: 'source',
  sentence_water: 'sentence_water',
  PressReleaseYear: 'PressReleaseYear',
  ticker: 'ticker',
  SentenceTargetYear: 'SentenceTargetYear',
  Target_sentence: 'Target_sentence',
  upload_date: 'upload_date',
  PageURL: 'PageURL',
  DocURL: 'DocURL',
  DocTitle: 'DocTitle',
  DocName: 'DocName',
  Target_Sentence_Page: 'Target_Sentence_Page',
  x: 'x',
  Member_SP500: 'Member_SP500',
  Member_Russell1000: 'Member_Russell1000',
  ScrapingCodeSetUp: 'ScrapingCodeSetUp',
  Tickers: 'Tickers',
  PRAgency: 'PRAgency',
  Domain: 'Domain',
  PressURL: 'PressURL',
  SubscribedEsgroadmap: 'SubscribedEsgroadmap',
  SubscribedJames: 'SubscribedJames',
  PlainTextSubscription: 'PlainTextSubscription',
  AnnualReportsURL: 'AnnualReportsURL',
  AnnualReportPDF2020: 'AnnualReportPDF2020',
  ESGReportsURL: 'ESGReportsURL',
  ESGReportPDF2020: 'ESGReportPDF2020',
  Country: 'Country',
  SectorCode1: 'SectorCode1',
  SectorName1: 'SectorName1',
  SectorCode2: 'SectorCode2',
  SectorName2: 'SectorName2',
  SectorCode3: 'SectorCode3',
  SectorName3: 'SectorName3',
  SectorCode4: 'SectorCode4',
  SectorName4: 'SectorName4',
  SectorCode5: 'SectorCode5',
  SectorName5: 'SectorName5',
  WorkedBy: 'WorkedBy',
  CommentsNotes: 'CommentsNotes',
  CarbonSentenceAvailable: 'CarbonSentenceAvailable'
};

exports.Prisma.SearchScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  keyword: 'keyword',
  tableName: 'tableName',
  createdAt: 'createdAt',
  lastChecked: 'lastChecked'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.UniqueFactorsTableOrderByRelevanceFieldEnum = {
  Company__NON_NULL_Total_: 'Company__NON_NULL_Total_',
  Company__NON_NULL_Unique_: 'Company__NON_NULL_Unique_',
  Member_of_the_S_P500__YES_Total_: 'Member_of_the_S_P500__YES_Total_',
  Member_of_the_Russell_1000_Index__YES_Total_: 'Member_of_the_Russell_1000_Index__YES_Total_',
  Ticker_s___NON_NULL_Total_: 'Ticker_s___NON_NULL_Total_',
  Ticker_s___NON_NULL_Unique_: 'Ticker_s___NON_NULL_Unique_',
  Country__NON_NULL_Total_: 'Country__NON_NULL_Total_',
  Country__NON_NULL_Unique_: 'Country__NON_NULL_Unique_',
  sector_code__1__NAICS___NON_NULL_Unique_: 'sector_code__1__NAICS___NON_NULL_Unique_',
  sector_code__2__NAICS___NON_NULL_Unique_: 'sector_code__2__NAICS___NON_NULL_Unique_',
  sector_code__3__NAICS___NON_NULL_Unique_: 'sector_code__3__NAICS___NON_NULL_Unique_',
  sector_code__4__NAICS___NON_NULL_Unique_: 'sector_code__4__NAICS___NON_NULL_Unique_',
  sector_code__5__NAICS___NON_NULL_Unique_: 'sector_code__5__NAICS___NON_NULL_Unique_',
  sector_codes_all__NAICS___NON_NULL_Unique_: 'sector_codes_all__NAICS___NON_NULL_Unique_',
  ArticleTargetYear__NON_NULL_Unique_: 'ArticleTargetYear__NON_NULL_Unique_',
  Source_Date__NON_NULL_Unique_: 'Source_Date__NON_NULL_Unique_',
  PressReleaseYear__NON_NULL_Unique_: 'PressReleaseYear__NON_NULL_Unique_',
  Target_sentence__NON_NULL_Total_: 'Target_sentence__NON_NULL_Total_',
  Target_sentence__NON_NULL_Unique_: 'Target_sentence__NON_NULL_Unique_',
  Targetyear_s___NON_NULL_Unique_: 'Targetyear_s___NON_NULL_Unique_',
  sentence_carbon__1_Total_: 'sentence_carbon__1_Total_',
  sentence_gender__1_Total_: 'sentence_gender__1_Total_',
  sentence_renewables__1_Total_: 'sentence_renewables__1_Total_',
  sentence_suppliers__1_Total_: 'sentence_suppliers__1_Total_',
  sentence_water__1_Total_: 'sentence_water__1_Total_',
  sentence_waste__1_Total_: 'sentence_waste__1_Total_',
  sentence_other__1_Total_: 'sentence_other__1_Total_'
};

exports.Prisma.CompanyUniverseOrderByRelevanceFieldEnum = {
  Company: 'Company',
  x: 'x',
  Member_of_the_S_P500: 'Member_of_the_S_P500',
  Member_of_the_Russell_1000_Index: 'Member_of_the_Russell_1000_Index',
  source: 'source',
  Scraping_code_set_up__: 'Scraping_code_set_up__',
  Ticker_s_: 'Ticker_s_',
  PR_Agency: 'PR_Agency',
  Example_2020_company_PR_agency_press_release_URL: 'Example_2020_company_PR_agency_press_release_URL',
  Domain: 'Domain',
  Company_global_main_press___news_release_site_URL: 'Company_global_main_press___news_release_site_URL',
  Subscribed_to_press_releases_esgroadmap_gmail_com__: 'Subscribed_to_press_releases_esgroadmap_gmail_com__',
  Subscribed_to_press_releases_jameskijani_gmail_com__: 'Subscribed_to_press_releases_jameskijani_gmail_com__',
  Plain_text_press_release_subscription_possible___yes_no_: 'Plain_text_press_release_subscription_possible___yes_no_',
  Company_annual_reports_page_URL: 'Company_annual_reports_page_URL',
  Company_annual_report_2020_URL_of_pdf_document__including_10_k_: 'Company_annual_report_2020_URL_of_pdf_document__including_10_k_',
  Company_sustainability___ESG_reports_page_URL: 'Company_sustainability___ESG_reports_page_URL',
  Company_Sustainability___ESG_report_2020_URL_of_pdf_document: 'Company_Sustainability___ESG_report_2020_URL_of_pdf_document',
  Country: 'Country',
  sector_code__1__NAICS_: 'sector_code__1__NAICS_',
  sector_name__1__NAICS_: 'sector_name__1__NAICS_',
  sector_code__2__NAICS_: 'sector_code__2__NAICS_',
  sector_name__2__NAICS_: 'sector_name__2__NAICS_',
  sector_code__3__NAICS_: 'sector_code__3__NAICS_',
  sector_name__3__NAICS_: 'sector_name__3__NAICS_',
  sector_code__4__NAICS_: 'sector_code__4__NAICS_',
  sector_name__4__NAICS_: 'sector_name__4__NAICS_',
  sector_code__5__NAICS_: 'sector_code__5__NAICS_',
  sector_name__5__NAICS_: 'sector_name__5__NAICS_',
  WORKED_BY_: 'WORKED_BY_',
  COMMENTS___NOTES: 'COMMENTS___NOTES',
  Carbon_sentence_available__: 'Carbon_sentence_available__'
};

exports.Prisma.CompanyDataOrderByRelevanceFieldEnum = {
  company: 'company',
  Member_of_the_S_P500: 'Member_of_the_S_P500',
  Member_of_the_Russell_1000_Index: 'Member_of_the_Russell_1000_Index',
  Ticker_s_: 'Ticker_s_',
  PR_Agency: 'PR_Agency',
  Example_2020_company_PR_agency_press_release_URL: 'Example_2020_company_PR_agency_press_release_URL',
  Company_Global___Main_Website_URL: 'Company_Global___Main_Website_URL',
  Company_global_main_press___news_release_site_URL: 'Company_global_main_press___news_release_site_URL',
  Company_annual_reports_page_URL: 'Company_annual_reports_page_URL',
  Company_annual___financial_report_2020_URL_of_pdf_document: 'Company_annual___financial_report_2020_URL_of_pdf_document',
  Company_sustainability___ESG_reports_page_URL: 'Company_sustainability___ESG_reports_page_URL',
  Company_Sustainability___ESG_report_2020_URL_of_pdf_document: 'Company_Sustainability___ESG_report_2020_URL_of_pdf_document',
  Country: 'Country',
  sector_name__1__NAICS_: 'sector_name__1__NAICS_',
  sector_code__2__NAICS_: 'sector_code__2__NAICS_',
  sector_name__2__NAICS_: 'sector_name__2__NAICS_',
  sector_code__3__NAICS_: 'sector_code__3__NAICS_',
  sector_name__3__NAICS_: 'sector_name__3__NAICS_',
  sector_code__4__NAICS_: 'sector_code__4__NAICS_',
  sector_name__4__NAICS_: 'sector_name__4__NAICS_',
  sector_code__5__NAICS_: 'sector_code__5__NAICS_',
  sector_name__5__NAICS_: 'sector_name__5__NAICS_',
  sector_codes_all__NAICS_: 'sector_codes_all__NAICS_',
  sector_name_all__NAICS_: 'sector_name_all__NAICS_'
};

exports.Prisma.CompanyData2OrderByRelevanceFieldEnum = {
  company: 'company',
  Member_of_the_S_P500: 'Member_of_the_S_P500',
  Member_of_the_Russell_1000_Index: 'Member_of_the_Russell_1000_Index',
  Ticker_s_: 'Ticker_s_',
  PR_Agency: 'PR_Agency',
  Example_2020_company_PR_agency_press_release_URL: 'Example_2020_company_PR_agency_press_release_URL',
  Company_Global___Main_Website_URL: 'Company_Global___Main_Website_URL',
  Company_global_main_press___news_release_site_URL: 'Company_global_main_press___news_release_site_URL',
  Company_annual_reports_page_URL: 'Company_annual_reports_page_URL',
  Company_annual___financial_report_2020_URL_of_pdf_document: 'Company_annual___financial_report_2020_URL_of_pdf_document',
  Company_sustainability___ESG_reports_page_URL: 'Company_sustainability___ESG_reports_page_URL',
  Company_Sustainability___ESG_report_2020_URL_of_pdf_document: 'Company_Sustainability___ESG_report_2020_URL_of_pdf_document',
  Country: 'Country',
  sector_code__1__NAICS_: 'sector_code__1__NAICS_',
  sector_name__1__NAICS_: 'sector_name__1__NAICS_',
  sector_code__2__NAICS_: 'sector_code__2__NAICS_',
  sector_name__2__NAICS_: 'sector_name__2__NAICS_',
  sector_code__3__NAICS_: 'sector_code__3__NAICS_',
  sector_name__3__NAICS_: 'sector_name__3__NAICS_',
  sector_code__4__NAICS_: 'sector_code__4__NAICS_',
  sector_name__4__NAICS_: 'sector_name__4__NAICS_',
  sector_code__5__NAICS_: 'sector_code__5__NAICS_',
  sector_name__5__NAICS_: 'sector_name__5__NAICS_',
  sector_codes_all__NAICS_: 'sector_codes_all__NAICS_',
  sector_name_all__NAICS_: 'sector_name_all__NAICS_',
  NAICS__1_GIG: 'NAICS__1_GIG',
  NAICS__1_GIG_name: 'NAICS__1_GIG_name'
};

exports.Prisma.PercentageTableOrderByRelevanceFieldEnum = {
  Company: 'Company',
  Member_of_the_S_P500: 'Member_of_the_S_P500',
  Member_of_the_Russell_1000_Index: 'Member_of_the_Russell_1000_Index',
  Ticker_s_: 'Ticker_s_',
  PR_Agency: 'PR_Agency',
  Example_2020_company_PR_agency_press_release_URL: 'Example_2020_company_PR_agency_press_release_URL',
  Company_Global___Main_Website_URL: 'Company_Global___Main_Website_URL',
  Company_global_main_press___news_release_site_URL: 'Company_global_main_press___news_release_site_URL',
  Company_annual_reports_page_URL: 'Company_annual_reports_page_URL',
  Company_annual___financial_report_2020_URL_of_pdf_document: 'Company_annual___financial_report_2020_URL_of_pdf_document',
  Company_sustainability___ESG_reports_page_URL: 'Company_sustainability___ESG_reports_page_URL',
  Company_Sustainability___ESG_report_2020_URL_of_pdf_document: 'Company_Sustainability___ESG_report_2020_URL_of_pdf_document',
  Country: 'Country',
  sector_code__1__NAICS_: 'sector_code__1__NAICS_',
  sector_name__1__NAICS_: 'sector_name__1__NAICS_',
  sector_code__2__NAICS_: 'sector_code__2__NAICS_',
  sector_name__2__NAICS_: 'sector_name__2__NAICS_',
  sector_code__3__NAICS_: 'sector_code__3__NAICS_',
  sector_name__3__NAICS_: 'sector_name__3__NAICS_',
  sector_code__4__NAICS_: 'sector_code__4__NAICS_',
  sector_name__4__NAICS_: 'sector_name__4__NAICS_',
  sector_code__5__NAICS_: 'sector_code__5__NAICS_',
  sector_name__5__NAICS_: 'sector_name__5__NAICS_',
  sector_codes_all__NAICS_: 'sector_codes_all__NAICS_',
  sector_name_all__NAICS_: 'sector_name_all__NAICS_',
  climateaction100: 'climateaction100',
  emails: 'emails',
  full_text: 'full_text',
  Source_link: 'Source_link',
  pr_site: 'pr_site',
  release_date: 'release_date',
  source: 'source',
  ticker: 'ticker',
  title: 'title',
  ArticleTargetYear: 'ArticleTargetYear',
  PressReleaseFullCleanstep1: 'PressReleaseFullCleanstep1',
  PressReleaseFullClean: 'PressReleaseFullClean',
  Source_Date: 'Source_Date',
  Annual_Report_Date: 'Annual_Report_Date',
  PressReleaseYear: 'PressReleaseYear',
  PressReleaseMonth: 'PressReleaseMonth',
  Target_sentence: 'Target_sentence',
  SentenceTargetYear: 'SentenceTargetYear',
  Targetyear_s_: 'Targetyear_s_',
  sentence_carbon: 'sentence_carbon',
  sentence_gender: 'sentence_gender',
  sentence_renewables: 'sentence_renewables',
  sentence_suppliers: 'sentence_suppliers',
  sentence_water: 'sentence_water',
  sentence_waste: 'sentence_waste',
  sentence_other: 'sentence_other'
};

exports.Prisma.RoadmapCarbonOrderByRelevanceFieldEnum = {
  Company: 'Company',
  Ticker_s_: 'Ticker_s_',
  PR_Agency: 'PR_Agency',
  Company_Main_Website_URL: 'Company_Main_Website_URL',
  Company_Source_site_URL: 'Company_Source_site_URL',
  Country: 'Country',
  sector_name__1__NAICS_: 'sector_name__1__NAICS_',
  sector_code__2__NAICS_: 'sector_code__2__NAICS_',
  sector_name__2__NAICS_: 'sector_name__2__NAICS_',
  sector_code__3__NAICS_: 'sector_code__3__NAICS_',
  sector_name__3__NAICS_: 'sector_name__3__NAICS_',
  sector_code__4__NAICS_: 'sector_code__4__NAICS_',
  sector_name__4__NAICS_: 'sector_name__4__NAICS_',
  sector_code__5__NAICS_: 'sector_code__5__NAICS_',
  sector_name__5__NAICS_: 'sector_name__5__NAICS_',
  S_P500member: 'S_P500member',
  Russell_1000_member: 'Russell_1000_member',
  Source_link_1: 'Source_link_1',
  Source_date_1: 'Source_date_1',
  Source_sentence_1: 'Source_sentence_1',
  Targetyear_s__1: 'Targetyear_s__1',
  Source_link_2: 'Source_link_2',
  Source_date_2: 'Source_date_2',
  Source_sentence_2: 'Source_sentence_2',
  Targetyear_s__2: 'Targetyear_s__2',
  Source_link_3: 'Source_link_3',
  Source_date_3: 'Source_date_3',
  Source_sentence_3: 'Source_sentence_3',
  Targetyear_s__3: 'Targetyear_s__3',
  Source_link_4: 'Source_link_4',
  Source_date_4: 'Source_date_4',
  Source_sentence_4: 'Source_sentence_4',
  Source_link_5: 'Source_link_5',
  Source_date_5: 'Source_date_5',
  Source_sentence_5: 'Source_sentence_5',
  Source_link_6: 'Source_link_6',
  Source_date_6: 'Source_date_6',
  Source_sentence_6: 'Source_sentence_6'
};

exports.Prisma.SentenceAllOrderByRelevanceFieldEnum = {
  release_date: 'release_date',
  Targetyear_s_: 'Targetyear_s_',
  pr_site: 'pr_site',
  ArticleTargetYear: 'ArticleTargetYear',
  full_text: 'full_text',
  PressReleaseMonth: 'PressReleaseMonth',
  PressReleaseFullClean: 'PressReleaseFullClean',
  Company: 'Company',
  Annual_Report_Date: 'Annual_Report_Date',
  title: 'title',
  emails: 'emails',
  Source_link: 'Source_link',
  Source_Date: 'Source_Date',
  PressReleaseFullCleanstep1: 'PressReleaseFullCleanstep1',
  source: 'source',
  PressReleaseYear: 'PressReleaseYear',
  ticker: 'ticker',
  SentenceTargetYear: 'SentenceTargetYear',
  Target_sentence: 'Target_sentence',
  upload_date: 'upload_date',
  PageURL: 'PageURL',
  DocURL: 'DocURL',
  DocTitle: 'DocTitle',
  DocName: 'DocName',
  Target_Sentence_Page: 'Target_Sentence_Page'
};

exports.Prisma.TargetSentenceOrderByRelevanceFieldEnum = {
  Company: 'Company',
  companylist: 'companylist',
  Ticker_s_: 'Ticker_s_',
  PR_Agency: 'PR_Agency',
  Example_2020_company_PR_agency_press_release_URL: 'Example_2020_company_PR_agency_press_release_URL',
  Company_Main_Website_URL: 'Company_Main_Website_URL',
  Company_press_release_site_URL: 'Company_press_release_site_URL',
  Country: 'Country',
  sector_name__1__NAICS_: 'sector_name__1__NAICS_',
  sector_code__2__NAICS_: 'sector_code__2__NAICS_',
  sector_name__2__NAICS_: 'sector_name__2__NAICS_',
  sector_code__3__NAICS_: 'sector_code__3__NAICS_',
  sector_name__3__NAICS_: 'sector_name__3__NAICS_',
  sector_code__4__NAICS_: 'sector_code__4__NAICS_',
  sector_name__4__NAICS_: 'sector_name__4__NAICS_',
  sector_code__5__NAICS_: 'sector_code__5__NAICS_',
  sector_name__5__NAICS_: 'sector_name__5__NAICS_',
  S_P500member: 'S_P500member',
  Russell_1000_member: 'Russell_1000_member',
  emails: 'emails',
  full_text: 'full_text',
  Source_link: 'Source_link',
  pr_site: 'pr_site',
  release_date: 'release_date',
  source: 'source',
  ticker: 'ticker',
  title: 'title',
  ArticleTargetYear: 'ArticleTargetYear',
  PressReleaseFullCleanstep1: 'PressReleaseFullCleanstep1',
  PressReleaseFullClean: 'PressReleaseFullClean',
  Source_date: 'Source_date',
  Target_sentence: 'Target_sentence',
  SentenceTargetYear: 'SentenceTargetYear',
  Targetyear_s_: 'Targetyear_s_'
};

exports.Prisma.wp_actionscheduler_actionsOrderByRelevanceFieldEnum = {
  hook: 'hook',
  status: 'status',
  args: 'args',
  schedule: 'schedule',
  extended_args: 'extended_args'
};

exports.Prisma.wp_actionscheduler_groupsOrderByRelevanceFieldEnum = {
  slug: 'slug'
};

exports.Prisma.wp_actionscheduler_logsOrderByRelevanceFieldEnum = {
  message: 'message'
};

exports.Prisma.wp_aioseo_notificationsOrderByRelevanceFieldEnum = {
  slug: 'slug',
  title: 'title',
  content: 'content',
  type: 'type',
  level: 'level',
  notification_name: 'notification_name',
  button1_label: 'button1_label',
  button1_action: 'button1_action',
  button2_label: 'button2_label',
  button2_action: 'button2_action'
};

exports.Prisma.wp_aioseo_postsOrderByRelevanceFieldEnum = {
  title: 'title',
  description: 'description',
  keywords: 'keywords',
  keyphrases: 'keyphrases',
  page_analysis: 'page_analysis',
  canonical_url: 'canonical_url',
  og_title: 'og_title',
  og_description: 'og_description',
  og_object_type: 'og_object_type',
  og_image_type: 'og_image_type',
  og_image_custom_url: 'og_image_custom_url',
  og_image_custom_fields: 'og_image_custom_fields',
  og_video: 'og_video',
  og_custom_url: 'og_custom_url',
  og_article_section: 'og_article_section',
  og_article_tags: 'og_article_tags',
  twitter_card: 'twitter_card',
  twitter_image_type: 'twitter_image_type',
  twitter_image_custom_url: 'twitter_image_custom_url',
  twitter_image_custom_fields: 'twitter_image_custom_fields',
  twitter_title: 'twitter_title',
  twitter_description: 'twitter_description',
  schema_type: 'schema_type',
  schema_type_options: 'schema_type_options',
  robots_max_imagepreview: 'robots_max_imagepreview',
  tabs: 'tabs',
  images: 'images',
  priority: 'priority',
  frequency: 'frequency',
  videos: 'videos',
  video_thumbnail: 'video_thumbnail',
  local_seo: 'local_seo'
};

exports.Prisma.wp_commentmetaOrderByRelevanceFieldEnum = {
  meta_key: 'meta_key',
  meta_value: 'meta_value'
};

exports.Prisma.wp_commentsOrderByRelevanceFieldEnum = {
  comment_author: 'comment_author',
  comment_author_email: 'comment_author_email',
  comment_author_url: 'comment_author_url',
  comment_author_IP: 'comment_author_IP',
  comment_content: 'comment_content',
  comment_approved: 'comment_approved',
  comment_agent: 'comment_agent',
  comment_type: 'comment_type'
};

exports.Prisma.wp_linksOrderByRelevanceFieldEnum = {
  link_url: 'link_url',
  link_name: 'link_name',
  link_image: 'link_image',
  link_target: 'link_target',
  link_description: 'link_description',
  link_visible: 'link_visible',
  link_rel: 'link_rel',
  link_notes: 'link_notes',
  link_rss: 'link_rss'
};

exports.Prisma.wp_nextend2_image_storageOrderByRelevanceFieldEnum = {
  hash: 'hash',
  image: 'image',
  value: 'value'
};

exports.Prisma.wp_nextend2_section_storageOrderByRelevanceFieldEnum = {
  application: 'application',
  section: 'section',
  referencekey: 'referencekey',
  value: 'value'
};

exports.Prisma.wp_nextend2_smartslider3_generatorsOrderByRelevanceFieldEnum = {
  group: 'group',
  type: 'type',
  params: 'params'
};

exports.Prisma.wp_nextend2_smartslider3_slidersOrderByRelevanceFieldEnum = {
  alias: 'alias',
  title: 'title',
  type: 'type',
  params: 'params',
  status: 'status',
  thumbnail: 'thumbnail'
};

exports.Prisma.wp_nextend2_smartslider3_slidesOrderByRelevanceFieldEnum = {
  title: 'title',
  slide: 'slide',
  description: 'description',
  thumbnail: 'thumbnail',
  params: 'params'
};

exports.Prisma.wp_optionsOrderByRelevanceFieldEnum = {
  option_name: 'option_name',
  option_value: 'option_value',
  autoload: 'autoload'
};

exports.Prisma.wp_postmetaOrderByRelevanceFieldEnum = {
  meta_key: 'meta_key',
  meta_value: 'meta_value'
};

exports.Prisma.wp_postsOrderByRelevanceFieldEnum = {
  post_content: 'post_content',
  post_title: 'post_title',
  post_excerpt: 'post_excerpt',
  post_status: 'post_status',
  comment_status: 'comment_status',
  ping_status: 'ping_status',
  post_password: 'post_password',
  post_name: 'post_name',
  to_ping: 'to_ping',
  pinged: 'pinged',
  post_content_filtered: 'post_content_filtered',
  guid: 'guid',
  post_type: 'post_type',
  post_mime_type: 'post_mime_type'
};

exports.Prisma.wp_term_taxonomyOrderByRelevanceFieldEnum = {
  taxonomy: 'taxonomy',
  description: 'description'
};

exports.Prisma.wp_termmetaOrderByRelevanceFieldEnum = {
  meta_key: 'meta_key',
  meta_value: 'meta_value'
};

exports.Prisma.wp_termsOrderByRelevanceFieldEnum = {
  name: 'name',
  slug: 'slug'
};

exports.Prisma.wp_um_metadataOrderByRelevanceFieldEnum = {
  um_key: 'um_key',
  um_value: 'um_value'
};

exports.Prisma.wp_user_registration_sessionsOrderByRelevanceFieldEnum = {
  session_key: 'session_key',
  session_value: 'session_value'
};

exports.Prisma.wp_usermetaOrderByRelevanceFieldEnum = {
  meta_key: 'meta_key',
  meta_value: 'meta_value'
};

exports.Prisma.wp_usersOrderByRelevanceFieldEnum = {
  user_login: 'user_login',
  user_pass: 'user_pass',
  user_nicename: 'user_nicename',
  user_email: 'user_email',
  user_url: 'user_url',
  user_activation_key: 'user_activation_key',
  display_name: 'display_name'
};

exports.Prisma.wp_wpdatachartsOrderByRelevanceFieldEnum = {
  title: 'title',
  type: 'type',
  json_render_data: 'json_render_data'
};

exports.Prisma.wp_wpdatatablesOrderByRelevanceFieldEnum = {
  title: 'title',
  table_type: 'table_type',
  content: 'content',
  editor_roles: 'editor_roles',
  mysql_table_name: 'mysql_table_name',
  var1: 'var1',
  var2: 'var2',
  var3: 'var3',
  tabletools_config: 'tabletools_config',
  advanced_settings: 'advanced_settings',
  connection: 'connection'
};

exports.Prisma.wp_wpdatatables_columnsOrderByRelevanceFieldEnum = {
  orig_header: 'orig_header',
  display_header: 'display_header',
  width: 'width',
  possible_values: 'possible_values',
  default_value: 'default_value',
  css_class: 'css_class',
  text_before: 'text_before',
  text_after: 'text_after',
  formatting_rules: 'formatting_rules',
  calc_formula: 'calc_formula',
  color: 'color',
  advanced_settings: 'advanced_settings'
};

exports.Prisma.wp_wpdatatables_rowsOrderByRelevanceFieldEnum = {
  data: 'data'
};

exports.Prisma.wp_wpforms_tasks_metaOrderByRelevanceFieldEnum = {
  action: 'action',
  data: 'data'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  username: 'username',
  email: 'email',
  password: 'password',
  profileImage: 'profileImage',
  role: 'role',
  stripeId: 'stripeId',
  customerId: 'customerId',
  planId: 'planId',
  planName: 'planName',
  subscriptionId: 'subscriptionId',
  emailUpdate: 'emailUpdate'
};

exports.Prisma.TicketOrderByRelevanceFieldEnum = {
  title: 'title',
  description: 'description',
  status: 'status'
};

exports.Prisma.TicketDocumentOrderByRelevanceFieldEnum = {
  url: 'url',
  name: 'name'
};

exports.Prisma.TicketCommentOrderByRelevanceFieldEnum = {
  text: 'text'
};

exports.Prisma.UserSubscriptionOrderByRelevanceFieldEnum = {
  subscriptionId: 'subscriptionId'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.PortfolioOrderByRelevanceFieldEnum = {
  name: 'name',
  tableName: 'tableName'
};

exports.Prisma.sentenceallviewOrderByRelevanceFieldEnum = {
  pr_site: 'pr_site',
  Targetyear_s: 'Targetyear_s',
  ArticleTargetYear: 'ArticleTargetYear',
  full_text: 'full_text',
  PressReleaseMonth: 'PressReleaseMonth',
  PressReleaseFullClean: 'PressReleaseFullClean',
  Company: 'Company',
  Annual_Report_Date: 'Annual_Report_Date',
  title: 'title',
  emails: 'emails',
  Source_link: 'Source_link',
  Source_Date: 'Source_Date',
  PressReleaseFullCleanstep1: 'PressReleaseFullCleanstep1',
  source: 'source',
  PressReleaseYear: 'PressReleaseYear',
  ticker: 'ticker',
  SentenceTargetYear: 'SentenceTargetYear',
  Target_sentence: 'Target_sentence',
  upload_date: 'upload_date',
  PageURL: 'PageURL',
  DocURL: 'DocURL',
  DocTitle: 'DocTitle',
  DocName: 'DocName',
  Target_Sentence_Page: 'Target_Sentence_Page',
  x: 'x',
  Member_SP500: 'Member_SP500',
  Member_Russell1000: 'Member_Russell1000',
  ScrapingCodeSetUp: 'ScrapingCodeSetUp',
  Tickers: 'Tickers',
  PRAgency: 'PRAgency',
  Domain: 'Domain',
  PressURL: 'PressURL',
  SubscribedEsgroadmap: 'SubscribedEsgroadmap',
  SubscribedJames: 'SubscribedJames',
  PlainTextSubscription: 'PlainTextSubscription',
  AnnualReportsURL: 'AnnualReportsURL',
  AnnualReportPDF2020: 'AnnualReportPDF2020',
  ESGReportsURL: 'ESGReportsURL',
  ESGReportPDF2020: 'ESGReportPDF2020',
  Country: 'Country',
  SectorCode1: 'SectorCode1',
  SectorName1: 'SectorName1',
  SectorCode2: 'SectorCode2',
  SectorName2: 'SectorName2',
  SectorCode3: 'SectorCode3',
  SectorName3: 'SectorName3',
  SectorCode4: 'SectorCode4',
  SectorName4: 'SectorName4',
  SectorCode5: 'SectorCode5',
  SectorName5: 'SectorName5',
  WorkedBy: 'WorkedBy',
  CommentsNotes: 'CommentsNotes',
  CarbonSentenceAvailable: 'CarbonSentenceAvailable'
};

exports.Prisma.SearchOrderByRelevanceFieldEnum = {
  id: 'id',
  keyword: 'keyword',
  tableName: 'tableName'
};
exports.wp_wpdatacharts_engine = exports.$Enums.wp_wpdatacharts_engine = {
  google: 'google',
  highcharts: 'highcharts',
  chartjs: 'chartjs'
};

exports.wp_wpdatatables_columns_filter_type = exports.$Enums.wp_wpdatatables_columns_filter_type = {
  none: 'none',
  null_str: 'null_str',
  text: 'text',
  number: 'number',
  number_range: 'number_range',
  date_range: 'date_range',
  datetime_range: 'datetime_range',
  time_range: 'time_range',
  select: 'select',
  multiselect: 'multiselect',
  checkbox: 'checkbox'
};

exports.wp_wpdatatables_columns_column_type = exports.$Enums.wp_wpdatatables_columns_column_type = {
  autodetect: 'autodetect',
  string: 'string',
  int: 'int',
  float: 'float',
  date: 'date',
  link: 'link',
  email: 'email',
  image: 'image',
  formula: 'formula',
  datetime: 'datetime',
  time: 'time',
  masterdetail: 'masterdetail'
};

exports.wp_wpdatatables_columns_input_type = exports.$Enums.wp_wpdatatables_columns_input_type = {
  none: 'none',
  text: 'text',
  textarea: 'textarea',
  mce_editor: 'mce_editor',
  date: 'date',
  datetime: 'datetime',
  time: 'time',
  link: 'link',
  email: 'email',
  selectbox: 'selectbox',
  multi_selectbox: 'multi_selectbox',
  attachment: 'attachment'
};

exports.Prisma.ModelName = {
  UniqueFactorsTable: 'UniqueFactorsTable',
  CompanyUniverse: 'CompanyUniverse',
  CompanyData: 'CompanyData',
  CompanyData2: 'CompanyData2',
  PercentageTable: 'PercentageTable',
  RoadmapCarbon: 'RoadmapCarbon',
  SentenceAll: 'SentenceAll',
  TargetSentence: 'TargetSentence',
  Testable: 'Testable',
  wp_actionscheduler_actions: 'wp_actionscheduler_actions',
  wp_actionscheduler_claims: 'wp_actionscheduler_claims',
  wp_actionscheduler_groups: 'wp_actionscheduler_groups',
  wp_actionscheduler_logs: 'wp_actionscheduler_logs',
  wp_aioseo_notifications: 'wp_aioseo_notifications',
  wp_aioseo_posts: 'wp_aioseo_posts',
  wp_commentmeta: 'wp_commentmeta',
  wp_comments: 'wp_comments',
  wp_links: 'wp_links',
  wp_nextend2_image_storage: 'wp_nextend2_image_storage',
  wp_nextend2_section_storage: 'wp_nextend2_section_storage',
  wp_nextend2_smartslider3_generators: 'wp_nextend2_smartslider3_generators',
  wp_nextend2_smartslider3_sliders: 'wp_nextend2_smartslider3_sliders',
  wp_nextend2_smartslider3_sliders_xref: 'wp_nextend2_smartslider3_sliders_xref',
  wp_nextend2_smartslider3_slides: 'wp_nextend2_smartslider3_slides',
  wp_options: 'wp_options',
  wp_postmeta: 'wp_postmeta',
  wp_posts: 'wp_posts',
  wp_term_relationships: 'wp_term_relationships',
  wp_term_taxonomy: 'wp_term_taxonomy',
  wp_termmeta: 'wp_termmeta',
  wp_terms: 'wp_terms',
  wp_um_metadata: 'wp_um_metadata',
  wp_user_registration_sessions: 'wp_user_registration_sessions',
  wp_usermeta: 'wp_usermeta',
  wp_users: 'wp_users',
  wp_wpdatacharts: 'wp_wpdatacharts',
  wp_wpdatatables: 'wp_wpdatatables',
  wp_wpdatatables_columns: 'wp_wpdatatables_columns',
  wp_wpdatatables_rows: 'wp_wpdatatables_rows',
  wp_wpforms_tasks_meta: 'wp_wpforms_tasks_meta',
  User: 'User',
  Ticket: 'Ticket',
  TicketDocument: 'TicketDocument',
  TicketComment: 'TicketComment',
  UserSubscription: 'UserSubscription',
  Portfolio: 'Portfolio',
  sentenceallview: 'sentenceallview',
  Search: 'Search'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\akmal\\development\\esg\\esgroadmap-be\\src\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "darwin"
      },
      {
        "fromEnvVar": null,
        "value": "windows"
      },
      {
        "fromEnvVar": null,
        "value": "rhel-openssl-3.0.x"
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "D:\\akmal\\development\\esg\\esgroadmap-be\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider      = \"prisma-client-js\"\n  output        = \"../src/generated/prisma\"\n  binaryTargets = [\"native\", \"darwin\", \"windows\", \"rhel-openssl-3.0.x\"]\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel UniqueFactorsTable {\n  KPI_Report_Date                              DateTime @map(\"KPI Report Date\") @db.Date\n  Company__NON_NULL_Total_                     String?  @map(\"Company (NON-NULL Total)\") @db.VarChar(10)\n  Company__NON_NULL_Unique_                    String?  @map(\"Company (NON-NULL Unique)\") @db.VarChar(10)\n  Member_of_the_S_P500__YES_Total_             String?  @map(\"Member of the S&P500 (YES Total)\") @db.VarChar(10)\n  Member_of_the_Russell_1000_Index__YES_Total_ String?  @map(\"Member of the Russell 1000 Index (YES Total)\") @db.VarChar(10)\n  Ticker_s___NON_NULL_Total_                   String?  @map(\"Ticker(s) (NON-NULL Total)\") @db.VarChar(10)\n  Ticker_s___NON_NULL_Unique_                  String?  @map(\"Ticker(s) (NON-NULL Unique)\") @db.VarChar(10)\n  Country__NON_NULL_Total_                     String?  @map(\"Country (NON-NULL Total)\") @db.VarChar(10)\n  Country__NON_NULL_Unique_                    String?  @map(\"Country (NON-NULL Unique)\") @db.VarChar(10)\n  sector_code__1__NAICS___NON_NULL_Unique_     String?  @map(\"sector code #1 (NAICS) (NON-NULL Unique)\") @db.VarChar(10)\n  sector_code__2__NAICS___NON_NULL_Unique_     String?  @map(\"sector code #2 (NAICS) (NON-NULL Unique)\") @db.VarChar(10)\n  sector_code__3__NAICS___NON_NULL_Unique_     String?  @map(\"sector code #3 (NAICS) (NON-NULL Unique)\") @db.VarChar(10)\n  sector_code__4__NAICS___NON_NULL_Unique_     String?  @map(\"sector code #4 (NAICS) (NON-NULL Unique)\") @db.VarChar(10)\n  sector_code__5__NAICS___NON_NULL_Unique_     String?  @map(\"sector code #5 (NAICS) (NON-NULL Unique)\") @db.VarChar(10)\n  sector_codes_all__NAICS___NON_NULL_Unique_   String?  @map(\"sector codes all (NAICS) (NON-NULL Unique)\") @db.VarChar(10)\n  ArticleTargetYear__NON_NULL_Unique_          String?  @map(\"ArticleTargetYear (NON-NULL Unique)\") @db.VarChar(10)\n  Source_Date__NON_NULL_Unique_                String?  @map(\"Source Date (NON-NULL Unique)\") @db.VarChar(10)\n  PressReleaseYear__NON_NULL_Unique_           String?  @map(\"PressReleaseYear (NON-NULL Unique)\") @db.VarChar(10)\n  Target_sentence__NON_NULL_Total_             String?  @map(\"Target sentence (NON-NULL Total)\") @db.VarChar(10)\n  Target_sentence__NON_NULL_Unique_            String?  @map(\"Target sentence (NON-NULL Unique)\") @db.VarChar(10)\n  Targetyear_s___NON_NULL_Unique_              String?  @map(\"Targetyear(s) (NON-NULL Unique)\") @db.VarChar(10)\n  sentence_carbon__1_Total_                    String?  @map(\"sentence-carbon (1 Total)\") @db.VarChar(10)\n  sentence_gender__1_Total_                    String?  @map(\"sentence-gender (1 Total)\") @db.VarChar(10)\n  sentence_renewables__1_Total_                String?  @map(\"sentence-renewables (1 Total)\") @db.VarChar(10)\n  sentence_suppliers__1_Total_                 String?  @map(\"sentence-suppliers (1 Total)\") @db.VarChar(10)\n  sentence_water__1_Total_                     String?  @map(\"sentence-water (1 Total)\") @db.VarChar(10)\n  sentence_waste__1_Total_                     String?  @map(\"sentence-waste (1 Total)\") @db.VarChar(10)\n  sentence_other__1_Total_                     String?  @map(\"sentence-other (1 Total)\") @db.VarChar(10)\n  id                                           Int      @id @default(autoincrement())\n\n  @@map(\"Unique_Factors_Table\")\n}\n\nmodel CompanyUniverse {\n  Company                                                         String  @id @db.VarChar(255)\n  x                                                               String? @db.VarChar(255)\n  Member_of_the_S_P500                                            String? @map(\"Member of the S&P500\") @db.VarChar(255)\n  Member_of_the_Russell_1000_Index                                String? @map(\"Member of the Russell 1000 Index\") @db.VarChar(255)\n  source                                                          String? @db.VarChar(255)\n  Scraping_code_set_up__                                          String? @map(\"Scraping code set up ?\") @db.VarChar(255)\n  Ticker_s_                                                       String? @map(\"Ticker(s)\") @db.VarChar(255)\n  PR_Agency                                                       String? @map(\"PR Agency\") @db.VarChar(255)\n  Example_2020_company_PR_agency_press_release_URL                String? @map(\"Example 2020 company PR agency press release URL\") @db.Text\n  Domain                                                          String? @db.VarChar(500)\n  Company_global_main_press___news_release_site_URL               String? @map(\"Company global/main press - news release site URL\") @db.Text\n  Subscribed_to_press_releases_esgroadmap_gmail_com__             String? @map(\"Subscribed to press releases esgroadmap@gmail.com ?\") @db.VarChar(255)\n  Subscribed_to_press_releases_jameskijani_gmail_com__            String? @map(\"Subscribed to press releases jameskijani@gmail.com ?\") @db.VarChar(255)\n  Plain_text_press_release_subscription_possible___yes_no_        String? @map(\"Plain text press release subscription possible? (yes/no)\") @db.VarChar(3)\n  Company_annual_reports_page_URL                                 String? @map(\"Company annual reports page URL\") @db.Text\n  Company_annual_report_2020_URL_of_pdf_document__including_10_k_ String? @map(\"Company annual report 2020 URL of pdf document (including 10-k)\") @db.Text\n  Company_sustainability___ESG_reports_page_URL                   String? @map(\"Company sustainability / ESG reports page URL\") @db.Text\n  Company_Sustainability___ESG_report_2020_URL_of_pdf_document    String? @map(\"Company Sustainability / ESG report 2020 URL of pdf document\") @db.Text\n  Country                                                         String? @db.VarChar(255)\n  sector_code__1__NAICS_                                          String? @map(\"sector code #1 (NAICS)\") @db.VarChar(10)\n  sector_name__1__NAICS_                                          String? @map(\"sector name #1 (NAICS)\") @db.VarChar(255)\n  sector_code__2__NAICS_                                          String? @map(\"sector code #2 (NAICS)\") @db.VarChar(10)\n  sector_name__2__NAICS_                                          String? @map(\"sector name #2 (NAICS)\") @db.VarChar(255)\n  sector_code__3__NAICS_                                          String? @map(\"sector code #3 (NAICS)\") @db.VarChar(10)\n  sector_name__3__NAICS_                                          String? @map(\"sector name #3 (NAICS)\") @db.VarChar(255)\n  sector_code__4__NAICS_                                          String? @map(\"sector code #4 (NAICS)\") @db.VarChar(10)\n  sector_name__4__NAICS_                                          String? @map(\"sector name #4 (NAICS)\") @db.VarChar(255)\n  sector_code__5__NAICS_                                          String? @map(\"sector code #5 (NAICS)\") @db.VarChar(10)\n  sector_name__5__NAICS_                                          String? @map(\"sector name #5 (NAICS)\") @db.VarChar(255)\n  WORKED_BY_                                                      String? @map(\"WORKED BY:\") @db.VarChar(255)\n  COMMENTS___NOTES                                                String? @map(\"COMMENTS / NOTES\") @db.Text\n  Carbon_sentence_available__                                     String? @map(\"Carbon sentence available ?\") @db.VarChar(255)\n\n  @@map(\"company_universe\")\n}\n\nmodel CompanyData {\n  company                                                      String? @db.Text\n  Member_of_the_S_P500                                         String? @map(\"Member of the S&P500\") @db.Text\n  Member_of_the_Russell_1000_Index                             String? @map(\"Member of the Russell 1000 Index\") @db.Text\n  Ticker_s_                                                    String? @map(\"Ticker(s)\") @db.Text\n  PR_Agency                                                    String? @map(\"PR Agency\") @db.Text\n  Example_2020_company_PR_agency_press_release_URL             String? @map(\"Example 2020 company PR agency press release URL\") @db.Text\n  Company_Global___Main_Website_URL                            String? @map(\"Company Global / Main Website URL\") @db.Text\n  Company_global_main_press___news_release_site_URL            String? @map(\"Company global/main press - news release site URL\") @db.Text\n  Company_annual_reports_page_URL                              String? @map(\"Company annual reports page URL\") @db.Text\n  Company_annual___financial_report_2020_URL_of_pdf_document   String? @map(\"Company annual / financial report 2020 URL of pdf document\") @db.Text\n  Company_sustainability___ESG_reports_page_URL                String? @map(\"Company sustainability / ESG reports page URL\") @db.Text\n  Company_Sustainability___ESG_report_2020_URL_of_pdf_document String? @map(\"Company Sustainability / ESG report 2020 URL of pdf document\") @db.Text\n  Country                                                      String? @db.Text\n  sector_code__1__NAICS_                                       BigInt? @map(\"sector code #1 (NAICS)\")\n  sector_name__1__NAICS_                                       String? @map(\"sector name #1 (NAICS)\") @db.Text\n  sector_code__2__NAICS_                                       String? @map(\"sector code #2 (NAICS)\") @db.Text\n  sector_name__2__NAICS_                                       String? @map(\"sector name #2 (NAICS)\") @db.Text\n  sector_code__3__NAICS_                                       String? @map(\"sector code #3 (NAICS)\") @db.Text\n  sector_name__3__NAICS_                                       String? @map(\"sector name #3 (NAICS)\") @db.Text\n  sector_code__4__NAICS_                                       String? @map(\"sector code #4 (NAICS)\") @db.Text\n  sector_name__4__NAICS_                                       String? @map(\"sector name #4 (NAICS)\") @db.Text\n  sector_code__5__NAICS_                                       String? @map(\"sector code #5 (NAICS)\") @db.Text\n  sector_name__5__NAICS_                                       String? @map(\"sector name #5 (NAICS)\") @db.Text\n  sector_codes_all__NAICS_                                     String? @map(\"sector codes all (NAICS)\") @db.Text\n  sector_name_all__NAICS_                                      String? @map(\"sector name all (NAICS)\") @db.Text\n  id                                                           Int     @id @default(autoincrement())\n\n  @@map(\"companydata\")\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel CompanyData2 {\n  company                                                      String? @db.Text\n  Member_of_the_S_P500                                         String? @map(\"Member of the S&P500\") @db.Text\n  Member_of_the_Russell_1000_Index                             String? @map(\"Member of the Russell 1000 Index\") @db.Text\n  Ticker_s_                                                    String? @map(\"Ticker(s)\") @db.Text\n  PR_Agency                                                    String? @map(\"PR Agency\") @db.Text\n  Example_2020_company_PR_agency_press_release_URL             String? @map(\"Example 2020 company PR agency press release URL\") @db.Text\n  Company_Global___Main_Website_URL                            String? @map(\"Company Global / Main Website URL\") @db.Text\n  Company_global_main_press___news_release_site_URL            String? @map(\"Company global/main press - news release site URL\") @db.Text\n  Company_annual_reports_page_URL                              String? @map(\"Company annual reports page URL\") @db.Text\n  Company_annual___financial_report_2020_URL_of_pdf_document   String? @map(\"Company annual / financial report 2020 URL of pdf document\") @db.Text\n  Company_sustainability___ESG_reports_page_URL                String? @map(\"Company sustainability / ESG reports page URL\") @db.Text\n  Company_Sustainability___ESG_report_2020_URL_of_pdf_document String? @map(\"Company Sustainability / ESG report 2020 URL of pdf document\") @db.Text\n  Country                                                      String? @db.Text\n  sector_code__1__NAICS_                                       String? @map(\"sector code #1 (NAICS)\") @db.Text\n  sector_name__1__NAICS_                                       String? @map(\"sector name #1 (NAICS)\") @db.Text\n  sector_code__2__NAICS_                                       String? @map(\"sector code #2 (NAICS)\") @db.Text\n  sector_name__2__NAICS_                                       String? @map(\"sector name #2 (NAICS)\") @db.Text\n  sector_code__3__NAICS_                                       String? @map(\"sector code #3 (NAICS)\") @db.Text\n  sector_name__3__NAICS_                                       String? @map(\"sector name #3 (NAICS)\") @db.Text\n  sector_code__4__NAICS_                                       String? @map(\"sector code #4 (NAICS)\") @db.Text\n  sector_name__4__NAICS_                                       String? @map(\"sector name #4 (NAICS)\") @db.Text\n  sector_code__5__NAICS_                                       String? @map(\"sector code #5 (NAICS)\") @db.Text\n  sector_name__5__NAICS_                                       String? @map(\"sector name #5 (NAICS)\") @db.Text\n  sector_codes_all__NAICS_                                     String? @map(\"sector codes all (NAICS)\") @db.Text\n  sector_name_all__NAICS_                                      String? @map(\"sector name all (NAICS)\") @db.Text\n  NAICS__1_GIG                                                 String? @map(\"NAICS #1 GIG\") @db.Text\n  NAICS__1_GIG_name                                            String? @map(\"NAICS #1 GIG name\") @db.Text\n  id                                                           Int     @id @default(autoincrement())\n\n  @@map(\"companydata2\")\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel PercentageTable {\n  KPI_Report_Date                                              DateTime @map(\"KPI Report Date\") @db.Date\n  Company                                                      String?  @db.VarChar(10)\n  Member_of_the_S_P500                                         String?  @map(\"Member of the S&P500\") @db.VarChar(10)\n  Member_of_the_Russell_1000_Index                             String?  @map(\"Member of the Russell 1000 Index\") @db.VarChar(10)\n  Ticker_s_                                                    String?  @map(\"Ticker(s)\") @db.VarChar(10)\n  PR_Agency                                                    String?  @map(\"PR Agency\") @db.VarChar(10)\n  Example_2020_company_PR_agency_press_release_URL             String?  @map(\"Example 2020 company PR agency press release URL\") @db.VarChar(10)\n  Company_Global___Main_Website_URL                            String?  @map(\"Company Global / Main Website URL\") @db.VarChar(10)\n  Company_global_main_press___news_release_site_URL            String?  @map(\"Company global/main press - news release site URL\") @db.VarChar(10)\n  Company_annual_reports_page_URL                              String?  @map(\"Company annual reports page URL\") @db.VarChar(10)\n  Company_annual___financial_report_2020_URL_of_pdf_document   String?  @map(\"Company annual / financial report 2020 URL of pdf document\") @db.VarChar(10)\n  Company_sustainability___ESG_reports_page_URL                String?  @map(\"Company sustainability / ESG reports page URL\") @db.VarChar(10)\n  Company_Sustainability___ESG_report_2020_URL_of_pdf_document String?  @map(\"Company Sustainability / ESG report 2020 URL of pdf document\") @db.VarChar(10)\n  Country                                                      String?  @db.VarChar(10)\n  sector_code__1__NAICS_                                       String?  @map(\"sector code #1 (NAICS)\") @db.VarChar(10)\n  sector_name__1__NAICS_                                       String?  @map(\"sector name #1 (NAICS)\") @db.VarChar(10)\n  sector_code__2__NAICS_                                       String?  @map(\"sector code #2 (NAICS)\") @db.VarChar(10)\n  sector_name__2__NAICS_                                       String?  @map(\"sector name #2 (NAICS)\") @db.VarChar(10)\n  sector_code__3__NAICS_                                       String?  @map(\"sector code #3 (NAICS)\") @db.VarChar(10)\n  sector_name__3__NAICS_                                       String?  @map(\"sector name #3 (NAICS)\") @db.VarChar(10)\n  sector_code__4__NAICS_                                       String?  @map(\"sector code #4 (NAICS)\") @db.VarChar(10)\n  sector_name__4__NAICS_                                       String?  @map(\"sector name #4 (NAICS)\") @db.VarChar(10)\n  sector_code__5__NAICS_                                       String?  @map(\"sector code #5 (NAICS)\") @db.VarChar(10)\n  sector_name__5__NAICS_                                       String?  @map(\"sector name #5 (NAICS)\") @db.VarChar(10)\n  sector_codes_all__NAICS_                                     String?  @map(\"sector codes all (NAICS)\") @db.VarChar(10)\n  sector_name_all__NAICS_                                      String?  @map(\"sector name all (NAICS)\") @db.VarChar(10)\n  climateaction100                                             String?  @db.VarChar(10)\n  emails                                                       String?  @db.VarChar(10)\n  full_text                                                    String?  @db.VarChar(10)\n  Source_link                                                  String?  @map(\"Source link\") @db.VarChar(10)\n  pr_site                                                      String?  @db.VarChar(10)\n  release_date                                                 String?  @db.VarChar(10)\n  source                                                       String?  @db.VarChar(10)\n  ticker                                                       String?  @db.VarChar(10)\n  title                                                        String?  @db.VarChar(10)\n  ArticleTargetYear                                            String?  @db.VarChar(10)\n  PressReleaseFullCleanstep1                                   String?  @db.VarChar(10)\n  PressReleaseFullClean                                        String?  @db.VarChar(10)\n  Source_Date                                                  String?  @map(\"Source Date\") @db.VarChar(10)\n  Annual_Report_Date                                           String?  @map(\"Annual Report Date\") @db.VarChar(10)\n  PressReleaseYear                                             String?  @db.VarChar(10)\n  PressReleaseMonth                                            String?  @db.VarChar(10)\n  Target_sentence                                              String?  @map(\"Target sentence\") @db.VarChar(10)\n  SentenceTargetYear                                           String?  @db.VarChar(10)\n  Targetyear_s_                                                String?  @map(\"Targetyear(s)\") @db.VarChar(10)\n  sentence_carbon                                              String?  @map(\"sentence-carbon\") @db.VarChar(10)\n  sentence_gender                                              String?  @map(\"sentence-gender\") @db.VarChar(10)\n  sentence_renewables                                          String?  @map(\"sentence-renewables\") @db.VarChar(10)\n  sentence_suppliers                                           String?  @map(\"sentence-suppliers\") @db.VarChar(10)\n  sentence_water                                               String?  @map(\"sentence-water\") @db.VarChar(10)\n  sentence_waste                                               String?  @map(\"sentence-waste\") @db.VarChar(10)\n  sentence_other                                               String?  @map(\"sentence-other\") @db.VarChar(10)\n  id                                                           Int      @id @default(autoincrement())\n\n  @@map(\"percentage_table\")\n}\n\nmodel RoadmapCarbon {\n  Company                  String? @db.Text\n  Ticker_s_                String? @map(\"Ticker(s)\") @db.Text\n  PR_Agency                String? @map(\"PR Agency\") @db.Text\n  Company_Main_Website_URL String? @map(\"Company Main Website URL\") @db.Text\n  Company_Source_site_URL  String? @map(\"Company Source site URL\") @db.Text\n  Country                  String? @db.Text\n  sector_code__1__NAICS_   BigInt? @map(\"sector code #1 (NAICS)\")\n  sector_name__1__NAICS_   String? @map(\"sector name #1 (NAICS)\") @db.Text\n  sector_code__2__NAICS_   String? @map(\"sector code #2 (NAICS)\") @db.Text\n  sector_name__2__NAICS_   String? @map(\"sector name #2 (NAICS)\") @db.Text\n  sector_code__3__NAICS_   String? @map(\"sector code #3 (NAICS)\") @db.Text\n  sector_name__3__NAICS_   String? @map(\"sector name #3 (NAICS)\") @db.Text\n  sector_code__4__NAICS_   String? @map(\"sector code #4 (NAICS)\") @db.Text\n  sector_name__4__NAICS_   String? @map(\"sector name #4 (NAICS)\") @db.Text\n  sector_code__5__NAICS_   String? @map(\"sector code #5 (NAICS)\") @db.Text\n  sector_name__5__NAICS_   String? @map(\"sector name #5 (NAICS)\") @db.Text\n  S_P500member             String? @map(\"S&P500member\") @db.Text\n  Russell_1000_member      String? @map(\"Russell 1000 member\") @db.Text\n  Source_link_1            String? @map(\"Source link 1\") @db.Text\n  Source_date_1            String? @map(\"Source date 1\") @db.Text\n  Source_sentence_1        String? @map(\"Source sentence 1\") @db.Text\n  Targetyear_s__1          String? @map(\"Targetyear(s) 1\") @db.Text\n  Source_link_2            String? @map(\"Source link 2\") @db.Text\n  Source_date_2            String? @map(\"Source date 2\") @db.Text\n  Source_sentence_2        String? @map(\"Source sentence 2\") @db.Text\n  Targetyear_s__2          String? @map(\"Targetyear(s) 2\") @db.Text\n  Source_link_3            String? @map(\"Source link 3\") @db.Text\n  Source_date_3            String? @map(\"Source date 3\") @db.Text\n  Source_sentence_3        String? @map(\"Source sentence 3\") @db.Text\n  Targetyear_s__3          String? @map(\"Targetyear(s) 3\") @db.Text\n  Source_link_4            String? @map(\"Source link 4\") @db.Text\n  Source_date_4            String? @map(\"Source date 4\") @db.Text\n  Source_sentence_4        String? @map(\"Source sentence 4\") @db.Text\n  Targetyear_s__4          Float?  @map(\"Targetyear(s) 4\")\n  Source_link_5            String? @map(\"Source link 5\") @db.Text\n  Source_date_5            String? @map(\"Source date 5\") @db.Text\n  Source_sentence_5        String? @map(\"Source sentence 5\") @db.Text\n  Targetyear_s__5          Float?  @map(\"Targetyear(s) 5\")\n  Source_link_6            String? @map(\"Source link 6\") @db.Text\n  Source_date_6            String? @map(\"Source date 6\") @db.Text\n  Source_sentence_6        String? @map(\"Source sentence 6\") @db.Text\n  Targetyear_s__6          Float?  @map(\"Targetyear(s) 6\")\n  id                       Int     @id @default(autoincrement())\n\n  @@map(\"roadmap-carbon\")\n}\n\nmodel SentenceAll {\n  release_date               String? @db.Text\n  Targetyear_s_              String? @map(\"Targetyear(s)\") @db.Text\n  pr_site                    String? @db.Text\n  ArticleTargetYear          String? @db.Text\n  sentence_carbon            BigInt? @map(\"sentence-carbon\")\n  full_text                  String? @db.Text\n  PressReleaseMonth          String? @db.Text\n  PressReleaseFullClean      String? @db.Text\n  sentence_renewables        BigInt? @map(\"sentence-renewables\")\n  sentence_suppliers         BigInt? @map(\"sentence-suppliers\")\n  sentence_gender            BigInt? @map(\"sentence-gender\")\n  Company                    String? @db.Text\n  Annual_Report_Date         String? @map(\"Annual Report Date\") @db.Text\n  title                      String? @db.Text\n  emails                     String? @db.Text\n  sentence_other             BigInt? @map(\"sentence-other\")\n  Source_link                String? @map(\"Source link\") @db.Text\n  Source_Date                String? @map(\"Source Date\") @db.Text\n  PressReleaseFullCleanstep1 String? @db.Text\n  sentence_waste             BigInt? @map(\"sentence-waste\")\n  source                     String? @db.Text\n  sentence_water             BigInt? @map(\"sentence-water\")\n  PressReleaseYear           String? @db.Text\n  ticker                     String? @db.Text\n  SentenceTargetYear         String? @db.Text\n  Target_sentence            String? @map(\"Target sentence\") @db.Text\n  upload_date                String? @map(\"upload-date\") @db.Text\n  id                         Int     @id @default(autoincrement())\n  PageURL                    String? @db.VarChar(255)\n  DocURL                     String? @db.VarChar(255)\n  DocTitle                   String? @db.VarChar(255)\n  DocName                    String? @db.VarChar(255)\n  Target_Sentence_Page       String? @map(\"Target Sentence Page\") @db.VarChar(255)\n\n  @@map(\"sentence-all\")\n}\n\nmodel TargetSentence {\n  Company                                          String?  @db.Text\n  companylist                                      String?  @db.Text\n  Ticker_s_                                        String?  @map(\"Ticker(s)\") @db.Text\n  PR_Agency                                        String?  @map(\"PR Agency\") @db.Text\n  Example_2020_company_PR_agency_press_release_URL String?  @map(\"Example 2020 company PR agency press release URL\") @db.Text\n  Company_Main_Website_URL                         String?  @map(\"Company Main Website URL\") @db.Text\n  Company_press_release_site_URL                   String?  @map(\"Company press release site URL\") @db.Text\n  Country                                          String?  @db.Text\n  sector_code__1__NAICS_                           BigInt?  @map(\"sector code #1 (NAICS)\")\n  sector_name__1__NAICS_                           String?  @map(\"sector name #1 (NAICS)\") @db.Text\n  sector_code__2__NAICS_                           String?  @map(\"sector code #2 (NAICS)\") @db.Text\n  sector_name__2__NAICS_                           String?  @map(\"sector name #2 (NAICS)\") @db.Text\n  sector_code__3__NAICS_                           String?  @map(\"sector code #3 (NAICS)\") @db.Text\n  sector_name__3__NAICS_                           String?  @map(\"sector name #3 (NAICS)\") @db.Text\n  sector_code__4__NAICS_                           String?  @map(\"sector code #4 (NAICS)\") @db.Text\n  sector_name__4__NAICS_                           String?  @map(\"sector name #4 (NAICS)\") @db.Text\n  sector_code__5__NAICS_                           String?  @map(\"sector code #5 (NAICS)\") @db.Text\n  sector_name__5__NAICS_                           String?  @map(\"sector name #5 (NAICS)\") @db.Text\n  S_P500member                                     String?  @map(\"S&P500member\") @db.Text\n  Russell_1000_member                              String?  @map(\"Russell 1000 member\") @db.Text\n  emails                                           String?  @db.Text\n  full_text                                        String?  @db.Text\n  Source_link                                      String?  @map(\"Source link\") @db.Text\n  pr_site                                          String?  @db.Text\n  release_date                                     String?  @db.Text\n  source                                           String?  @db.Text\n  ticker                                           String?  @db.Text\n  title                                            String?  @db.Text\n  ArticleTargetYear                                String?  @db.Text\n  PressReleaseFullCleanstep1                       String?  @db.Text\n  PressReleaseFullClean                            String?  @db.Text\n  Source_date                                      String?  @map(\"Source date\") @db.Text\n  PressReleaseYear                                 BigInt?\n  PressReleaseMonth                                BigInt?\n  Target_sentence                                  String?  @map(\"Target sentence\") @db.Text\n  SentenceTargetYear                               String?  @db.Text\n  Targetyear_s_                                    String?  @map(\"Targetyear(s)\") @db.Text\n  sentence_carbon                                  Boolean? @map(\"sentence-carbon\")\n  sentence_gender                                  Boolean? @map(\"sentence-gender\")\n  sentence_renewables                              Boolean? @map(\"sentence-renewables\")\n  sentence_suppliers                               Boolean? @map(\"sentence-suppliers\")\n  sentence_water                                   Boolean? @map(\"sentence-water\")\n  Primarysource                                    Boolean?\n  id                                               Int      @id @default(autoincrement())\n\n  @@map(\"targetsentences\")\n}\n\nmodel Testable {\n  firstname Int\n  surname   Int\n  city      Int\n  country   Int\n  id        Int @id @default(autoincrement())\n\n  @@map(\"testtable\")\n}\n\nmodel wp_actionscheduler_actions {\n  action_id            BigInt   @id @default(autoincrement()) @db.UnsignedBigInt\n  hook                 String\n  status               String   @db.VarChar(20)\n  scheduled_date_gmt   DateTime @default(now()) @db.DateTime(0)\n  scheduled_date_local DateTime @default(now()) @db.DateTime(0)\n  args                 String?\n  schedule             String?  @db.LongText\n  group_id             BigInt   @default(0) @db.UnsignedBigInt\n  attempts             Int      @default(0)\n  last_attempt_gmt     DateTime @default(now()) @db.DateTime(0)\n  last_attempt_local   DateTime @default(now()) @db.DateTime(0)\n  claim_id             BigInt   @default(0) @db.UnsignedBigInt\n  extended_args        String?  @db.VarChar(8000)\n\n  @@index([args], map: \"args\")\n  @@index([claim_id], map: \"claim_id\")\n  @@index([group_id], map: \"group_id\")\n  @@index([hook], map: \"hook\")\n  @@index([last_attempt_gmt], map: \"last_attempt_gmt\")\n  @@index([scheduled_date_gmt], map: \"scheduled_date_gmt\")\n  @@index([status], map: \"status\")\n}\n\nmodel wp_actionscheduler_claims {\n  claim_id         BigInt   @id @default(autoincrement()) @db.UnsignedBigInt\n  date_created_gmt DateTime @default(now()) @db.DateTime(0)\n\n  @@index([date_created_gmt], map: \"date_created_gmt\")\n}\n\nmodel wp_actionscheduler_groups {\n  group_id BigInt @id @default(autoincrement()) @db.UnsignedBigInt\n  slug     String @db.VarChar(255)\n\n  @@index([slug(length: 191)], map: \"slug\")\n}\n\nmodel wp_actionscheduler_logs {\n  log_id         BigInt   @id @default(autoincrement()) @db.UnsignedBigInt\n  action_id      BigInt   @db.UnsignedBigInt\n  message        String   @db.Text\n  log_date_gmt   DateTime @default(now()) @db.DateTime(0)\n  log_date_local DateTime @default(now()) @db.DateTime(0)\n\n  @@index([action_id], map: \"action_id\")\n  @@index([log_date_gmt], map: \"log_date_gmt\")\n}\n\nmodel wp_aioseo_notifications {\n  id                BigInt    @id @default(autoincrement()) @db.UnsignedBigInt\n  slug              String    @unique(map: \"ndx_aioseo_notifications_slug\") @db.VarChar(13)\n  title             String    @db.Text\n  content           String    @db.LongText\n  type              String    @db.VarChar(64)\n  level             String    @db.Text\n  notification_id   BigInt?   @db.UnsignedBigInt\n  notification_name String?   @db.VarChar(255)\n  start             DateTime? @db.DateTime(0)\n  end               DateTime? @db.DateTime(0)\n  button1_label     String?   @db.VarChar(255)\n  button1_action    String?   @db.VarChar(255)\n  button2_label     String?   @db.VarChar(255)\n  button2_action    String?   @db.VarChar(255)\n  dismissed         Boolean   @default(false)\n  created           DateTime  @db.DateTime(0)\n  updated           DateTime  @db.DateTime(0)\n\n  @@index([start, end], map: \"ndx_aioseo_notifications_dates\")\n  @@index([dismissed], map: \"ndx_aioseo_notifications_dismissed\")\n  @@index([type], map: \"ndx_aioseo_notifications_type\")\n}\n\nmodel wp_aioseo_posts {\n  id                          BigInt    @id @default(autoincrement()) @db.UnsignedBigInt\n  post_id                     BigInt    @db.UnsignedBigInt\n  title                       String?   @db.Text\n  description                 String?   @db.Text\n  keywords                    String?   @db.MediumText\n  keyphrases                  String?   @db.LongText\n  page_analysis               String?   @db.LongText\n  canonical_url               String?   @db.Text\n  og_title                    String?   @db.Text\n  og_description              String?   @db.Text\n  og_object_type              String?   @default(\"default\") @db.VarChar(64)\n  og_image_type               String?   @default(\"default\") @db.VarChar(64)\n  og_image_custom_url         String?   @db.Text\n  og_image_custom_fields      String?   @db.Text\n  og_custom_image_width       Int?\n  og_custom_image_height      Int?\n  og_video                    String?   @db.VarChar(255)\n  og_custom_url               String?   @db.Text\n  og_article_section          String?   @db.Text\n  og_article_tags             String?   @db.Text\n  twitter_use_og              Boolean?  @default(false)\n  twitter_card                String?   @default(\"default\") @db.VarChar(64)\n  twitter_image_type          String?   @default(\"default\") @db.VarChar(64)\n  twitter_image_custom_url    String?   @db.Text\n  twitter_image_custom_fields String?   @db.Text\n  twitter_title               String?   @db.Text\n  twitter_description         String?   @db.Text\n  seo_score                   Int       @default(0)\n  schema_type                 String?   @db.VarChar(20)\n  schema_type_options         String?   @db.LongText\n  pillar_content              Boolean?\n  robots_default              Boolean   @default(true)\n  robots_noindex              Boolean   @default(false)\n  robots_noarchive            Boolean   @default(false)\n  robots_nosnippet            Boolean   @default(false)\n  robots_nofollow             Boolean   @default(false)\n  robots_noimageindex         Boolean   @default(false)\n  robots_noodp                Boolean   @default(false)\n  robots_notranslate          Boolean   @default(false)\n  robots_max_snippet          Int?\n  robots_max_videopreview     Int?\n  robots_max_imagepreview     String?   @default(\"large\") @db.VarChar(20)\n  tabs                        String?   @db.MediumText\n  images                      String?   @db.LongText\n  image_scan_date             DateTime? @db.DateTime(0)\n  priority                    String?   @db.TinyText\n  frequency                   String?   @db.TinyText\n  videos                      String?   @db.LongText\n  video_thumbnail             String?   @db.Text\n  video_scan_date             DateTime? @db.DateTime(0)\n  local_seo                   String?   @db.LongText\n  created                     DateTime  @db.DateTime(0)\n  updated                     DateTime  @db.DateTime(0)\n\n  @@index([post_id], map: \"ndx_aioseo_posts_post_id\")\n}\n\nmodel wp_commentmeta {\n  meta_id    BigInt  @id @default(autoincrement()) @db.UnsignedBigInt\n  comment_id BigInt  @default(0) @db.UnsignedBigInt\n  meta_key   String? @db.VarChar(255)\n  meta_value String? @db.LongText\n\n  @@index([comment_id], map: \"comment_id\")\n  @@index([meta_key(length: 191)], map: \"meta_key\")\n}\n\nmodel wp_comments {\n  comment_ID           BigInt   @id @default(autoincrement()) @db.UnsignedBigInt\n  comment_post_ID      BigInt   @default(0) @db.UnsignedBigInt\n  comment_author       String   @db.TinyText\n  comment_author_email String   @default(\"\") @db.VarChar(100)\n  comment_author_url   String   @default(\"\") @db.VarChar(200)\n  comment_author_IP    String   @default(\"\") @db.VarChar(100)\n  comment_date         DateTime @default(now()) @db.DateTime(0)\n  comment_date_gmt     DateTime @default(now()) @db.DateTime(0)\n  comment_content      String   @db.Text\n  comment_karma        Int      @default(0)\n  comment_approved     String   @default(\"1\") @db.VarChar(20)\n  comment_agent        String   @default(\"\") @db.VarChar(255)\n  comment_type         String   @default(\"comment\") @db.VarChar(20)\n  comment_parent       BigInt   @default(0) @db.UnsignedBigInt\n  user_id              BigInt   @default(0) @db.UnsignedBigInt\n\n  @@index([comment_approved, comment_date_gmt], map: \"comment_approved_date_gmt\")\n  @@index([comment_author_email(length: 10)], map: \"comment_author_email\")\n  @@index([comment_date_gmt], map: \"comment_date_gmt\")\n  @@index([comment_parent], map: \"comment_parent\")\n  @@index([comment_post_ID], map: \"comment_post_ID\")\n}\n\nmodel wp_links {\n  link_id          BigInt   @id @default(autoincrement()) @db.UnsignedBigInt\n  link_url         String   @default(\"\") @db.VarChar(255)\n  link_name        String   @default(\"\") @db.VarChar(255)\n  link_image       String   @default(\"\") @db.VarChar(255)\n  link_target      String   @default(\"\") @db.VarChar(25)\n  link_description String   @default(\"\") @db.VarChar(255)\n  link_visible     String   @default(\"Y\") @db.VarChar(20)\n  link_owner       BigInt   @default(1) @db.UnsignedBigInt\n  link_rating      Int      @default(0)\n  link_updated     DateTime @default(now()) @db.DateTime(0)\n  link_rel         String   @default(\"\") @db.VarChar(255)\n  link_notes       String   @db.MediumText\n  link_rss         String   @default(\"\") @db.VarChar(255)\n\n  @@index([link_visible], map: \"link_visible\")\n}\n\nmodel wp_nextend2_image_storage {\n  id    Int    @id @default(autoincrement())\n  hash  String @unique(map: \"hash\") @db.VarChar(32)\n  image String @db.Text\n  value String @db.MediumText\n}\n\nmodel wp_nextend2_section_storage {\n  id           Int    @id @default(autoincrement())\n  application  String @db.VarChar(20)\n  section      String @db.VarChar(128)\n  referencekey String @db.VarChar(128)\n  value        String @db.MediumText\n  system       Int    @default(0)\n  editable     Int    @default(1)\n\n  @@index([application, section(length: 50), referencekey(length: 50)], map: \"application\")\n  @@index([application, section(length: 50)], map: \"application_2\")\n  @@index([editable], map: \"editable\")\n  @@index([system], map: \"system\")\n}\n\nmodel wp_nextend2_smartslider3_generators {\n  id     Int    @id @default(autoincrement())\n  group  String @db.VarChar(254)\n  type   String @db.VarChar(254)\n  params String @db.Text\n}\n\nmodel wp_nextend2_smartslider3_sliders {\n  id        Int      @id @default(autoincrement())\n  alias     String?  @db.VarChar(255)\n  title     String   @db.VarChar(200)\n  type      String   @db.VarChar(30)\n  params    String   @db.MediumText\n  status    String   @default(\"published\") @db.VarChar(50)\n  time      DateTime @db.DateTime(0)\n  thumbnail String   @db.VarChar(255)\n  ordering  Int      @default(0)\n\n  @@index([status], map: \"status\")\n  @@index([time], map: \"time\")\n}\n\nmodel wp_nextend2_smartslider3_sliders_xref {\n  group_id  Int\n  slider_id Int\n  ordering  Int @default(0)\n\n  @@id([group_id, slider_id])\n  @@index([ordering], map: \"ordering\")\n}\n\nmodel wp_nextend2_smartslider3_slides {\n  id           Int      @id @default(autoincrement())\n  title        String   @db.VarChar(200)\n  slider       Int\n  publish_up   DateTime @default(dbgenerated(\"'1970-01-01 00:00:00'\")) @db.DateTime(0)\n  publish_down DateTime @default(dbgenerated(\"'1970-01-01 00:00:00'\")) @db.DateTime(0)\n  published    Boolean\n  first        Int\n  slide        String?  @db.LongText\n  description  String   @db.Text\n  thumbnail    String   @db.VarChar(255)\n  params       String   @db.Text\n  ordering     Int\n  generator_id Int\n\n  @@index([generator_id], map: \"generator_id\")\n  @@index([ordering], map: \"ordering\")\n  @@index([publish_down], map: \"publish_down\")\n  @@index([publish_up], map: \"publish_up\")\n  @@index([published], map: \"published\")\n  @@index([slider], map: \"slider\")\n  @@index([thumbnail(length: 100)], map: \"thumbnail\")\n}\n\nmodel wp_options {\n  option_id    BigInt @id @default(autoincrement()) @db.UnsignedBigInt\n  option_name  String @unique(map: \"option_name\") @default(\"\")\n  option_value String @db.LongText\n  autoload     String @default(\"yes\") @db.VarChar(20)\n\n  @@index([autoload], map: \"autoload\")\n}\n\nmodel wp_postmeta {\n  meta_id    BigInt  @id @default(autoincrement()) @db.UnsignedBigInt\n  post_id    BigInt  @default(0) @db.UnsignedBigInt\n  meta_key   String? @db.VarChar(255)\n  meta_value String? @db.LongText\n\n  @@index([meta_key(length: 191)], map: \"meta_key\")\n  @@index([post_id], map: \"post_id\")\n}\n\nmodel wp_posts {\n  ID                    BigInt   @id @default(autoincrement()) @db.UnsignedBigInt\n  post_author           BigInt   @default(0) @db.UnsignedBigInt\n  post_date             DateTime @default(now()) @db.DateTime(0)\n  post_date_gmt         DateTime @default(now()) @db.DateTime(0)\n  post_content          String   @db.LongText\n  post_title            String   @db.Text\n  post_excerpt          String   @db.Text\n  post_status           String   @default(\"publish\") @db.VarChar(20)\n  comment_status        String   @default(\"open\") @db.VarChar(20)\n  ping_status           String   @default(\"open\") @db.VarChar(20)\n  post_password         String   @default(\"\") @db.VarChar(255)\n  post_name             String   @default(\"\") @db.VarChar(200)\n  to_ping               String   @db.Text\n  pinged                String   @db.Text\n  post_modified         DateTime @default(now()) @db.DateTime(0)\n  post_modified_gmt     DateTime @default(now()) @db.DateTime(0)\n  post_content_filtered String   @db.LongText\n  post_parent           BigInt   @default(0) @db.UnsignedBigInt\n  guid                  String   @default(\"\") @db.VarChar(255)\n  menu_order            Int      @default(0)\n  post_type             String   @default(\"post\") @db.VarChar(20)\n  post_mime_type        String   @default(\"\") @db.VarChar(100)\n  comment_count         BigInt   @default(0)\n\n  @@index([post_author], map: \"post_author\")\n  @@index([post_name(length: 191)], map: \"post_name\")\n  @@index([post_parent], map: \"post_parent\")\n  @@index([post_type, post_status, post_date, ID], map: \"type_status_date\")\n}\n\nmodel wp_term_relationships {\n  object_id        BigInt @default(0) @db.UnsignedBigInt\n  term_taxonomy_id BigInt @default(0) @db.UnsignedBigInt\n  term_order       Int    @default(0)\n\n  @@id([object_id, term_taxonomy_id])\n  @@index([term_taxonomy_id], map: \"term_taxonomy_id\")\n}\n\nmodel wp_term_taxonomy {\n  term_taxonomy_id BigInt @id @default(autoincrement()) @db.UnsignedBigInt\n  term_id          BigInt @default(0) @db.UnsignedBigInt\n  taxonomy         String @default(\"\") @db.VarChar(32)\n  description      String @db.LongText\n  parent           BigInt @default(0) @db.UnsignedBigInt\n  count            BigInt @default(0)\n\n  @@unique([term_id, taxonomy], map: \"term_id_taxonomy\")\n  @@index([taxonomy], map: \"taxonomy\")\n}\n\nmodel wp_termmeta {\n  meta_id    BigInt  @id @default(autoincrement()) @db.UnsignedBigInt\n  term_id    BigInt  @default(0) @db.UnsignedBigInt\n  meta_key   String? @db.VarChar(255)\n  meta_value String? @db.LongText\n\n  @@index([meta_key(length: 191)], map: \"meta_key\")\n  @@index([term_id], map: \"term_id\")\n}\n\nmodel wp_terms {\n  term_id    BigInt @id @default(autoincrement()) @db.UnsignedBigInt\n  name       String @default(\"\") @db.VarChar(200)\n  slug       String @default(\"\") @db.VarChar(200)\n  term_group BigInt @default(0)\n\n  @@index([name(length: 191)], map: \"name\")\n  @@index([slug(length: 191)], map: \"slug\")\n}\n\nmodel wp_um_metadata {\n  umeta_id BigInt  @id @default(autoincrement()) @db.UnsignedBigInt\n  user_id  BigInt  @default(0) @db.UnsignedBigInt\n  um_key   String? @db.VarChar(255)\n  um_value String? @db.LongText\n\n  @@index([um_key], map: \"meta_key_indx\")\n  @@index([um_value(length: 191)], map: \"meta_value_indx\")\n  @@index([user_id], map: \"user_id_indx\")\n}\n\nmodel wp_user_registration_sessions {\n  session_id     BigInt @unique(map: \"session_id\") @default(autoincrement()) @db.UnsignedBigInt\n  session_key    String @id @db.Char(32)\n  session_value  String @db.LongText\n  session_expiry BigInt @db.UnsignedBigInt\n}\n\nmodel wp_usermeta {\n  umeta_id   BigInt  @id @default(autoincrement()) @db.UnsignedBigInt\n  user_id    BigInt  @default(0) @db.UnsignedBigInt\n  meta_key   String? @db.VarChar(255)\n  meta_value String? @db.LongText\n\n  @@index([meta_key(length: 191)], map: \"meta_key\")\n  @@index([user_id], map: \"user_id\")\n}\n\nmodel wp_users {\n  ID                  BigInt   @id @default(autoincrement()) @db.UnsignedBigInt\n  user_login          String   @default(\"\") @db.VarChar(60)\n  user_pass           String   @default(\"\") @db.VarChar(255)\n  user_nicename       String   @default(\"\") @db.VarChar(50)\n  user_email          String   @default(\"\") @db.VarChar(100)\n  user_url            String   @default(\"\") @db.VarChar(100)\n  user_registered     DateTime @default(now()) @db.DateTime(0)\n  user_activation_key String   @default(\"\") @db.VarChar(255)\n  user_status         Int      @default(0)\n  display_name        String   @default(\"\") @db.VarChar(250)\n\n  @@index([user_email], map: \"user_email\")\n  @@index([user_login], map: \"user_login_key\")\n  @@index([user_nicename], map: \"user_nicename\")\n}\n\nmodel wp_wpdatacharts {\n  id               Int                    @unique(map: \"id\") @default(autoincrement())\n  wpdatatable_id   Int\n  title            String                 @db.VarChar(255)\n  engine           wp_wpdatacharts_engine\n  type             String                 @db.VarChar(255)\n  json_render_data String                 @db.Text\n}\n\nmodel wp_wpdatatables {\n  id                 Int     @unique(map: \"id\") @default(autoincrement())\n  title              String  @db.VarChar(255)\n  show_title         Boolean @default(true)\n  table_type         String  @db.VarChar(55)\n  content            String  @db.Text\n  filtering          Boolean @default(true)\n  filtering_form     Boolean @default(false)\n  sorting            Boolean @default(true)\n  tools              Boolean @default(true)\n  server_side        Boolean @default(false)\n  editable           Boolean @default(false)\n  inline_editing     Boolean @default(false)\n  popover_tools      Boolean @default(false)\n  editor_roles       String  @default(\"\") @db.VarChar(255)\n  mysql_table_name   String  @default(\"\") @db.VarChar(255)\n  edit_only_own_rows Boolean @default(false)\n  userid_column_id   Int     @default(0)\n  display_length     Int     @default(10)\n  auto_refresh       Int     @default(0)\n  fixed_columns      Int     @default(-1) @db.TinyInt\n  fixed_layout       Boolean @default(false)\n  responsive         Boolean @default(false)\n  scrollable         Boolean @default(false)\n  word_wrap          Boolean @default(false)\n  hide_before_load   Boolean @default(false)\n  var1               String  @default(\"\") @db.VarChar(255)\n  var2               String  @default(\"\") @db.VarChar(255)\n  var3               String  @default(\"\") @db.VarChar(255)\n  tabletools_config  String  @default(\"\") @db.VarChar(255)\n  advanced_settings  String  @db.Text\n  connection         String  @default(\"\") @db.VarChar(55)\n}\n\nmodel wp_wpdatatables_columns {\n  id                       Int                                 @unique(map: \"id\") @default(autoincrement())\n  table_id                 Int\n  orig_header              String                              @db.VarChar(255)\n  display_header           String                              @db.VarChar(255)\n  filter_type              wp_wpdatatables_columns_filter_type\n  column_type              wp_wpdatatables_columns_column_type\n  input_type               wp_wpdatatables_columns_input_type  @default(text)\n  input_mandatory          Boolean                             @default(false)\n  id_column                Boolean                             @default(false)\n  group_column             Boolean                             @default(false)\n  sort_column              Boolean                             @default(false)\n  hide_on_phones           Boolean                             @default(false)\n  hide_on_tablets          Boolean                             @default(false)\n  visible                  Boolean                             @default(true)\n  sum_column               Boolean                             @default(false)\n  skip_thousands_separator Boolean                             @default(false)\n  width                    String                              @default(\"\") @db.VarChar(4)\n  possible_values          String                              @db.Text\n  default_value            String                              @default(\"\") @db.VarChar(100)\n  css_class                String                              @default(\"\") @db.VarChar(255)\n  text_before              String                              @default(\"\") @db.VarChar(255)\n  text_after               String                              @default(\"\") @db.VarChar(255)\n  formatting_rules         String                              @db.Text\n  calc_formula             String                              @db.Text\n  color                    String                              @default(\"\") @db.VarChar(255)\n  advanced_settings        String                              @db.Text\n  pos                      Int                                 @default(0)\n}\n\nmodel wp_wpdatatables_rows {\n  id       Int    @unique(map: \"id\") @default(autoincrement())\n  table_id Int\n  data     String @db.Text\n}\n\nmodel wp_wpforms_tasks_meta {\n  id     BigInt   @id @default(autoincrement())\n  action String   @db.VarChar(255)\n  data   String   @db.LongText\n  date   DateTime @db.DateTime(0)\n}\n\nmodel User {\n  id               Int                @unique(map: \"id\") @default(autoincrement())\n  username         String             @db.VarChar(255)\n  email            String             @db.VarChar(255)\n  password         String             @db.VarChar(255)\n  isActive         Boolean            @map(\"is_active\")\n  profileImage     String?            @default(\"default.png\") @map(\"profile_image\") @db.Text\n  plan             Int                @default(1) @map(\"plan\")\n  role             String             @default(\"user\") @db.VarChar(255)\n  stripeId         String?            @default(\"stripe_id\") @db.VarChar(255)\n  customerId       String?\n  planId           String?\n  planName         String?\n  subscriptionId   String?\n  createdAt        DateTime           @default(now()) @map(\"created_at\")\n  updatedAt        DateTime?          @map(\"updated_at\")\n  deletedAt        DateTime?          @map(\"deleted_at\")\n  emailUpdate      String             @map(\"email_update\")\n  isPaid           Boolean?\n  Portfolio        Portfolio[]\n  ticketComments   TicketComment[]\n  tickets          Ticket[]\n  UserSubscription UserSubscription[]\n  search           Search[]\n\n  @@map(\"users\")\n}\n\nmodel Ticket {\n  id          Int              @unique(map: \"id\") @default(autoincrement())\n  userId      Int\n  title       String           @db.VarChar(255)\n  description String           @db.Text\n  status      String           @db.VarChar(255)\n  createdAt   DateTime         @default(now()) @map(\"created_at\")\n  updatedAt   DateTime?        @map(\"updated_at\")\n  deletedAt   DateTime?        @map(\"deleted_at\")\n  comments    TicketComment[]\n  documents   TicketDocument[]\n  postedBy    User             @relation(fields: [userId], references: [id])\n\n  @@index([userId], map: \"tickets_userId_fkey\")\n  @@map(\"tickets\")\n}\n\nmodel TicketDocument {\n  id        Int       @unique(map: \"id\") @default(autoincrement())\n  url       String\n  name      String\n  size      Int\n  createdAt DateTime  @default(now()) @map(\"created_at\")\n  updatedAt DateTime? @map(\"updated_at\")\n  deletedAt DateTime? @map(\"deleted_at\")\n  ticketId  Int\n  ticket    Ticket    @relation(fields: [ticketId], references: [id])\n\n  @@index([ticketId], map: \"ticket_documents_ticketId_fkey\")\n  @@map(\"ticket_documents\")\n}\n\nmodel TicketComment {\n  id        Int       @unique(map: \"id\") @default(autoincrement())\n  text      String    @db.Text\n  ticketId  Int\n  userId    Int\n  createdAt DateTime  @default(now()) @map(\"created_at\")\n  updatedAt DateTime? @map(\"updated_at\")\n  deletedAt DateTime? @map(\"deleted_at\")\n  ticket    Ticket    @relation(fields: [ticketId], references: [id])\n  postedBy  User      @relation(fields: [userId], references: [id])\n\n  @@index([ticketId], map: \"ticket_comments_ticketId_fkey\")\n  @@index([userId], map: \"ticket_comments_userId_fkey\")\n  @@map(\"ticket_comments\")\n}\n\nmodel UserSubscription {\n  id             Int       @unique(map: \"id\") @default(autoincrement())\n  userId         Int\n  subscriptionId String    @map(\"subscription_id\")\n  createdAt      DateTime  @default(now()) @map(\"created_at\")\n  updatedAt      DateTime? @map(\"updated_at\")\n  deletedAt      DateTime? @map(\"deleted_at\")\n  user           User      @relation(fields: [userId], references: [id])\n\n  @@index([userId], map: \"user_subscriptions_userId_fkey\")\n  @@map(\"user_subscriptions\")\n}\n\nmodel Portfolio {\n  id        Int       @unique(map: \"id\") @default(autoincrement())\n  userId    Int\n  name      String    @db.VarChar(255)\n  filters   Json\n  tableName String    @map(\"table_name\") @db.VarChar(255)\n  createdAt DateTime  @default(now()) @map(\"created_at\")\n  updatedAt DateTime? @map(\"updated_at\")\n  deletedAt DateTime? @map(\"deleted_at\")\n  user      User      @relation(fields: [userId], references: [id])\n\n  @@index([userId], map: \"portfolios_userId_fkey\")\n  @@map(\"portfolios\")\n}\n\nenum wp_wpdatacharts_engine {\n  google\n  highcharts\n  chartjs\n}\n\nenum wp_wpdatatables_columns_filter_type {\n  none\n  null_str\n  text\n  number\n  number_range   @map(\"number-range\")\n  date_range     @map(\"date-range\")\n  datetime_range @map(\"datetime-range\")\n  time_range     @map(\"time-range\")\n  select\n  multiselect\n  checkbox\n}\n\nenum wp_wpdatatables_columns_column_type {\n  autodetect\n  string\n  int\n  float\n  date\n  link\n  email\n  image\n  formula\n  datetime\n  time\n  masterdetail\n}\n\nenum wp_wpdatatables_columns_input_type {\n  none\n  text\n  textarea\n  mce_editor      @map(\"mce-editor\")\n  date\n  datetime\n  time\n  link\n  email\n  selectbox\n  multi_selectbox @map(\"multi-selectbox\")\n  attachment\n}\n\nmodel sentenceallview {\n  id                         Int       @id\n  release_date               DateTime?\n  pr_site                    String?\n  Targetyear_s               String?   @map(\"Targetyear(s)\")\n  ArticleTargetYear          String?\n  sentence_carbon            BigInt?   @map(\"sentence-carbon\")\n  full_text                  String?\n  PressReleaseMonth          String?\n  PressReleaseFullClean      String?\n  sentence_renewables        BigInt?   @map(\"sentence-renewables\")\n  sentence_suppliers         BigInt?   @map(\"sentence-suppliers\")\n  sentence_gender            BigInt?   @map(\"sentence-gender\")\n  Company                    String?\n  Annual_Report_Date         String?   @map(\"Annual Report Date\")\n  title                      String?\n  emails                     String?\n  sentence_other             BigInt?   @map(\"sentence-other\")\n  Source_link                String?   @map(\"Source link\")\n  Source_Date                String?   @map(\"Source Date\")\n  PressReleaseFullCleanstep1 String?\n  sentence_waste             BigInt?   @map(\"sentence-waste\")\n  source                     String?\n  sentence_water             BigInt?   @map(\"sentence-water\")\n  PressReleaseYear           String?\n  ticker                     String?\n  SentenceTargetYear         String?\n  Target_sentence            String?   @map(\"Target sentence\")\n  upload_date                String?   @map(\"upload-date\")\n  PageURL                    String?\n  DocURL                     String?\n  DocTitle                   String?\n  DocName                    String?\n  Target_Sentence_Page       String?   @map(\"Target Sentence Page\")\n  x                          String?\n  Member_SP500               String?   @map(\"Member of the S&P500\")\n  Member_Russell1000         String?   @map(\"Member of the Russell 1000 Index\")\n  ScrapingCodeSetUp          String?   @map(\"Scraping code set up ?\")\n  Tickers                    String?   @map(\"Ticker(s)\")\n  PRAgency                   String?   @map(\"PR Agency\")\n  Domain                     String?\n  PressURL                   String?   @map(\"Company global/main press - news release site URL\")\n  SubscribedEsgroadmap       String?   @map(\"Subscribed to press releases esgroadmap@gmail.com ?\")\n  SubscribedJames            String?   @map(\"Subscribed to press releases jameskijani@gmail.com ?\")\n  PlainTextSubscription      String?   @map(\"Plain text press release subscription possible? (yes/no)\")\n  AnnualReportsURL           String?   @map(\"Company annual reports page URL\")\n  AnnualReportPDF2020        String?   @map(\"Company annual report 2020 URL of pdf document (including 10-k)\")\n  ESGReportsURL              String?   @map(\"Company sustainability / ESG reports page URL\")\n  ESGReportPDF2020           String?   @map(\"Company Sustainability / ESG report 2020 URL of pdf document\")\n  Country                    String?\n  SectorCode1                String?   @map(\"sector code #1 (NAICS)\")\n  SectorName1                String?   @map(\"sector name #1 (NAICS)\")\n  SectorCode2                String?   @map(\"sector code #2 (NAICS)\")\n  SectorName2                String?   @map(\"sector name #2 (NAICS)\")\n  SectorCode3                String?   @map(\"sector code #3 (NAICS)\")\n  SectorName3                String?   @map(\"sector name #3 (NAICS)\")\n  SectorCode4                String?   @map(\"sector code #4 (NAICS)\")\n  SectorName4                String?   @map(\"sector name #4 (NAICS)\")\n  SectorCode5                String?   @map(\"sector code #5 (NAICS)\")\n  SectorName5                String?   @map(\"sector name #5 (NAICS)\")\n  WorkedBy                   String?   @map(\"WORKED BY:\")\n  CommentsNotes              String?   @map(\"COMMENTS / NOTES\")\n  CarbonSentenceAvailable    String?   @map(\"Carbon sentence available ?\")\n\n  @@map(\"sentenceallview\")\n}\n\nmodel Search {\n  id          String    @id @default(uuid()) @db.Char(36) // 👈 ADD @default(uuid())\n  userId      Int\n  keyword     String    @db.VarChar(255)\n  tableName   String\n  createdAt   DateTime  @default(now()) @db.DateTime(0)\n  lastChecked DateTime? @default(now())\n  user        User      @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: NoAction, map: \"Search_userId_fkey\")\n\n  @@index([userId], map: \"Search_userId_idx\")\n  @@fulltext([keyword])\n}\n",
  "inlineSchemaHash": "e827c6dc809f8afdf4f3df51262ec26583839b0a8daa75784968d8a88a6a79d8",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/prisma",
    "generated/prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"UniqueFactorsTable\":{\"dbName\":\"Unique_Factors_Table\",\"schema\":null,\"fields\":[{\"name\":\"KPI_Report_Date\",\"dbName\":\"KPI Report Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company__NON_NULL_Total_\",\"dbName\":\"Company (NON-NULL Total)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company__NON_NULL_Unique_\",\"dbName\":\"Company (NON-NULL Unique)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Member_of_the_S_P500__YES_Total_\",\"dbName\":\"Member of the S&P500 (YES Total)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Member_of_the_Russell_1000_Index__YES_Total_\",\"dbName\":\"Member of the Russell 1000 Index (YES Total)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ticker_s___NON_NULL_Total_\",\"dbName\":\"Ticker(s) (NON-NULL Total)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ticker_s___NON_NULL_Unique_\",\"dbName\":\"Ticker(s) (NON-NULL Unique)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Country__NON_NULL_Total_\",\"dbName\":\"Country (NON-NULL Total)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Country__NON_NULL_Unique_\",\"dbName\":\"Country (NON-NULL Unique)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__1__NAICS___NON_NULL_Unique_\",\"dbName\":\"sector code #1 (NAICS) (NON-NULL Unique)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__2__NAICS___NON_NULL_Unique_\",\"dbName\":\"sector code #2 (NAICS) (NON-NULL Unique)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__3__NAICS___NON_NULL_Unique_\",\"dbName\":\"sector code #3 (NAICS) (NON-NULL Unique)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__4__NAICS___NON_NULL_Unique_\",\"dbName\":\"sector code #4 (NAICS) (NON-NULL Unique)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__5__NAICS___NON_NULL_Unique_\",\"dbName\":\"sector code #5 (NAICS) (NON-NULL Unique)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_codes_all__NAICS___NON_NULL_Unique_\",\"dbName\":\"sector codes all (NAICS) (NON-NULL Unique)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ArticleTargetYear__NON_NULL_Unique_\",\"dbName\":\"ArticleTargetYear (NON-NULL Unique)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_Date__NON_NULL_Unique_\",\"dbName\":\"Source Date (NON-NULL Unique)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PressReleaseYear__NON_NULL_Unique_\",\"dbName\":\"PressReleaseYear (NON-NULL Unique)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Target_sentence__NON_NULL_Total_\",\"dbName\":\"Target sentence (NON-NULL Total)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Target_sentence__NON_NULL_Unique_\",\"dbName\":\"Target sentence (NON-NULL Unique)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Targetyear_s___NON_NULL_Unique_\",\"dbName\":\"Targetyear(s) (NON-NULL Unique)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_carbon__1_Total_\",\"dbName\":\"sentence-carbon (1 Total)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_gender__1_Total_\",\"dbName\":\"sentence-gender (1 Total)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_renewables__1_Total_\",\"dbName\":\"sentence-renewables (1 Total)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_suppliers__1_Total_\",\"dbName\":\"sentence-suppliers (1 Total)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_water__1_Total_\",\"dbName\":\"sentence-water (1 Total)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_waste__1_Total_\",\"dbName\":\"sentence-waste (1 Total)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_other__1_Total_\",\"dbName\":\"sentence-other (1 Total)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CompanyUniverse\":{\"dbName\":\"company_universe\",\"schema\":null,\"fields\":[{\"name\":\"Company\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"x\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Member_of_the_S_P500\",\"dbName\":\"Member of the S&P500\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Member_of_the_Russell_1000_Index\",\"dbName\":\"Member of the Russell 1000 Index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Scraping_code_set_up__\",\"dbName\":\"Scraping code set up ?\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ticker_s_\",\"dbName\":\"Ticker(s)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PR_Agency\",\"dbName\":\"PR Agency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Example_2020_company_PR_agency_press_release_URL\",\"dbName\":\"Example 2020 company PR agency press release URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Domain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"500\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_global_main_press___news_release_site_URL\",\"dbName\":\"Company global/main press - news release site URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Subscribed_to_press_releases_esgroadmap_gmail_com__\",\"dbName\":\"Subscribed to press releases esgroadmap@gmail.com ?\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Subscribed_to_press_releases_jameskijani_gmail_com__\",\"dbName\":\"Subscribed to press releases jameskijani@gmail.com ?\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Plain_text_press_release_subscription_possible___yes_no_\",\"dbName\":\"Plain text press release subscription possible? (yes/no)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"3\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_annual_reports_page_URL\",\"dbName\":\"Company annual reports page URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_annual_report_2020_URL_of_pdf_document__including_10_k_\",\"dbName\":\"Company annual report 2020 URL of pdf document (including 10-k)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_sustainability___ESG_reports_page_URL\",\"dbName\":\"Company sustainability / ESG reports page URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_Sustainability___ESG_report_2020_URL_of_pdf_document\",\"dbName\":\"Company Sustainability / ESG report 2020 URL of pdf document\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__1__NAICS_\",\"dbName\":\"sector code #1 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__1__NAICS_\",\"dbName\":\"sector name #1 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__2__NAICS_\",\"dbName\":\"sector code #2 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__2__NAICS_\",\"dbName\":\"sector name #2 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__3__NAICS_\",\"dbName\":\"sector code #3 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__3__NAICS_\",\"dbName\":\"sector name #3 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__4__NAICS_\",\"dbName\":\"sector code #4 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__4__NAICS_\",\"dbName\":\"sector name #4 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__5__NAICS_\",\"dbName\":\"sector code #5 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__5__NAICS_\",\"dbName\":\"sector name #5 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WORKED_BY_\",\"dbName\":\"WORKED BY:\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COMMENTS___NOTES\",\"dbName\":\"COMMENTS / NOTES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Carbon_sentence_available__\",\"dbName\":\"Carbon sentence available ?\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CompanyData\":{\"dbName\":\"companydata\",\"schema\":null,\"fields\":[{\"name\":\"company\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Member_of_the_S_P500\",\"dbName\":\"Member of the S&P500\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Member_of_the_Russell_1000_Index\",\"dbName\":\"Member of the Russell 1000 Index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ticker_s_\",\"dbName\":\"Ticker(s)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PR_Agency\",\"dbName\":\"PR Agency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Example_2020_company_PR_agency_press_release_URL\",\"dbName\":\"Example 2020 company PR agency press release URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_Global___Main_Website_URL\",\"dbName\":\"Company Global / Main Website URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_global_main_press___news_release_site_URL\",\"dbName\":\"Company global/main press - news release site URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_annual_reports_page_URL\",\"dbName\":\"Company annual reports page URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_annual___financial_report_2020_URL_of_pdf_document\",\"dbName\":\"Company annual / financial report 2020 URL of pdf document\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_sustainability___ESG_reports_page_URL\",\"dbName\":\"Company sustainability / ESG reports page URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_Sustainability___ESG_report_2020_URL_of_pdf_document\",\"dbName\":\"Company Sustainability / ESG report 2020 URL of pdf document\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__1__NAICS_\",\"dbName\":\"sector code #1 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__1__NAICS_\",\"dbName\":\"sector name #1 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__2__NAICS_\",\"dbName\":\"sector code #2 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__2__NAICS_\",\"dbName\":\"sector name #2 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__3__NAICS_\",\"dbName\":\"sector code #3 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__3__NAICS_\",\"dbName\":\"sector name #3 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__4__NAICS_\",\"dbName\":\"sector code #4 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__4__NAICS_\",\"dbName\":\"sector name #4 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__5__NAICS_\",\"dbName\":\"sector code #5 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__5__NAICS_\",\"dbName\":\"sector name #5 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_codes_all__NAICS_\",\"dbName\":\"sector codes all (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name_all__NAICS_\",\"dbName\":\"sector name all (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CompanyData2\":{\"dbName\":\"companydata2\",\"schema\":null,\"fields\":[{\"name\":\"company\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Member_of_the_S_P500\",\"dbName\":\"Member of the S&P500\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Member_of_the_Russell_1000_Index\",\"dbName\":\"Member of the Russell 1000 Index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ticker_s_\",\"dbName\":\"Ticker(s)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PR_Agency\",\"dbName\":\"PR Agency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Example_2020_company_PR_agency_press_release_URL\",\"dbName\":\"Example 2020 company PR agency press release URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_Global___Main_Website_URL\",\"dbName\":\"Company Global / Main Website URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_global_main_press___news_release_site_URL\",\"dbName\":\"Company global/main press - news release site URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_annual_reports_page_URL\",\"dbName\":\"Company annual reports page URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_annual___financial_report_2020_URL_of_pdf_document\",\"dbName\":\"Company annual / financial report 2020 URL of pdf document\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_sustainability___ESG_reports_page_URL\",\"dbName\":\"Company sustainability / ESG reports page URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_Sustainability___ESG_report_2020_URL_of_pdf_document\",\"dbName\":\"Company Sustainability / ESG report 2020 URL of pdf document\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__1__NAICS_\",\"dbName\":\"sector code #1 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__1__NAICS_\",\"dbName\":\"sector name #1 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__2__NAICS_\",\"dbName\":\"sector code #2 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__2__NAICS_\",\"dbName\":\"sector name #2 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__3__NAICS_\",\"dbName\":\"sector code #3 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__3__NAICS_\",\"dbName\":\"sector name #3 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__4__NAICS_\",\"dbName\":\"sector code #4 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__4__NAICS_\",\"dbName\":\"sector name #4 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__5__NAICS_\",\"dbName\":\"sector code #5 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__5__NAICS_\",\"dbName\":\"sector name #5 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_codes_all__NAICS_\",\"dbName\":\"sector codes all (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name_all__NAICS_\",\"dbName\":\"sector name all (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NAICS__1_GIG\",\"dbName\":\"NAICS #1 GIG\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NAICS__1_GIG_name\",\"dbName\":\"NAICS #1 GIG name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"PercentageTable\":{\"dbName\":\"percentage_table\",\"schema\":null,\"fields\":[{\"name\":\"KPI_Report_Date\",\"dbName\":\"KPI Report Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Member_of_the_S_P500\",\"dbName\":\"Member of the S&P500\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Member_of_the_Russell_1000_Index\",\"dbName\":\"Member of the Russell 1000 Index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ticker_s_\",\"dbName\":\"Ticker(s)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PR_Agency\",\"dbName\":\"PR Agency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Example_2020_company_PR_agency_press_release_URL\",\"dbName\":\"Example 2020 company PR agency press release URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_Global___Main_Website_URL\",\"dbName\":\"Company Global / Main Website URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_global_main_press___news_release_site_URL\",\"dbName\":\"Company global/main press - news release site URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_annual_reports_page_URL\",\"dbName\":\"Company annual reports page URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_annual___financial_report_2020_URL_of_pdf_document\",\"dbName\":\"Company annual / financial report 2020 URL of pdf document\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_sustainability___ESG_reports_page_URL\",\"dbName\":\"Company sustainability / ESG reports page URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_Sustainability___ESG_report_2020_URL_of_pdf_document\",\"dbName\":\"Company Sustainability / ESG report 2020 URL of pdf document\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__1__NAICS_\",\"dbName\":\"sector code #1 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__1__NAICS_\",\"dbName\":\"sector name #1 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__2__NAICS_\",\"dbName\":\"sector code #2 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__2__NAICS_\",\"dbName\":\"sector name #2 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__3__NAICS_\",\"dbName\":\"sector code #3 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__3__NAICS_\",\"dbName\":\"sector name #3 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__4__NAICS_\",\"dbName\":\"sector code #4 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__4__NAICS_\",\"dbName\":\"sector name #4 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__5__NAICS_\",\"dbName\":\"sector code #5 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__5__NAICS_\",\"dbName\":\"sector name #5 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_codes_all__NAICS_\",\"dbName\":\"sector codes all (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name_all__NAICS_\",\"dbName\":\"sector name all (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"climateaction100\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emails\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"full_text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_link\",\"dbName\":\"Source link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pr_site\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"release_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticker\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ArticleTargetYear\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PressReleaseFullCleanstep1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PressReleaseFullClean\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_Date\",\"dbName\":\"Source Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Annual_Report_Date\",\"dbName\":\"Annual Report Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PressReleaseYear\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PressReleaseMonth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Target_sentence\",\"dbName\":\"Target sentence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SentenceTargetYear\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Targetyear_s_\",\"dbName\":\"Targetyear(s)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_carbon\",\"dbName\":\"sentence-carbon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_gender\",\"dbName\":\"sentence-gender\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_renewables\",\"dbName\":\"sentence-renewables\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_suppliers\",\"dbName\":\"sentence-suppliers\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_water\",\"dbName\":\"sentence-water\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_waste\",\"dbName\":\"sentence-waste\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_other\",\"dbName\":\"sentence-other\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"RoadmapCarbon\":{\"dbName\":\"roadmap-carbon\",\"schema\":null,\"fields\":[{\"name\":\"Company\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ticker_s_\",\"dbName\":\"Ticker(s)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PR_Agency\",\"dbName\":\"PR Agency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_Main_Website_URL\",\"dbName\":\"Company Main Website URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_Source_site_URL\",\"dbName\":\"Company Source site URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__1__NAICS_\",\"dbName\":\"sector code #1 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__1__NAICS_\",\"dbName\":\"sector name #1 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__2__NAICS_\",\"dbName\":\"sector code #2 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__2__NAICS_\",\"dbName\":\"sector name #2 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__3__NAICS_\",\"dbName\":\"sector code #3 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__3__NAICS_\",\"dbName\":\"sector name #3 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__4__NAICS_\",\"dbName\":\"sector code #4 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__4__NAICS_\",\"dbName\":\"sector name #4 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__5__NAICS_\",\"dbName\":\"sector code #5 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__5__NAICS_\",\"dbName\":\"sector name #5 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"S_P500member\",\"dbName\":\"S&P500member\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Russell_1000_member\",\"dbName\":\"Russell 1000 member\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_link_1\",\"dbName\":\"Source link 1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_date_1\",\"dbName\":\"Source date 1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_sentence_1\",\"dbName\":\"Source sentence 1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Targetyear_s__1\",\"dbName\":\"Targetyear(s) 1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_link_2\",\"dbName\":\"Source link 2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_date_2\",\"dbName\":\"Source date 2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_sentence_2\",\"dbName\":\"Source sentence 2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Targetyear_s__2\",\"dbName\":\"Targetyear(s) 2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_link_3\",\"dbName\":\"Source link 3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_date_3\",\"dbName\":\"Source date 3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_sentence_3\",\"dbName\":\"Source sentence 3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Targetyear_s__3\",\"dbName\":\"Targetyear(s) 3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_link_4\",\"dbName\":\"Source link 4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_date_4\",\"dbName\":\"Source date 4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_sentence_4\",\"dbName\":\"Source sentence 4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Targetyear_s__4\",\"dbName\":\"Targetyear(s) 4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_link_5\",\"dbName\":\"Source link 5\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_date_5\",\"dbName\":\"Source date 5\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_sentence_5\",\"dbName\":\"Source sentence 5\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Targetyear_s__5\",\"dbName\":\"Targetyear(s) 5\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_link_6\",\"dbName\":\"Source link 6\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_date_6\",\"dbName\":\"Source date 6\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_sentence_6\",\"dbName\":\"Source sentence 6\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Targetyear_s__6\",\"dbName\":\"Targetyear(s) 6\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SentenceAll\":{\"dbName\":\"sentence-all\",\"schema\":null,\"fields\":[{\"name\":\"release_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Targetyear_s_\",\"dbName\":\"Targetyear(s)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pr_site\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ArticleTargetYear\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_carbon\",\"dbName\":\"sentence-carbon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"full_text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PressReleaseMonth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PressReleaseFullClean\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_renewables\",\"dbName\":\"sentence-renewables\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_suppliers\",\"dbName\":\"sentence-suppliers\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_gender\",\"dbName\":\"sentence-gender\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Annual_Report_Date\",\"dbName\":\"Annual Report Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emails\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_other\",\"dbName\":\"sentence-other\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_link\",\"dbName\":\"Source link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_Date\",\"dbName\":\"Source Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PressReleaseFullCleanstep1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_waste\",\"dbName\":\"sentence-waste\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_water\",\"dbName\":\"sentence-water\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PressReleaseYear\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticker\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SentenceTargetYear\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Target_sentence\",\"dbName\":\"Target sentence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"upload_date\",\"dbName\":\"upload-date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PageURL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DocURL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DocTitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DocName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Target_Sentence_Page\",\"dbName\":\"Target Sentence Page\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TargetSentence\":{\"dbName\":\"targetsentences\",\"schema\":null,\"fields\":[{\"name\":\"Company\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companylist\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ticker_s_\",\"dbName\":\"Ticker(s)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PR_Agency\",\"dbName\":\"PR Agency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Example_2020_company_PR_agency_press_release_URL\",\"dbName\":\"Example 2020 company PR agency press release URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_Main_Website_URL\",\"dbName\":\"Company Main Website URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company_press_release_site_URL\",\"dbName\":\"Company press release site URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__1__NAICS_\",\"dbName\":\"sector code #1 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__1__NAICS_\",\"dbName\":\"sector name #1 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__2__NAICS_\",\"dbName\":\"sector code #2 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__2__NAICS_\",\"dbName\":\"sector name #2 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__3__NAICS_\",\"dbName\":\"sector code #3 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__3__NAICS_\",\"dbName\":\"sector name #3 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__4__NAICS_\",\"dbName\":\"sector code #4 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__4__NAICS_\",\"dbName\":\"sector name #4 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_code__5__NAICS_\",\"dbName\":\"sector code #5 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sector_name__5__NAICS_\",\"dbName\":\"sector name #5 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"S_P500member\",\"dbName\":\"S&P500member\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Russell_1000_member\",\"dbName\":\"Russell 1000 member\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emails\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"full_text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_link\",\"dbName\":\"Source link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pr_site\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"release_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticker\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ArticleTargetYear\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PressReleaseFullCleanstep1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PressReleaseFullClean\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_date\",\"dbName\":\"Source date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PressReleaseYear\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PressReleaseMonth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Target_sentence\",\"dbName\":\"Target sentence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SentenceTargetYear\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Targetyear_s_\",\"dbName\":\"Targetyear(s)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_carbon\",\"dbName\":\"sentence-carbon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_gender\",\"dbName\":\"sentence-gender\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_renewables\",\"dbName\":\"sentence-renewables\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_suppliers\",\"dbName\":\"sentence-suppliers\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_water\",\"dbName\":\"sentence-water\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Primarysource\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Testable\":{\"dbName\":\"testtable\",\"schema\":null,\"fields\":[{\"name\":\"firstname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"surname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_actionscheduler_actions\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"action_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hook\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scheduled_date_gmt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scheduled_date_local\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"args\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"schedule\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"group_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attempts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_attempt_gmt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_attempt_local\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"claim_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extended_args\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"8000\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_actionscheduler_claims\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"claim_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date_created_gmt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_actionscheduler_groups\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"group_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_actionscheduler_logs\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"log_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"log_date_gmt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"log_date_local\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_aioseo_notifications\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"13\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notification_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notification_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"button1_label\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"button1_action\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"button2_label\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"button2_action\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dismissed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_aioseo_posts\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keywords\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"MediumText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keyphrases\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"page_analysis\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"canonical_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"og_title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"og_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"og_object_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"default\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"og_image_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"default\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"og_image_custom_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"og_image_custom_fields\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"og_custom_image_width\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"og_custom_image_height\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"og_video\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"og_custom_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"og_article_section\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"og_article_tags\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"twitter_use_og\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"twitter_card\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"default\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"twitter_image_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"default\":\"default\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"twitter_image_custom_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"twitter_image_custom_fields\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"twitter_title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"twitter_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seo_score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"schema_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"schema_type_options\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pillar_content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"robots_default\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"robots_noindex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"robots_noarchive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"robots_nosnippet\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"robots_nofollow\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"robots_noimageindex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"robots_noodp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"robots_notranslate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"robots_max_snippet\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"robots_max_videopreview\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"robots_max_imagepreview\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"default\":\"large\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tabs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"MediumText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"images\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image_scan_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priority\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"TinyText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"frequency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"TinyText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"videos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"video_thumbnail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"video_scan_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"local_seo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_commentmeta\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"meta_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"meta_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"meta_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_comments\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"comment_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment_post_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment_author\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"TinyText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment_author_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment_author_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment_author_IP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment_date_gmt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment_content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment_karma\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment_approved\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment_agent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"default\":\"comment\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment_parent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_links\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"link_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link_image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link_target\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"25\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link_visible\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"default\":\"Y\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link_owner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link_rating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link_updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link_rel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link_notes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"MediumText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link_rss\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_nextend2_image_storage\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"32\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"MediumText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_nextend2_section_storage\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"application\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"section\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"referencekey\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"MediumText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"system\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"editable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_nextend2_smartslider3_generators\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"group\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"254\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"254\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"params\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_nextend2_smartslider3_sliders\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alias\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"params\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"MediumText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"default\":\"published\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thumbnail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ordering\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_nextend2_smartslider3_sliders_xref\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"group_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slider_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ordering\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"group_id\",\"slider_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_nextend2_smartslider3_slides\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publish_up\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"'1970-01-01 00:00:00'\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publish_down\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"'1970-01-01 00:00:00'\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"published\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slide\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thumbnail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"params\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ordering\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"generator_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_options\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"option_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"option_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"option_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"autoload\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"default\":\"yes\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_postmeta\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"meta_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"meta_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"meta_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_posts\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post_author\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post_date_gmt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post_content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post_title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post_excerpt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"default\":\"publish\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"default\":\"open\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ping_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"default\":\"open\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post_password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"to_ping\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pinged\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post_modified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post_modified_gmt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post_content_filtered\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post_parent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"guid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menu_order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"default\":\"post\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post_mime_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_term_relationships\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"object_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"term_taxonomy_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"term_order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"object_id\",\"term_taxonomy_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_term_taxonomy\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"term_taxonomy_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"term_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taxonomy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"32\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"term_id\",\"taxonomy\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"term_id\",\"taxonomy\"]}],\"isGenerated\":false},\"wp_termmeta\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"meta_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"term_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"meta_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"meta_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_terms\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"term_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"term_group\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_um_metadata\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"umeta_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"um_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"um_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_user_registration_sessions\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"session_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"session_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"32\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"session_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"session_expiry\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_usermeta\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"umeta_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"meta_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"meta_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_users\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_login\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"60\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_pass\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_nicename\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_registered\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_activation_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"display_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"250\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_wpdatacharts\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wpdatatable_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"engine\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"wp_wpdatacharts_engine\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"json_render_data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_wpdatatables\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"show_title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"table_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"55\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"filtering\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"filtering_form\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sorting\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tools\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"server_side\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"editable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inline_editing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"popover_tools\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"editor_roles\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mysql_table_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"edit_only_own_rows\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userid_column_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"display_length\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":10,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auto_refresh\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fixed_columns\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"TinyInt\",[]],\"default\":-1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fixed_layout\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"responsive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scrollable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"word_wrap\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hide_before_load\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"var1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"var2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"var3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tabletools_config\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"advanced_settings\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"connection\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"55\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_wpdatatables_columns\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"table_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orig_header\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"display_header\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"filter_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"wp_wpdatatables_columns_filter_type\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"column_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"wp_wpdatatables_columns_column_type\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"input_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"wp_wpdatatables_columns_input_type\",\"nativeType\":null,\"default\":\"text\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"input_mandatory\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_column\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"group_column\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sort_column\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hide_on_phones\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hide_on_tablets\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visible\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sum_column\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"skip_thousands_separator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"width\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"4\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"possible_values\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"default_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"css_class\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text_before\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text_after\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"formatting_rules\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"calc_formula\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"advanced_settings\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_wpdatatables_rows\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"table_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"wp_wpforms_tasks_meta\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":\"users\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"dbName\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profileImage\",\"dbName\":\"profile_image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"default\":\"default.png\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plan\",\"dbName\":\"plan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"user\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stripeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\"stripe_id\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"planId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"planName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscriptionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailUpdate\",\"dbName\":\"email_update\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPaid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Portfolio\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Portfolio\",\"nativeType\":null,\"relationName\":\"PortfolioToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticketComments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TicketComment\",\"nativeType\":null,\"relationName\":\"TicketCommentToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tickets\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ticket\",\"nativeType\":null,\"relationName\":\"TicketToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserSubscription\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserSubscription\",\"nativeType\":null,\"relationName\":\"UserToUserSubscription\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"search\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Search\",\"nativeType\":null,\"relationName\":\"SearchToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Ticket\":{\"dbName\":\"tickets\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TicketComment\",\"nativeType\":null,\"relationName\":\"TicketToTicketComment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"documents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TicketDocument\",\"nativeType\":null,\"relationName\":\"TicketToTicketDocument\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"TicketToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TicketDocument\":{\"dbName\":\"ticket_documents\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticketId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ticket\",\"nativeType\":null,\"relationName\":\"TicketToTicketDocument\",\"relationFromFields\":[\"ticketId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TicketComment\":{\"dbName\":\"ticket_comments\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticketId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ticket\",\"nativeType\":null,\"relationName\":\"TicketToTicketComment\",\"relationFromFields\":[\"ticketId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"TicketCommentToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserSubscription\":{\"dbName\":\"user_subscriptions\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscriptionId\",\"dbName\":\"subscription_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"UserToUserSubscription\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Portfolio\":{\"dbName\":\"portfolios\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"filters\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tableName\",\"dbName\":\"table_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"dbName\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"PortfolioToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"sentenceallview\":{\"dbName\":\"sentenceallview\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"release_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pr_site\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Targetyear_s\",\"dbName\":\"Targetyear(s)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ArticleTargetYear\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_carbon\",\"dbName\":\"sentence-carbon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"full_text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PressReleaseMonth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PressReleaseFullClean\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_renewables\",\"dbName\":\"sentence-renewables\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_suppliers\",\"dbName\":\"sentence-suppliers\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_gender\",\"dbName\":\"sentence-gender\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Company\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Annual_Report_Date\",\"dbName\":\"Annual Report Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emails\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_other\",\"dbName\":\"sentence-other\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_link\",\"dbName\":\"Source link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Source_Date\",\"dbName\":\"Source Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PressReleaseFullCleanstep1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_waste\",\"dbName\":\"sentence-waste\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentence_water\",\"dbName\":\"sentence-water\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PressReleaseYear\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticker\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SentenceTargetYear\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Target_sentence\",\"dbName\":\"Target sentence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"upload_date\",\"dbName\":\"upload-date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PageURL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DocURL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DocTitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DocName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Target_Sentence_Page\",\"dbName\":\"Target Sentence Page\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"x\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Member_SP500\",\"dbName\":\"Member of the S&P500\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Member_Russell1000\",\"dbName\":\"Member of the Russell 1000 Index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ScrapingCodeSetUp\",\"dbName\":\"Scraping code set up ?\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tickers\",\"dbName\":\"Ticker(s)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRAgency\",\"dbName\":\"PR Agency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Domain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PressURL\",\"dbName\":\"Company global/main press - news release site URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SubscribedEsgroadmap\",\"dbName\":\"Subscribed to press releases esgroadmap@gmail.com ?\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SubscribedJames\",\"dbName\":\"Subscribed to press releases jameskijani@gmail.com ?\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PlainTextSubscription\",\"dbName\":\"Plain text press release subscription possible? (yes/no)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AnnualReportsURL\",\"dbName\":\"Company annual reports page URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AnnualReportPDF2020\",\"dbName\":\"Company annual report 2020 URL of pdf document (including 10-k)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ESGReportsURL\",\"dbName\":\"Company sustainability / ESG reports page URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ESGReportPDF2020\",\"dbName\":\"Company Sustainability / ESG report 2020 URL of pdf document\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SectorCode1\",\"dbName\":\"sector code #1 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SectorName1\",\"dbName\":\"sector name #1 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SectorCode2\",\"dbName\":\"sector code #2 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SectorName2\",\"dbName\":\"sector name #2 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SectorCode3\",\"dbName\":\"sector code #3 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SectorName3\",\"dbName\":\"sector name #3 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SectorCode4\",\"dbName\":\"sector code #4 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SectorName4\",\"dbName\":\"sector name #4 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SectorCode5\",\"dbName\":\"sector code #5 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SectorName5\",\"dbName\":\"sector name #5 (NAICS)\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WorkedBy\",\"dbName\":\"WORKED BY:\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CommentsNotes\",\"dbName\":\"COMMENTS / NOTES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CarbonSentenceAvailable\",\"dbName\":\"Carbon sentence available ?\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Search\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Char\",[\"36\"]],\"default\":{\"name\":\"uuid\",\"args\":[4]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keyword\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tableName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastChecked\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"SearchToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"wp_wpdatacharts_engine\":{\"values\":[{\"name\":\"google\",\"dbName\":null},{\"name\":\"highcharts\",\"dbName\":null},{\"name\":\"chartjs\",\"dbName\":null}],\"dbName\":null},\"wp_wpdatatables_columns_filter_type\":{\"values\":[{\"name\":\"none\",\"dbName\":null},{\"name\":\"null_str\",\"dbName\":null},{\"name\":\"text\",\"dbName\":null},{\"name\":\"number\",\"dbName\":null},{\"name\":\"number_range\",\"dbName\":\"number-range\"},{\"name\":\"date_range\",\"dbName\":\"date-range\"},{\"name\":\"datetime_range\",\"dbName\":\"datetime-range\"},{\"name\":\"time_range\",\"dbName\":\"time-range\"},{\"name\":\"select\",\"dbName\":null},{\"name\":\"multiselect\",\"dbName\":null},{\"name\":\"checkbox\",\"dbName\":null}],\"dbName\":null},\"wp_wpdatatables_columns_column_type\":{\"values\":[{\"name\":\"autodetect\",\"dbName\":null},{\"name\":\"string\",\"dbName\":null},{\"name\":\"int\",\"dbName\":null},{\"name\":\"float\",\"dbName\":null},{\"name\":\"date\",\"dbName\":null},{\"name\":\"link\",\"dbName\":null},{\"name\":\"email\",\"dbName\":null},{\"name\":\"image\",\"dbName\":null},{\"name\":\"formula\",\"dbName\":null},{\"name\":\"datetime\",\"dbName\":null},{\"name\":\"time\",\"dbName\":null},{\"name\":\"masterdetail\",\"dbName\":null}],\"dbName\":null},\"wp_wpdatatables_columns_input_type\":{\"values\":[{\"name\":\"none\",\"dbName\":null},{\"name\":\"text\",\"dbName\":null},{\"name\":\"textarea\",\"dbName\":null},{\"name\":\"mce_editor\",\"dbName\":\"mce-editor\"},{\"name\":\"date\",\"dbName\":null},{\"name\":\"datetime\",\"dbName\":null},{\"name\":\"time\",\"dbName\":null},{\"name\":\"link\",\"dbName\":null},{\"name\":\"email\",\"dbName\":null},{\"name\":\"selectbox\",\"dbName\":null},{\"name\":\"multi_selectbox\",\"dbName\":\"multi-selectbox\"},{\"name\":\"attachment\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src/generated/prisma/query_engine-windows.dll.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin.dylib.node");
path.join(process.cwd(), "src/generated/prisma/libquery_engine-darwin.dylib.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-rhel-openssl-3.0.x.so.node");
path.join(process.cwd(), "src/generated/prisma/libquery_engine-rhel-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/prisma/schema.prisma")

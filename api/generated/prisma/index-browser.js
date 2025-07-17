
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

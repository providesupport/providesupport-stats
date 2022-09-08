import { OPERATOR, OPERATORS, DEPARTMENT, DEPARTMENTS, ACCOUNT } from './constants'

export const ADMIN_LOGIN_COUNT = 'admin/login-count';
export const WOP_LOGIN_COUNT = 'wop/login-count';
export const CHAT_START_CHAT_FORM_OPEN_COUNT = 'chat/start-chat-form-open-count';
export const CHAT_LEAVE_MESSAGE_FORM_OPEN_COUNT = 'chat/leave-message-form-open-count';
export const CHAT_START_CHAT_FORM_OPEN_COUNT_BY_URL = 'chat/start-chat-form-open-count-by-url';
export const CHAT_LEAVE_MESSAGE_FORM_OPEN_COUNT_BY_URL = 'chat/leave-message-form-open-count-by-url';
export const CHAT_START_CHAT_FORM_SUBMIT_COUNT = 'chat/start-chat-form-submit-count';
export const CHAT_OFFLINE_MESSAGE_COUNT = 'chat/offline-messages-count';
export const CHAT_INVITATION_SENT_COUNT_PER_ACCOUNT = 'chat/invitation-sent-count-per-account';
export const CHAT_INVITATION_SENT_COUNT_PER_OPERATOR = 'chat/invitation-sent-count-per-operator';
export const CHAT_INVITATION_SENT_COUNT_PER_DEPARTMENT = 'chat/invitation-sent-count-per-department';
export const CHAT_INVITATION_ACCEPT_COUNT_PER_ACCOUNT = 'chat/invitation-accept-count-per-account';
export const CHAT_INVITATION_ACCEPT_COUNT_PER_OPERATOR = 'chat/invitation-accept-count-per-operator';
export const CHAT_INVITATION_ACCEPT_COUNT_PER_DEPARTMENT = 'chat/invitation-accept-count-per-department';
export const CHAT_INVITATION_DECLINE_COUNT_PER_ACCOUNT = 'chat/invitation-decline-count-per-account';
export const CHAT_INVITATION_DECLINE_COUNT_PER_OPERATOR = 'chat/invitation-decline-count-per-operator';
export const CHAT_INVITATION_DECLINE_COUNT_PER_DEPARTMENT = 'chat/invitation-decline-count-per-department';
export const CHAT_START_CHAT_FORM_FILLOUT_TIME = 'chat/start-chat-form-fillout-time';
export const CHAT_LEAVE_MESSAGE_FORM_FILLOUT_TIME = 'chat/leave-message-form-fillout-time';
export const CHAT_CHATS_PER_ACCOUNT = 'chat/chats-per-account';
export const CHAT_CHATS_PER_OPERATOR = 'chat/chats-per-operator';
export const CHAT_CHATS_PER_DEPARTMENT = 'chat/chats-per-department';
export const CHAT_ACCEPTED_CHATS_PER_ACCOUNT = 'chat/accepted-chats-per-account';
export const CHAT_ACCEPTED_CHATS_PER_OPERATOR = 'chat/accepted-chats-per-operator';
export const CHAT_ACCEPTED_CHATS_PER_DEPARTMENT = 'chat/accepted-chats-per-department';
export const CHAT_MISSED_CALLS_PER_ACCOUNT = 'chat/missed-calls-per-account';
export const CHAT_MISSED_CALLS_PER_OPERATOR = 'chat/missed-calls-per-operator';
export const CHAT_MISSED_CALLS_PER_DEPARTMENT = 'chat/missed-calls-per-department';
export const CHAT_VISITOR_MESSAGES_COUNT_PER_CHAT = 'chat/visitor-messages-count-per-chat';
export const CHAT_VISITOR_RESPONSE_TIME = 'chat/visitor-response-time';
export const CHAT_ALL_OPERATORS_MESSAGES_COUNT_PER_CHAT = 'chat/all-operators-messages-count-per-chat';
export const CHAT_OPERATOR_MESSAGES_COUNT_PER_CHAT_PER_OPERATOR = 'chat/operator-messages-count-per-chat-per-operator';
export const CHAT_OPERATOR_MESSAGES_COUNT_PER_CHAT_PER_DEPARTMENT = 'chat/operator-messages-count-per-chat-per-department';
export const CHAT_OPERATOR_INVITATION_SENT_COUNT_PER_OPERATOR = 'chat/operator-invitation-sent-count-per-operator';
export const CHAT_OPERATOR_INVITATION_RECEIVED_COUNT_PER_OPERATOR = 'chat/operator-invitation-received-count-per-operator';
export const CHAT_OPERATOR_CALLING_COUNT_PER_OPERATOR = 'chat/operator-calling-count-per-operator';
export const CHAT_OPERATOR_CALLED_COUNT_PER_OPERATOR = 'chat/operator-called-count-per-operator';
export const CHAT_OPERATOR_RESPONSE_TIME_PER_ACCOUNT = 'chat/operator-response-time-per-account';
export const CHAT_OPERATOR_RESPONSE_TIME_PER_DEPARTMENT = 'chat/operator-response-time-per-department';
export const CHAT_OPERATOR_RESPONSE_TIME_PER_OPERATOR = 'chat/operator-response-time-per-operator';
export const CHAT_ACCEPT_CHAT_DELAY_PER_ACCOUNT = 'chat/accept-chat-delay-per-account';
export const CHAT_ACCEPT_CHAT_DELAY_PER_OPERATOR = 'chat/accept-chat-delay-per-operator';
export const CHAT_ACCEPT_CHAT_DELAY_PER_DEPARTMENT = 'chat/accept-chat-delay-per-department';
export const CHAT_AWAY_TIME_PER_OPERATOR = 'chat/away-time-per-operator';
export const CHAT_ONLINE_TIME_PER_ACCOUNT = 'chat/online-time-per-account';
export const CHAT_ONLINE_TIME_PER_OPERATOR = 'chat/online-time-per-operator';
export const CHAT_ONLINE_TIME_PER_DEPARTMENT = 'chat/online-time-per-department';
export const CHAT_PCS_PROFICIENCY_PER_ACCOUNT = 'chat/pcs-proficiency-per-account';
export const CHAT_PCS_POLITENESS_PER_ACCOUNT = 'chat/pcs-politeness-per-account';
export const CHAT_PCS_CASE_SOLVED_COUNT_PER_ACCOUNT = 'chat/pcs-case-solved-count-per-account';
export const CHAT_PCS_CASE_NOT_SOLVED_COUNT_PER_ACCOUNT = 'chat/pcs-case-not-solved-count-per-account';
export const CHAT_PCS_CONTENTED_COUNT_PER_ACCOUNT = 'chat/pcs-contented-count-per-account';
export const CHAT_PCS_NOT_CONTENTED_COUNT_PER_ACCOUNT = 'chat/pcs-not-contented-count-per-account';
export const CHAT_PCS_PROFICIENCY_PER_OPERATOR = 'chat/pcs-proficiency-per-operator';
export const CHAT_PCS_POLITENESS_PER_OPERATOR = 'chat/pcs-politeness-per-operator';
export const CHAT_PCS_CASE_SOLVED_COUNT_PER_OPERATOR = 'chat/pcs-case-solved-count-per-operator';
export const CHAT_PCS_CASE_NOT_SOLVED_COUNT_PER_OPERATOR = 'chat/pcs-case-not-solved-count-per-operator';
export const CHAT_PCS_CONTENTED_COUNT_PER_OPERATOR = 'chat/pcs-contented-count-per-operator';
export const CHAT_PCS_NOT_CONTENTED_COUNT_PER_OPERATOR = 'chat/pcs-not-contented-count-per-operator';
export const CHAT_PCS_PROFICIENCY_PER_DEPARTMENT = 'chat/pcs-proficiency-per-department';
export const CHAT_PCS_POLITENESS_PER_DEPARTMENT = 'chat/pcs-politeness-per-department';
export const CHAT_PCS_CASE_SOLVED_COUNT_PER_DEPARTMENT = 'chat/pcs-case-solved-count-per-department';
export const CHAT_PCS_CASE_NOT_SOLVED_COUNT_PER_DEPARTMENT = 'chat/pcs-case-not-solved-count-per-department';
export const CHAT_PCS_CONTENTED_COUNT_PER_DEPARTMENT = 'chat/pcs-contented-count-per-department';
export const CHAT_PCS_NOT_CONTENTED_COUNT_PER_DEPARTMENT = 'chat/pcs-not-contented-count-per-department';

/* rates */
export const CHAT_ACCEPTANCE_RATE = 'chat/acceptance-rate'
export const CHAT_ACCEPTANCE_RATE_PER_OPERATOR = 'chat/acceptance-rate-per-operator'
export const CHAT_ACCEPTANCE_RATE_PER_DEPARTMENT = 'chat/acceptance-rate-per-department'
export const CHAT_PROACTIVE_ACCEPTANCE_RATE = 'chat/proactive-acceptance-rate'
export const CHAT_PRE_CHAT_SURVEY_CLICK_TROUGH_RATE = 'chat/pre-chat-survey-click-trough-rate'
export const CHAT_OFFLINE_FORM_CLICK_TROUGH_RATE = 'chat/offline-form-click-trough-rate'
export const CHAT_OPERATOR_LOAD_RATE = 'chat/operator-load-rate'
export const CHAT_DEPARTMENT_LOAD_RATE = 'chat/department-load-rate'

/* website */
export const WEBSITE_HITS_PER_VISITOR = 'website/hits-per-visitor';
export const WEBSITE_HITS_BY_URL = 'website/hits-by-url';
export const WEBSITE_VISITORS_BY_REFERRER_URL = 'website/visitors-by-referrer-url';

export function getLevelNameByMetricName(metricName) {
  if (metricName === CHAT_ALL_OPERATORS_MESSAGES_COUNT_PER_CHAT) return ACCOUNT
  if (metricName === CHAT_OPERATOR_MESSAGES_COUNT_PER_CHAT_PER_DEPARTMENT) return DEPARTMENTS
  if (metricName === CHAT_ALL_OPERATORS_MESSAGES_COUNT_PER_CHAT) return ACCOUNT
  if (~metricName.indexOf(OPERATOR)) return OPERATORS
  if (~metricName.indexOf(DEPARTMENT)) return DEPARTMENTS
  return ACCOUNT;
}

export function isRatesByStatsPeriod(key) {
  return [
    CHAT_ACCEPTANCE_RATE,
    CHAT_PROACTIVE_ACCEPTANCE_RATE,
    CHAT_PRE_CHAT_SURVEY_CLICK_TROUGH_RATE,
    CHAT_OFFLINE_FORM_CLICK_TROUGH_RATE,
  ].indexOf(key) !== -1
}

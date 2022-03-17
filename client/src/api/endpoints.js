export const endpoints = {
    LOGIN : ()=>"/api/login",
    GET_LATEST_MESSAGES: (numberOfMessages)=>`/api/messages/latest=${numberOfMessages}`,
    GET_MESSAGE:(messageId)=>`/api/message/id=${messageId}`,
};
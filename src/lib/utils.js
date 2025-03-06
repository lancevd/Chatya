export const formatMessageTime = (date) => {
    return new Date(date).toLocaleString('en-UK', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
    });
}
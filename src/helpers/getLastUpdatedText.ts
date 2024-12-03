export const getLastUpdatedText = (isoDateString: string) => {
    const now = new Date();
    const date = new Date(isoDateString);
    const diffInSeconds = Math.floor((Number(now) - Number(date)) / 1000);

    const minutes = Math.floor(diffInSeconds / 60);
    const hours = Math.floor(diffInSeconds / 3600);
    const days = Math.floor(diffInSeconds / 86400);

    if (minutes < 1) {
        return 'Last updated just now';
    } else if (minutes < 60) {
        return `Last updated at ${minutes} min${minutes > 1 ? 's' : ''} ago`;
    } else if (hours < 24) {
        return `Last updated at ${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
        return `Last updated at ${days} day${days > 1 ? 's' : ''} ago`;
    }
}

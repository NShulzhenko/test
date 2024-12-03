export const getDateFromIsoString = (isoDateString: string) => {
    const date = new Date(isoDateString);
    const day = String(date.getDate()).padStart(2, '0');  // Adds leading zero if day is less than 10
    const month = String(date.getMonth() + 1).padStart(2, '0');  // getMonth() is zero-based, so add 1
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

import moment from "moment";

//relative Time stamp
export const timeStamp = (utc) => {
    const dateTime = new Date(utc * 1000);
    return moment(dateTime).fromNow();
}

// to format vote/comment count so that it is rounded with a 'k' to one decimal point. e.g 47.2k
export const kFormatter = (num) => {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}


import dayjs from 'dayjs';

export function getRemainingTimeuntilmsTimestamp(timestampms){
    const timestampDayjs=dayjs(timestampms);
    const nowDayjs=dayjs();
    if (timestampDayjs.isBefore(nowDayjs)){
        return{
        seconds:'00',
        minutes:'00',
        hours:'00',
        days:'00',
        }
    }
    return{
        seconds:getRemainingSeconds(nowDayjs,timestampDayjs),
    minutes:getRemainingMinutes(nowDayjs,timestampDayjs),
    hours:getRemainingHours(nowDayjs,timestampDayjs),
    days:getRemainingDays(nowDayjs,timestampDayjs),
    };
} 
function getRemainingSeconds(nowDayjs,timestampDayjs){
    const seconds=timestampDayjs.diff(nowDayjs,'seconds')%60;
    return padwithZeros(seconds);  
}
function getRemainingMinutes(nowDayjs,timestampDayjs){
    const minutes=timestampDayjs.diff(nowDayjs,'minutes')%60;
    return padwithZeros(minutes); 
}
function getRemainingHours(nowDayjs,timestampDayjs){
    const hours=timestampDayjs.diff(nowDayjs,'hours')%24;
    return padwithZeros(hours); 
}
function getRemainingDays(nowDayjs,timestampDayjs){
    const days=timestampDayjs.diff(nowDayjs,'days');
    return days.toString(); 
}
function padwithZeros(number,minLength){
    const numberString= number.toString();
    if (numberString.length >= minLength ) return numberString;
    return "0". repeat(minLength-numberString.length)+ numberString
}

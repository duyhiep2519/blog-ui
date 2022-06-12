import {
   compareAsc,
   format,
   formatDistanceToNow,
   isValid,
   parse
} from 'date-fns';
import vi from 'date-fns/locale/vi';

export function formatTimestamp(
   dateString: string,
   formatType = 'dd-MM-yyyy'
): string {
   const parsedDate = new Date(dateString);
   return isValid(parsedDate) ? format(parsedDate, formatType) : '';
}

export function timestamptzNow() {
   return format(Date.now(), "dd-MM-yyyy'T'HH:mm:ss.SSSSSSX");
}

export function dateFromTimestamptzNow(dateString: string) {
   let date = null;
   date = parse(dateString, "dd-MM-yyyy'T'HH:mm:ss.SSSSSSxxx", new Date());
   if (!isValid(date)) {
      date = parse(dateString, "dd-MM-yyyy'T'HH:mm:ssxxx", new Date());
   }
   return date;
}

export function timestamptzNowFromDate(date: Date) {
   return format(date, "dd-MM-yyyy'T'HH:mm:ss.SSSSSSX");
}

export function commentTimestamp(dateString: string): string {
   const parsedDate = new Date(dateString);

   return isValid(parsedDate) ? format(parsedDate, 'h:mm a, LLLL do') : '';
}
export function commentModifiedTimestamp(dateString: string): string {
   const parsedDate = new Date(dateString);

   return isValid(parsedDate)
      ? format(parsedDate, "MM/dd/yyyy 'at' h:mma")
      : '';
}
export function timeDistanceToNow(dateString: string) {
   const parsedDate = new Date(dateString);
   const now = Date.now();
   const comparison = compareAsc(parsedDate, now);

   return formatDistanceToNow(comparison > 0 ? now : parsedDate, {
      addSuffix: true
   });
}

export function dateFromTimestamp(dateString: string): string {
   const parsedDate = new Date(dateString);

   return isValid(parsedDate)
      ? format(parsedDate, 'd, LLL-yyyy', {
           locale: vi
        })
      : '';
}

function formatDateTime(inputDate: Date): string {
    // Add 5 days to the input date
    const futureDate = new Date(inputDate);
    futureDate.setDate(inputDate.getDate() + 5);
  
    // Format the result
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
  
    return futureDate.toLocaleString('en-US', options);
  }
  
  export default formatDateTime;
  
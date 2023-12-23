export function getDayOfWeek(epoch) {
  // Convert the epoch string to an integer
  const epochInt = parseInt(epoch);

  // Create a new Date object in UTC
  const date = new Date(0); // Set the starting point to the Unix Epoch (1970-01-01T00:00:00Z)
  date.setUTCSeconds(epochInt); // Set the seconds value based on the UTC epoch

  // Get the day of the week as a string in the local time zone
  const dayOfWeek = date.toLocaleDateString('en-US', {
    weekday: 'long',
    timeZone: 'UTC',
  });

  return dayOfWeek;
}

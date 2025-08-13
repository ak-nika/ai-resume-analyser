/**
 * Formats a file size in bytes to a human-readable string (KB, MB, GB, etc.)
 * @param bytes The file size in bytes
 * @returns A human-readable string representation of the file size
 */

export function formatSize(bytes: number): string {
  if (bytes === 0) return "O Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

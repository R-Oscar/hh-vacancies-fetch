export function stripHtmlTags(str) {
  return str.replace(/(<([^>]+)>)/gi, '');
}
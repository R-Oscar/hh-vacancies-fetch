export function stripHtmlTags(str) {
  return str && str.replace(/(<([^>]+)>)/gi, '');
}

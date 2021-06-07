
/**
 * @name escapeTags
 * @param {string} original - The original string to clense
 * @returns {string} - The clean string
 * @description Escapes all html tags
 */
function escapeTags(original) {
  return original.replace(/[&<>]/g, "") || "";
}

exports.escapeTags = escapeTags;

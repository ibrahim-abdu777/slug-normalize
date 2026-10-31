const MAP = { "ä": "a", "ö": "o", "ü": "u", "ß": "ss", "é": "e", "ñ": "n" };
function slugify(input) {
  return String(input)
    .replace(/[äöüßéñ]/g, (c) => MAP[c] || c)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
module.exports = { slugify };

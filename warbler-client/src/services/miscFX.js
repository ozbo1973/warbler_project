//misc functions

export function toProperCase(s) {
  return s.toLowerCase().replace(/^(.)|\s(.)/g, function($1) {
    return $1.toUpperCase();
  });
}

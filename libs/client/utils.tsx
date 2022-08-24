export function cls(...className: string[]) {
  return className.join(" ");
}

export function getImageDelivelyURL(image_id: string, varaint: string) {
  return `https://imagedelivery.net/BRj20Xbg-lUinq49e-uUCw/${image_id}/${varaint}`;
}

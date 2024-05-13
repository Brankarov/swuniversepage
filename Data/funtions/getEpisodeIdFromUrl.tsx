export function getEpisodeIdFromUrl(url: string): number {

  if  ( !url ){
    return 0;
  }
  const urlParts = url.split('/');

  const lastPart = urlParts[urlParts.length - 2];

  return parseInt(lastPart, 10);

}
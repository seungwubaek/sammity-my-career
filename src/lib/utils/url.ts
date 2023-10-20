export const getAssetUrl = (filename: string) => {
  if (process.env.BASE_ASSET_URL === undefined) {
    return filename;
  }
  return new URL(filename, process.env.BASE_ASSET_URL);
};

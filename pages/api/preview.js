export default async (req, res) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== "secret-token") {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  res.end("Preview mode enabled");
};

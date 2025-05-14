const photoData = require("../Schema/GallerySchema");

exports.getAllGalleryCategories = async (req, res) => {
  try {
    const galleries = await photoData.find({});
    res.status(200).json(galleries);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


exports.getGalleryById = (req, res) => {
  const { id } = req.params;
  const gallery = photoData.find((item) => item.id === parseInt(id));

  if (!gallery) {
    return res.status(404).json({ message: "Gallery not found" });
  }

  res.json(gallery);
};

exports.addGallery = async (req, res) => {
  try {
    const { title, category } = req.body;
    const coverImage = req.files["coverImage"]?.[0]?.filename;
    const images = req.files["images"]?.map((file) => file.filename) || [];

    if (!title || !category || !coverImage || images.length === 0) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newGallery = new photoData({
      title,
      category,
      coverImage,
      images,
    });

    await newGallery.save();
    res.status(201).json({ message: "Gallery created successfully", newGallery });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create gallery" });
  }
};
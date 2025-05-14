import React, { useState } from "react";
import axios from "axios";
import "./Gallery.css";

const GalleryForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [images, setImages] = useState([]);
  const [coverPreview, setCoverPreview] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [message, setMessage] = useState("");

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);
    setCoverPreview(URL.createObjectURL(file));
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !category || !coverImage || images.length === 0) {
      return setMessage("Please fill all fields and upload images.");
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("coverImage", coverImage);
    images.forEach((img) => formData.append("images", img));

    try {
      const res = await axios.post("http://localhost:4000/api/add-Gallery", formData);
      setMessage("Gallery created successfully!");
      setTitle("");
      setCategory("");
      setCoverImage(null);
      setImages([]);
      setCoverPreview(null);
      setImagePreviews([]);
    } catch (error) {
      console.error(error);
      setMessage("Error uploading gallery!");
    }
  };

  return (
    <div className="gallery-form-container">
      <h2>Create New Gallery</h2>
      <form className="gallery-form" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Category:</label>
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />

        <label>Cover Image:</label>
        <input type="file" accept="image/*" onChange={handleCoverChange} />
        {coverPreview && <img src={coverPreview} alt="Cover Preview" className="preview-image" />}

        <label>Gallery Images:</label>
        <input type="file" accept="image/*" multiple onChange={handleImagesChange} />
        <div className="multiple-preview">
          {imagePreviews.map((img, idx) => (
            <img key={idx} src={img} alt={`Image ${idx}`} className="thumb-preview" />
          ))}
        </div>

        <button type="submit">Submit</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default GalleryForm;


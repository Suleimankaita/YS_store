// import React, { useState, useEffect } from "react";
// import * as mobilenet from "@tensorflow-models/mobilenet";
// import "@tensorflow/tfjs";
// import img from '../assets/img/custom.jpg'
// import img2 from '../assets/img/h.jpg'
// import img3 from '../assets/img/sl.webp'


// const items = [
//     { id: 1, name: "Apple", image: img },
//     { id: 2, name: "Banana", image: img2 },
//     { id: 3, name: "Cherry", image: img3 },
//     // { id: 4, name: "Grapes", image: "/images/grapes.jpg" },
//     // { id: 5, name: "Orange", image: "/images/orange.jpg" }
// ];

// const SearchByImageOrName = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [uploadedImage, setUploadedImage] = useState(null);
//     const [model, setModel] = useState(null);
//     const [filteredItems, setFilteredItems] = useState(items);

//     // Load MobileNet model
//     useEffect(() => {
//         const loadModel = async () => {
//             const loadedModel = await mobilenet.load();
//             setModel(loadedModel);
//         };
//         loadModel();
//     }, []);

//     // Handle Image Upload
//     const handleImageUpload = async (event) => {
//         const file = event.target.files[0];
//         if (file && model) {
//             const imageUrl = URL.createObjectURL(file);
//             setUploadedImage(imageUrl);
//             await recognizeImage(imageUrl);
//         }
//     };

//     // Recognize Image Content
//     const recognizeImage = async (imageSrc) => {
//         const img = new Image();
//         img.src = imageSrc;
//         img.crossOrigin = "anonymous"; // To prevent CORS issues
//         img.onload = async () => {
//             const predictions = await model.classify(img);
//             console.log("Predictions:", predictions);

//             // Extract the highest confidence prediction label
//             if (predictions.length > 0) {
//                 const detectedLabel = predictions[0].className.toLowerCase();
//                 filterItemsByImage(detectedLabel);
//             }
//         };
//     };

//     // Filter items by detected label
//     const filterItemsByImage = (label) => {
//         const matchedItems = items.filter((item) =>
//             item.name.toLowerCase().includes(label)
//         );
//         setFilteredItems(matchedItems.length ? matchedItems : []);
//     };

//     // Handle Text Search
//     useEffect(() => {
//         if (searchTerm) {
//             const filtered = items.filter((item) =>
//                 item.name.toLowerCase().includes(searchTerm.toLowerCase())
//             );
//             setFilteredItems(filtered);
//         } else {
//             setFilteredItems(items);
//         }
//     }, [searchTerm]);

//     return (
//         <div style={{ textAlign: "center", padding: "20px" }}>
//             <h2>Search by Name or Image</h2>

//             {/* Search Input */}
//             <input
//                 type="text"
//                 placeholder="Search by name..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 style={{ padding: "8px", fontSize: "16px", marginBottom: "10px" }}
//             />

//             {/* Upload Image */}
//             <div style={{ margin: "10px 0" }}>
//                 <input type="file" accept="image/*" onChange={handleImageUpload} />
//                 {uploadedImage && (
//                     <div style={{ marginTop: "10px" }}>
//                         <p>Uploaded Image:</p>
//                         <img src={uploadedImage} alt="Uploaded" style={{ width: "100px", height: "100px", borderRadius: "8px" }} />
//                     </div>
//                 )}
//             </div>

//             {/* Item List */}
//             <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
//                 {filteredItems.length > 0 ? (
//                     filteredItems.map((item) => (
//                         <div
//                             key={item.id}
//                             style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px", cursor: "pointer" }}
//                             onClick={() => setSearchTerm(item.name)} // Search by clicking an image
//                         >
//                             <img src={item.image} alt={item.name} style={{ width: "80px", height: "80px" }} />
//                             <p>{item.name}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No matching items found.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default SearchByImageOrName;


// seeder.js
const Product = require("./models/Product");
const Review = require("./models/Review");
const mongoose = require("mongoose");

const seedData = async () => {
  try {
    // Clear existing data
    await Product.deleteMany();
    await Review.deleteMany();

    // Mock products data
    const products = [
      {
        name: "Chanel No. 5",
        description:
          "A classic perfume that has been a favorite of sophisticated women for decades. This timeless scent combines notes of rose, jasmine, and vanilla for an elegant and feminine fragrance.",
        shortDescription: "Classic floral scent with rose and jasmine",
        price: 138.99,
        sizes: ["50ml", "100ml", "200ml"],
        images: [
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSyymLRjCKP0FC-qCj_stIn332hmatk_MpXor_3AV8EM2e_lgnfV4DzLN8cCuiWbJ_oqNvzX4_2qNfVij6rD5812cAKduAMKX0MbKucygEVy7MAkfmwfJWP",
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSyymLRjCKP0FC-qCj_stIn332hmatk_MpXor_3AV8EM2e_lgnfV4DzLN8cCuiWbJ_oqNvzX4_2qNfVij6rD5812cAKduAMKX0MbKucygEVy7MAkfmwfJWP",
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSyymLRjCKP0FC-qCj_stIn332hmatk_MpXor_3AV8EM2e_lgnfV4DzLN8cCuiWbJ_oqNvzX4_2qNfVij6rD5812cAKduAMKX0MbKucygEVy7MAkfmwfJWP",
        ],
        mainImage:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSyymLRjCKP0FC-qCj_stIn332hmatk_MpXor_3AV8EM2e_lgnfV4DzLN8cCuiWbJ_oqNvzX4_2qNfVij6rD5812cAKduAMKX0MbKucygEVy7MAkfmwfJWP",
        featured: true,
        category: "Women",
      },
      {
        name: "Bleu de Chanel",
        description:
          "A woody aromatic fragrance for the man who defies convention. A blend of citrus and woods that unfolds with fresh notes of grapefruit, followed by the aromatic woody notes of dry cedar.",
        shortDescription: "Aromatic woody fragrance with citrus notes",
        price: 119.99,
        sizes: ["50ml", "100ml", "150ml"],
        images: [
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgh9lUgrJUKB5upfR4_QD3xmxwQR663am7KyYz5iS8vbiMVRdUE83-2mBr-075-RL0h7ainksOzxvX1VHiDEqmb7ATjybjgv61kfdC9DSDkCrgUN25NXPEAj_SbsKhZfZ9dWY&usqp=CAc",
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgh9lUgrJUKB5upfR4_QD3xmxwQR663am7KyYz5iS8vbiMVRdUE83-2mBr-075-RL0h7ainksOzxvX1VHiDEqmb7ATjybjgv61kfdC9DSDkCrgUN25NXPEAj_SbsKhZfZ9dWY&usqp=CAc",
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgh9lUgrJUKB5upfR4_QD3xmxwQR663am7KyYz5iS8vbiMVRdUE83-2mBr-075-RL0h7ainksOzxvX1VHiDEqmb7ATjybjgv61kfdC9DSDkCrgUN25NXPEAj_SbsKhZfZ9dWY&usqp=CAc",
        ],
        mainImage:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgh9lUgrJUKB5upfR4_QD3xmxwQR663am7KyYz5iS8vbiMVRdUE83-2mBr-075-RL0h7ainksOzxvX1VHiDEqmb7ATjybjgv61kfdC9DSDkCrgUN25NXPEAj_SbsKhZfZ9dWY&usqp=CAc",
        featured: true,
        category: "Men",
      },
      {
        name: "Dior Sauvage",
        description:
          "A radically fresh composition, dictated by a name that has the ring of a manifesto. Fresh top notes of bergamot with a masculine trail of amberwood. A fragrance that speaks to the pioneers of a new frontier.",
        shortDescription: "Fresh bergamot with amberwood base",
        price: 159.99,
        sizes: ["60ml", "100ml", "200ml"],
        images: [
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTgvoL9iSvjbk2PKFXN7irSnVDWsj5U8PL9Aqk_Hq6f3Wq9byuYKtakH0EONXRkBfodq-iZsU7K_sGmyM-dvrgblasaUEjBLgnOTx1tODeHe5-4Iv-HXlrkhzDu44_b6JlSDyzbAQ&usqp=CAc",
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTgvoL9iSvjbk2PKFXN7irSnVDWsj5U8PL9Aqk_Hq6f3Wq9byuYKtakH0EONXRkBfodq-iZsU7K_sGmyM-dvrgblasaUEjBLgnOTx1tODeHe5-4Iv-HXlrkhzDu44_b6JlSDyzbAQ&usqp=CAc",
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTgvoL9iSvjbk2PKFXN7irSnVDWsj5U8PL9Aqk_Hq6f3Wq9byuYKtakH0EONXRkBfodq-iZsU7K_sGmyM-dvrgblasaUEjBLgnOTx1tODeHe5-4Iv-HXlrkhzDu44_b6JlSDyzbAQ&usqp=CAc",
        ],
        mainImage:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTgvoL9iSvjbk2PKFXN7irSnVDWsj5U8PL9Aqk_Hq6f3Wq9byuYKtakH0EONXRkBfodq-iZsU7K_sGmyM-dvrgblasaUEjBLgnOTx1tODeHe5-4Iv-HXlrkhzDu44_b6JlSDyzbAQ&usqp=CAc",
        featured: true,
        category: "Men",
      },
      {
        name: "Miss Dior",
        description:
          "A chypre floral fragrance for women. A hymn to love, Miss Dior is an enchanting fragrance that seduces with its notes of citrus, jasmine, and rose, refined by a subtle touch of patchouli.",
        shortDescription: "Floral fragrance with jasmine and rose",
        price: 144.99,
        sizes: ["30ml", "50ml", "100ml"],
        images: [
          "https://m.media-amazon.com/images/I/61R1+HpKFPL.jpg",
          "https://m.media-amazon.com/images/I/61R1+HpKFPL.jpg",
          "https://m.media-amazon.com/images/I/61R1+HpKFPL.jpg",
        ],
        mainImage: "https://m.media-amazon.com/images/I/61R1+HpKFPL.jpg",
        featured: true,
        category: "Women",
      },
      // {
      //   name: "Acqua di Gio",
      //   description:
      //     "Inspired by the fresh sea, warm sun, and the richness of the earth, this iconic fragrance from Giorgio Armani captures the essence of the Mediterranean paradise with its blend of marine notes, citrus, and herbs.",
      //   shortDescription: "Fresh marine notes with citrus and herbs",
      //   price: 92.99,
      //   sizes: ["50ml", "100ml", "200ml"],
      //   images: [
      //     "https://i.imgur.com/a8SzUWG.jpg",
      //     "https://i.imgur.com/QkzbpgE.jpg",
      //     "https://i.imgur.com/BjW6x5h.jpg",
      //   ],
      //   mainImage: "https://i.imgur.com/a8SzUWG.jpg",
      //   featured: false,
      //   category: "Men",
      // },
      // {
      //   name: "Flowerbomb",
      //   description:
      //     "A floral explosion, a profusion of flowers that has the power to make everything seem more positive. An opulent and voluptuous fragrance by Viktor & Rolf, bursting with floral notes and sweet undertones.",
      //   shortDescription: "Opulent floral with sweet undertones",
      //   price: 169.99,
      //   sizes: ["30ml", "50ml", "100ml"],
      //   images: [
      //     "https://i.imgur.com/JRoQ4RU.jpg",
      //     "https://i.imgur.com/kJbRSLT.jpg",
      //     "https://i.imgur.com/tEZLXuS.jpg",
      //   ],
      //   mainImage: "https://i.imgur.com/JRoQ4RU.jpg",
      //   featured: false,
      //   category: "Women",
      // },
    ];

    // Insert products into database
    const createdProducts = await Product.insertMany(products);

    // Create reviews for products
    const reviews = [
      {
        product: createdProducts[0]._id,
        userName: "Sophie",
        rating: 5,
        comment:
          "My all-time favorite perfume! It has such a timeless elegance to it.",
      },
      {
        product: createdProducts[0]._id,
        userName: "Rebecca",
        rating: 4,
        comment:
          "A classic for a reason. Sophisticated and perfect for special occasions.",
      },
      {
        product: createdProducts[1]._id,
        userName: "Michael",
        rating: 5,
        comment:
          "This has become my signature scent. I get compliments every time I wear it.",
      },
      {
        product: createdProducts[2]._id,
        userName: "James",
        rating: 5,
        comment:
          "Strong, masculine fragrance that lasts all day. Worth every penny.",
      },
      {
        product: createdProducts[3]._id,
        userName: "Emma",
        rating: 4,
        comment:
          "The perfect balance of floral and sweet. Not too overpowering.",
      },
    ];

    await Review.insertMany(reviews);

    console.log("Sample data created successfully");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = seedData;

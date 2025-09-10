const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
  {
    siteName: {
      type: String,
      default: "Urban Thali",
    },
    siteDescription: {
      type: String,
      default: "Bringing authentic Indian flavors to your doorstep with our carefully crafted thalis and traditional recipes.",
    },
    logo: {
      type: String,
      default: "/assets/img/logo/urban-thali-logo.png",
    },
    contact: {
      phone: {
        type: String,
        default: "+91 98765 43210",
      },
      email: {
        type: String,
        default: "hello@urbanthali.com",
      },
      address: {
        street: {
          type: String,
          default: "123 Food Street, Spice Market",
        },
        city: {
          type: String,
          default: "Delhi",
        },
        state: {
          type: String,
          default: "Delhi",
        },
        country: {
          type: String,
          default: "India",
        },
        pincode: {
          type: String,
          default: "110001",
        },
      },
    },
    socialMedia: {
      facebook: {
        type: String,
        default: "https://www.facebook.com/urbanthalioffical/",
      },
      instagram: {
        type: String,
        default: "https://www.instagram.com/urbanthalioffical/",
      },
      youtube: {
        type: String,
        default: "https://www.youtube.com/@urbanthalioffical",
      },
      linkedin: {
        type: String,
        default: "https://www.linkedin.com/company/urbanthalioffical/about/?viewAsMember=true",
      },
      twitter: {
        type: String,
        default: "",
      },
    },
    businessHours: {
      monday: {
        open: { type: String, default: "09:00" },
        close: { type: String, default: "22:00" },
        isOpen: { type: Boolean, default: true },
      },
      tuesday: {
        open: { type: String, default: "09:00" },
        close: { type: String, default: "22:00" },
        isOpen: { type: Boolean, default: true },
      },
      wednesday: {
        open: { type: String, default: "09:00" },
        close: { type: String, default: "22:00" },
        isOpen: { type: Boolean, default: true },
      },
      thursday: {
        open: { type: String, default: "09:00" },
        close: { type: String, default: "22:00" },
        isOpen: { type: Boolean, default: true },
      },
      friday: {
        open: { type: String, default: "09:00" },
        close: { type: String, default: "22:00" },
        isOpen: { type: Boolean, default: true },
      },
      saturday: {
        open: { type: String, default: "09:00" },
        close: { type: String, default: "23:00" },
        isOpen: { type: Boolean, default: true },
      },
      sunday: {
        open: { type: String, default: "09:00" },
        close: { type: String, default: "23:00" },
        isOpen: { type: Boolean, default: true },
      },
    },
    seo: {
      metaTitle: {
        type: String,
        default: "Urban Thali - Authentic Indian Food Delivery",
      },
      metaDescription: {
        type: String,
        default: "Order delicious, authentic Indian thalis online. Fresh ingredients, traditional recipes, delivered to your doorstep.",
      },
      keywords: {
        type: [String],
        default: ["indian food", "thali", "food delivery", "authentic indian", "urban thali"],
      },
    },
    delivery: {
      minimumOrder: {
        type: Number,
        default: 200,
      },
      deliveryCharge: {
        type: Number,
        default: 40,
      },
      freeDeliveryAbove: {
        type: Number,
        default: 500,
      },
      estimatedDeliveryTime: {
        type: String,
        default: "30-45 minutes",
      },
    },
    payment: {
      acceptCash: {
        type: Boolean,
        default: true,
      },
      acceptCard: {
        type: Boolean,
        default: true,
      },
      acceptUPI: {
        type: Boolean,
        default: true,
      },
      acceptWallet: {
        type: Boolean,
        default: true,
      },
    },
    copyright: {
      type: String,
      default: "© 2025 Urban Thali. All rights reserved.",
    },
    footerText: {
      type: String,
      default: "Made with ❤️ for food lovers everywhere",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Settings", settingsSchema);
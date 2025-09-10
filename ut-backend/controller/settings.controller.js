const Settings = require("../models/settings.model");

// Get settings (public endpoint)
const getSettings = async (req, res, next) => {
  try {
    let settings = await Settings.findOne();
    
    // If no settings exist, create default settings
    if (!settings) {
      settings = await Settings.create({});
    }
    
    res.status(200).json({
      success: true,
      settings,
    });
  } catch (error) {
    next(error);
  }
};

// Update settings (admin only)
const updateSettings = async (req, res, next) => {
  try {
    let settings = await Settings.findOne();
    
    // If no settings exist, create them
    if (!settings) {
      settings = await Settings.create(req.body);
    } else {
      // Update existing settings
      Object.keys(req.body).forEach(key => {
        if (req.body[key] !== undefined) {
          // Handle nested objects like contact, socialMedia, etc.
          if (typeof req.body[key] === 'object' && !Array.isArray(req.body[key])) {
            Object.keys(req.body[key]).forEach(nestedKey => {
              if (settings[key] && settings[key][nestedKey] !== undefined) {
                settings[key][nestedKey] = req.body[key][nestedKey];
              }
            });
          } else {
            settings[key] = req.body[key];
          }
        }
      });
      
      await settings.save();
    }
    
    res.status(200).json({
      success: true,
      message: "Settings updated successfully",
      settings,
    });
  } catch (error) {
    next(error);
  }
};

// Get public settings (limited info for frontend)
const getPublicSettings = async (req, res, next) => {
  try {
    let settings = await Settings.findOne().select(
      'siteName siteDescription logo contact socialMedia businessHours seo delivery payment copyright footerText'
    );
    
    // If no settings exist, create default settings
    if (!settings) {
      settings = await Settings.create({});
      settings = await Settings.findOne().select(
        'siteName siteDescription logo contact socialMedia businessHours seo delivery payment copyright footerText'
      );
    }
    
    res.status(200).json({
      success: true,
      settings,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSettings,
  updateSettings,
  getPublicSettings,
};
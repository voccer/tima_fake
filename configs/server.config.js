module.exports = {
  mongoURI:
    // eslint-disable-next-line operator-linebreak
    process.env.MONGO_URL ||
    'mongodb://timaadmin:tima123@ds011775.mlab.com:11775/tima',
  secretOfKey: process.env.SECRETKEY || 'HelloVietnam',

  // Cloudinary congfig
  CLODINARY_CONFIG: {
    cloud_name: process.env.CLOUD_NAME || 'dz1gprgpn',
    api_key: process.env.CLOUD_KEY || '313913152513258',
    api_secret: process.env.CLOUD_SECRET || 'fzaUZrYXpNk_WEj1Rk48iaY7hI0'
  }
};

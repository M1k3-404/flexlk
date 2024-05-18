const { withNextVideo } = require('next-video/process')

module.exports = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            },
        ],
    },
}

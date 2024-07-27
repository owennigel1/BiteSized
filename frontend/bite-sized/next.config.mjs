/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        //! buat rule handle canvas.node
        config.module.rules.push({ test: /\.node$/, use: 'raw-loader'})

        //! exclude canvas
        if (!isServer) config.externals.push('canvas');
        return config;
    }
};

export default nextConfig;

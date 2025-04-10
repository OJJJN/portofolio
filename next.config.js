/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.(glb|gltf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/3d/',
              publicPath: '/_next/static/3d/',
              name: '[name].[hash].[ext]',
            },
          },
        ],
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  
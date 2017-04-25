module.exports = {
    entry: ['whatwg-fetch', './js/app.jsx'],
    output: { filename: "./js/out.js" },
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/, exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'stage-2', 'react'] }
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader',
                    'sass-loader','resolve-url-loader']
            },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
            //         loader: 'image-webpack-loader',
            //         query: {
            //             mozjpeg: {
            //                 progressive: true,
            //             },
            //             gifsicle: {
            //                 interlaced: false,
            //             },
            //             optipng: {
            //                 optimizationLevel: 4,
            //             },
            //             pngquant: {
            //                 quality: '75-90',
            //                 speed: 3,
            //             },
            //         },
            //     }],
            //     exclude: /node_modules/,
            //     include: __dirname,
            // }
        ]
    }
}
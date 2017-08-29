
module.exports = {
    entry : {
        bundle : './src/index.js'
    },
    output : {
        path : __dirname + './build',
        filename : '[name].js'
    },

    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    {
                        loader : 'style-loader'
                    },
                    {
                        loader : 'css-loader'
                    }
                ]
            },
            {
                test : /\.js$/,
                use : [
                    {
                        loader : 'babel-loader'
                    }
                ]
            },
            {
                test : /\.vue$/,
                use : [
                    {
                        loader : 'vue-loader'
                    }
                ]
            },
            {
                test : /\.(gif|jpg|png|svg|eot|ttf)??.*$/,
                use : [
                    {
                        loader : 'url-loader'
                    }
                ]
            }
        ]
    }
}

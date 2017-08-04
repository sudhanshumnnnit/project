var express=require('express');
var bodyParser=require('body-parser');
var cors=require('cors');
var app=express();
var mongoose=require('mongoose');
var product=require('./product');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port=process.env.PORT||8090;
var router=express.Router();
mongoose.connect('mongodb://ds149437.mlab.com:49437/products');

app.use(cors());
app.use('/api',router);

router.use(function(req,res,next){
	//do logging
	//do authentication
	console.log('Logging of request will be done here');
	next();
});

router.route('/products').post(function (req, res) {  
    var p = new product();  
    p.title = req.body.title;  
    p.price = req.body.price;  
    p.instock = req.body.instock;  
    p.photo = req.body.photo;  
    p.save(function (err) {  
        if (err) {  
            res.send(err);  
        }  
        res.send({ message: 'Product Created !' })  
    })  
});   

router.route('/products').get(function (req, res) {  
    product.find(function (err, products) {  
        if (err) {  
            res.send(err);  
        }  
        res.send(products);  
    });  
});   

router.route('/products/:product_id').get(function (req, res) {  
  
    product.findById(req.params.product_id, function (err, prod) {  
        if (err)  
            res.send(err);  
        res.json(prod);  
    });  
});  

router.route('/products/:product_id').put(function (req, res) {  
  
    product.findById(req.params.product_id, function (err, prod) {  
        if (err) {  
            res.send(err);  
        }  
        prod.title = req.body.title;  
        prod.price = req.body.price;  
        prod.instock = req.body.instock;  
        prod.photo = req.body.photo;  
        prod.save(function (err) {  
            if (err)  
                res.send(err);  
  
            res.json({ message: 'Product updated!' });  
        });  
  
    });  
});   

router.route('/products/:product_id').delete(function (req, res) {  
  
    product.remove({ _id: req.param.product_id }, function (err, prod) {  
        if (err) {  
            res.send(err);  
        }  
        res.json({ message: 'Successfully deleted' });  
    })  
  
});   



app.listen(port,function(){
	console.log('REST api is running at'+port);
});
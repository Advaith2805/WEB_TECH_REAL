const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();
const app = express();
const PORT = 3001;
const PORT1=3002;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/react-login-signup', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Database connected successfully'))
.catch(err => console.error('Database connection error', err));
const db = mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error:'));
db.once('open',()=>{
  console.log("Connected to databse");
})

/*const myModel = mongoose.model('Test',new schema({name: String}));
await myModel.findOne();*/

// Define a mongoose schema for User
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  cartItems: [{
    productId: Number,
    quantity: Number,
    price:Number,
    
  }],
});

const User = mongoose.model('User', userSchema);

// Signup endpoint
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ email, password, cartItems: [] });
    await newUser.save();

    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Define a mongoose schema for CartItem
const cartItemSchema = new mongoose.Schema({
  productId: Number,
  quantity: Number,
  price:Number,
});

const CartItem = mongoose.model('CartItem', cartItemSchema);
// Add to Cart endpoint
// Server.js (cart/add endpoint)
app.post('/cart/add', async (req, res) => {
  const { productId, quantity, userEmail } = req.body;
  // Retrieve product details and calculate the total price on the server
  try {
    // Add the new cart item to the user's cartItems array
    const user = await User.findOne({ email: userEmail });
    user.cartItems.push({ productId, quantity });
    await user.save();

    res.status(201).json({ message: 'Product added to cart' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



// Get Cart Items endpoint
app.get('/cart', async (req, res) => {
  const { userEmail } = req.query;

  try {
    const user = await User.findOne({ email: userEmail });
    if (user) {
      const cartItems = user.cartItems || [];
      res.json(cartItems);
    } else {
      res.json([]); // Return an empty array if the user is not found
    }
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.delete('/cart/remove/:itemId', async (req, res) => {
  const { userEmail } = req.query;
  const itemId = req.params.itemId;

  try {
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.cartItems = user.cartItems.filter((item) => item._id.toString() !== itemId);
    await user.save();

    res.status(200).json({ message: 'Item removed from cart' });
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
// Add a new route to clear the entire cart
app.delete('/cart/clear', async (req, res) => {
  const { userEmail } = req.query;

  try {
    const user = await User.findOne({ email: userEmail });
    user.cartItems = [];
    await user.save();

    res.status(200).json({ message: 'Cart cleared successfully' });
  } catch (error) {
    console.error('Error clearing cart:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.listen(PORT1, () => {
  console.log(`Server is running on port ${PORT1}`);
});
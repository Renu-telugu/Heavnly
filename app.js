const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing.js');
const ejs = require('ejs');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);

const MONGO_URL = 'mongodb://127.0.0.1:27017/heavnly';

main().then(() => {
    console.log('Connected to DB');
}).catch(err => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get('/', (req, res) => {
    res.send('Hi, I am root');
});

// Index Route
app.get("/listings", async (req, res) => {
    let allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
});

// New Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

// Show Route
app.get("/listings/:id", async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    res.render("listings/show.ejs", { listing });
});

// Create Route
app.post("/listings", async (req, res) => {
    let newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
});

// Edit Route
app.get("/listings/:id/edit", async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    res.render("listings/edit.ejs", { listing });
});

// Update Route
app.put("/listings/:id", async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
});

// Delete Route
app.delete("/listings/:id", async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
});

// app.get("/testListing", async (req, res) => {
//     let sampleListing = new Listing({
//         title: "My New Villa",
//         description: "By the beach",
//         price: 1500,
//         location: "Hyderabad",
//         country: "India"
//     });
//     await sampleListing.save()
//         .then(() => {
//             console.log("Listing saved");
//             res.send("Successful testing");
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).send("Error saving listing");
//         });
// });

app.listen(3000, () => {
    console.log('Server is listening to port 3000');
});

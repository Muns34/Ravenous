const apiKey = 'IpA_NsAX_9aNCOOJy0drZCgq5aX5XZUATnwL9tre0GHZ-UYXVRfmYffGIhzxiS2_M5aBq_DKjfLMhToqPLuleeJY2gkXuMJE95zcBXgN5_VKeQOIDHgxhkZvHOfxWnYx';
const Yelp = {
  search(term, location, sortBy) {
   return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
     headers: {
    Authorization: `Bearer ${apiKey}`
  }

}).then(response => {
  return response.json();
}).then(jsonResponse => {
  if(jsonResponse.businesses){
    return jsonResponse.businesses.map(business =>({
        id:business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zipCode,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count
    }));
  }
})
}
};
export default Yelp;

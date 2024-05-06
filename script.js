function shortenUrl() {
    var longUrl = document.getElementById("longUrlInput").value;
    
    // Simple shortening logic (replace with actual backend logic)
    var shortUrl = "http://bypass.city"; // Replace with actual short URL
    
    // Display the short URL
    document.getElementById("shortUrlDisplay").innerHTML = "<strong>Short URL:</strong> <a href='" + shortUrl + "' target='_blank'>" + shortUrl + "</a>";
}
